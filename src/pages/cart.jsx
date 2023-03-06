import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { reset } from "@/redux/cartSlice";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import OrderDetails from "@/components/OrderDetails";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "EUR";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/order", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Produit</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image src={product.image} width={100} height={100} />
                  </div>
                </td>
                <td>
                  <div>
                    <span className={styles.name}>{product.title}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span className={styles.price}>{product.price}€</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span className={styles.quantity}>{product.quantity}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span className={styles.total}>
                      {(product.quantity * product.price).toFixed(2)}€
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Mon panier</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Sous-total:</b>
            {cart.total.toFixed(2)}€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Remise:</b>0.00€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>
            {cart.total.toFixed(2)}€
          </div>
          <div style={{ maxWidth: "750px" }}>
            <button className={styles.cashBtn} onClick={() => setCash(true)}>
              Payer à la livraison
            </button>
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AdspCSJAxEus387evkn4oBHcutC6WuhvEtfJdRWdQk5f_GZOzxMkXza4dRSE1M2rpo383xlpkpm2tuP6",
                components: "buttons",
                currency: "USD",
                "disable-funding": "credit,card,p24",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
      {cash && (
        <OrderDetails
          total={cart.total}
          createOrder={createOrder}
          closeModal={() => setCash(false)}
        />
      )}
    </div>
  );
};

export default Cart;
