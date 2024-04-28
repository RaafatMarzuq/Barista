import { SafeAreaView,
         View,
         Text, 
         StyleSheet,
         StatusBar,
         FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLayoutEffect, useState ,useEffect} from "react";
import CoffeeCard from "../components/CoffeeCard";
import coffeeImage from '../assets/headerIcon.png'
import {API_URL_MENU} from '@env'
import axios from 'axios';

export default function SubCategoryScreen({ navigation, route }) {
  const [menuItems, setMenuItems] = useState([]);
  
  const { name } = route.params ? route.params : { name: "משקה חם" };
 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL_MENU}`);
        const data = response.data;
        // Filter menu items based on category
        const filteredMenuItems = data.filter(item => item.category === name);
        setMenuItems(filteredMenuItems);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    // fetchData();
  }, [name]);

  
 
    const coffee = { name :"latte", price: "10", image :coffeeImage }
  
  
    function handleSave(coffeeData){
      const { name, price,size} = coffeeData;
      // saveToLocalStorage('order', coffeeData);
      alert( `${name} , ${price} , ${size}`)
    }

 
    return ( 
     
        <SafeAreaView style={styles.container}>
           

             <FlatList
                  data={menuItems}
                  renderItem={({item})=>{
                    return(<CoffeeCard coffeeData={item} onSave={()=>{}}/>)}
                     }
                  keyExtractor={(item)=>item.id.toString()}
                  ItemSeparatorComponent={<View style={{height:16}} />}
                  ListEmptyComponent={<Text style={styles.text}>{name}</Text>}
             />
            
       
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
  }
  });