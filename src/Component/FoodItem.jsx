import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./fooditem.module.css"

export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImg} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link
          to={`/recipe/${food.id}`}
          target="_blank"
          className={`${styles.itemButton} ${styles.desktopOnly}`}
        >
          View Recipe
        </Link>
        <Link
          to={`/recipe/${food.id}`}
          target="_self"
          className={`${styles.itemButton} ${styles.mobileOnly}`}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}
