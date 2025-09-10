import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'

export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}
