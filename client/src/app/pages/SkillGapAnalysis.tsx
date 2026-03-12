import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { AlertTriangle, CheckCircle, BookOpen, ArrowRight } from "lucide-react";

export function SkillGapAnalysis() {
  const radarData = [
    { skill: "Python", current: 75, required: 90 },
    { skill: "Data Structures", current: 68, required: 95 },
    { skill: "ML/AI", current: 55, required: 80 },
    { skill: "DBMS", current: 82, required: 85 },
    { skill: "System Design", current: 45, required: 85 },
    { skill: "Cloud", current: 40, required: 70 },
  ];

  const comparisonData = [
    { skill: "Python", current: 75, required: 90, gap: 15 },
    { skill: "JavaScript", current: 80, required: 85, gap: 5 },
    { skill: "Data Structures", current: 68, required: 95, gap: 27 },
    { skill: "Algorithms", current: 65, required: 90, gap: 25 },
    { skill: "DBMS", current: 82, required: 85, gap: 3 },
    { skill: "System Design", current: 45, required: 85, gap: 40 },
    { skill: "OS", current: 70, required: 75, gap: 5 },
    { skill: "Networks", current: 65, required: 80, gap: 15 },
  ];

  const missingSkills = [
    { name: "Docker", priority: "High", category: "DevOps" },
    { name: "Kubernetes", priority: "High", category: "DevOps" },
    { name: "AWS", priority: "Medium", category: "Cloud" },
    { name: "System Design Patterns", priority: "High", category: "Architecture" },
    { name: "GraphQL", priority: "Medium", category: "Backend" },
    { name: "Redis", priority: "Medium", category: "Database" },
  ];

  const recommendations = [
    {
      skill: "System Design",
      gap: 40,
      courses: ["System Design Fundamentals", "Scalable Architecture Patterns"],
      topics: ["Load Balancing", "Caching Strategies", "Database Sharding", "Microservices"],
      estimatedTime: "6-8 weeks"
    },
    {
      skill: "Data Structures & Algorithms",
      gap: 27,
      courses: ["Advanced DSA", "Competitive Programming"],
      topics: ["Tree Algorithms", "Graph Theory", "Dynamic Programming", "Advanced Recursion"],
      estimatedTime: "4-6 weeks"
    },
    {
      skill: "Machine Learning",
      gap: 25,
      courses: ["ML Fundamentals", "Deep Learning Basics"],
      topics: ["Neural Networks", "Model Training", "Feature Engineering", "Model Evaluation"],
      estimatedTime: "8-10 weeks"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Skill Gap Analysis</h1>
        <p className="text-gray-600">Compare your skills with industry requirements and get personalized recommendations</p>
      </div>

      {/* Overall Gap Summary */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle>Skill Gap Summary</CardTitle>
          <CardDescription>Your current standing vs industry requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">5</div>
              <p className="text-sm text-gray-600">Skills Mastered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">6</div>
              <p className="text-sm text-gray-600">Skills to Improve</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">6</div>
              <p className="text-sm text-gray-600">Missing Skills</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Radar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Skill Coverage Radar</CardTitle>
          <CardDescription>Visual comparison of your skills vs industry requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Your Level" dataKey="current" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
              <Radar name="Required Level" dataKey="required" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Detailed Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Skill Comparison</CardTitle>
          <CardDescription>Side-by-side comparison with gap analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="skill" angle={-45} textAnchor="end" height={100} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" fill="#3b82f6" name="Your Level" />
              <Bar dataKey="required" fill="#9ca3af" name="Industry Required" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Skill Gaps List */}
      <Card>
        <CardHeader>
          <CardTitle>Skill Gap Details</CardTitle>
          <CardDescription>Specific areas that need improvement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comparisonData.filter(s => s.gap > 10).map((skill, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className={`w-5 h-5 ${skill.gap > 25 ? 'text-red-500' : 'text-orange-500'}`} />
                    <div>
                      <h4 className="font-medium">{skill.skill}</h4>
                      <p className="text-sm text-gray-600">Gap: {skill.gap} points</p>
                    </div>
                  </div>
                  <Badge variant={skill.gap > 25 ? "destructive" : "secondary"}>
                    {skill.gap > 25 ? "High Priority" : "Medium Priority"}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: {skill.current}%</span>
                    <span>Required: {skill.required}%</span>
                  </div>
                  <Progress value={(skill.current / skill.required) * 100} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Missing Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Missing Skills</CardTitle>
          <CardDescription>Skills you should consider learning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {missingSkills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`w-5 h-5 ${skill.priority === 'High' ? 'text-red-500' : 'text-orange-500'}`} />
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-gray-600">{skill.category}</p>
                  </div>
                </div>
                <Badge variant={skill.priority === 'High' ? "destructive" : "secondary"}>
                  {skill.priority}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Personalized Learning Recommendations</CardTitle>
          <CardDescription>AI-generated roadmap to close your skill gaps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-6 border-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{rec.skill}</h3>
                    <p className="text-sm text-gray-600">Gap: {rec.gap} points • Est. {rec.estimatedTime}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Priority {index + 1}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Recommended Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.courses.map((course, i) => (
                        <Badge key={i} variant="secondary">{course}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Topics to Focus:</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.topics.map((topic, i) => (
                        <Badge key={i} variant="outline">{topic}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button className="mt-4 w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Learning {rec.skill}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Button */}
      <div className="flex gap-4">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
          Generate Learning Path <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button size="lg" variant="outline">
          Download Gap Analysis Report
        </Button>
      </div>
    </div>
  );
}
