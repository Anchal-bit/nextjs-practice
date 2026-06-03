"use client"
import { useState } from "react"

type Tag = {
  id: number
  name: string
}

export default function DynamicForm() {
  const [tags, setTags] = useState<Tag[]>([
    { id: 1, name: "" }
  ])

  function addTag() {
    const newId = tags.length + 1
    setTags([...tags, { id: newId, name: "" }])
  }

  function removeTag(id: number) {
    setTags(tags.filter((tag) => tag.id !== id))
  }

  function updateTag(id: number, value: string) {
    setTags(tags.map((tag) =>
      tag.id === id ? { ...tag, name: value } : tag
    ))
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-2">Create Blog Post</h1>
      <p className="text-gray-500 mb-8">Practice dynamic fields!</p>

      {/* TITLE */}
      <div className="mb-4">
        <label className="font-bold block mb-1">Post Title</label>
        <input
          placeholder="Enter blog title..."
          className="border p-2 rounded w-full"
        />
      </div>

      {/* CONTENT */}
      <div className="mb-4">
        <label className="font-bold block mb-1">Content</label>
        <textarea
          placeholder="Write your blog post..."
          rows={4}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* DYNAMIC TAGS */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Tags</h2>

        {tags.map((tag, index) => (
          <div key={tag.id} className="flex gap-2 mb-3">
            <span className="bg-gray-300 px-3 py-2 rounded font-bold">
              {index + 1}
            </span>
            <input
              value={tag.name}
              onChange={(e) => updateTag(tag.id, e.target.value)}
              placeholder="e.g. Next.js, React, TypeScript..."
              className="border p-2 rounded flex-1"
            />
            <button
              onClick={() => removeTag(tag.id)}
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
            >
              ❌
            </button>
          </div>
        ))}

        <button
          onClick={addTag}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
        >
          ➕ Add Tag
        </button>
      </div>

      {/* SUBMIT */}
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 font-bold w-full">
        Publish Post
      </button>

    </div>
  )
}