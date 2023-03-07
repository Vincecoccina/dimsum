import React from "react";
import styles from "../styles/OurMission.module.css";

const OurMission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Our Mission</h1>
        <p className={styles.subTitle}>
          "Bringing good food into your everyday. That's our mission. That means
          we don't just deliver--we bring it, always going the extra mile to
          make your experience memorable. And it means this is delicious food
          you can enjoy everyday: from vibrant salads for healthy office
          lunches, to indulgent family-sized pizzas, to fresh sushi for a
          romantic night in. Whatever you crave, we can help."
        </p>
      </div>
    </div>
  );
};

export default OurMission;
