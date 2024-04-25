import {  
          SafeAreaView,
          ScrollView,
          SectionList,
          Text, 
          StyleSheet,
          StatusBar} from "react-native";
import { useState ,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeCard from "../components/CoffeeCard";





export default function CartScreen(){
  const [orders,setOrders] = useState([]);
  const[isLoading,setIsLoading] = useState(true)
 
  
  useEffect(() => {
    const getFromLocalStorage = async (key) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue !== null) {
          const value = JSON.parse(jsonValue);
          setOrders((prevOrders) => [...prevOrders, value]);
          setIsLoading(false);
          console.log('Object retrieved successfully:', value);
        } else {
          console.log('No data found in AsyncStorage for key:', key);
        }
      } catch (error) {
        console.error('Error retrieving object from AsyncStorage:', error);
      }
    };

    const fetchData = async () => {
      await getFromLocalStorage('order');
    };

   
    // fetchData();
  }, [isLoading]); 
  
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} alignItems="center"  justifyContent="center">
           
            {
              isLoading ? 
              <Text style={styles.text}>Screen isLoading... </Text>
              : <Text style={styles.text}>Screen loaded </Text>
            }
             <CoffeeCard coffeeData={orders} onSave={()=>{}}/>
           {/* <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/> */}
            
            {/* <Text style={styles.text}>Screen {name} </Text> */}
            
        </ScrollView>
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
  },
  });