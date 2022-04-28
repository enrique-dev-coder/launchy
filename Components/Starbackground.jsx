import React from "react";
import styles from "../styles/background.module.scss";
export default function Starbackground({ children }) {
  return (
    <div>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      {children}
    </div>
  );
}
