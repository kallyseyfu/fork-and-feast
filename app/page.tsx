import { TrendingUp, Clock, GitFork, Star, MessageCircle, Filter, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const trendingRecipes = [
  {
    id: 1,
    title: "Perfect Sourdough Starter",
    author: "breadmaster",
    description: "A foolproof method for creating and maintaining a healthy sourdough starter",
    tags: ["bread", "fermentation", "beginner-friendly"],
    stars: 1247,
    forks: 89,
    comments: 23,
    difficulty: "Medium",
    time: "7 days",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Authentic Ramen Broth",
    author: "ramensensei",
    description: "Rich, complex tonkotsu broth that rivals your favorite ramen shop",
    tags: ["japanese", "soup", "advanced"],
    stars: 892,
    forks: 156,
    comments: 45,
    difficulty: "Hard",
    time: "12 hours",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Vegan Chocolate Cake",
    author: "plantchef",
    description: "Incredibly moist and rich chocolate cake that happens to be vegan",
    tags: ["vegan", "dessert", "chocolate"],
    stars: 634,
    forks: 78,
    comments: 12,
    difficulty: "Easy",
    time: "1 hour",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const newForks = [
  { recipe: "Thai Green Curry", author: "spicequeen", forkedBy: "homecook23", time: "2 hours ago" },
  { recipe: "Classic Carbonara", author: "italianonna", forkedBy: "pastaLover", time: "4 hours ago" },
  { recipe: "Banana Bread", author: "bakingbee", forkedBy: "weekendbaker", time: "6 hours ago" },
]

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Discover Amazing Recipes</h1>
        <p className="text-slate-600">Collaborate, fork, and improve recipes with the community</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Filters */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                All Cuisines
              </Button>
              <Button variant="outline" size="sm">
                <Clock className="w-4 h-4 mr-2" />
                Any Time
              </Button>
              <Button variant="outline" size="sm">
                <ChefHat className="w-4 h-4 mr-2" />
                All Levels
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">Sort by:</span>
              <Button variant="ghost" size="sm" className="text-emerald-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending
              </Button>
            </div>
          </div>

          {/* Trending Recipes */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-slate-900">Trending This Week</h2>
            <div className="grid gap-6">
              {trendingRecipes.map((recipe) => (
                <Card key={recipe.id} className="recipe-card">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        width={200}
                        height={150}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardHeader className="p-0 pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">
                              <Link href={`/recipe/${recipe.id}`} className="hover:text-emerald-600 transition-colors">
                                {recipe.title}
                              </Link>
                            </CardTitle>
                            <p className="text-sm text-slate-600 mt-1">
                              by{" "}
                              <Link href={`/user/${recipe.author}`} className="font-medium hover:text-emerald-600">
                                {recipe.author}
                              </Link>
                            </p>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4" />
                              <span>{recipe.stars}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <GitFork className="w-4 h-4" />
                              <span>{recipe.forks}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{recipe.comments}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-slate-700 mb-3">{recipe.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {recipe.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{recipe.time}</span>
                            </div>
                            <Badge
                              variant={
                                recipe.difficulty === "Easy"
                                  ? "default"
                                  : recipe.difficulty === "Medium"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {recipe.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* New Forks This Week */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <GitFork className="w-5 h-5 mr-2 text-emerald-600" />
                New Forks This Week
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {newForks.map((fork, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <GitFork className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm">
                      <Link href={`/user/${fork.forkedBy}`} className="font-medium hover:text-emerald-600">
                        {fork.forkedBy}
                      </Link>
                      {" forked "}
                      <Link href="#" className="font-medium hover:text-emerald-600">
                        {fork.recipe}
                      </Link>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{fork.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Community Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Total Recipes</span>
                <span className="font-semibold">12,847</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Active Cooks</span>
                <span className="font-semibold">3,291</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Forks This Week</span>
                <span className="font-semibold">156</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
