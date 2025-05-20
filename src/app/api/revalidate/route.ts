import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const { path, tag, secret } = await request.json()
    
    // Validate the secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: 'Invalid revalidation secret' },
        { status: 401 }
      )
    }

    // Revalidate based on either path or tag
    if (path) {
      revalidatePath(path)
      return NextResponse.json({ revalidated: true, path })
    }
    
    if (tag) {
      revalidateTag(tag)
      return NextResponse.json({ revalidated: true, tag })
    }

    return NextResponse.json(
      { message: 'No path or tag provided' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Error revalidating:', error)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
} 