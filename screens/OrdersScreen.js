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





export default function OrdersScreen({route}){
  const [ordersList,setOrdersList] = useState([]);
  const[isLoading,setIsLoading] = useState(true)
 
  const {name} =route.params;
  const handleRemove = (itemId) => {

    const updatedOrdersList = ordersList.filter(item => item.id !== itemId);

    setOrdersList(updatedOrdersList);
  }
  useEffect(() => {

  }, []); 
  
  return (
        <SafeAreaView style={styles.container}>
                <FlatList
                      data={ordersList}
                      renderItem={({item})=>{
                        return(<CoffeeCard coffeeData={item} onClick={handleRemove} routeName={name}/>) }
                        }
                      keyExtractor={(item)=>item.id.toString()}
                      ItemSeparatorComponent={<View style={{height:16}} />}
                      ListEmptyComponent={<Text style={styles.text}>{name}</Text>}
                />

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