"use client"

import { useState, useRef } from "react"
import { Star, Camera, Upload, X, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"

interface RecipeAttempt {
  id: string
  userId: string
  userName: string
  userAvatar: string
  rating: number
  review: string
  photos: string[]
  difficulty: "Easy" | "Medium" | "Hard"
  timeSpent: string
  date: string
  likes: number
  comments: number
}

interface RecipeAttemptsProps {
  recipeId: string
  attempts: RecipeAttempt[]
}

export function RecipeAttempts({ recipeId, attempts }: RecipeAttemptsProps) {
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Medium")
  const [timeSpent, setTimeSpent] = useState("")
  const [photos, setPhotos] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setPhotos(prev => [...prev, ...files])
  }

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    
    try {
      const formData = new FormData()
      formData.append('rating', rating.toString())
      formData.append('review', review)
      formData.append('difficulty', difficulty)
      formData.append('timeSpent', timeSpent)
      formData.append('recipeId', recipeId)
      
      // Add photos to form data
      photos.forEach((photo) => {
        formData.append('photos', photo)
      })

      const response = await fetch('/api/attempts', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        // Reset form
        setRating(0)
        setReview("")
        setDifficulty("Medium")
        setTimeSpent("")
        setPhotos([])
        setShowUploadForm(false)
        
        // In a real app, you might want to refresh the attempts list
        // or add the new attempt to the current list
        window.location.reload() // Simple refresh for demo
      } else {
        alert('Failed to upload attempt: ' + result.message)
      }
    } catch (error) {
      console.error('Error uploading attempt:', error)
      alert('Failed to upload attempt. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Recipe Attempts ({attempts.length})</span>
          <Button 
            onClick={() => setShowUploadForm(true)}
            className="btn-primary"
          >
            <Camera className="w-4 h-4 mr-2" />
            Share Your Attempt
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {showUploadForm && (
          <div className="mb-6 p-4 border rounded-lg bg-slate-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Share Your Recipe Attempt</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowUploadForm(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Rating */}
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-sm font-medium mb-2">How difficult was it?</label>
                <div className="flex space-x-2">
                  {(["Easy", "Medium", "Hard"] as const).map((level) => (
                    <Button
                      key={level}
                      type="button"
                      variant={difficulty === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDifficulty(level)}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Time Spent */}
              <div>
                <label className="block text-sm font-medium mb-2">Time Spent</label>
                <input
                  type="text"
                  value={timeSpent}
                  onChange={(e) => setTimeSpent(e.target.value)}
                  placeholder="e.g., 2 hours, 30 minutes"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Review */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <Textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Share your experience, tips, or modifications..."
                  rows={4}
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Photos</label>
                <div className="space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photos
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  
                  {photos.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative">
                          <Image
                            src={URL.createObjectURL(photo)}
                            alt={`Upload ${index + 1}`}
                            width={150}
                            height={150}
                            className="rounded-lg object-cover w-full h-32"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-1 right-1 w-6 h-6 p-0"
                            onClick={() => removePhoto(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  type="submit"
                  disabled={uploading || rating === 0 || !review.trim()}
                  className="btn-primary"
                >
                  {uploading ? "Uploading..." : "Share Attempt"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowUploadForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Attempts List */}
        <div className="space-y-6">
          {attempts.length === 0 ? (
            <Alert>
              <AlertDescription>
                No attempts shared yet. Be the first to share your experience!
              </AlertDescription>
            </Alert>
          ) : (
            attempts.map((attempt) => (
              <div key={attempt.id} className="border rounded-lg p-4">
                <div className="flex items-start space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage src={attempt.userAvatar} />
                    <AvatarFallback>{attempt.userName[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium">{attempt.userName}</span>
                        <span className="text-sm text-slate-500 ml-2">{attempt.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{attempt.difficulty}</Badge>
                        <span className="text-sm text-slate-600">{attempt.timeSpent}</span>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= attempt.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-slate-600 ml-1">
                        {attempt.rating}/5
                      </span>
                    </div>

                    {/* Review */}
                    <p className="text-slate-700 mb-3">{attempt.review}</p>

                    {/* Photos */}
                    {attempt.photos.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
                        {attempt.photos.map((photo, index) => (
                          <Image
                            key={index}
                            src={photo}
                            alt={`Attempt photo ${index + 1}`}
                            width={200}
                            height={150}
                            className="rounded-lg object-cover w-full h-24"
                          />
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <button className="flex items-center space-x-1 hover:text-emerald-600">
                        <Heart className="w-4 h-4" />
                        <span>{attempt.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-emerald-600">
                        <MessageCircle className="w-4 h-4" />
                        <span>{attempt.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
} 