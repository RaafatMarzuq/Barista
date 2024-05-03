import { SafeAreaView,
         View,
         Text, 
         StyleSheet,
         StatusBar,
         FlatList } from "react-native";
import {  useState ,useEffect} from "react";
import CoffeeCard from "../components/CoffeeCard";
import {API_URL_MENU} from '@env'
import axios from 'axios';
import { useOrders } from "../OrdersContext";

export default function SubCategoryScreen({navigation,  route }) {
  const [menuItems, setMenuItems] = useState([]);
  const { name } = route.params ? route.params : { name: "משקה חם" };
  const { ordersList, setOrdersList } = useOrders();

  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL_MENU);
        const data = response.data;

        const filteredMenuItems = data.filter(item => item.category === name);
        setMenuItems(filteredMenuItems);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchData();
    
  }, [name]);

  
 
    
  
    async function handleSave(coffeeData) {
      try {
        setOrdersList((prevSelected) => {
          let found = false;
          const updatedItems = prevSelected.map((item) => {
            if (item.name === coffeeData.name) {
              found = true;
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          if (!found) {
            return [...updatedItems, { ...coffeeData, quantity: 1 }];
          }
          return updatedItems;
        });
    
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
                  keyExtractor={(item)=>item._id}
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