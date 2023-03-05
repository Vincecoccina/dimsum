import React from "react";
import DimsumCard from "./DimsumCard";
import styles from "../styles/DimsumList.module.css";

const DimsumList = ({ dimsumList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choisissez, commandez et dégustez</h1>
      <div className={styles.wrapper}>
        {dimsumList.map((item) => (
          <DimsumCard key={item._id} dimsum={item} />
        ))}
      </div>
    </div>
  );
};

export default DimsumList;
