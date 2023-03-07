import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/ProductDetails.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

const Product = ({ dimsum }) => {
  const [price, setPrice] = useState(dimsum.price[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = dimsum.price[sizeIndex] - dimsum.price[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...dimsum, size, price, quantity }));
  };

  console.log(price);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={dimsum.image}
            width="500"
            height="500"
            className={styles.imgProduct}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.name}>{dimsum.title}</h1>
        <span className={styles.price}>{dimsum.price[size]} €</span>
        <p className={styles.desc}>{dimsum.desc}</p>
        <h3 className={styles.size}>Choisissez le nombre de pieces :</h3>
        <div className={styles.choose}>
          <div className={styles.chooseSize} onClick={() => handleSize(0)}>
            <Image
              alt="dimsum petit"
              src="/img/size.png"
              width="50"
              height="40"
              className={styles.img}
            />
            <span>7 pcs</span>
          </div>
          <div className={styles.chooseSize} onClick={() => handleSize(1)}>
            <Image
              alt="dimsum moyen"
              src="/img/size.png"
              width="60"
              height="50"
              className={styles.img}
            />
            <span>10 pcs</span>
          </div>
          <div className={styles.chooseSize} onClick={() => handleSize(2)}>
            <Image
              alt="dimsum grand"
              src="/img/size.png"
              width="70"
              height="60"
              className={styles.img}
            />
            <span>15 pcs</span>
          </div>
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.btn} onClick={handleClick}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://api/products/${params.id}`
  );
  return {
    props: {
      dimsum: res.data,
    },
  };
};

export default Product;
