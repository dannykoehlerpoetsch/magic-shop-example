// CartContext.js
import React, { createContext, useReducer } from "react";

// Initial state for the cart
const initialState = {
  cartItems: [],
};

// Reducer function for managing cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      // If item exists, increment its quantity
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // Add new item to cart with quantity of 1
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }

    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREMENT_QUANTITY": {
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // Remove item if quantity drops to 0
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    case "CLEAN_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

// Create the CartContext
export const CartContext = createContext();

// CartProvider component that provides the cart state to the app
export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
