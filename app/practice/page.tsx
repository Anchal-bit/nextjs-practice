"use client"
import { useState } from "react"

type Category = {
  id: number
  name: string
  slug: string
  description: string
}

type Ingredient = {
  id: number
  name: string
  amount: string
  order: number
}

type Recipe = {
  id: number
  title: string
  description: string
  prepTime: number
  cookTime: number
  servings: number
  author: string
  categories: Category[]
  ingredients: Ingredient[]
}

const sampleRecipe: Recipe = {
  id: 1,
  title: "Pasta Carbonara",
  description: "A classic Italian pasta dish",
  prepTime: 10,
  cookTime: 20,
  servings: 4,
  author: "Anchal",
  categories: [
    { id: 1, name: "Dinner", slug: "dinner", description: "Evening meals" },
    { id: 2, name: "Quick & Easy", slug: "quick-easy", description: "Under 30 minutes" }
  ],
  ingredients: [
    { id: 1, name: "Pasta", amount: "400g", order: 1 },
    { id: 2, name: "Eggs", amount: "4", order: 2 },
    { id: 3, name: "Cheese", amount: "100g", order: 3 }
  ]
}

export default function TypescriptPractice() {
  const [recipe, setRecipe] = useState<Recipe>(sampleRecipe)
  const [newTitle, setNewTitle] = useState<string>("")

  function updateTitle() {
    if (newTitle) {
      setRecipe({...recipe, title: newTitle})
      setNewTitle("")
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-2">TypeScript Practice</h1>
      <p className="text-gray-500 mb-8">Using real Recipe Project types!</p>

      {/* RECIPE */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-3">1. Recipe Type</h2>
        <p>Title: <span className="font-bold text-blue-500">{recipe.title}</span></p>
        <p>Author: <span className="font-bold text-green-500">{recipe.author}</span></p>
        <p>Prep Time: <span className="font-bold text-purple-500">{recipe.prepTime} mins</span></p>
        <p>Cook Time: <span className="font-bold text-purple-500">{recipe.cookTime} mins</span></p>
        <p>Servings: <span className="font-bold text-red-500">{recipe.servings} people</span></p>
      </div>

      {/* CATEGORIES */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-3">2. Categories (Category[] type)</h2>
        <div className="flex gap-2">
          {recipe.categories.map((cat: Category) => (
            <span key={cat.id} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{cat.name}</span>
          ))}
        </div>
      </div>

      {/* INGREDIENTS */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-3">3. Ingredients (Ingredient[] type)</h2>
        {recipe.ingredients.map((ing: Ingredient) => (
          <div key={ing.id} className="bg-white p-2 rounded mb-1 border flex justify-between">
            <span>{ing.order}. {ing.name}</span>
            <span className="text-gray-500">{ing.amount}</span>
          </div>
        ))}
      </div>

      {/* UPDATE TITLE */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-3">4. Update Recipe Title</h2>
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Enter new title..." className="border p-2 rounded w-full mb-2" />
        <button onClick={updateTitle} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Title</button>
      </div>

    </div>
  )
}