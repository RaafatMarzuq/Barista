import {  
          SafeAreaView,
          ScrollView,
          FlatList,
          Text, 
          StyleSheet,
          StatusBar,
          View} from "react-native";
import { useState ,useEffect,useCallback} from "react";
import CoffeeCard from "../components/CoffeeCard";
import coffeeImage from '../assets/coffee.jpg'
import { useOrders } from "../OrdersContext";




export default function OrdersScreen({route}){
  // const coffee1 = { id:0 ,category: "משקה קר", name :"latte", price: "10", image :coffeeImage }
  // const coffee2 = { id:1 ,category: "משקה קר", name :"milkshake", price: "5", image :coffeeImage }
  // const coffee3 = { id:2 ,category: "משקה קר", name :"moka", price: "8", image :coffeeImage }
  // const coffee4 = { id:3 ,category: "משקה קר", name :"elan", price: "9.5", image :coffeeImage }
  // const coffee5 = { id:4 ,category: "משקה קר", name :"elan", price: "100", image :coffeeImage }

  // const [ordersList,setOrdersList] = useState([coffee1,coffee2,coffee3,coffee4,coffee5]);
  const { ordersList, setOrdersList } = useOrders();

 
 
  const [totalPayment,setTotalPayment]=useState(0)
  const {name} =route.params;

 // Function to retrieve orders from local storage

 
 const handleRemove = (itemId) => {
  try {
    const updatedOrders = ordersList.map(item => {

      if (item._id === itemId && item.quantity >= 1) {
        // If item matches the itemId and quantity is greater than 1, decrement quantity
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter((item)=> item.quantity !==0) ;  
  
    setOrdersList(updatedOrders);
  } catch (error) {
    console.error('Error removing order from local storage:', error);
  }
};
  
 
  // the seconed one is to update the total amount to pay
  useEffect(() => {
    
    let total = 0;
    ordersList.forEach(item => { total += (parseFloat(item.price)*item.quantity); });
    setTotalPayment(total);
    
  }, [ordersList]); 

  return (
        <SafeAreaView style={styles.container}>
                <FlatList
                      data={ordersList}
                      renderItem={({item})=>{
                        return(<CoffeeCard coffeeData={item} onClick={handleRemove} routeName={name}/>) }
                        }
                      keyExtractor={(item)=> item._id }
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