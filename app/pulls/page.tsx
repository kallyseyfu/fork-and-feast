import { GitPullRequest, MessageCircle, Clock, Check, X, GitMerge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const pullRequests = [
  {
    id: 1,
    title: "Add gluten-free flour alternative",
    author: "glutenfreebaker",
    targetRecipe: "Perfect Sourdough Starter",
    targetAuthor: "breadmaster",
    status: "open",
    comments: 3,
    changes: "+5 -2",
    createdAt: "2 hours ago",
    description: "Added instructions for using gluten-free flour blend as an alternative to regular flour.",
  },
  {
    id: 2,
    title: "Update cooking time for high altitude",
    author: "mountaincook",
    targetRecipe: "Classic Chocolate Chip Cookies",
    targetAuthor: "cookiequeen",
    status: "merged",
    comments: 7,
    changes: "+3 -1",
    createdAt: "1 day ago",
    description: "Adjusted baking time and temperature for high altitude baking.",
  },
  {
    id: 3,
    title: "Add vegan butter substitute",
    author: "plantbased",
    targetRecipe: "Buttercream Frosting",
    targetAuthor: "cakemaster",
    status: "closed",
    comments: 2,
    changes: "+4 -0",
    createdAt: "3 days ago",
    description: "Added plant-based butter alternative with ratio adjustments.",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-emerald-100 text-emerald-800"
    case "merged":
      return "bg-purple-100 text-purple-800"
    case "closed":
      return "bg-slate-100 text-slate-800"
    default:
      return "bg-slate-100 text-slate-800"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "open":
      return <GitPullRequest className="w-4 h-4" />
    case "merged":
      return <GitMerge className="w-4 h-4" />
    case "closed":
      return <X className="w-4 h-4" />
    default:
      return <GitPullRequest className="w-4 h-4" />
  }
}

export default function PullRequestsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Pull Requests</h1>
        <p className="text-slate-600">Review and manage recipe improvement suggestions</p>
      </div>

      <Tabs defaultValue="open" className="space-y-6">
        <TabsList>
          <TabsTrigger value="open" className="flex items-center space-x-2">
            <GitPullRequest className="w-4 h-4" />
            <span>Open (1)</span>
          </TabsTrigger>
          <TabsTrigger value="merged" className="flex items-center space-x-2">
            <GitMerge className="w-4 h-4" />
            <span>Merged (1)</span>
          </TabsTrigger>
          <TabsTrigger value="closed" className="flex items-center space-x-2">
            <X className="w-4 h-4" />
            <span>Closed (1)</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="open" className="space-y-4">
          {pullRequests
            .filter((pr) => pr.status === "open")
            .map((pr) => (
              <Card key={pr.id} className="hover:border-slate-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={getStatusColor(pr.status)}>
                          {getStatusIcon(pr.status)}
                          <span className="ml-1 capitalize">{pr.status}</span>
                        </Badge>
                        <Link
                          href={`/pull/${pr.id}`}
                          className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                        >
                          {pr.title}
                        </Link>
                      </div>

                      <p className="text-slate-600 mb-3">{pr.description}</p>

                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Avatar className="w-5 h-5">
                            <AvatarImage src="/placeholder.svg?height=20&width=20" />
                            <AvatarFallback>{pr.author[0].toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <span>{pr.author}</span>
                        </div>
                        <span>wants to merge into</span>
                        <Link href="#" className="font-medium hover:text-emerald-600">
                          {pr.targetRecipe}
                        </Link>
                        <span>by {pr.targetAuthor}</span>
                      </div>

                      <div className="flex items-center space-x-4 mt-3 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{pr.comments} comments</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{pr.createdAt}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {pr.changes}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <Button size="sm" className="btn-primary">
                        <Check className="w-4 h-4 mr-2" />
                        Merge
                      </Button>
                      <Button variant="outline" size="sm">
                        <X className="w-4 h-4 mr-2" />
                        Close
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="merged" className="space-y-4">
          {pullRequests
            .filter((pr) => pr.status === "merged")
            .map((pr) => (
              <Card key={pr.id} className="hover:border-slate-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={getStatusColor(pr.status)}>
                          {getStatusIcon(pr.status)}
                          <span className="ml-1 capitalize">{pr.status}</span>
                        </Badge>
                        <Link
                          href={`/pull/${pr.id}`}
                          className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                        >
                          {pr.title}
                        </Link>
                      </div>

                      <p className="text-slate-600 mb-3">{pr.description}</p>

                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Avatar className="w-5 h-5">
                            <AvatarImage src="/placeholder.svg?height=20&width=20" />
                            <AvatarFallback>{pr.author[0].toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <span>{pr.author}</span>
                        </div>
                        <span>merged into</span>
                        <Link href="#" className="font-medium hover:text-emerald-600">
                          {pr.targetRecipe}
                        </Link>
                        <span>by {pr.targetAuthor}</span>
                      </div>

                      <div className="flex items-center space-x-4 mt-3 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{pr.comments} comments</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{pr.createdAt}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {pr.changes}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="closed" className="space-y-4">
          {pullRequests
            .filter((pr) => pr.status === "closed")
            .map((pr) => (
              <Card key={pr.id} className="hover:border-slate-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={getStatusColor(pr.status)}>
                          {getStatusIcon(pr.status)}
                          <span className="ml-1 capitalize">{pr.status}</span>
                        </Badge>
                        <Link
                          href={`/pull/${pr.id}`}
                          className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                        >
                          {pr.title}
                        </Link>
                      </div>

                      <p className="text-slate-600 mb-3">{pr.description}</p>

                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Avatar className="w-5 h-5">
                            <AvatarImage src="/placeholder.svg?height=20&width=20" />
                            <AvatarFallback>{pr.author[0].toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <span>{pr.author}</span>
                        </div>
                        <span>wanted to merge into</span>
                        <Link href="#" className="font-medium hover:text-emerald-600">
                          {pr.targetRecipe}
                        </Link>
                        <span>by {pr.targetAuthor}</span>
                      </div>

                      <div className="flex items-center space-x-4 mt-3 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{pr.comments} comments</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{pr.createdAt}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {pr.changes}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
