import React from "react";
import Image from "next/image";
import styles from "../../styles/Order.module.css";
import axios from "axios";


const Order = ({order}) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.unDone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <div>
                    <span className={styles.id}>{order._id}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span className={styles.name}>{order.customer}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span className={styles.adress}>{order.address}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span className={styles.total}>{order.total.toFixed(2)}€</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} />
            <span className={styles.textRow}>Paiement</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkIcon}
                src="/img/checked.png"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} />
            <span className={styles.textRow}>En préparation</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkIcon}
                src="/img/checked.png"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} />
            <span className={styles.textRow}>En cour de livraison</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkIcon}
                src="/img/checked.png"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} />
            <span className={styles.textRow}>Livré</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkIcon}
                src="/img/checked.png"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Mon panier</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Sous-total:</b>{order.total.toFixed(2)}€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Remise:</b>0.00€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>{order.total.toFixed(2)}€
          </div>
          <button disabled className={styles.btn}>
            Payé
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/order/${params.id}`);
  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
