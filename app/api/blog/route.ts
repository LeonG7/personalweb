import { getAllPosts } from '@/utils/mdx'

export async function GET() {
  const posts = await getAllPosts()
  return new Response(JSON.stringify({ posts }), {
    headers: {
      'content-type': 'application/json',
    },
  })
} 