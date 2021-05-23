import { useEffect, useContext, useState } from "react"
import Recipe from "./components/Recipe/Recipe.jsx"
import './App.css';

function App() {

  let [recipes, setRecipes] = useState([])
  let [specials, setSpecials] = useState([])
  let [viewedRecipe, setViewedRecipe] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/recipes").then(response => {
      return response.json().then(setRecipes)
    })
      .then(() => {
        fetch("http://localhost:3001/specials").then(response => {
          return response.json().then(setSpecials)
        })
      })

  }, [])

  return (
    <div className="App">
      <div className="header">
        <span>Recipes!</span>
      </div>
      {
        viewedRecipe ?
          <div className="viewed-recipe">
            <div className="viewed-recipe__close" onClick={() => { setViewedRecipe(null) }}>
              <div>Go back</div>
            </div>
            <div className="viewed-recipe__title">{viewedRecipe.title}</div>
            <div className="viewed-recipe__image" style={{ background: `url(http://localhost:3001${viewedRecipe.images.medium})`, backgroundSize: "cover" }}></div>
            <div className="viewed-recipe__description">
              {viewedRecipe.description}
            </div>
            <div className="viewed-recipe__ingredients-list">
              {viewedRecipe.ingredients.map((ingredient, index) => {
                return (
                  <div key={"ingredient" + index} className="viewed-recipe__ingredient">
                    {/* {
                      specials.find((special) => {
                        console.log(special.ingredientId, ingredient.ingredientId,  special.ingredientId === ingredient.ingredientId)
                        return special.ingredientId === ingredient.ingredientId}) ? <span>On Special</span> : null
                    } */}
                    <div>{index + 1}</div>
                    <div>{`${ingredient.amount ? ingredient.amount : ""} ${ingredient.measurement} ${ingredient.name}`}</div>
                  </div>
                )
              })}
            </div>
            <div className="viewed-recipe__instructions-list">
              {viewedRecipe.directions.map((direction, index) => {
                return (
                  <div key={"instruction" + index} className="viewed-recipe__instruction">
                    <div>{index + 1}</div>
                    <div>{direction.instructions}</div>
                    {direction.optional ? <div>Optional</div> : null}
                  </div>)
              })}
            </div>
          </div>
          : null
      }
      <div className="recipe-container">
        {recipes.map((recipe, index) => {
          return <Recipe key={index} recipe={recipe} viewRecipe={setViewedRecipe} />
        })
        }
      </div>
      <div className="special-container">

      </div>
    </div>
  );
}

export default App;
