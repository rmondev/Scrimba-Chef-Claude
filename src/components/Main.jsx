import React from 'react'
import ClaudeRecipe from '../components/ClaudeRecipe'
import IngredientList from '../components/IngredientList'
import { getRecipeFromMistral } from '../lib/ai'

const Main = () => {

  const [ingredients, setIngredients] = React.useState([])
  // const [recipeShown, setRecipeShown] = React.useState(false)
  const [recipe, setRecipe] = React.useState('')
  
  // Submit form data using action attribute instead:

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient") // use name attribute for ingredient input 

    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

  return (
    <main>
      <form className='add-ingredient-form' action={addIngredient}>
        <input 
          type='text'
          name='ingredient'
          placeholder='e.g.oregano'
          aria-label='Add Ingredient'
        />
        
        <button>
          Add Ingredient
        </button>
      </form>
      { ingredients.length > 0 ?

      <IngredientList ingredients={ingredients} getRecipe={getRecipe}/>
     
      :
      null
      }
      { recipe && <ClaudeRecipe recipe={recipe}/> }



    </main>
  )
}

export default Main
