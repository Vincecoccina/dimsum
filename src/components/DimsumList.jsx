import React from 'react';
import DimsumCard from './DimsumCard';
import styles from "../styles/DimsumList.module.css";

const DimsumList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choisissez, commandez et dégustez</h1>
      <div className={styles.wrapper}>
        <DimsumCard/>
        <DimsumCard/>
        <DimsumCard/>
        <DimsumCard/>
        <DimsumCard/>
      </div>
    </div>
  )
}

export default DimsumList
