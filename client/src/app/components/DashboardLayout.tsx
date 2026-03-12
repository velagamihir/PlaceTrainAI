import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Target, 
  ClipboardList, 
  Code2, 
  Brain, 
  BookOpen, 
  TrendingUp, 
  User, 
  Bell,
  LogOut,
  Menu,
  X,
  Settings,
  BarChart3
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const isAdmin = location.pathname.startsWith("/admin");

  const studentMenuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: FileText, label: "Resume Analyzer", path: "/dashboard/resume-analyzer" },
    { icon: Target, label: "Skill Gap Analysis", path: "/dashboard/skill-gap" },
    { icon: ClipboardList, label: "Mock Tests", path: "/dashboard/mock-tests" },
    { icon: Code2, label: "Coding Practice", path: "/dashboard/coding-practice" },
    { icon: Brain, label: "ML Classification", path: "/dashboard/ml-classification" },
    { icon: BookOpen, label: "Learning Path", path: "/dashboard/learning-path" },
    { icon: TrendingUp, label: "Readiness Score", path: "/dashboard/readiness-score" },
    { icon: User, label: "Profile", path: "/dashboard/profile" },
  ];

  const adminMenuItems = [
    { icon: LayoutDashboard, label: "Admin Dashboard", path: "/admin" },
    { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  const menuItems = isAdmin ? adminMenuItems : studentMenuItems;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-lg">AI Placement Guidance</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard/notifications")}>
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  {isAdmin ? "AD" : "JD"}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{isAdmin ? "Admin User" : "John Doe"}</p>
                <p className="text-xs text-gray-500">{isAdmin ? "Administrator" : "Final Year, CSE"}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex pt-[60px]">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-[60px] h-[calc(100vh-60px)] bg-white border-r transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-0"
          } overflow-hidden`}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      isActive ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
