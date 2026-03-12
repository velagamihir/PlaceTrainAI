import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { TrendingUp, TrendingDown, Users, Award, Code, FileText } from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  AreaChart, 
  Area,
  ScatterChart,
  Scatter,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell
} from "recharts";

export function Analytics() {
  const performanceTrend = [
    { month: "Jan", avgScore: 45, tests: 234, coding: 1456 },
    { month: "Feb", avgScore: 52, tests: 289, coding: 1678 },
    { month: "Mar", avgScore: 58, tests: 312, coding: 1892 },
    { month: "Apr", avgScore: 64, tests: 298, coding: 1734 },
    { month: "May", avgScore: 68, tests: 334, coding: 2012 },
    { month: "Jun", avgScore: 73, tests: 356, coding: 2156 },
  ];

  const branchComparison = [
    { branch: "CSE", avgReadiness: 72, students: 450, placed: 380 },
    { branch: "IT", avgReadiness: 68, students: 320, placed: 256 },
    { branch: "ECE", avgReadiness: 61, students: 280, placed: 210 },
    { branch: "EE", avgReadiness: 58, students: 197, placed: 138 },
  ];

  const skillMasteryHeatmap = [
    { skill: "DSA", beginners: 30, intermediate: 45, advanced: 25 },
    { skill: "System Design", beginners: 55, intermediate: 35, advanced: 10 },
    { skill: "DBMS", beginners: 25, intermediate: 50, advanced: 25 },
    { skill: "Algorithms", beginners: 35, intermediate: 40, advanced: 25 },
    { skill: "Cloud", beginners: 65, intermediate: 28, advanced: 7 },
    { skill: "ML/AI", beginners: 60, intermediate: 30, advanced: 10 },
  ];

  const correlationData = [
    { coding: 45, readiness: 48 },
    { coding: 62, readiness: 65 },
    { coding: 78, readiness: 82 },
    { coding: 55, readiness: 58 },
    { coding: 88, readiness: 91 },
    { coding: 71, readiness: 74 },
    { coding: 82, readiness: 85 },
    { coding: 65, readiness: 67 },
    { coding: 91, readiness: 94 },
    { coding: 58, readiness: 61 },
  ];

  const testPerformance = [
    { category: "Quantitative", avg: 72, max: 95, min: 35 },
    { category: "Logical", avg: 68, max: 92, min: 40 },
    { category: "Verbal", avg: 75, max: 98, min: 45 },
    { category: "Technical", avg: 70, max: 94, min: 38 },
  ];

  const placementReadinessGrowth = [
    { week: "Week 1", count: 12 },
    { week: "Week 2", count: 18 },
    { week: "Week 3", count: 25 },
    { week: "Week 4", count: 34 },
    { week: "Week 5", count: 42 },
    { week: "Week 6", count: 56 },
    { week: "Week 7", count: 68 },
    { week: "Week 8", count: 79 },
  ];

  const insights = [
    { 
      title: "Strong Correlation Detected", 
      description: "Coding performance shows 0.92 correlation with overall readiness score",
      impact: "positive",
      metric: "+15%"
    },
    { 
      title: "System Design Gap", 
      description: "55% of students are in beginner level for System Design",
      impact: "negative",
      metric: "Critical"
    },
    { 
      title: "Improved Engagement", 
      description: "Daily active users increased by 23% this month",
      impact: "positive",
      metric: "+23%"
    },
    { 
      title: "CSE Branch Leading", 
      description: "CSE students have highest average readiness at 72%",
      impact: "neutral",
      metric: "72%"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights and data visualization</p>
        </div>
        <div className="flex gap-4">
          <Select defaultValue="6months">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">{insight.title}</p>
                  <p className="text-xs text-gray-600">{insight.description}</p>
                </div>
                {insight.impact === "positive" ? (
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : insight.impact === "negative" ? (
                  <TrendingDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </div>
              <Badge 
                variant={insight.impact === "positive" ? "default" : insight.impact === "negative" ? "destructive" : "secondary"}
                className={insight.impact === "positive" ? "bg-green-500" : ""}
              >
                {insight.metric}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Performance Trends</CardTitle>
          <CardDescription>Average scores and activity over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={performanceTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="avgScore" 
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.6}
                name="Avg Readiness Score"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="tests" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Tests Taken"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Branch Comparison */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Branch-wise Performance</CardTitle>
            <CardDescription>Average readiness by branch</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={branchComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="branch" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avgReadiness" fill="#3b82f6" name="Avg Readiness %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Placement Statistics by Branch</CardTitle>
            <CardDescription>Students placed vs total</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {branchComparison.map((branch, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{branch.branch}</span>
                    <span className="text-sm text-gray-600">
                      {branch.placed}/{branch.students} ({((branch.placed / branch.students) * 100).toFixed(0)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all"
                      style={{ width: `${(branch.placed / branch.students) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skill Mastery Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>Skill Mastery Distribution</CardTitle>
          <CardDescription>Student distribution across skill levels</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={skillMasteryHeatmap} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="skill" />
              <Tooltip />
              <Legend />
              <Bar dataKey="beginners" stackId="a" fill="#ef4444" name="Beginner %" />
              <Bar dataKey="intermediate" stackId="a" fill="#3b82f6" name="Intermediate %" />
              <Bar dataKey="advanced" stackId="a" fill="#10b981" name="Advanced %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Correlation Analysis */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Coding vs Readiness Correlation</CardTitle>
            <CardDescription>Relationship between coding score and overall readiness</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="coding" name="Coding Score" unit="%" />
                <YAxis dataKey="readiness" name="Readiness Score" unit="%" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Students" data={correlationData} fill="#8b5cf6" />
              </ScatterChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm font-medium text-purple-900">Correlation Coefficient: 0.92</p>
              <p className="text-xs text-purple-700">Strong positive correlation detected</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Performance Analysis</CardTitle>
            <CardDescription>Average, maximum, and minimum scores by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={testPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="max" fill="#10b981" name="Max Score" />
                <Bar dataKey="avg" fill="#3b82f6" name="Avg Score" />
                <Bar dataKey="min" fill="#ef4444" name="Min Score" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Readiness Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Placement Readiness Growth</CardTitle>
          <CardDescription>Students reaching 75%+ readiness weekly</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={placementReadinessGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Students Ready"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Users className="w-10 h-10 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-gray-600">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Code className="w-10 h-10 text-green-600" />
              <div>
                <p className="text-2xl font-bold">12,456</p>
                <p className="text-xs text-gray-600">Problems Solved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <FileText className="w-10 h-10 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">1,823</p>
                <p className="text-xs text-gray-600">Tests Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Award className="w-10 h-10 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">82%</p>
                <p className="text-xs text-gray-600">Placement Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
