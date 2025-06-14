import { ArrowLeft, Check, X, MessageCircle, Plus, Minus, GitMerge, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const pullRequest = {
  id: 1,
  title: "Add gluten-free flour alternative",
  author: "glutenfreebaker",
  targetRecipe: "Perfect Sourdough Starter",
  targetAuthor: "breadmaster",
  status: "open",
  comments: 3,
  changes: "+5 -2",
  createdAt: "2 hours ago",
  description:
    "Added instructions for using gluten-free flour blend as an alternative to regular flour for those with gluten sensitivities.",
}

const diffData = [
  {
    type: "context",
    lineNumber: 1,
    content: "## Ingredients",
  },
  {
    type: "context",
    lineNumber: 2,
    content: "",
  },
  {
    type: "removed",
    lineNumber: 3,
    content: "- All-purpose flour: 100g (Unbleached preferred)",
  },
  {
    type: "added",
    lineNumber: 3,
    content: "- All-purpose flour: 100g (Unbleached preferred) OR Gluten-free flour blend: 110g",
  },
  {
    type: "context",
    lineNumber: 4,
    content: "- Whole wheat flour: 50g (Optional, adds complexity)",
  },
  {
    type: "added",
    lineNumber: 5,
    content: "- Xanthan gum: 1/4 tsp (if using gluten-free flour without xanthan gum)",
  },
  {
    type: "context",
    lineNumber: 6,
    content: "- Water: 150ml (Filtered or dechlorinated)",
  },
  {
    type: "context",
    lineNumber: 7,
    content: "",
  },
  {
    type: "context",
    lineNumber: 8,
    content: "## Instructions",
  },
  {
    type: "added",
    lineNumber: 9,
    content: "",
  },
  {
    type: "added",
    lineNumber: 10,
    content: "### For Gluten-Free Version:",
  },
  {
    type: "added",
    lineNumber: 11,
    content: "Note: Gluten-free starters may take 1-2 days longer to establish and may require more frequent feeding.",
  },
]

const comments = [
  {
    id: 1,
    author: "breadmaster",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "Thanks for this addition! I've been getting requests for gluten-free alternatives. The xanthan gum tip is particularly helpful.",
    date: "1 hour ago",
    lineNumber: 5,
  },
  {
    id: 2,
    author: "glutenfreebaker",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "Happy to help! I've tested this ratio multiple times and it works consistently. The extra 10g of flour compensates for the different absorption rate.",
    date: "45 minutes ago",
    lineNumber: 3,
  },
]

export default function PullRequestDetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <Link href="/pulls">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Pull Requests
            </Button>
          </Link>
          <Badge className="bg-emerald-100 text-emerald-800">
            <GitMerge className="w-4 h-4 mr-1" />
            Open
          </Badge>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">{pullRequest.title}</h1>

        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
          <div className="flex items-center space-x-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" />
              <AvatarFallback>{pullRequest.author[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="font-medium">{pullRequest.author}</span>
          </div>
          <span>wants to merge into</span>
          <Link href="/recipe/1" className="font-medium hover:text-emerald-600">
            {pullRequest.targetRecipe}
          </Link>
          <span>by {pullRequest.targetAuthor}</span>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{pullRequest.createdAt}</span>
          </div>
        </div>

        <p className="text-slate-700 mb-6">{pullRequest.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-sm">
              {pullRequest.changes}
            </Badge>
            <div className="flex items-center space-x-1 text-sm text-slate-600">
              <MessageCircle className="w-4 h-4" />
              <span>{pullRequest.comments} comments</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button className="btn-primary">
              <Check className="w-4 h-4 mr-2" />
              Merge Pull Request
            </Button>
            <Button variant="outline">
              <X className="w-4 h-4 mr-2" />
              Close Pull Request
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content - Diff View */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GitMerge className="w-5 h-5 mr-2" />
                Changes ({pullRequest.changes})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 border-b">
                  Perfect Sourdough Starter.md
                </div>
                <div className="font-mono text-sm">
                  {diffData.map((line, index) => (
                    <div
                      key={index}
                      className={`flex items-start px-4 py-1 ${
                        line.type === "added"
                          ? "bg-emerald-50 border-l-4 border-emerald-400"
                          : line.type === "removed"
                            ? "bg-red-50 border-l-4 border-red-400"
                            : "bg-white"
                      }`}
                    >
                      <div className="w-12 text-slate-400 text-right mr-4 flex-shrink-0">{line.lineNumber}</div>
                      <div className="flex items-center space-x-2 flex-1">
                        {line.type === "added" && <Plus className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                        {line.type === "removed" && <Minus className="w-4 h-4 text-red-600 flex-shrink-0" />}
                        <span
                          className={`flex-1 ${
                            line.type === "added"
                              ? "text-emerald-800"
                              : line.type === "removed"
                                ? "text-red-800"
                                : "text-slate-700"
                          }`}
                        >
                          {line.content}
                        </span>
                        {comments.some((c) => c.lineNumber === line.lineNumber) && (
                          <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Discussion ({comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Add Comment */}
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea placeholder="Leave a comment..." className="mb-3" />
                    <Button size="sm" className="btn-primary">
                      Comment
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Existing Comments */}
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{comment.author[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{comment.author}</span>
                            {comment.lineNumber && (
                              <Badge variant="outline" className="text-xs">
                                Line {comment.lineNumber}
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-slate-500">{comment.date}</span>
                        </div>
                        <p className="text-slate-700">{comment.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Reviewers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reviewers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">breadmaster</div>
                    <div className="text-sm text-slate-600">Recipe owner</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Pending
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Labels */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Labels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">enhancement</Badge>
                <Badge variant="secondary">gluten-free</Badge>
                <Badge variant="secondary">accessibility</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Merge Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Merge Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">All checks passed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">No conflicts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Awaiting review</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Request Review
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Add Comment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
