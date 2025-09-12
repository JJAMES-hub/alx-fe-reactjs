import React from 'react';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      {recipes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777' }}>
          No recipes yet. Add one above!
        </p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '15px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3 style={{ margin: '0 0 10px', color: '#333' }}>{recipe.title}</h3>
            <p style={{ margin: 0, color: '#555' }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
