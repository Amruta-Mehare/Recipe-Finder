import React, { useEffect, useState } from 'react'
import styles from './recipepage.module.css'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

export default function RecipePage() {
  const { foodId } = useParams()
  const [food, setFood] = useState({})
  const [isLoading, setisLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`)
      const data = await res.json()
      console.log(data);
      setFood(data);
      setisLoading(false);
    }
    fetchFood()
  }, [foodId])

  return (
    <div className={styles.recipeCard}>
      <h1 className={styles.recipeName}>{food.title}</h1>
      <img className={styles.recipeImage} src={food.image} alt="" />
      <div className={styles.recipeDetails}>
        <span><strong> 🕛 {food.readyInMinutes} Minutes </strong></span>
        <span><strong>Serves {food.servings}</strong></span>
        <span><strong> {food.vegetarian ? "🥕Vegetarian" : "🍗Non-Vegetarian"}</strong></span>
        <span><strong>{food.vegan ? "Vegan" : ""}</strong></span>
        <div><span><strong>💲{food.pricePerServing / 100} Per Serving</strong></span></div>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  )
}
