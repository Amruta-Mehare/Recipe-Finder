import React from 'react';
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer>
            <p className={styles.copyright}>© 2024 Recipe Finder. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
