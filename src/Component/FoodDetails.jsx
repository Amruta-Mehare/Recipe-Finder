import React, { useEffect, useState } from 'react'


export default function FoodDetails({ foodId }) {
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
  
<div></div>
  )
  
}

