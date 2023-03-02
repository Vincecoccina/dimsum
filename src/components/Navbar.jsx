import React from 'react';
import Image from 'next/image';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Image src="/img/logo.png" width="25" height="25"/>
            <h3>dimsum</h3>
        </div>
        <div className={styles.linksContainer}>
            <ul className={styles.linkList}>
                <li className={styles.link}>Nos Produits</li>
                <li className={styles.link}>Menu</li>
                <li className={styles.link}>Events</li>
                <li className={styles.link}>Blog</li>
            </ul>
        </div>
        <div className={styles.cartContainer}>
            <div className={styles.cart}>
                <Image src="/img/cart.png" width="25" height="25"/>
                <div className={styles.counter}>2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
