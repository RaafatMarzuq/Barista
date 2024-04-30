import {  
          SafeAreaView,
          ScrollView,
          FlatList,
          Text, 
          StyleSheet,
          StatusBar,
          View} from "react-native";
import { useState ,useEffect,useCallback} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeCard from "../components/CoffeeCard";
import { useFocusEffect } from '@react-navigation/native';





export default function OrdersScreen({route}){
  // const coffee1 = { id:0 ,category: "משקה קר", name :"latte", price: "10", image :coffeeImage }
  // const coffee2 = { id:1 ,category: "משקה קר", name :"milkshake", price: "5", image :coffeeImage }
  // const coffee3 = { id:2 ,category: "משקה קר", name :"moka", price: "8", image :coffeeImage }
  // const coffee4 = { id:3 ,category: "משקה קר", name :"elan", price: "9.5", image :coffeeImage }
  // const coffee5 = { id:4 ,category: "משקה קר", name :"elan", price: "100", image :coffeeImage }

  const [ordersList,setOrdersList] = useState([]);
  const [totalPayment,setTotalPayment]=useState(0)
  const {name} =route.params;

 // Function to retrieve orders from local storage
const getOrdersFromLocal = async () => {
  try {
    // Retrieve orders from local storage
    const orders = await AsyncStorage.getItem('orders');

    if (orders) {
      return JSON.parse(orders);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error getting orders from local storage:', error);
    return [];
  }
};

 
  // const handleRemove = async (itemId) => {

  //   try {
  //     // Remove the item from local storage
  //     const updatedOrders = ordersList.filter(item => item.id !== itemId);
  //     await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));

  //     // Update the ordersList state
  //     setOrdersList(updatedOrders);
  //   } catch (error) {
  //     console.error('Error removing order from local storage:', error);
  //   }
  // };

  //the first useEffect is to handle getting the data from local storage
  // useEffect(() => {
  //   // Fetch orders from local storage when the screen loads
  //   const fetchOrders = async () => {
  //     console.log("Fetching orders from local storage...");
  //     const orders = await getOrdersFromLocal();
  //     console.log("Retrieved orders:");
  //     setOrdersList(orders);
  //   };
  //   fetchOrders();
  // }, []);
  const handleRemove = async (itemId) => {
    try {
      // Fetch existing orders from local storage
      const existingOrders = await AsyncStorage.getItem('orders');
      const orders = existingOrders ? JSON.parse(existingOrders) : [];
  
      // Remove the order with the specified ID
      const updatedOrders = orders.filter(item => item.id !== itemId);
  
      // Save the updated orders list to local storage
      await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
      setOrdersList(updatedOrders)
    } catch (error) {
      console.error('Error removing order from local storage:', error);
    }
  };
  
  // Inside the OrdersScreen component
  useFocusEffect(
    useCallback(() => {
      // Fetch orders from local storage when the screen comes into focus
      const fetchOrders = async () => {
        console.log("Fetching orders from local storage...");
        const orders = await getOrdersFromLocal();
        console.log("Retrieved orders: " ,orders);
        setOrdersList(orders);
      };
      fetchOrders();
    }, [])
  );
 
  // the seconed one is to update the total amount to pay
  useEffect(() => {
    
    let total = 0;
    ordersList.forEach(item => { total += parseFloat(item.price); });
    setTotalPayment(total);
    
  }, [ordersList]); 

  return (
        <SafeAreaView style={styles.container}>
                <FlatList
                      data={ordersList}
                      renderItem={({item})=>{
                        return(<CoffeeCard coffeeData={item} onClick={handleRemove} routeName={name}/>) }
                        }
                      keyExtractor={(item)=>`${item.id}` }
                      ItemSeparatorComponent={<View style={{height:5}} />}
                      ListEmptyComponent={<Text style={styles.text}>{name}</Text>}
                />
        
        <View style={styles.paymentContainer} >
          <Text style={[styles.text,{color: "black"}]}>סה"כ לתשלום</Text>
          <Text style={styles.paymentText}>  ₪ {totalPayment}  </Text>
        </View>
        </SafeAreaView>
    )
}
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text:{
    color:"white",
    fontWeight:"bold",
    fontSize: 20,
    alignSelf:"center"
  },
  paymentContainer:{
    width: "100%",
    flexDirection: 'row-reverse',
    justifyContent:"space-between",
    backgroundColor: 'gray', 
    padding: 10,
  //   marginBottom: 10,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paymentText:{
    borderWidth:1,
    borderRadius:5,
    textAlign:"center",
    textAlignVertical: "center",
    width:60,
    color:"black"
  }
  });