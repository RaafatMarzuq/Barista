import { createContext, useState, useContext } from 'react';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {

  const [ordersList, setOrdersList] = useState([]);
  const [isPaymentReady, setIsPaymentReady] = useState(false);

  return (
    <OrdersContext.Provider value={{ ordersList, setOrdersList,  isPaymentReady, setIsPaymentReady }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrdersContext);
};
