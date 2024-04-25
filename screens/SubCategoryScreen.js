import { SafeAreaView,ScrollView, StyleSheet,StatusBar} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLayoutEffect } from "react";
import CoffeeCard from "../components/CoffeeCard";
import coffeeImage from '../assets/headerIcon.png'



export default function SubCategoryScreen({navigation,route}){
 
  
  const { name } = route.params ? route.params :{ name: "משקה חם"};
  const saveToLocalStorage = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      console.log('Object saved successfully!');
    } catch (error) {
      console.error('Error saving object to AsyncStorage:', error);
    }
  };
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
    const coffee = { name :"latte", price: "10", image :coffeeImage }
  
  
    function handleSave(coffeeData){
      const { name, price,size} = coffeeData;
      // saveToLocalStorage('order', coffeeData);
      alert( `${name} , ${price} , ${size}`)
    }
    return ( 
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} alignItems="center"  justifyContent="center">
           
            
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            <CoffeeCard coffeeData={coffee} onSave={handleSave}/>
            
            {/* <Text style={styles.text}>Screen {name} </Text> */}
            
        </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  });