import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { TrendingUp, Award, Target, CheckCircle } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function ReadinessScore() {
  const readinessScore = 78;

  const components = [
    { name: "Resume Score", score: 76, weight: 20, contribution: 15.2 },
    { name: "Aptitude Score", score: 86, weight: 25, contribution: 21.5 },
    { name: "Coding Score", score: 85, weight: 30, contribution: 25.5 },
    { name: "Skill Coverage", score: 72, weight: 15, contribution: 10.8 },
    { name: "Interview Readiness", score: 68, weight: 10, contribution: 6.8 },
  ];

  const trendData = [
    { month: "Jan", score: 45, target: 60 },
    { month: "Feb", score: 52, target: 65 },
    { month: "Mar", score: 61, target: 70 },
    { month: "Apr", score: 68, target: 75 },
    { month: "May", score: 73, target: 80 },
    { month: "Jun", score: 78, target: 85 },
  ];

  const comparisonData = [
    { category: "You", score: 78 },
    { category: "Batch Average", score: 65 },
    { category: "Top 10%", score: 92 },
    { category: "Placed Students", score: 82 },
  ];

  const benchmarks = [
    { range: "0-40", level: "Needs Improvement", color: "red", description: "Focus on fundamentals" },
    { range: "41-60", level: "Developing", color: "orange", description: "Building core skills" },
    { range: "61-75", level: "Good", color: "yellow", description: "Above average readiness" },
    { range: "76-85", level: "Very Good", color: "blue", description: "Strong placement potential", current: true },
    { range: "86-100", level: "Excellent", color: "green", description: "Top tier readiness" },
  ];

  const achievements = [
    { milestone: "First Mock Test", status: "completed", date: "Jan 15" },
    { milestone: "50 Coding Problems", status: "completed", date: "Feb 10" },
    { milestone: "Resume Optimized", status: "completed", date: "Feb 25" },
    { milestone: "70% Readiness Score", status: "completed", date: "Mar 5" },
    { milestone: "80% Readiness Score", status: "in-progress", progress: 78 },
    { milestone: "100 Coding Problems", status: "pending", progress: 52 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Placement Readiness Score</h1>
        <p className="text-gray-600">Comprehensive assessment of your job readiness</p>
      </div>

      {/* Main Score Display */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-2">Your Placement Readiness Score</p>
              <div className="flex items-baseline gap-4 mb-2">
                <h2 className="text-5xl font-bold text-blue-600">{readinessScore}</h2>
                <span className="text-2xl text-gray-400">/100</span>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg font-semibold">+5 this month</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500">Very Good</Badge>
                <span className="text-sm text-gray-600">Top 15% in your batch</span>
              </div>
            </div>
            <div className="w-48 h-48 relative">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="8"
                  strokeDasharray={`${readinessScore * 2.51} 251`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Score Components */}
      <Card>
        <CardHeader>
          <CardTitle>Score Components</CardTitle>
          <CardDescription>Breakdown of your readiness score</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {components.map((component, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{component.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {component.weight}% weight
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      Contributes: {component.contribution.toFixed(1)} points
                    </span>
                    <span className="text-lg font-semibold w-12 text-right">{component.score}%</span>
                  </div>
                </div>
                <Progress value={component.score} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Readiness Score Trend</CardTitle>
          <CardDescription>Your progress vs target over the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="Your Score"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#9ca3af" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target Score"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Comparative Analysis</CardTitle>
          <CardDescription>How you compare with peers and benchmarks</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Benchmarks */}
      <Card>
        <CardHeader>
          <CardTitle>Readiness Benchmarks</CardTitle>
          <CardDescription>Understanding score ranges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {benchmarks.map((benchmark, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  benchmark.current 
                    ? 'bg-blue-50 border-blue-500' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {benchmark.current && (
                      <Award className="w-5 h-5 text-blue-600" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{benchmark.level}</span>
                        {benchmark.current && (
                          <Badge className="bg-blue-500">Your Level</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{benchmark.description}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{benchmark.range}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Milestones & Achievements</CardTitle>
          <CardDescription>Your journey to placement readiness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                {achievement.status === 'completed' ? (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                ) : achievement.status === 'in-progress' ? (
                  <div className="w-6 h-6 rounded-full border-4 border-blue-500 border-t-transparent animate-spin flex-shrink-0" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium">{achievement.milestone}</p>
                    {achievement.status === 'completed' && (
                      <span className="text-xs text-gray-600">{achievement.date}</span>
                    )}
                  </div>
                  {achievement.status === 'in-progress' && achievement.progress && (
                    <div className="space-y-1">
                      <Progress value={achievement.progress} className="h-2" />
                      <p className="text-xs text-gray-600">{achievement.progress}% complete</p>
                    </div>
                  )}
                  {achievement.status === 'pending' && achievement.progress && (
                    <div className="space-y-1">
                      <Progress value={achievement.progress} className="h-2" />
                      <p className="text-xs text-gray-600">{achievement.progress}/100</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Next Steps to Improve
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Focus on Interview Preparation</p>
                <p className="text-sm text-gray-600">
                  Your interview readiness is at 68%. Practice behavioral questions and mock interviews to reach 80%+
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Expand Skill Coverage</p>
                <p className="text-sm text-gray-600">
                  Adding cloud computing skills would boost your readiness score by approximately 4-5 points
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Maintain Momentum</p>
                <p className="text-sm text-gray-600">
                  You're on track to reach 85% (Excellent) in 4-6 weeks at your current pace
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
