"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

type Post = {
  id: string
  title: string
  content: string
  tag: string
  date: string
  author: string
}

export default function MyBlog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myPosts") || "[]")
    setPosts(saved)
  }, [])

  function deletePost(id: string) {
    const updated = posts.filter((p) => p.id !== id)
    setPosts(updated)
    localStorage.setItem("myPosts", JSON.stringify(updated))
  }

  // Filter posts based on search
  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase()) ||
    post.tag.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Blog Posts</h1>
        <Link
          href="/create-post"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          ✍️ Write New Post
        </Link>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search posts by title, content or tag..."
          className="border p-3 rounded-lg w-full text-lg shadow-sm"
        />
        {search && (
          <p className="text-gray-500 text-sm mt-2">
            Found <span className="font-bold text-blue-500">{filtered.length}</span> posts for "{search}"
          </p>
        )}
      </div>

      {/* NO POSTS AT ALL */}
      {posts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg mb-4">No posts yet!</p>
          <Link
            href="/create-post"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Write Your First Post
          </Link>
        </div>
      )}

      {/* NO SEARCH RESULTS */}
      {posts.length > 0 && filtered.length === 0 && (
        <div className="text-center py-10">
          <p className="text-2xl mb-2">🔍</p>
          <p className="text-gray-500 text-lg">No posts found for "{search}"</p>
          <button
            onClick={() => setSearch("")}
            className="mt-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* POSTS LIST */}
      {filtered.map((post) => (
        <div key={post.id} className="bg-gray-100 p-4 rounded-lg mb-4 border hover:shadow-md">
          {post.tag && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs mb-2 inline-block">
              {post.tag}
            </span>
          )}
          <h2 className="text-xl font-bold text-gray-800 mb-1">{post.title}</h2>
          <p className="text-gray-500 text-sm mb-2">📅 {post.date} · ✍️ {post.author}</p>
          <p className="text-gray-600 mb-3">{post.content.substring(0, 100)}...</p>
          <button
            onClick={() => deletePost(post.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
          >
            🗑️ Delete
          </button>
        </div>
      ))}

    </div>
  )
}