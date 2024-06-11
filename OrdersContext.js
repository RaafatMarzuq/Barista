import { createContext, useState, useContext ,useEffect} from 'react';
import axios from 'axios';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {

  const [ordersList, setOrdersList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://my-coffee-shop-d611583f7573.herokuapp.com/menu");
        const data = response.data;

        setMenuList(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchData();
    
  }, []);
  return (
    <OrdersContext.Provider value={{ ordersList, setOrdersList,menuList}}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrdersContext);
};
