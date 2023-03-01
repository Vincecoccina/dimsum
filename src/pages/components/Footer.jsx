import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoSocialContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/img/logo.png"
            width="25"
            height="25"
            className={styles.img}
          />
          <h3>dimsum</h3>
        </div>
        <div className={styles.socialContainer}>
          <a href="https://www.instagram.com/" target="_blank">
            <Image
              src="/img/insta.png"
              width="25"
              height="25"
              className={styles.imgLogo}
            />
          </a>
          <a href="https://fr-fr.facebook.com/" target="_blank">
            <Image
              src="/img/face.png"
              width="25"
              height="25"
              className={styles.imgLogo}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
