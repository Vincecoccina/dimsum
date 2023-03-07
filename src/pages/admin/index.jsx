import React, { useState } from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

const index = ({ products, orders }) => {
  const [dimsumList, setDimsumList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["En cuisine", "Le Livreur est en route", "Livré"];


  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `/api/products/${id}`
      );
      setDimsumList(dimsumList.filter((item) => item._id !== id));
    } catch (error) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
    try {
      const res = await axios.put(`https://api/order/${id}`, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Produits</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trHead}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {dimsumList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trBody}>
                <td>
                  <Image src={product.image} width={50} height={50} />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>{product.price[0].toFixed(2)}€</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Commandes</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trHead}>
              <th>Id</th>
              <th>Client</th>
              <th>Total</th>
              <th>Paiement</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orderList.map((item) => (
            <tbody key={item._id}>
              <tr className={styles.trBody}>
                <td>{item._id.slice(0, 5)}...</td>
                <td>{item.customer}</td>
                <td>{item.total.toFixed(2)}€</td>
                <td>
                  {item.method === 0 ? <span>Cash</span> : <span>Paypal</span>}
                </td>
                <td>{status[item.status]}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleStatus(item._id)}
                  >
                    Etape suivante
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if(myCookie.token !== process.env.TOKEN){
    return {
        redirect:{
            destination: "/admin/login",
            permanent: false,
        }
    }
  }
  const productRes = await axios.get("https://api/products");
  const ordersRes = await axios.get("https://api/order");

  return {
    props: {
      products: productRes.data,
      orders: ordersRes.data,
    },
  };
};

export default index;
