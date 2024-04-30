import { SafeAreaView,
         View,
         Text, 
         StyleSheet,
         StatusBar,
         FlatList } from "react-native";
import {  useState ,useEffect} from "react";
import CoffeeCard from "../components/CoffeeCard";
import coffeeImage from '../assets/headerIcon.png'
import {API_URL_MENU} from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

export default function SubCategoryScreen({navigation,  route }) {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems,setSelectedItems] =useState([])
  const { name } = route.params ? route.params : { name: "משקה חם" };
 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL_MENU);
        const data = response.data;
        // Filter menu items based on category
        const filteredMenuItems = data.filter(item => item.category === name);
        setMenuItems(filteredMenuItems);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchData();
  }, [name]);

  
 
    const coffee = { id:0 ,category: "משקה קר", name :"latte", price: "10", image :coffeeImage }
    
  
    async function handleSave(coffeeData) {
      try {
        setSelectedItems((prevSelected) => {
          let found = false;
          const updatedItems = prevSelected.map((item) => {
            if (item.name === coffeeData.name) {
              found = true;
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          if (!found) {
            // If no matching item was found, add the new item
            return [...updatedItems, { ...coffeeData, quantity: 1 }];
          }
          return updatedItems;
        });
    
        // Save the updated orders array back to local storage
        await AsyncStorage.setItem('orders', JSON.stringify(selectedItems));
    
        console.log('Order saved to local storage');
        return true;
      } catch (error) {
        console.error('Error saving order to local storage:', error);
        return false;
      }
    }
    

 
    return ( 
     
        <SafeAreaView style={styles.container}>
           

             <FlatList
                  data={menuItems}
                  renderItem={({item})=>{
                    return(<CoffeeCard coffeeData={item} onClick={handleSave} routeName={name}/>)}
                     }
                  keyExtractor={(item)=>`${item.id}`}
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