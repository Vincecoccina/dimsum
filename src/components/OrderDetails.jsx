import React, { useState } from "react";
import styles from "../styles/OrderDetails.module.css";

const OrderDetails = ({total, createOrder, closeModal}) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({customer, address, total, method: 0})
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Vous devez 7.00€ à la livraison</h1>
        <div className={styles.item}>
          <label className={styles.label}>Nom</label>
          <input
            type="text"
            placeholder="Votre nom"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Téléphone</label>
          <input
            type="text"
            placeholder="06XXXXXXXX"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Adresse</label>
          <textarea
          rows={5}
            type="text"
            placeholder="Votre Adresse"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.orderBtn} onClick={handleClick}>
            Je Passe ma commande
        </button>
        <button className={styles.orderBtn} onClick={closeModal}>
            Annuler
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
