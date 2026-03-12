import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import api from "../api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Brain, Upload } from "lucide-react";

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    branch: "",
    year: "",
    career_interest: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await api.post("/auth/register", formData);
    if (response.status === 200) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <Brain className="w-10 h-10 text-blue-600" />
            <span className="text-2xl font-bold">AI Placement Guidance</span>
          </Link>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Student Registration</CardTitle>
            <CardDescription>
              Fill in your details to create your personalized profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@university.edu"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Select
                    value={formData.branch}
                    onValueChange={(value) =>
                      setFormData({ ...formData, branch: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">
                        Computer Science Engineering
                      </SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="ece">
                        Electronics & Communication
                      </SelectItem>
                      <SelectItem value="ee">Electrical Engineering</SelectItem>
                      <SelectItem value="me">Mechanical Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) =>
                      setFormData({ ...formData, year: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">First Year</SelectItem>
                      <SelectItem value="2">Second Year</SelectItem>
                      <SelectItem value="3">Third Year</SelectItem>
                      <SelectItem value="4">Final Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="career">Career Interest</Label>
                <Select
                  value={formData.careerInterest}
                  onValueChange={(value) =>
                    setFormData({ ...formData, careerInterest: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select career path" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sde">
                      Software Development Engineer
                    </SelectItem>
                    <SelectItem value="data-analyst">Data Analyst</SelectItem>
                    <SelectItem value="ml-engineer">ML Engineer</SelectItem>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">
                      Full Stack Developer
                    </SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" className="mt-1" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Sign in here
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
