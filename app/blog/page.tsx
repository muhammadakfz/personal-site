import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-8">Writing</h1>
      <BlogPosts />
    </section>
  )
}
