import { Star, GitFork, Eye, Clock, Users, ChefHat, MessageCircle, Plus, Edit, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

const recipe = {
  id: 1,
  title: "Perfect Sourdough Starter",
  author: "breadmaster",
  description:
    "A foolproof method for creating and maintaining a healthy sourdough starter that will serve as the foundation for all your sourdough baking adventures.",
  tags: ["bread", "fermentation", "beginner-friendly", "starter"],
  stars: 1247,
  forks: 89,
  watchers: 234,
  comments: 23,
  difficulty: "Medium",
  time: "7 days",
  servings: "1 starter",
  image: "/placeholder.svg?height=400&width=600",
  createdAt: "2024-01-15",
  lastUpdated: "2024-01-20",
}

const ingredients = [
  { item: "All-purpose flour", amount: "100g", notes: "Unbleached preferred" },
  { item: "Whole wheat flour", amount: "50g", notes: "Optional, adds complexity" },
  { item: "Water", amount: "150ml", notes: "Filtered or dechlorinated" },
]

const steps = [
  {
    day: "Day 1",
    instruction:
      "Mix 50g all-purpose flour with 50ml water in a clean jar. Stir well, cover loosely, and leave at room temperature.",
    notes: "The mixture should be thick but stirrable",
  },
  {
    day: "Day 2-3",
    instruction: "You may see some bubbling activity. This is normal! Don't feed yet, just observe.",
    notes: "Some starters take longer to show activity",
  },
  {
    day: "Day 4",
    instruction: "Discard half of the starter. Add 50g flour and 50ml water. Mix well and cover loosely.",
    notes: "This is your first feeding",
  },
  {
    day: "Day 5-7",
    instruction:
      "Repeat the discard and feed process daily. Your starter should double in size within 4-8 hours after feeding.",
    notes: "Consistency is key for a healthy starter",
  },
]

const commits = [
  { message: "Add note about flour types", author: "breadmaster", date: "2 days ago", hash: "a1b2c3d" },
  { message: "Update feeding schedule", author: "breadmaster", date: "1 week ago", hash: "e4f5g6h" },
  { message: "Initial recipe creation", author: "breadmaster", date: "2 weeks ago", hash: "i7j8k9l" },
]

const comments = [
  {
    id: 1,
    author: "sourdoughfan",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "This worked perfectly! My starter was ready in exactly 7 days. The key was keeping it at a consistent temperature.",
    date: "3 days ago",
    replies: [],
  },
  {
    id: 2,
    author: "newbaker",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Should I use tap water or does it need to be filtered?",
    date: "1 week ago",
    replies: [
      {
        author: "breadmaster",
        avatar: "/placeholder.svg?height=32&width=32",
        content:
          "Filtered is best if your tap water is heavily chlorinated. You can also let tap water sit out overnight to let the chlorine evaporate.",
        date: "1 week ago",
      },
    ],
  },
]

export default function RecipeDetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{recipe.title}</h1>
                <p className="text-slate-600">
                  by{" "}
                  <Link href={`/user/${recipe.author}`} className="font-medium hover:text-emerald-600">
                    {recipe.author}
                  </Link>
                  {" • "}
                  <span>Created {recipe.createdAt}</span>
                  {" • "}
                  <span>Updated {recipe.lastUpdated}</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Watch
                </Button>
                <Button variant="outline" size="sm">
                  <Star className="w-4 h-4 mr-2" />
                  Star
                </Button>
                <Button className="btn-primary">
                  <GitFork className="w-4 h-4 mr-2" />
                  Fork
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-600 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>{recipe.stars} stars</span>
              </div>
              <div className="flex items-center space-x-1">
                <GitFork className="w-4 h-4" />
                <span>{recipe.forks} forks</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{recipe.watchers} watching</span>
              </div>
            </div>

            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              width={800}
              height={400}
              className="rounded-lg object-cover w-full mb-6"
            />

            <p className="text-slate-700 text-lg leading-relaxed mb-6">{recipe.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-slate-100 rounded-lg">
                <Clock className="w-6 h-6 mx-auto mb-2 text-slate-600" />
                <div className="font-semibold">{recipe.time}</div>
                <div className="text-sm text-slate-600">Total Time</div>
              </div>
              <div className="text-center p-4 bg-slate-100 rounded-lg">
                <ChefHat className="w-6 h-6 mx-auto mb-2 text-slate-600" />
                <div className="font-semibold">{recipe.difficulty}</div>
                <div className="text-sm text-slate-600">Difficulty</div>
              </div>
              <div className="text-center p-4 bg-slate-100 rounded-lg">
                <Users className="w-6 h-6 mx-auto mb-2 text-slate-600" />
                <div className="font-semibold">{recipe.servings}</div>
                <div className="text-sm text-slate-600">Yield</div>
              </div>
              <div className="text-center p-4 bg-slate-100 rounded-lg">
                <MessageCircle className="w-6 h-6 mx-auto mb-2 text-slate-600" />
                <div className="font-semibold">{recipe.comments}</div>
                <div className="text-sm text-slate-600">Comments</div>
              </div>
            </div>
          </div>

          {/* Recipe Content */}
          <div className="space-y-8">
            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Ingredients</span>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Suggest Edit
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                    >
                      <div className="flex-1">
                        <span className="font-medium">{ingredient.item}</span>
                        {ingredient.notes && <span className="text-sm text-slate-600 ml-2">({ingredient.notes})</span>}
                      </div>
                      <span className="font-semibold text-emerald-600">{ingredient.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Instructions</span>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Suggest Edit
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-2">{step.day}</h4>
                        <p className="text-slate-700 mb-2">{step.instruction}</p>
                        {step.notes && <p className="text-sm text-slate-600 italic">{step.notes}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Comments ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea placeholder="Add a comment..." className="mb-3" />
                      <Button size="sm" className="btn-primary">
                        Comment
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {comments.map((comment) => (
                    <div key={comment.id} className="space-y-4">
                      <div className="flex gap-3">
                        <Avatar>
                          <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{comment.author[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="bg-slate-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{comment.author}</span>
                              <span className="text-sm text-slate-500">{comment.date}</span>
                            </div>
                            <p className="text-slate-700">{comment.content}</p>
                          </div>
                        </div>
                      </div>

                      {comment.replies.map((reply, replyIndex) => (
                        <div key={replyIndex} className="ml-12 flex gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={reply.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{reply.author[0].toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-slate-50 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-sm">{reply.author}</span>
                                <span className="text-xs text-slate-500">{reply.date}</span>
                              </div>
                              <p className="text-slate-700 text-sm">{reply.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <Button className="w-full btn-primary">
                  <GitFork className="w-4 h-4 mr-2" />
                  Fork Recipe
                </Button>
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Collection
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Commit History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <History className="w-5 h-5 mr-2" />
                Recent Changes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {commits.map((commit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{commit.message}</p>
                    <p className="text-xs text-slate-500">
                      {commit.author} • {commit.date}
                    </p>
                    <code className="text-xs text-slate-400">{commit.hash}</code>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recipe Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recipe Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Success Rate</span>
                <span className="font-semibold text-emerald-600">94%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Avg Rating</span>
                <span className="font-semibold">4.8/5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Times Made</span>
                <span className="font-semibold">1,247</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
