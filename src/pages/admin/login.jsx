import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Login.module.css";
import axios from "axios";

const login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {username, password});
      router.push("/admin");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passord"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.adminBtn}>
          je me connect
        </button>
        {error && <span className={styles.error}>Identifiant ou mot de passe invalide</span>}
      </div>
    </div>
  );
};

export default login;
