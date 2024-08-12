import React from 'react';
import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <h1>About Recipe Finder</h1>
            <p>Welcome to Recipe Finder! Our app is designed to help you discover delicious recipes effortlessly. Whether you're looking for a quick meal or planning a gourmet dinner, we've got you covered.</p>

            <h2>Features</h2>
            <ul>
                <li><strong className={styles.recipeSearch}>Recipe Search:</strong>Quickly find recipes by searching for ingredients, meal types, or specific dishes.</li>
                <li><strong>Detailed Recipe Information:</strong> View detailed information for each recipe, including ingredients, preparation steps, and nutritional facts.</li>
                <li><strong>User-Friendly Interface:</strong> Enjoy a clean and intuitive interface that makes finding and saving recipes a breeze.</li>
            </ul>

            <h2>Technologies Used</h2>
            <ul>
                <li><strong>React:</strong> For building the user interface.</li>
                <li><strong>CSS Modules:</strong> For styling components.</li>
                <li><strong>React Router:</strong> For handling navigation.</li>
                <li><strong>Spoonacular API:</strong> For fetching recipe data.</li>
            </ul>

            <h2>Development Process</h2>
            <p>Building Recipe Finder was a rewarding experience. I focused on creating a responsive and user-friendly design. Integrating the Spoonacular API posed some challenges, but it also provided a great opportunity to improve my API handling skills.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions or feedback, feel free to reach out. You can contact me at <a href="#" 
            onclick="location.href='mailto:amrutamehare53@gmail.com?subject=Hiring Inquiry'">amrutamehare53@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/amrutamehare/">LinkedIn</a>.</p>
                {/* <div className={styles.copyright}>© RecipeFinder 2024 All Rights Reserved.</div> */}
        </div>
    );
}