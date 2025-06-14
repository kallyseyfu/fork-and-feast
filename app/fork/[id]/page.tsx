"use client"

import { useState } from "react"
import { Save, Eye, Plus, Minus, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const originalRecipe = {
  title: "Perfect Sourdough Starter",
  author: "breadmaster",
  description: "A foolproof method for creating and maintaining a healthy sourdough starter",
  tags: ["bread", "fermentation", "beginner-friendly"],
}

export default function ForkEditorPage() {
  const [title, setTitle] = useState(originalRecipe.title)
  const [description, setDescription] = useState(originalRecipe.description)
  const [tags, setTags] = useState(originalRecipe.tags)
  const [newTag, setNewTag] = useState("")
  const [commitMessage, setCommitMessage] = useState("")
  const [isPreview, setIsPreview] = useState(false)

  const [ingredients, setIngredients] = useState([
    { item: "All-purpose flour", amount: "100g", notes: "Unbleached preferred" },
    { item: "Whole wheat flour", amount: "50g", notes: "Optional, adds complexity" },
    { item: "Water", amount: "150ml", notes: "Filtered or dechlorinated" },
  ])

  const [steps, setSteps] = useState([
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
  ])

  const addIngredient = () => {
    setIngredients([...ingredients, { item: "", amount: "", notes: "" }])
  }

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  const updateIngredient = (index: number, field: string, value: string) => {
    const updated = ingredients.map((ingredient, i) => (i === index ? { ...ingredient, [field]: value } : ingredient))
    setIngredients(updated)
  }

  const addStep = () => {
    setSteps([...steps, { day: "", instruction: "", notes: "" }])
  }

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index))
  }

  const updateStep = (index: number, field: string, value: string) => {
    const updated = steps.map((step, i) => (i === index ? { ...step, [field]: value } : step))
    setSteps(updated)
  }

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <Link href="/recipe/1">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Recipe
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant={!isPreview ? "default" : "outline"} size="sm" onClick={() => setIsPreview(false)}>
              Edit
            </Button>
            <Button variant={isPreview ? "default" : "outline"} size="sm" onClick={() => setIsPreview(true)}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Fork Recipe</h1>
        <p className="text-slate-600">
          Forked from{" "}
          <Link href="/recipe/1" className="font-medium hover:text-emerald-600">
            {originalRecipe.title}
          </Link>{" "}
          by {originalRecipe.author}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-3 space-y-6">
          {!isPreview ? (
            <>
              {/* Basic Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Recipe Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe title" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe your recipe"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Tags</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag"
                        onKeyPress={(e) => e.key === "Enter" && addTag()}
                      />
                      <Button onClick={addTag} variant="outline">
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ingredients */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Ingredients</span>
                    <Button onClick={addIngredient} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Ingredient
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                          <Input
                            value={ingredient.item}
                            onChange={(e) => updateIngredient(index, "item", e.target.value)}
                            placeholder="Ingredient name"
                          />
                          <Input
                            value={ingredient.amount}
                            onChange={(e) => updateIngredient(index, "amount", e.target.value)}
                            placeholder="Amount"
                          />
                          <Input
                            value={ingredient.notes}
                            onChange={(e) => updateIngredient(index, "notes", e.target.value)}
                            placeholder="Notes (optional)"
                          />
                        </div>
                        <Button
                          onClick={() => removeIngredient(index)}
                          variant="outline"
                          size="icon"
                          className="flex-shrink-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
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
                    <Button onClick={addStep} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Step
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
                        <div className="flex-1 space-y-3">
                          <Input
                            value={step.day}
                            onChange={(e) => updateStep(index, "day", e.target.value)}
                            placeholder="Step title (e.g., Day 1)"
                          />
                          <Textarea
                            value={step.instruction}
                            onChange={(e) => updateStep(index, "instruction", e.target.value)}
                            placeholder="Step instructions"
                            rows={3}
                          />
                          <Input
                            value={step.notes}
                            onChange={(e) => updateStep(index, "notes", e.target.value)}
                            placeholder="Additional notes (optional)"
                          />
                        </div>
                        <Button
                          onClick={() => removeStep(index)}
                          variant="outline"
                          size="icon"
                          className="flex-shrink-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            /* Preview Mode */
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>
                  <p className="text-slate-700 mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ingredients</CardTitle>
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
                          {ingredient.notes && (
                            <span className="text-sm text-slate-600 ml-2">({ingredient.notes})</span>
                          )}
                        </div>
                        <span className="font-semibold text-emerald-600">{ingredient.amount}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instructions</CardTitle>
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
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Commit Changes */}
          <Card>
            <CardHeader>
              <CardTitle>Commit Changes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Commit message</label>
                <Textarea
                  value={commitMessage}
                  onChange={(e) => setCommitMessage(e.target.value)}
                  placeholder="Describe your changes..."
                  rows={3}
                />
              </div>
              <Button className="w-full btn-primary">
                <Save className="w-4 h-4 mr-2" />
                Commit Changes
              </Button>
            </CardContent>
          </Card>

          {/* Changes Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Changes Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Modified ingredients</span>
                  <span className="text-emerald-600">+2 -1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Updated steps</span>
                  <span className="text-emerald-600">+1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Added tags</span>
                  <span className="text-emerald-600">+1</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help */}
          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <p>• Use clear, descriptive commit messages</p>
              <p>• Test your recipe before submitting</p>
              <p>• Add relevant tags to help others find your recipe</p>
              <p>• Include notes for tricky steps</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
