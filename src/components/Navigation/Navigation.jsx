import React from 'react';
import {NavLink} from "react-router-dom"
import styles from "./Navigation.module.css"

export default function Navigation() {
  return (
    <nav className={styles.nav}>
        <ul className={styles.navList}>
            <li className={styles.listItem}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.listItem}>
                <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className={styles.listItem}>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li className={styles.listItem}>
                <NavLink to="/cart">Cart</NavLink>
            </li>
        </ul>
    </nav>
  )
}
