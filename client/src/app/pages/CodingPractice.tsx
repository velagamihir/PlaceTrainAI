import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Code2, Play, CheckCircle, XCircle, Clock, TrendingUp, Award } from "lucide-react";
import { Progress } from "../components/ui/progress";

export function CodingPractice() {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(`def two_sum(nums, target):
    # Write your solution here
    pass`);
  const [testResults, setTestResults] = useState<any>(null);

  const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", acceptance: 48.5, solved: true, category: "Array" },
    { id: 2, title: "Reverse Linked List", difficulty: "Easy", acceptance: 72.1, solved: true, category: "Linked List" },
    { id: 3, title: "Valid Parentheses", difficulty: "Easy", acceptance: 41.2, solved: false, category: "Stack" },
    { id: 4, title: "Binary Tree Level Order", difficulty: "Medium", acceptance: 62.8, solved: false, category: "Tree" },
    { id: 5, title: "Merge Intervals", difficulty: "Medium", acceptance: 44.7, solved: false, category: "Array" },
    { id: 6, title: "Longest Substring Without Repeating", difficulty: "Medium", acceptance: 33.9, solved: true, category: "String" },
    { id: 7, title: "Word Break", difficulty: "Hard", acceptance: 45.2, solved: false, category: "Dynamic Programming" },
    { id: 8, title: "Median of Two Sorted Arrays", difficulty: "Hard", acceptance: 35.8, solved: false, category: "Binary Search" },
  ];

  const stats = {
    solved: 52,
    attempted: 78,
    accuracy: 85,
    streak: 7,
    easy: 28,
    medium: 20,
    hard: 4
  };

  const recentSubmissions = [
    { problem: "Two Sum", status: "Accepted", time: "2 hours ago", runtime: "45ms", memory: "14.2MB" },
    { problem: "Valid Anagram", status: "Accepted", time: "5 hours ago", runtime: "38ms", memory: "13.8MB" },
    { problem: "Merge Intervals", status: "Wrong Answer", time: "1 day ago", runtime: "-", memory: "-" },
  ];

  const handleRunCode = () => {
    setTestResults({
      passed: 8,
      total: 10,
      cases: [
        { input: "[2,7,11,15], target = 9", expected: "[0,1]", actual: "[0,1]", passed: true },
        { input: "[3,2,4], target = 6", expected: "[1,2]", actual: "[1,2]", passed: true },
        { input: "[3,3], target = 6", expected: "[0,1]", actual: "[0,1]", passed: true },
      ]
    });
  };

  const handleSubmit = () => {
    alert("Solution submitted! Check your submissions tab for results.");
  };

  if (selectedProblem) {
    const problem = problems.find(p => p.id === selectedProblem)!;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setSelectedProblem(null)}>
            ← Back to Problems
          </Button>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Time: 00:15:32</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem Description */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>{problem.title}</CardTitle>
                <Badge variant={
                  problem.difficulty === "Easy" ? "outline" : 
                  problem.difficulty === "Medium" ? "secondary" : 
                  "destructive"
                }>
                  {problem.difficulty}
                </Badge>
              </div>
              <CardDescription>
                Acceptance Rate: {problem.acceptance}% • Category: {problem.category}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="submissions">Submissions</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Problem Statement</h3>
                    <p className="text-sm text-gray-600">
                      Given an array of integers <code className="bg-gray-100 px-1 py-0.5 rounded">nums</code> and an integer <code className="bg-gray-100 px-1 py-0.5 rounded">target</code>, 
                      return indices of the two numbers such that they add up to target.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Constraints</h3>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      <li>2 ≤ nums.length ≤ 10⁴</li>
                      <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                      <li>-10⁹ ≤ target ≤ 10⁹</li>
                      <li>Only one valid answer exists</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="examples" className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">Example 1:</p>
                    <pre className="text-sm">
                      Input: nums = [2,7,11,15], target = 9{'\n'}
                      Output: [0,1]{'\n'}
                      Explanation: nums[0] + nums[1] == 9
                    </pre>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">Example 2:</p>
                    <pre className="text-sm">
                      Input: nums = [3,2,4], target = 6{'\n'}
                      Output: [1,2]
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="submissions">
                  <div className="space-y-2">
                    {recentSubmissions.map((sub, i) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{sub.problem}</span>
                          <Badge variant={sub.status === "Accepted" ? "default" : "destructive"} className={sub.status === "Accepted" ? "bg-green-500" : ""}>
                            {sub.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{sub.time}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Code Editor */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Code Editor</CardTitle>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="cpp">C++</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 p-4 font-mono text-sm border rounded-lg bg-gray-900 text-gray-100"
                  spellCheck={false}
                />
                <div className="flex gap-2 mt-4">
                  <Button onClick={handleRunCode} variant="outline" className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Run Code
                  </Button>
                  <Button onClick={handleSubmit} className="flex-1">
                    Submit Solution
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Test Results */}
            {testResults && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Test Results</CardTitle>
                  <CardDescription>
                    {testResults.passed}/{testResults.total} test cases passed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {testResults.cases.map((testCase: any, i: number) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          {testCase.passed ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          <span className="font-medium">Test Case {i + 1}</span>
                        </div>
                        <div className="text-sm space-y-1">
                          <p><span className="text-gray-600">Input:</span> {testCase.input}</p>
                          <p><span className="text-gray-600">Expected:</span> {testCase.expected}</p>
                          <p><span className="text-gray-600">Actual:</span> {testCase.actual}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Coding Practice Platform</h1>
        <p className="text-gray-600">Solve problems, improve your coding skills, and track your progress</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{stats.solved}</div>
              <p className="text-sm text-gray-600">Problems Solved</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{stats.accuracy}%</div>
              <p className="text-sm text-gray-600">Accuracy Rate</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">{stats.streak}</div>
              <p className="text-sm text-gray-600">Day Streak</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Easy:</span>
                <span className="font-medium">{stats.easy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Medium:</span>
                <span className="font-medium">{stats.medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hard:</span>
                <span className="font-medium">{stats.hard}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Problem List */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Problems</CardTitle>
          <CardDescription>Select a problem to start coding</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedProblem(problem.id)}
              >
                <div className="flex items-center gap-4 flex-1">
                  {problem.solved ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-medium">{problem.title}</h4>
                    <p className="text-sm text-gray-600">{problem.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-600">
                    {problem.acceptance}% acceptance
                  </div>
                  <Badge variant={
                    problem.difficulty === "Easy" ? "outline" : 
                    problem.difficulty === "Medium" ? "secondary" : 
                    "destructive"
                  }>
                    {problem.difficulty}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Problem Solving Speed</span>
                <span className="font-medium">Top 25%</span>
              </div>
              <Progress value={75} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Code Quality Score</span>
                <span className="font-medium">8.5/10</span>
              </div>
              <Progress value={85} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Time Complexity Optimization</span>
                <span className="font-medium">Good</span>
              </div>
              <Progress value={78} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
