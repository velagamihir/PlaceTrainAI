import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Users, TrendingUp, Award, BookOpen, FileText, Code, Activity } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function AdminDashboard() {
  const stats = {
    totalStudents: 1247,
    activeToday: 856,
    avgReadiness: 68,
    placementRate: 82
  };

  const readinessDistribution = [
    { range: "0-40", count: 124, percentage: 10 },
    { range: "41-60", count: 374, percentage: 30 },
    { range: "61-75", count: 498, percentage: 40 },
    { range: "76-85", count: 187, percentage: 15 },
    { range: "86-100", count: 64, percentage: 5 },
  ];

  const skillGapData = [
    { skill: "DSA", students: 456, avgGap: 25 },
    { skill: "System Design", students: 623, avgGap: 38 },
    { skill: "DBMS", students: 289, avgGap: 18 },
    { skill: "Cloud", students: 734, avgGap: 45 },
    { skill: "ML/AI", students: 512, avgGap: 35 },
  ];

  const monthlyActivity = [
    { month: "Jan", tests: 234, coding: 1456, resume: 189 },
    { month: "Feb", tests: 289, coding: 1678, resume: 234 },
    { month: "Mar", tests: 312, coding: 1892, resume: 267 },
    { month: "Apr", tests: 298, coding: 1734, resume: 245 },
    { month: "May", tests: 334, coding: 2012, resume: 289 },
    { month: "Jun", tests: 356, coding: 2156, resume: 312 },
  ];

  const categoryDistribution = [
    { name: "Beginner", value: 30, color: "#ef4444" },
    { name: "Intermediate", value: 55, color: "#3b82f6" },
    { name: "Advanced", value: 15, color: "#10b981" },
  ];

  const recentStudents = [
    { name: "Alice Johnson", branch: "CSE", year: "Final", readiness: 85, status: "Advanced" },
    { name: "Bob Smith", branch: "IT", year: "Final", readiness: 72, status: "Intermediate" },
    { name: "Carol White", branch: "CSE", year: "Third", readiness: 68, status: "Intermediate" },
    { name: "David Brown", branch: "ECE", year: "Final", readiness: 91, status: "Advanced" },
    { name: "Eve Davis", branch: "CSE", year: "Final", readiness: 56, status: "Beginner" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Monitor and manage the placement preparation system</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Students</p>
                <p className="text-3xl font-bold">{stats.totalStudents}</p>
                <p className="text-xs text-gray-500 mt-1">Registered users</p>
              </div>
              <Users className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Today</p>
                <p className="text-3xl font-bold">{stats.activeToday}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {((stats.activeToday / stats.totalStudents) * 100).toFixed(0)}% engagement
                </p>
              </div>
              <Activity className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg Readiness</p>
                <p className="text-3xl font-bold">{stats.avgReadiness}%</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +3% this month
                </p>
              </div>
              <TrendingUp className="w-12 h-12 text-purple-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Placement Rate</p>
                <p className="text-3xl font-bold">{stats.placementRate}%</p>
                <p className="text-xs text-gray-500 mt-1">Last semester</p>
              </div>
              <Award className="w-12 h-12 text-orange-500 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Readiness Score Distribution</CardTitle>
            <CardDescription>Students by readiness level</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={readinessDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Student Classification</CardTitle>
            <CardDescription>ML-based categorization</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Activity Trends</CardTitle>
          <CardDescription>Platform engagement over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="tests" stroke="#3b82f6" strokeWidth={2} name="Mock Tests Taken" />
              <Line type="monotone" dataKey="coding" stroke="#10b981" strokeWidth={2} name="Coding Problems Solved" />
              <Line type="monotone" dataKey="resume" stroke="#8b5cf6" strokeWidth={2} name="Resume Analyses" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Skill Gap Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Common Skill Gaps</CardTitle>
          <CardDescription>Areas where students need most improvement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skillGapData.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-sm text-gray-600 ml-2">({skill.students} students)</span>
                  </div>
                  <span className="text-sm font-medium">Avg Gap: {skill.avgGap} points</span>
                </div>
                <Progress value={100 - skill.avgGap} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Students */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Top Performing Students</CardTitle>
              <CardDescription>Recent high achievers</CardDescription>
            </div>
            <Button variant="outline">View All Students</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentStudents.map((student, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-600">{student.branch} • {student.year} Year</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">{student.readiness}%</p>
                    <p className="text-xs text-gray-600">Readiness</p>
                  </div>
                  <Badge variant={
                    student.status === "Advanced" ? "default" :
                    student.status === "Intermediate" ? "secondary" :
                    "outline"
                  } className={student.status === "Advanced" ? "bg-green-500" : ""}>
                    {student.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Manage Students</p>
                <p className="text-sm text-gray-600">View and edit student profiles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">Question Bank</p>
                <p className="text-sm text-gray-600">Add and manage test questions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Coding Problems</p>
                <p className="text-sm text-gray-600">Upload new coding challenges</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
