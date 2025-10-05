import { useParams } from 'react-router-dom'
import recipes from '../data.json'

function RecipeDetail() {
  const { id } = useParams()
  const recipe = recipes.find((r) => r.id === parseInt(id))

  if (!recipe) {
    return <p className="text-center text-red-600">Recipe not found.</p>
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-3">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default RecipeDetail
