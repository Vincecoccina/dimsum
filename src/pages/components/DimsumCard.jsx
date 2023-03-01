import React from 'react';
import Image from 'next/image';
import styles from "../../styles/DimsumCard.module.css";

const DimsumCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/01.png" width="200" height="200"/>
      <h3 className={styles.productName}>Ravioli Porc, Oeuf, Ciboulette</h3>
      <span className={styles.productPrice}>8.50€</span>
    </div>
  )
}

export default DimsumCard
