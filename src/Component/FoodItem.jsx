// import React from 'react'
// import styles from "./fooditem.module.css"

// export default function FoodItem({food,setFoodId}) {
//   return (
//     <div className={styles.itemContainer}>
//       <img className={styles.itemImg} src={food.image} alt=""/>
//      <div className={styles.itemContent}>
//      <p className={styles.itemName}>{food.title}</p>
//      </div>
//      <div className={styles.buttonContainer}>
//      {/* <button onClick={()=>
//      {
//       setFoodId(food.id)
//      }
//      } className={styles.itemButton}>View Recipe</button> */}

// <a href={`/recipe/${food.id}`} target="_blank" className={styles.itemButton}>View Recipe</a>
//      </div>
//     </div>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./fooditem.module.css"

export default function FoodItem({ food }) {
  return (
    
    <div className={styles.itemContainer}>
      <img className={styles.itemImg} src={food.image} alt=""/>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link to={`/recipe/${food.id}`} target="_blank" className={styles.itemButton}>
          View Recipe
        </Link>
      </div>
    </div>
   
  )
}
