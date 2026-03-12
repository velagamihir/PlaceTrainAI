import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { CheckCircle, Circle, Lock, PlayCircle, BookOpen, Code, FileText, Video } from "lucide-react";

export function LearningPath() {
  const weeks = [
    {
      week: 1,
      title: "Data Structures Fundamentals",
      status: "completed",
      progress: 100,
      topics: [
        { name: "Arrays and Strings", status: "completed", type: "theory", duration: "2 hours" },
        { name: "Practice: Array Problems", status: "completed", type: "coding", duration: "3 hours" },
        { name: "Linked Lists", status: "completed", type: "theory", duration: "2 hours" },
        { name: "Practice: Linked List Problems", status: "completed", type: "coding", duration: "3 hours" },
      ]
    },
    {
      week: 2,
      title: "Advanced Data Structures",
      status: "completed",
      progress: 100,
      topics: [
        { name: "Stacks and Queues", status: "completed", type: "theory", duration: "2 hours" },
        { name: "Trees and BST", status: "completed", type: "theory", duration: "3 hours" },
        { name: "Practice: Tree Traversals", status: "completed", type: "coding", duration: "4 hours" },
        { name: "Heaps and Priority Queues", status: "completed", type: "theory", duration: "2 hours" },
      ]
    },
    {
      week: 3,
      title: "Algorithm Design & Analysis",
      status: "in-progress",
      progress: 65,
      topics: [
        { name: "Sorting Algorithms", status: "completed", type: "theory", duration: "2 hours" },
        { name: "Searching Algorithms", status: "completed", type: "theory", duration: "2 hours" },
        { name: "Time Complexity Analysis", status: "in-progress", type: "theory", duration: "3 hours" },
        { name: "Practice: Algorithm Problems", status: "pending", type: "coding", duration: "4 hours" },
      ]
    },
    {
      week: 4,
      title: "Dynamic Programming",
      status: "pending",
      progress: 0,
      topics: [
        { name: "DP Fundamentals", status: "pending", type: "theory", duration: "3 hours" },
        { name: "1D DP Problems", status: "pending", type: "coding", duration: "4 hours" },
        { name: "2D DP Problems", status: "pending", type: "coding", duration: "4 hours" },
        { name: "Advanced DP Patterns", status: "pending", type: "theory", duration: "3 hours" },
      ]
    },
    {
      week: 5,
      title: "Graph Algorithms",
      status: "locked",
      progress: 0,
      topics: [
        { name: "Graph Representations", status: "locked", type: "theory", duration: "2 hours" },
        { name: "BFS and DFS", status: "locked", type: "theory", duration: "3 hours" },
        { name: "Shortest Path Algorithms", status: "locked", type: "theory", duration: "3 hours" },
        { name: "Practice: Graph Problems", status: "locked", type: "coding", duration: "5 hours" },
      ]
    },
    {
      week: 6,
      title: "System Design Basics",
      status: "locked",
      progress: 0,
      topics: [
        { name: "Scalability Concepts", status: "locked", type: "theory", duration: "3 hours" },
        { name: "Database Design", status: "locked", type: "theory", duration: "3 hours" },
        { name: "Caching Strategies", status: "locked", type: "theory", duration: "2 hours" },
        { name: "Case Study: Design URL Shortener", status: "locked", type: "project", duration: "4 hours" },
      ]
    },
  ];

  const overallProgress = 55;
  const completedTopics = 15;
  const totalTopics = 24;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <PlayCircle className="w-5 h-5 text-blue-500" />;
      case "locked":
        return <Lock className="w-5 h-5 text-gray-400" />;
      default:
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "theory":
        return <BookOpen className="w-4 h-4" />;
      case "coding":
        return <Code className="w-4 h-4" />;
      case "video":
        return <Video className="w-4 h-4" />;
      case "project":
        return <FileText className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Personalized Learning Path</h1>
        <p className="text-gray-600">AI-generated roadmap tailored to your goals and skill level</p>
      </div>

      {/* Progress Overview */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Overall Progress</h3>
              <p className="text-sm text-gray-600">
                {completedTopics} of {totalTopics} topics completed
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{overallProgress}%</div>
              <p className="text-sm text-gray-600">Complete</p>
            </div>
          </div>
          <Progress value={overallProgress} className="h-3" />
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">3</div>
              <p className="text-sm text-gray-600">Weeks Completed</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1</div>
              <p className="text-sm text-gray-600">Week In Progress</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">2</div>
              <p className="text-sm text-gray-600">Weeks Remaining</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Path Timeline */}
      <div className="space-y-4">
        {weeks.map((week, index) => (
          <Card 
            key={index}
            className={`${
              week.status === 'locked' ? 'opacity-60' : ''
            } ${
              week.status === 'in-progress' ? 'border-l-4 border-l-blue-500' : ''
            } ${
              week.status === 'completed' ? 'border-l-4 border-l-green-500' : ''
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1">
                    {getStatusIcon(week.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <CardTitle>Week {week.week}: {week.title}</CardTitle>
                      {week.status === "completed" && (
                        <Badge className="bg-green-500">Completed</Badge>
                      )}
                      {week.status === "in-progress" && (
                        <Badge className="bg-blue-500">In Progress</Badge>
                      )}
                      {week.status === "locked" && (
                        <Badge variant="secondary">Locked</Badge>
                      )}
                    </div>
                    <CardDescription>
                      {week.topics.length} topics • Est. {week.topics.reduce((acc, t) => acc + parseInt(t.duration), 0)} hours
                    </CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-blue-600">{week.progress}%</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {week.progress > 0 && (
                <Progress value={week.progress} className="mb-4" />
              )}
              <div className="space-y-2">
                {week.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      topic.status === 'completed' ? 'bg-green-50' :
                      topic.status === 'in-progress' ? 'bg-blue-50' :
                      topic.status === 'locked' ? 'bg-gray-50' :
                      'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      {getStatusIcon(topic.status)}
                      <div className="flex items-center gap-2">
                        {getTypeIcon(topic.type)}
                        <span className={`${
                          topic.status === 'locked' ? 'text-gray-500' : 'text-gray-900'
                        }`}>
                          {topic.name}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">{topic.duration}</span>
                      {topic.status === 'in-progress' && (
                        <Button size="sm">Continue</Button>
                      )}
                      {topic.status === 'pending' && (
                        <Button size="sm" variant="outline">Start</Button>
                      )}
                      {topic.status === 'completed' && (
                        <Button size="sm" variant="ghost">Review</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {week.status === 'locked' && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Complete previous weeks to unlock this content
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommendations */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle>AI Learning Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p>You're making great progress! Try to complete Week 3 by this weekend to stay on track.</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p>Based on your coding performance, you may want to spend extra time on Dynamic Programming patterns.</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p>Consider joining the weekly study group sessions to discuss complex topics with peers.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
