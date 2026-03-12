import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { DashboardLayout } from "./components/DashboardLayout";
import { StudentDashboard } from "./pages/StudentDashboard";
import { ResumeAnalyzer } from "./pages/ResumeAnalyzer";
import { SkillGapAnalysis } from "./pages/SkillGapAnalysis";
import { MockTests } from "./pages/MockTests";
import { CodingPractice } from "./pages/CodingPractice";
import { MLClassification } from "./pages/MLClassification";
import { LearningPath } from "./pages/LearningPath";
import { ReadinessScore } from "./pages/ReadinessScore";
import { Profile } from "./pages/Profile";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Analytics } from "./pages/Analytics";
import { Notifications } from "./pages/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: StudentDashboard,
      },
      {
        path: "resume-analyzer",
        Component: ResumeAnalyzer,
      },
      {
        path: "skill-gap",
        Component: SkillGapAnalysis,
      },
      {
        path: "mock-tests",
        Component: MockTests,
      },
      {
        path: "coding-practice",
        Component: CodingPractice,
      },
      {
        path: "ml-classification",
        Component: MLClassification,
      },
      {
        path: "learning-path",
        Component: LearningPath,
      },
      {
        path: "readiness-score",
        Component: ReadinessScore,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "notifications",
        Component: Notifications,
      },
    ],
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: AdminDashboard,
      },
      {
        path: "analytics",
        Component: Analytics,
      },
    ],
  },
]);
