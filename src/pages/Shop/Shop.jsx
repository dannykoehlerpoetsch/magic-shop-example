import React, { useContext } from "react";
import styles from "./Shop.module.css";
import { magicShopItems } from "../../products";
import { CartContext } from "../../context/CartContext";

export default function Shop() {
  const { dispatch, cartItems } = useContext(CartContext);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  return (
    <section className={styles.shop}>
      <h2 className={styles.shopHeader}>Shop</h2>
      <section className={styles.cardWrapper}>
        {magicShopItems.map((item) => (
          <div key={item.id} className={styles.shopCard}>
            <h3 className={styles.productTitle}>{item.name}</h3>
            <p className={styles.productInfo}>{item.description}</p>
            <div className={styles.productImage}>
              <img src={item.src} alt="product-image" />
            </div>
            <div className={styles.productPrice}>
              <span>{item.price}€</span>
              <button onClick={() => addItem(item)}>add to cart</button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
