import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const rating = formData.get('rating')
    const review = formData.get('review')
    const difficulty = formData.get('difficulty')
    const timeSpent = formData.get('timeSpent')
    const photos = formData.getAll('photos')
    const recipeId = formData.get('recipeId')

    // In a real application, you would:
    // 1. Upload photos to a cloud storage service (AWS S3, Cloudinary, etc.)
    // 2. Save the attempt data to a database
    // 3. Handle user authentication and authorization

    // For demo purposes, we'll simulate a successful upload
    const photoUrls = photos.map((_, index) => `/placeholder.svg?height=200&width=300&id=${Date.now()}-${index}`)

    const newAttempt = {
      id: Date.now().toString(),
      userId: 'current-user',
      userName: 'Current User',
      userAvatar: '/placeholder.svg?height=32&width=32',
      rating: Number(rating),
      review: review as string,
      photos: photoUrls,
      difficulty: difficulty as string,
      timeSpent: timeSpent as string,
      date: 'Just now',
      likes: 0,
      comments: 0,
    }

    return NextResponse.json({
      success: true,
      attempt: newAttempt,
      message: 'Recipe attempt shared successfully!'
    })
  } catch (error) {
    console.error('Error uploading attempt:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to upload attempt' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const recipeId = searchParams.get('recipeId')

    // In a real application, you would fetch attempts from a database
    // For demo purposes, we'll return sample data
    const attempts = [
      {
        id: "1",
        userId: "user1",
        userName: "sourdoughfan",
        userAvatar: "/placeholder.svg?height=32&width=32",
        rating: 5,
        review: "This recipe is absolutely perfect! My starter was ready in exactly 7 days and has been going strong for 3 months now. The detailed instructions made it so easy to follow.",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
        difficulty: "Medium",
        timeSpent: "7 days",
        date: "2 weeks ago",
        likes: 12,
        comments: 3,
        recipeId: "1",
      },
      {
        id: "2",
        userId: "user2",
        userName: "newbaker",
        userAvatar: "/placeholder.svg?height=32&width=32",
        rating: 4,
        review: "Great recipe! I had some issues with the temperature consistency, but once I got that sorted, it worked perfectly. I used whole wheat flour as suggested and it added a nice complexity.",
        photos: ["/placeholder.svg?height=200&width=300"],
        difficulty: "Medium",
        timeSpent: "8 days",
        date: "1 week ago",
        likes: 8,
        comments: 1,
        recipeId: "1",
      },
    ]

    return NextResponse.json({
      success: true,
      attempts: attempts.filter(attempt => !recipeId || attempt.recipeId === recipeId)
    })
  } catch (error) {
    console.error('Error fetching attempts:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch attempts' },
      { status: 500 }
    )
  }
} 