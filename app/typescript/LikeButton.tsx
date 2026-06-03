"use client"
import { useState } from "react"

type Ingredient = {
  id: number
  name: string
  amount: string
}

export default function DynamicForm() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: "", amount: "" }
  ])

  function addIngredient() {
    const newId = ingredients.length + 1
    setIngredients([...ingredients, { id: newId, name: "", amount: "" }])
  }

  function removeIngredient(id: number) {
    setIngredients(ingredients.filter((ing) => ing.id !== id))
  }

  function updateIngredient(id: number, field: string, value: string) {
    setIngredients(ingredients.map((ing) =>
      ing.id === id ? { ...ing, [field]: value } : ing
    ))
  }

  function handleSubmit() {
    alert(JSON.stringify(ingredients, null, 2))
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-2">Dynamic Form Fields</h1>
      <p className="text-gray-500 mb-8">Add/Remove ingredients like Recipe Manager!</p>

      {/* INGREDIENTS */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Ingredients</h2>

        {ingredients.map((ing, index) => (
          <div key={ing.id} className="flex gap-2 mb-3">
            <span className="bg-gray-300 px-3 py-2 rounded font-bold">
              {index + 1}
            </span>
            <input
              value={ing.name}
              onChange={(e) => updateIngredient(ing.id, "name", e.target.value)}
              placeholder="Ingredient name..."
              className="border p-2 rounded flex-1"
            />
            <input
              value={ing.amount}
              onChange={(e) => updateIngredient(ing.id, "amount", e.target.value)}
              placeholder="Amount..."
              className="border p-2 rounded w-24"
            />
            <button
              onClick={() => removeIngredient(ing.id)}
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
            >
              ❌
            </button>
          </div>
        ))}

        <button
          onClick={addIngredient}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
        >
          ➕ Add Ingredient
        </button>
      </div>

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 font-bold w-full"
      >
        Submit Recipe
      </button>
    </div>
  )
}