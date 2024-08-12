import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./nav.module.css"

export default function Nav() {
  return (
    <div className={styles.nav}>
     <div className={styles.title}>RecipeFinder</div> 
     <div className={styles.links}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <div className={styles.dropdown}>
          <span>Recipe</span>
          <div className={styles.dropdownContent}>
            <Link to="/recipe/656329">Pizza</Link>
            <Link to="/recipe/511728">Pasta</Link>
            <Link to="/recipe/643492">Soup</Link>
            <Link to="/recipe/657095">Curry</Link>
            <Link to="/recipe/639387">Cuteny</Link>
            <Link to="/recipe/648798">Cake</Link>
             <Link to="/">All Recipe</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

