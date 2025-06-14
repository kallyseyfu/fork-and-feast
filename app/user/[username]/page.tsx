import { Star, GitFork, MapPin, Calendar, Award, Book, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

const user = {
  username: "breadmaster",
  name: "Sarah Chen",
  bio: "Professional baker turned home cooking enthusiast. Sharing my favorite recipes and techniques with the community. Always experimenting with sourdough!",
  location: "San Francisco, CA",
  joinDate: "January 2023",
  avatar: "/placeholder.svg?height=120&width=120",
  stats: {
    recipes: 23,
    stars: 4847,
    forks: 892,
    followers: 1234,
  },
  badges: [
    { name: "Sourdough Expert", icon: "🍞", description: "Created 5+ highly-rated bread recipes" },
    { name: "Community Helper", icon: "🤝", description: "Helped 100+ users with recipe questions" },
    { name: "Early Adopter", icon: "⭐", description: "One of the first 1000 users" },
  ],
}

const recipes = [
  {
    id: 1,
    title: "Perfect Sourdough Starter",
    description: "A foolproof method for creating and maintaining a healthy sourdough starter",
    stars: 1247,
    forks: 89,
    language: "Bread",
    updatedAt: "2 days ago",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 2,
    title: "Artisan Pizza Dough",
    description: "Restaurant-quality pizza dough that's easy to make at home",
    stars: 892,
    forks: 156,
    language: "Italian",
    updatedAt: "1 week ago",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 3,
    title: "Classic French Baguette",
    description: "Traditional French baguette with a crispy crust and airy interior",
    stars: 634,
    forks: 78,
    language: "French",
    updatedAt: "2 weeks ago",
    image: "/placeholder.svg?height=150&width=200",
  },
]

const contributions = [
  { date: "2024-01-20", count: 3 },
  { date: "2024-01-19", count: 1 },
  { date: "2024-01-18", count: 2 },
  { date: "2024-01-17", count: 0 },
  { date: "2024-01-16", count: 4 },
  { date: "2024-01-15", count: 2 },
  { date: "2024-01-14", count: 1 },
]

export default function UserProfilePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <Card>
            <CardContent className="p-6 text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <h1 className="text-2xl font-bold text-slate-900 mb-1">{user.name}</h1>
              <p className="text-slate-600 mb-4">@{user.username}</p>

              <p className="text-slate-700 text-sm mb-4">{user.bio}</p>

              <div className="space-y-2 text-sm text-slate-600 mb-4">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>

              <Button className="w-full btn-primary mb-4">Follow</Button>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-bold text-lg">{user.stats.followers}</div>
                  <div className="text-sm text-slate-600">Followers</div>
                </div>
                <div>
                  <div className="font-bold text-lg">{user.stats.recipes}</div>
                  <div className="text-sm text-slate-600">Recipes</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {user.badges.map((badge, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{badge.name}</div>
                    <div className="text-xs text-slate-600">{badge.description}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{user.stats.stars.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Total Stars</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <GitFork className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{user.stats.forks}</div>
                <div className="text-sm text-slate-600">Total Forks</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">94%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Contribution Graph */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recipe Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-sm text-slate-600">Less</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-slate-200 rounded-sm"></div>
                  <div className="w-3 h-3 bg-emerald-200 rounded-sm"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                  <div className="w-3 h-3 bg-emerald-600 rounded-sm"></div>
                  <div className="w-3 h-3 bg-emerald-800 rounded-sm"></div>
                </div>
                <span className="text-sm text-slate-600">More</span>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {contributions.map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm ${
                      day.count === 0
                        ? "bg-slate-200"
                        : day.count === 1
                          ? "bg-emerald-200"
                          : day.count === 2
                            ? "bg-emerald-400"
                            : day.count === 3
                              ? "bg-emerald-600"
                              : "bg-emerald-800"
                    }`}
                    title={`${day.count} contributions on ${day.date}`}
                  ></div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recipes */}
          <Tabs defaultValue="recipes" className="space-y-6">
            <TabsList>
              <TabsTrigger value="recipes" className="flex items-center space-x-2">
                <Book className="w-4 h-4" />
                <span>Recipes ({user.stats.recipes})</span>
              </TabsTrigger>
              <TabsTrigger value="stars" className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Starred</span>
              </TabsTrigger>
              <TabsTrigger value="forks" className="flex items-center space-x-2">
                <GitFork className="w-4 h-4" />
                <span>Forks</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recipes" className="space-y-6">
              {recipes.map((recipe) => (
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
                            <p className="text-sm text-slate-600 mt-1">Updated {recipe.updatedAt}</p>
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
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-slate-700 mb-3">{recipe.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{recipe.language}</Badge>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="stars" className="space-y-6">
              <div className="text-center py-12">
                <Star className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-2">No starred recipes yet</h3>
                <p className="text-slate-600">Recipes that {user.name} stars will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="forks" className="space-y-6">
              <div className="text-center py-12">
                <GitFork className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-2">No forked recipes yet</h3>
                <p className="text-slate-600">Recipes that {user.name} has forked will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
