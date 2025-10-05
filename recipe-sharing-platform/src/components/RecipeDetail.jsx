import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = Array.isArray(data.recipes)
          ? data.recipes.find((item) => item.id.toString() === id)
          : data.find((item) => item.id.toString() === id);
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) {
    return (
      <p className="text-center mt-20 text-gray-600 text-lg animate-pulse">
        Loading recipe details...
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:underline text-sm"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {recipe.title}
      </h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-2xl shadow-lg mb-6 w-full h-80 object-cover"
      />

      <section className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Instructions
        </h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default RecipeDetail;
