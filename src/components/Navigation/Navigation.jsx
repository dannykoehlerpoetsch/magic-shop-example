import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { CartContext } from "../../context/CartContext";

export default function Navigation() {
  const { cartItems } = useContext(CartContext);
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
          <NavLink to="/cart">
            Cart {cartItems.length > 0 ? `(${cartItems.length})` : ""}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
