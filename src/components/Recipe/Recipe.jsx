import { useEffect, useContext, useState } from "react"
import "./recipe.css"

export default function Recipe(props) {
    let { title, description, images, servings, prepTime, cookTime, postDate, editDate, ingredients, directions } = props.recipe
    useEffect(() => {
        console.log(images, title)
    })
    return (
        <div className="recipe" onClick={() => {props.viewRecipe(props.recipe)}}>
            <div className="recipe__background" style={{ background: `url(http://localhost:3001${images.medium})`, backgroundSize: "cover" }}></div>
            <div className="recipe__content">
                <div className="recipe__header">{title}</div>
                <div className="recipe__edit-date">{`Last edited ${editDate}`}</div>
                <div className="recipe__ingredients-on-sale"></div>
                <div className="recipe__footer">
                    <div className="recipe__ingredient-count">
                        {ingredients.length}
                        <div>
                            {ingredients.length > 1 ? "Ingredients" : "Ingredient"}
                        </div>
                    </div>
                    <div className="recipe__time-to-make">
                        {`${prepTime + cookTime}`}
                        <div>
                            {prepTime + cookTime > 1 ? "Minutes" : "Minute"}
                        </div>
                    </div>
                    <div className="recipe__servings">
                        {servings}
                        <div>
                            {servings > 1 ? "servings" : "servings"}
                        </div>
                    </div>



              
    
                    </div>
                </div>
            </div>
    )
}