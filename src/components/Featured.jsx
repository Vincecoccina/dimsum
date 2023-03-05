import React from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h3>dimsum le spécialiste des  <span>dim sum</span></h3>
          <p>
            dimsun propose des dim sum à déguster chez vous grâce à notre
            service de livraison.
          </p>
        </div>
        <Image alt="Dimsum cartoon" src="/img/hero_2.png" width="705" height="605" className={styles.img}/>
      </div>
    </div>
  );
};

export default Featured;