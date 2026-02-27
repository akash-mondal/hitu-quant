import { Routes, Route } from "react-router-dom";
import { Authenticated, Unauthenticated } from "convex/react";
import LandingPage from "./routes/LandingPage";
import Dashboard from "./routes/Dashboard";
import LearningPath from "./routes/LearningPath";
import TopicDetail from "./routes/TopicDetail";
import Profile from "./routes/Profile";
import AppShell from "./components/layout/AppShell";
import { CelebrationProvider } from "./components/feedback/CelebrationProvider";

export default function App() {
  return (
    <CelebrationProvider>
    <Routes>
      {/* Public route */}
      <Route
        path="/"
        element={
          <>
            <Unauthenticated>
              <LandingPage />
            </Unauthenticated>
            <Authenticated>
              <AppShell>
                <Dashboard />
              </AppShell>
            </Authenticated>
          </>
        }
      />

      {/* Protected routes */}
      <Route
        path="/learn"
        element={
          <Authenticated>
            <AppShell>
              <LearningPath />
            </AppShell>
          </Authenticated>
        }
      />
      <Route
        path="/learn/:topicSlug"
        element={
          <Authenticated>
            <AppShell>
              <TopicDetail />
            </AppShell>
          </Authenticated>
        }
      />
      <Route
        path="/profile"
        element={
          <Authenticated>
            <AppShell>
              <Profile />
            </AppShell>
          </Authenticated>
        }
      />

      {/* Fallback */}
      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center bg-cream-100">
            <div className="text-center">
              <h1 className="text-6xl font-display text-charcoal-900 mb-4">
                404
              </h1>
              <p className="text-charcoal-700 text-lg font-body">
                Page not found
              </p>
            </div>
          </div>
        }
      />
    </Routes>
    </CelebrationProvider>
  );
}
