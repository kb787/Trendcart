import React, { createContext, useContext, useReducer } from 'react';

const CartCreation = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <CartCreation.Provider value={{ cart, addToCart }}>
      {children}
    </CartCreation.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartCreation);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
