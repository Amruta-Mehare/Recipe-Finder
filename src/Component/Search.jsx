import React, { useState,useEffect } from 'react'
import styles from "./search.module.css"


const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({foodData,setFoodData}) {
    const [query, setQuery] = useState("")
    useEffect(()=>{
        async function fetchFood()
        {
            const res=await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data=await res.json()
            console.log(data.results);
           setFoodData(data.results);
        }  
        fetchFood() 
    }, [query,setFoodData])

    
    return (
        <div className={styles.searchContainer}>
            <input value={query} 
                onChange={(e) => setQuery(e.target.value)}
                type="text"  className={styles.input}
                placeholder='Search Recipe Pasta'/>
            <i className={`fa fa-search ${styles.searchIcon}`}></i>
        </div>
    )
}
