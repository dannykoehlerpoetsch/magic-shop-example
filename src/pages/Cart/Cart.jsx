import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";
export default function Cart() {
  const { cartItems, dispatch } = useContext(CartContext);

  // Funktion zum Erhöhen der Artikelmenge
  const incrementQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  // Funktion zum Verringern der Artikelmenge
  const decrementQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  // Funktion zum Entfernen eines Artikels aus dem Warenkorb
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Funktion zum Leeren des gesamten Warenkorbs
  const cleanCart = () => {
    dispatch({ type: "CLEAN_CART" });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <section className={styles.cartSection}>
      <h2 className={styles.cartHeading}>Your Cart</h2>
      <ul className={styles.cartList}>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <h4>{item.name}</h4>
              <span>
                <div>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                  <span>{item.quantity} </span>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <button onClick={() => removeItem(item.id)}>remove</button>
                </div>
                <div>
                  <h4>
                    single price: <span>{item.price.toFixed(2)}</span>
                  </h4>
                  <h4>
                    total price Item:{" "}
                    <span>{(item.price * item.quantity).toFixed(2)}</span>
                  </h4>
                </div>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <h4 className={styles.cartTotal}>
        cart total: <span>{calculateTotalPrice().toFixed(2)}€</span>
      </h4>
    </section>
  );
}
