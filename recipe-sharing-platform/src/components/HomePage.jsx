import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.recipes)) {
          setRecipes(data.recipes);
        } else if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Recipe Sharing Platform
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h3>
              <p className="text-gray-600 text-sm">{recipe.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
