// import React from 'react'
// import { Link } from 'react-router-dom';
// import styles from "./nav.module.css"

// export default function Nav() {
//   return (
//     <div className={styles.nav}>
//      <div className={styles.title}>RecipeFinder</div> 
//      <div className={styles.links}>
//         <Link to="/" className={styles.link}>Home</Link>
//         <Link to="/about" className={styles.link}>About</Link>
//         <Link to="/contact" className={styles.link}>Contact</Link>
//         <div className={styles.dropdown}>
//           <span>Recipe</span>
//           <div className={styles.dropdownContent}>
//             <Link to="/recipe/656329">Pizza</Link>
//             <Link to="/recipe/511728">Pasta</Link>
//             <Link to="/recipe/643492">Soup</Link>
//             <Link to="/recipe/657095">Curry</Link>
//             <Link to="/recipe/639387">Cuteny</Link>
//             <Link to="/recipe/648798">Cake</Link>
//              <Link to="/">All Recipe</Link>
//           </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from "./nav.module.css";

// export default function Nav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className={styles.nav}>
//       <div className={styles.title}>RecipeFinder</div>
//       <div className={styles.hamburger} onClick={toggleMenu}>
//         {isMenuOpen ? '✕' : '☰'}
//       </div>
//       <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
//         <Link to="/" className={styles.link} onClick={toggleMenu}>Home</Link>
//         <Link to="/about" className={styles.link} onClick={toggleMenu}>About</Link>
//         <Link to="/contact" className={styles.link} onClick={toggleMenu}>Contact</Link>
//         <div className={styles.dropdown}>
//           <span>Recipe</span>
//           <div className={styles.dropdownContent}>
//             <Link to="/recipe/656329" onClick={toggleMenu}>Pizza</Link>
//             <Link to="/recipe/511728" onClick={toggleMenu}>Pasta</Link>
//             <Link to="/recipe/643492" onClick={toggleMenu}>Soup</Link>
//             <Link to="/recipe/657095" onClick={toggleMenu}>Curry</Link>
//             <Link to="/recipe/639387" onClick={toggleMenu}>Cuteny</Link>
//             <Link to="/recipe/648798" onClick={toggleMenu}>Cake</Link>
//             <Link to="/" onClick={toggleMenu}>All Recipe</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.nav}>
      <nav className={styles.navbar}/>
      <Link to="/" className={styles.recipeFinderName}>
        RecipeFinder
      </Link>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div className={`${styles.links} ${isOpen ? styles.show : ''}`}>
        <Link to="/" className={styles.link} onClick={toggleMenu}>Home</Link>
        <Link to="/about" className={styles.link} onClick={toggleMenu}>About</Link>
        <Link to="/contact" className={styles.link} onClick={toggleMenu}>Contact</Link>
        <div className={styles.dropdown}>
          <span>Recipe</span>
          <div className={styles.dropdownContent}>
            <Link to="/recipe/656329" onClick={toggleMenu}>Pizza</Link>
            <Link to="/recipe/511728" onClick={toggleMenu}>Pasta</Link>
            <Link to="/recipe/643492" onClick={toggleMenu}>Soup</Link>
            <Link to="/recipe/657095" onClick={toggleMenu}>Curry</Link>
            <Link to="/recipe/639387" onClick={toggleMenu}>Cuteny</Link>
            <Link to="/recipe/648798" onClick={toggleMenu}>Cake</Link>
            <Link to="/" onClick={toggleMenu}>All Recipe</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
