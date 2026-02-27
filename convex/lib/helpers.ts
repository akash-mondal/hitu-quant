import { QueryCtx, MutationCtx } from "../_generated/server";

// ===== Auth Helper =====
export async function getAuthenticatedUser(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Not authenticated");
  }
  return identity;
}

export async function getClerkUserId(ctx: QueryCtx | MutationCtx) {
  const identity = await getAuthenticatedUser(ctx);
  return identity.subject;
}

// ===== IST Date Helpers =====
// IST is UTC+5:30
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

export function getISTDate(offsetDays: number = 0): string {
  const now = new Date();
  const istNow = new Date(now.getTime() + IST_OFFSET_MS);
  istNow.setDate(istNow.getDate() + offsetDays);
  return istNow.toISOString().split("T")[0];
}

export function getISTHour(): number {
  const now = new Date();
  const istNow = new Date(now.getTime() + IST_OFFSET_MS);
  return istNow.getUTCHours();
}

// ===== Utility =====
export function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
