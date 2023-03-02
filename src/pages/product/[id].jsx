import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/ProductDetails.module.css";

const Product = () => {
  const [size, setSize] = useState(0);
  const dimSum = {
    id: 1,
    img: "/img/01.png",
    name: "Ravioli porc, oeuf, ciboulette",
    price: [5.5, 8.5, 11.5],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={dimSum.img} width="500" height="500" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.name}>{dimSum.name}</h1>
        <span className={styles.price}>{dimSum.price[size]} €</span>
        <p className={styles.desc}>{dimSum.desc}</p>
        <h3 className={styles.size}>Choisissez le nombre de pieces :</h3>
        <div className={styles.choose}>
          <div className={styles.chooseSize} onClick={() => setSize(0)}>
            <Image
              src="/img/size.png"
              width="50"
              height="40"
              className={styles.img}
            />
            <span>7 pcs</span>
          </div>
          <div className={styles.chooseSize} onClick={() => setSize(1)}>
            <Image
              src="/img/size.png"
              width="60"
              height="50"
              className={styles.img}
            />
            <span>10 pcs</span>
          </div>
          <div className={styles.chooseSize} onClick={() => setSize(2)}>
            <Image
              src="/img/size.png"
              width="70"
              height="60"
              className={styles.img}
            />
            <span>15 pcs</span>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.btn}>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
