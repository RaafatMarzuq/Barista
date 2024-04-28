import {  
          SafeAreaView,
          ScrollView,
          FlatList,
          Text, 
          StyleSheet,
          StatusBar,
          View} from "react-native";
import { useState ,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeCard from "../components/CoffeeCard";





export default function CartScreen(){
  const [ordersList,setOrdersList] = useState([]);
  const[isLoading,setIsLoading] = useState(true)
 
  const getFromLocalStorage = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null) {
        const value = JSON.parse(jsonValue);
        setOrdersList((prevOrders) => [...prevOrders, value]);
        setIsLoading(false);
        console.log('Object retrieved successfully:', value);
      } else {
        console.log('No data found in AsyncStorage for key:', key);
      }
    } catch (error) {
      console.error('Error retrieving object from AsyncStorage:', error);
    }
  };
 
  useEffect(() => {
    // fetchData();
  }, []); 
  
  return (
    <SafeAreaView style={styles.container}>
        {/* <ScrollView style={styles.scrollView} alignItems="center"  justifyContent="center"> */}
             <FlatList
                  data={ordersList}
                  renderItem={({item})=>{
                    return(<CoffeeCard coffeeData={item} onSave={()=>{}}/>)}
                     }
                  keyExtractor={(item)=>item.id.toString()}
                  ItemSeparatorComponent={<View style={{height:16}} />}
                  ListEmptyComponent={<Text style={styles.text}>אין הזמנות</Text>}
             />
          
        {/* </ScrollView> */}
        </SafeAreaView>
    )
}
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  text:{
    color:"white",
    fontWeight:"bold",
    fontSize: 20,
    alignSelf:"center"
  },
  });