import React from "react";
import Image from "next/image";
import styles from "../../styles/Featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h1>dimsum le <br /> spécialiste des <br /> <span>dim sum</span></h1>
          <p>
            dimsun propose des dim sum à déguster chez vous grâce à notre
            service de livraison.
          </p>
        </div>
        <Image src="/img/hero_2.png" width="700" height="600" className={styles.img}/>
      </div>
    </div>
  );
};

export default Featured;
