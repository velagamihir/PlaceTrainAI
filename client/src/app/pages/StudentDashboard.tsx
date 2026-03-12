import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { TrendingUp, Target, Award, Code2, Calendar, ArrowRight } from "lucide-react";
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function StudentDashboard() {
  const readinessData = [
    { month: "Jan", score: 45 },
    { month: "Feb", score: 52 },
    { month: "Mar", score: 61 },
    { month: "Apr", score: 68 },
    { month: "May", score: 73 },
    { month: "Jun", score: 78 },
  ];

  const skillData = [
    { skill: "Data Structures", current: 75, industry: 90 },
    { skill: "Algorithms", current: 68, industry: 85 },
    { skill: "System Design", current: 45, industry: 80 },
    { skill: "DBMS", current: 82, industry: 75 },
    { skill: "OS", current: 70, industry: 70 },
  ];

  const radarSkillData = [
    { subject: "DSA", A: 75, fullMark: 100 },
    { subject: "System Design", A: 45, fullMark: 100 },
    { subject: "DBMS", A: 82, fullMark: 100 },
    { subject: "OS", A: 70, fullMark: 100 },
    { subject: "Networks", A: 65, fullMark: 100 },
    { subject: "OOP", A: 85, fullMark: 100 },
  ];

  const activityData = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 3 },
    { day: "Wed", hours: 1.5 },
    { day: "Thu", hours: 4 },
    { day: "Fri", hours: 2.5 },
    { day: "Sat", hours: 5 },
    { day: "Sun", hours: 3 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-gray-600">Here's your placement preparation progress</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Placement Readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between mb-2">
              <div className="text-3xl font-bold text-blue-600">78%</div>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +5%
              </div>
            </div>
            <Progress value={78} className="h-2" />
            <p className="text-xs text-gray-500 mt-2">Great progress this month!</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Skill Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between mb-2">
              <div className="text-3xl font-bold text-purple-600">72%</div>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8%
              </div>
            </div>
            <Progress value={72} className="h-2" />
            <p className="text-xs text-gray-500 mt-2">7 skills mastered</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Coding Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between mb-2">
              <div className="text-3xl font-bold text-green-600">850</div>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +45
              </div>
            </div>
            <Progress value={85} className="h-2" />
            <p className="text-xs text-gray-500 mt-2">Top 15% in your batch</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Latest Test Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between mb-2">
              <div className="text-3xl font-bold text-orange-600">86%</div>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +3%
              </div>
            </div>
            <Progress value={86} className="h-2" />
            <p className="text-xs text-gray-500 mt-2">Mock Test - March 10</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Placement Readiness Progress</CardTitle>
            <CardDescription>Your improvement over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={readinessData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Mastery Radar</CardTitle>
            <CardDescription>Current skill levels across key areas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarSkillData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Your Skills" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Skills and Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Skills vs Industry Requirements</CardTitle>
            <CardDescription>Compare your skills with industry standards</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" fill="#3b82f6" name="Your Level" />
                <Bar dataKey="industry" fill="#9ca3af" name="Industry Required" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Learning Activity</CardTitle>
            <CardDescription>Hours spent on practice this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Jump to key features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/dashboard/resume-analyzer">
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Analyze Resume</p>
                    <p className="text-xs text-gray-500">Get AI feedback</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <Link to="/dashboard/mock-tests">
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Take Mock Test</p>
                    <p className="text-xs text-gray-500">Practice aptitude</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <Link to="/dashboard/coding-practice">
              <Button variant="outline" className="w-full justify-between h-auto py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Practice Coding</p>
                    <p className="text-xs text-gray-500">Solve problems</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Recent Updates */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">New Mock Test Available</p>
                <p className="text-sm text-gray-600">Complete the March aptitude assessment</p>
              </div>
              <Button size="sm">Start</Button>
            </div>
            <div className="flex items-start gap-4 p-3 bg-green-50 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Skill Improvement Detected</p>
                <p className="text-sm text-gray-600">Your Data Structures score improved by 12%</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-3 bg-purple-50 rounded-lg">
              <Award className="w-5 h-5 text-purple-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Achievement Unlocked</p>
                <p className="text-sm text-gray-600">Completed 50 coding problems!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
