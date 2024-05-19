import {  
          SafeAreaView,
          Button,
          FlatList,
          Text, 
          StyleSheet,
          StatusBar,
          View} from "react-native";
import { useState ,useEffect} from "react";
import CoffeeCard from "../components/CoffeeCard";
import { useOrders } from "../OrdersContext";





export default function OrdersScreen({navigation ,route}){
 
  const { ordersList, setOrdersList ,setIsPaymentReady } = useOrders();
  const [badgeCount, setBadgeCount] = useState(0);


 
 
  const [totalAmount,setTotalAmount]=useState(0)
  const {name} =route.params;


 
 const handleRemove = (itemId) => {
  try {
    const updatedOrders = ordersList.map(item => {

      if (item._id === itemId && item.quantity >= 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter((item)=> item.quantity !==0) ;  
  
    setOrdersList(updatedOrders);
  } catch (error) {
    console.error('Error removing order from local storage:', error);
  }
};
  
 
  useEffect(() => {
    
    let total = 0,totalBagCount=0;

    ordersList.forEach(item => { 
      total += (parseFloat(item.price)*item.quantity);
      totalBagCount += item.quantity;
    });
    setTotalAmount(total);
    setBadgeCount(totalBagCount)
    navigation.setOptions({
      tabBarBadge: badgeCount > 0 ? badgeCount.toString() : null,
    });
    totalAmount > 0 ? setIsPaymentReady(true) : setIsPaymentReady(false);
  }, [navigation,badgeCount,ordersList]); 
  

  return (
        <SafeAreaView style={styles.container}>
                <FlatList
                      data={ordersList}
                      renderItem={({item})=>{
                        return(<CoffeeCard coffeeData={item} onClick={handleRemove} routeName={name}/>) }
                        }
                      keyExtractor={(item)=> item._id }
                      ItemSeparatorComponent={<View style={{height:5}} />}
                      ListEmptyComponent={<Text style={styles.text}>אין הזמנות</Text>}
                />
        
        <View style={styles.paymentContainer} >
          <Text style={[styles.text,{color: "black"}]}>סה"כ לתשלום</Text>
          <Text style={styles.paymentText}>  ₪ {totalAmount}  </Text>
        </View>
        { totalAmount > 0  &&  
            <Button
              title="לתשלום"
              buttonStyle={{
                backgroundColor: 'gray',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={()=>{navigation.navigate("Payment")}}
            />}
          
        </SafeAreaView>
    )
};

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