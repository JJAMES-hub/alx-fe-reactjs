import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr style={{ margin: '20px 0' }} />
      <RecipeList />
    </div>
  );
}

export default App;
