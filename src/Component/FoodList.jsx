import React from 'react'
import FoodItem from './FoodItem'
import styles from './foodlist.module.css'


export default function FoodList({foodData,setFoodId}) {
  return (
    <div className={styles.gridContainer}>
      {foodData.map((food)=>(
     <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
    ))}
    {/* <div className={styles.copyright}>© RecipeFinder 2024 All Rights Reserved.</div> */}
    </div>
  )
}

