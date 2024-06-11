import { SafeAreaView,
         View,
         Text, 
         StyleSheet,
         StatusBar,
         FlatList } from "react-native";
import {  useState ,useEffect} from "react";
import CoffeeCard from "../components/CoffeeCard";
import { useOrders } from "../OrdersContext";

export default function SubCategoryScreen({navigation,  route }) {
  const [categoryItems, setCategoryItems] = useState([]);
  const { name } = route.params ? route.params : { name: "משקאות חמים" };
  const { ordersList, setOrdersList ,menuList } = useOrders();

  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
       
       if (menuList) {
         const data = menuList;
        const filteredMenuItems = data.filter(item => item.category === name);
        setCategoryItems(filteredMenuItems);
       } 
       
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchData();
    
  }, [name]);

  
 
    
  
  async function handleSave(coffeeData) {
    try {
      const { image, ...dataWithoutImage } = coffeeData;
  
      setOrdersList((prevSelected) => {
        let found = false;
        const updatedItems = prevSelected.map((item) => {
          if (item.name === dataWithoutImage.name) {
            found = true;
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        if (!found) {
          return [...updatedItems, { ...dataWithoutImage, quantity: 1 }];
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
                  data={categoryItems}
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