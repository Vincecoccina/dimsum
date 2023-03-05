import React from "react";
import Image from "next/image";
import styles from "../styles/DimsumCard.module.css";
import Link from "next/link";

const DimsumCard = ({ dimsum }) => {
  return (
    <Link href={`/product/${dimsum._id}`}>
      <div className={styles.container}>
        <Image alt={dimsum.title} src={dimsum.image} width="200" height="200" />
        <h3 className={styles.productName}>{dimsum.title}</h3>
        <span className={styles.productPrice}>{dimsum.price[0]}€</span>
      </div>
    </Link>
  );
};

export default DimsumCard;
