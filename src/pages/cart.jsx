import React from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>Produit</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image src="/img/01.png" width={100} height={100} />
                </div>
              </td>
              <td>
                <div>
                  <span className={styles.name}>Raviolis porc, oeufs, ciboulette</span>
                </div>
              </td>
              <td>
                <div>
                  <span className={styles.price}>5.50€</span>
                </div>
              </td>
              <td>
                <div>
                  <span className={styles.quantity}>1</span>
                </div>
              </td>
              <td>
                <div>
                  <span className={styles.total}>5.50€</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Mon panier</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Sous-total:</b>5.50€
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Remise:</b>0.00€
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>5.50€
            </div>
            <button className={styles.btn}>Valider mon panier</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
