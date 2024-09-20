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
    <section>
      <h2>Your Cart</h2>
      <ul className={styles.cartList}>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <h4>{item.name}</h4>
              <span>
                Quantity: {item.quantity}{" "}
                <button onClick={() => incrementQuantity(item.id)}>+</button>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <button onClick={() => removeItem(item.id)}>X</button>
                <h4>single Price: {item.price}</h4>
                <h4>total Price Item: {item.price * item.quantity}</h4>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <h4>Total: {calculateTotalPrice()}</h4>
    </section>
  );
}
