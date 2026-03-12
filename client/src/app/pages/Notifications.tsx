import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Bell, CheckCircle, AlertCircle, Info, TrendingUp, Calendar, Code } from "lucide-react";

export function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "test",
      icon: Calendar,
      title: "New Mock Test Available",
      message: "Complete the March Aptitude Assessment to track your progress.",
      time: "2 hours ago",
      read: false,
      color: "blue"
    },
    {
      id: 2,
      type: "achievement",
      icon: TrendingUp,
      title: "Skill Improvement Detected",
      message: "Your Data Structures score improved by 12%. Keep up the great work!",
      time: "5 hours ago",
      read: false,
      color: "green"
    },
    {
      id: 3,
      type: "reminder",
      icon: Code,
      title: "Daily Coding Challenge",
      message: "Don't forget to solve today's coding problem to maintain your streak.",
      time: "1 day ago",
      read: false,
      color: "purple"
    },
    {
      id: 4,
      type: "info",
      icon: Info,
      title: "Learning Path Updated",
      message: "New topics have been added to your personalized learning path based on your goals.",
      time: "1 day ago",
      read: true,
      color: "gray"
    },
    {
      id: 5,
      type: "achievement",
      icon: CheckCircle,
      title: "Milestone Achieved",
      message: "Congratulations! You've completed 50 coding problems.",
      time: "2 days ago",
      read: true,
      color: "green"
    },
    {
      id: 6,
      type: "alert",
      icon: AlertCircle,
      title: "Resume Update Recommended",
      message: "It's been 30 days since your last resume update. Consider refreshing it with recent projects.",
      time: "3 days ago",
      read: true,
      color: "orange"
    },
    {
      id: 7,
      type: "test",
      icon: Calendar,
      title: "Mock Test Results Available",
      message: "Your February Mock Test results are ready. View your performance analysis.",
      time: "5 days ago",
      read: true,
      color: "blue"
    },
    {
      id: 8,
      type: "info",
      icon: TrendingUp,
      title: "Placement Readiness Score Updated",
      message: "Your readiness score increased to 78%. You're in the top 15% of your batch!",
      time: "1 week ago",
      read: true,
      color: "gray"
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "text-blue-600 bg-blue-50",
      green: "text-green-600 bg-green-50",
      purple: "text-purple-600 bg-purple-50",
      orange: "text-orange-600 bg-orange-50",
      gray: "text-gray-600 bg-gray-50"
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with your placement preparation journey</p>
        </div>
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <Badge className="bg-blue-600">{unreadCount} Unread</Badge>
          )}
          <Button variant="outline">Mark all as read</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            All Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 p-4 rounded-lg border transition-colors ${
                    !notification.read 
                      ? 'bg-blue-50 border-blue-200 hover:bg-blue-100' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getIconColor(notification.color)}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h4 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {!notification.read && (
                      <Button variant="ghost" size="sm">
                        Mark as read
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{unreadCount}</div>
              <p className="text-sm text-gray-600">Unread Notifications</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">3</div>
              <p className="text-sm text-gray-600">This Week</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">8</div>
              <p className="text-sm text-gray-600">Total Notifications</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
