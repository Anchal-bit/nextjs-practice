"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreatePost() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tag, setTag] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!title || !content) {
      alert("Please fill in title and content!")
      return
    }

    const existing = JSON.parse(localStorage.getItem("myPosts") || "[]")
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      tag,
      date: new Date().toLocaleDateString(),
      author: "Anchal"
    }
    localStorage.setItem("myPosts", JSON.stringify([...existing, newPost]))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">✅ Post Created!</h1>
        <p className="text-gray-500 mb-6">Your blog post has been saved!</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push("/my-blog")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            View My Posts
          </button>
          <button
            onClick={() => {
              setTitle("")
              setContent("")
              setTag("")
              setSubmitted(false)
            }}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Write Another Post
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-2">✍️ Write a Blog Post</h1>
      <p className="text-gray-500 mb-8">Create and save your own blog post!</p>

      <div className="mb-4">
        <label className="font-bold block mb-2">Post Title *</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your blog title..."
          className="border p-3 rounded w-full text-lg"
        />
      </div>

      <div className="mb-4">
        <label className="font-bold block mb-2">Content *</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog post here..."
          rows={6}
          className="border p-3 rounded w-full text-lg"
        />
      </div>

      <div className="mb-6">
        <label className="font-bold block mb-2">Tag</label>
        <input
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="e.g. Next.js, React, TypeScript..."
          className="border p-3 rounded w-full"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 font-bold w-full text-lg"
      >
        Publish Post 🚀
      </button>
    </div>
  )
}