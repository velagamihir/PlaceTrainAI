import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Clock, CheckCircle, XCircle, Award, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function MockTests() {
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      section: "Quantitative Aptitude",
      question: "If the sum of two numbers is 40 and their difference is 10, what is the larger number?",
      options: ["20", "25", "30", "15"],
      correct: 1
    },
    {
      section: "Logical Reasoning",
      question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?",
      options: ["True", "False", "Cannot be determined", "None of the above"],
      correct: 0
    },
    {
      section: "Verbal Ability",
      question: "Choose the word most similar in meaning to 'ABUNDANT':",
      options: ["Scarce", "Plentiful", "Moderate", "Limited"],
      correct: 1
    },
    {
      section: "Technical MCQ",
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1
    }
  ];

  const availableTests = [
    { id: 1, title: "Full Placement Mock Test", questions: 60, duration: 90, difficulty: "Medium", completed: false },
    { id: 2, title: "Quantitative Aptitude", questions: 30, duration: 45, difficulty: "Easy", completed: true, score: 86 },
    { id: 3, title: "Logical Reasoning Advanced", questions: 40, duration: 60, difficulty: "Hard", completed: false },
    { id: 4, title: "Technical MCQ - DSA", questions: 50, duration: 60, difficulty: "Medium", completed: true, score: 78 },
    { id: 5, title: "Verbal Ability", questions: 25, duration: 30, difficulty: "Easy", completed: false },
  ];

  const pastResults = [
    { test: "Full Mock Test - Feb", score: 84, percentile: 92, date: "2026-02-15", improvement: "+8%" },
    { test: "Technical MCQ", score: 78, percentile: 85, date: "2026-02-20", improvement: "+12%" },
    { test: "Quantitative Aptitude", score: 86, percentile: 94, date: "2026-02-25", improvement: "+5%" },
    { test: "Logical Reasoning", score: 81, percentile: 88, date: "2026-03-01", improvement: "+3%" },
  ];

  const handleStartTest = () => {
    setActiveTest("test-1");
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleSubmitTest = () => {
    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Test Results</h1>
          <p className="text-gray-600">Here's how you performed</p>
        </div>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="8"
                    strokeDasharray={`${86 * 2.51} 251`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">86%</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Excellent Performance!</h2>
              <p className="text-gray-600">You scored better than 92% of test takers</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">52</div>
                <p className="text-sm text-gray-600">Correct</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">8</div>
                <p className="text-sm text-gray-600">Incorrect</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">72m</div>
                <p className="text-sm text-gray-600">Time Taken</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">92%</div>
                <p className="text-sm text-gray-600">Percentile</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Quantitative Aptitude</span>
                  <span className="font-medium">88%</span>
                </div>
                <Progress value={88} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Logical Reasoning</span>
                  <span className="font-medium">82%</span>
                </div>
                <Progress value={82} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Verbal Ability</span>
                  <span className="font-medium">90%</span>
                </div>
                <Progress value={90} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Technical MCQs</span>
                  <span className="font-medium">84%</span>
                </div>
                <Progress value={84} />
              </div>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">AI-Powered Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Focus on time management - you spent extra time on Quantitative section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Practice more problems on Probability and Permutation-Combination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Strong performance in Data Structures questions - maintain this level</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-6">
              <Button onClick={() => setShowResults(false)} className="flex-1">
                Take Another Test
              </Button>
              <Button variant="outline" className="flex-1">
                View Detailed Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTest) {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Mock Test in Progress</CardTitle>
                <CardDescription>Question {currentQuestion + 1} of {questions.length}</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="text-lg font-mono">45:30</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="mb-6" />
            
            <div className="mb-6">
              <Badge className="mb-4">{question.section}</Badge>
              <h3 className="text-xl font-medium mb-6">{question.question}</h3>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    className={`w-full p-4 text-left border-2 rounded-lg transition-colors ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                      }`}>
                        {selectedAnswer === index && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                Previous
              </Button>
              <div className="flex gap-2">
                {currentQuestion === questions.length - 1 ? (
                  <Button onClick={handleSubmitTest}>Submit Test</Button>
                ) : (
                  <Button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
                    Next Question
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question Navigator */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Question Navigator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-10 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`aspect-square rounded flex items-center justify-center text-sm font-medium ${
                    index === currentQuestion
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mock Test Platform</h1>
        <p className="text-gray-600">Practice with realistic placement tests and track your progress</p>
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList>
          <TabsTrigger value="available">Available Tests</TabsTrigger>
          <TabsTrigger value="results">Past Results</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          {availableTests.map((test) => (
            <Card key={test.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{test.title}</h3>
                      {test.completed && (
                        <Badge className="bg-green-500">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {test.questions} Questions
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {test.duration} Minutes
                      </span>
                      <Badge variant={test.difficulty === "Hard" ? "destructive" : test.difficulty === "Medium" ? "secondary" : "outline"}>
                        {test.difficulty}
                      </Badge>
                    </div>
                    {test.completed && test.score && (
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="text-gray-600">Last Score: </span>
                          <span className="font-semibold text-green-600">{test.score}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleStartTest}>
                      {test.completed ? "Retake Test" : "Start Test"}
                    </Button>
                    {test.completed && (
                      <Button variant="outline">View Results</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance History</CardTitle>
              <CardDescription>Track your improvement over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pastResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{result.test}</h4>
                      <p className="text-sm text-gray-600">{result.date}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{result.score}%</div>
                        <p className="text-xs text-gray-500">Score</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{result.percentile}%</div>
                        <p className="text-xs text-gray-500">Percentile</p>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-green-600">{result.improvement}</div>
                        <p className="text-xs text-gray-500">Improvement</p>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
