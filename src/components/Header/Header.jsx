import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

export default function () {
  return (
    <header className={styles.header}>
      <Navigation />
      <div className={styles.constructionSpan}>
        <span>This project is under construction and not ready yet</span>
      </div>
    </header>
  );
}
