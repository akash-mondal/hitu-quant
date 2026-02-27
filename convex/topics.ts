import { query } from "./_generated/server";
import { v } from "convex/values";

export const listTopics = query({
  handler: async (ctx) => {
    const topics = await ctx.db.query("topics").withIndex("by_order").collect();

    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return topics.map((t) => ({ ...t, progress: null }));
    }

    const clerkUserId = identity.subject;
    const progressRecords = await ctx.db
      .query("userTopicProgress")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", clerkUserId))
      .collect();

    const progressMap = new Map(
      progressRecords.map((p) => [p.topicId.toString(), p])
    );

    return topics.map((topic) => ({
      ...topic,
      progress: progressMap.get(topic._id.toString()) ?? null,
    }));
  },
});

export const getTopicBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const topic = await ctx.db
      .query("topics")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
    if (!topic) return null;

    const subtopics = await ctx.db
      .query("subtopics")
      .withIndex("by_topicId_order", (q) => q.eq("topicId", topic._id))
      .collect();

    const identity = await ctx.auth.getUserIdentity();
    let topicProgress = null;
    const subtopicProgressMap: Record<string, any> = {};
    const resourceCompletionMap: Record<string, Set<string>> = {};

    if (identity) {
      const clerkUserId = identity.subject;
      topicProgress = await ctx.db
        .query("userTopicProgress")
        .withIndex("by_clerkUserId_topicId", (q) =>
          q.eq("clerkUserId", clerkUserId).eq("topicId", topic._id)
        )
        .unique();

      const subProgressRecords = await ctx.db
        .query("userSubtopicProgress")
        .withIndex("by_clerkUserId_topicId", (q) =>
          q.eq("clerkUserId", clerkUserId).eq("topicId", topic._id)
        )
        .collect();

      for (const sp of subProgressRecords) {
        subtopicProgressMap[sp.subtopicId.toString()] = sp;
      }

      // Load resource completions for this topic
      const resourceProgress = await ctx.db
        .query("userResourceProgress")
        .withIndex("by_clerkUserId_topicId", (q) =>
          q.eq("clerkUserId", clerkUserId).eq("topicId", topic._id)
        )
        .collect();

      for (const rp of resourceProgress) {
        if (rp.isCompleted) {
          const key = rp.subtopicId.toString();
          if (!resourceCompletionMap[key])
            resourceCompletionMap[key] = new Set();
          resourceCompletionMap[key].add(rp.resourceId.toString());
        }
      }
    }

    // Load resources per subtopic
    const subtopicsWithResources = await Promise.all(
      subtopics.map(async (st) => {
        const resources = await ctx.db
          .query("resources")
          .withIndex("by_subtopicId_order", (q) => q.eq("subtopicId", st._id))
          .collect();

        const completedIds =
          resourceCompletionMap[st._id.toString()] ?? new Set();

        return {
          ...st,
          progress: subtopicProgressMap[st._id.toString()] ?? null,
          resources: resources.map((r) => ({
            ...r,
            isCompleted: completedIds.has(r._id.toString()),
          })),
        };
      })
    );

    return {
      topic,
      topicProgress,
      subtopics: subtopicsWithResources,
    };
  },
});
