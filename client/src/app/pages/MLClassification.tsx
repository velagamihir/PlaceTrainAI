import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Brain, TrendingUp, Award, Target } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export function MLClassification() {
  const performanceData = [
    { month: "Jan", score: 42 },
    { month: "Feb", score: 51 },
    { month: "Mar", score: 58 },
    { month: "Apr", score: 64 },
    { month: "May", score: 70 },
    { month: "Jun", score: 76 },
  ];

  const skillRadarData = [
    { skill: "Technical", value: 78 },
    { skill: "Communication", value: 72 },
    { skill: "Problem Solving", value: 85 },
    { skill: "Learning Ability", value: 80 },
    { skill: "Consistency", value: 75 },
  ];

  const classification = {
    level: "Intermediate",
    confidence: 87,
    nextLevel: "Advanced",
    pointsToNext: 15
  };

  const factors = [
    { name: "Resume Quality", score: 76, impact: "High" },
    { name: "Coding Performance", score: 85, impact: "Very High" },
    { name: "Mock Test Scores", score: 82, impact: "High" },
    { name: "Skill Coverage", score: 72, impact: "Medium" },
    { name: "Learning Consistency", score: 78, impact: "Medium" },
    { name: "Problem Solving", score: 88, impact: "Very High" },
  ];

  const predictions = [
    { metric: "Placement Success Probability", value: 78, status: "Good" },
    { metric: "Expected Package Range", value: "6-8 LPA", status: "Above Average" },
    { metric: "Top Company Eligibility", value: 72, status: "Moderate" },
    { metric: "Technical Interview Readiness", value: 85, status: "Strong" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">ML-Based Student Classification</h1>
        <p className="text-gray-600">AI-powered analysis of your placement readiness level</p>
      </div>

      {/* Classification Result */}
      <Card className="border-l-4 border-l-purple-500">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Your Current Classification</p>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {classification.level}
                </h2>
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600">
                  {classification.confidence}% Confidence
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {classification.pointsToNext} points away from {classification.nextLevel} level
              </p>
            </div>
            <div className="w-40 h-40 relative">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="8"
                  strokeDasharray={`${76 * 2.51} 251`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">76</div>
                  <div className="text-xs text-gray-600">Score</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-green-600">Beginner</div>
              <div className="text-xs text-gray-600">0-50 points</div>
              <div className="text-sm text-green-600 mt-1">✓ Completed</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-500">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-blue-600">Intermediate</div>
              <div className="text-xs text-gray-600">51-85 points</div>
              <div className="text-sm text-blue-600 mt-1">● Current Level</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-purple-600">Advanced</div>
              <div className="text-xs text-gray-600">86-100 points</div>
              <div className="text-sm text-purple-600 mt-1">Next Goal</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Factors */}
      <Card>
        <CardHeader>
          <CardTitle>Classification Factors</CardTitle>
          <CardDescription>Metrics used by the ML model for classification</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {factors.map((factor, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{factor.name}</span>
                    <Badge variant={
                      factor.impact === "Very High" ? "default" : 
                      factor.impact === "High" ? "secondary" : 
                      "outline"
                    }>
                      {factor.impact} Impact
                    </Badge>
                  </div>
                  <span className="text-sm font-medium">{factor.score}%</span>
                </div>
                <Progress value={factor.score} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Progress Over Time</CardTitle>
            <CardDescription>Your classification score improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  name="Classification Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Assessment Radar</CardTitle>
            <CardDescription>Multi-dimensional performance analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillRadarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar 
                  name="Your Performance" 
                  dataKey="value" 
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.6} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* ML Predictions */}
      <Card>
        <CardHeader>
          <CardTitle>AI Predictions & Insights</CardTitle>
          <CardDescription>Machine learning based career predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {predictions.map((pred, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{pred.metric}</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      {typeof pred.value === 'number' ? `${pred.value}%` : pred.value}
                    </p>
                  </div>
                  <Badge className="bg-green-500">{pred.status}</Badge>
                </div>
                {typeof pred.value === 'number' && (
                  <Progress value={pred.value} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-600" />
            ML-Powered Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Strong Technical Performance Detected</p>
                <p className="text-sm text-gray-600">
                  Your coding scores are excellent. Focus on system design to reach Advanced level faster.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Improve Skill Coverage</p>
                <p className="text-sm text-gray-600">
                  Adding cloud computing and DevOps skills would increase your classification score by 8-10 points.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <Award className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Predicted Timeline</p>
                <p className="text-sm text-gray-600">
                  With current progress rate, you'll reach Advanced level in approximately 4-6 weeks.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
