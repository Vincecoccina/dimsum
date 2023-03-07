import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
          <Image alt="logo dimsum" src="/img/logo.png" width="25" height="25" />
          <h3>dimsum</h3>
      </Link>
      
      <Link href="/cart">
        <div className={styles.cartContainer}>
          <div className={styles.cart}>
            <Image
              alt="mon panier"
              src="/img/cart.png"
              width="25"
              height="25"
            />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
