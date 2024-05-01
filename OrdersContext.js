import React, { createContext, useState, useContext } from 'react';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [ordersList, setOrdersList] = useState([]);
  
  return (
    <OrdersContext.Provider value={{ ordersList, setOrdersList }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrdersContext);
};
