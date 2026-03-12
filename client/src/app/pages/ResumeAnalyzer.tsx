import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Upload, FileText, CheckCircle, XCircle, AlertCircle, TrendingUp } from "lucide-react";
import { Badge } from "../components/ui/badge";

export function ResumeAnalyzer() {
  const [analyzed, setAnalyzed] = useState(false);

  const handleUpload = () => {
    // Simulate analysis
    setTimeout(() => setAnalyzed(true), 1500);
  };

  const resumeScore = 76;
  
  const extractedSkills = {
    technical: ["Python", "JavaScript", "React", "Node.js", "SQL", "Git", "Machine Learning", "Data Structures"],
    soft: ["Team Leadership", "Communication", "Problem Solving", "Time Management"]
  };

  const suggestions = [
    { type: "missing", text: "Add System Design experience to match industry requirements" },
    { type: "improve", text: "Quantify achievements with metrics (e.g., 'Improved performance by 40%')" },
    { type: "improve", text: "Include more relevant keywords: Docker, Kubernetes, CI/CD" },
    { type: "missing", text: "Add a certifications section to strengthen credentials" },
    { type: "format", text: "Use consistent date formatting throughout" },
    { type: "format", text: "Increase white space between sections for better readability" }
  ];

  const projects = [
    { name: "E-commerce Platform", tech: "React, Node.js, MongoDB", impact: "Strong" },
    { name: "ML Image Classifier", tech: "Python, TensorFlow", impact: "Strong" },
    { name: "Task Management App", tech: "React, Firebase", impact: "Medium" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Resume Analyzer</h1>
        <p className="text-gray-600">Upload your resume to get intelligent feedback and suggestions</p>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Resume</CardTitle>
          <CardDescription>Supported formats: PDF, DOC, DOCX (Max 5MB)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer bg-gray-50">
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">Click to upload or drag and drop</h3>
            <p className="text-sm text-gray-500 mb-4">Your resume will be analyzed using AI</p>
            <Button onClick={handleUpload}>
              <FileText className="w-4 h-4 mr-2" />
              Select Resume
            </Button>
          </div>
        </CardContent>
      </Card>

      {analyzed && (
        <>
          {/* Resume Score */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Resume Score</CardTitle>
              <CardDescription>Overall assessment of your resume quality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-1">{resumeScore}/100</div>
                  <p className="text-sm text-gray-600">Good - Room for improvement</p>
                </div>
                <div className="w-32 h-32">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="8"
                      strokeDasharray={`${resumeScore * 2.51} 251`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Content Quality</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <Progress value={82} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Keyword Match</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <Progress value={68} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Formatting</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>ATS Compatibility</span>
                    <span className="font-medium">80%</span>
                  </div>
                  <Progress value={80} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Extracted Information */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills Detected</CardTitle>
                <CardDescription>Skills extracted from your resume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {extractedSkills.technical.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soft Skills Detected</CardTitle>
                <CardDescription>Interpersonal skills identified</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {extractedSkills.soft.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Projects Analysis</CardTitle>
              <CardDescription>Evaluation of your project descriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{project.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{project.tech}</p>
                    </div>
                    <Badge 
                      variant={project.impact === "Strong" ? "default" : "secondary"}
                      className={project.impact === "Strong" ? "bg-green-500" : ""}
                    >
                      {project.impact} Impact
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>Actionable suggestions to improve your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    {suggestion.type === "missing" && (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    {suggestion.type === "improve" && (
                      <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    )}
                    {suggestion.type === "format" && (
                      <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm">{suggestion.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button size="lg">
              <FileText className="w-4 h-4 mr-2" />
              Download Detailed Report
            </Button>
            <Button size="lg" variant="outline" onClick={() => setAnalyzed(false)}>
              Analyze Another Resume
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
