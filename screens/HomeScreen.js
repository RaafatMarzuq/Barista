import {  StyleSheet,ScrollView } from "react-native";
import CategoryCard from "../components/CategoryCard/";
import Milkshake from '../assets/milkshake.jpg/'
import coffee from '../assets/coffee.jpg/'
import coffeeBeans from '../assets/coffeeBeans.jpg/'
import coldDrinks from '../assets/coldDrinks.jpg/'
import teacup from '../assets/teacup.jpg/'



export default function HomeScreen({ navigation , route}){
   
    
    return (
      
            <ScrollView style={styles.container} >
            
                <CategoryCard categoryName={'משקאות חמים'} 
                              image={coffee} 
                              navigation={navigation}
                               route={route}
                               />

                <CategoryCard categoryName={`מילקשייקים`} 
                              image={Milkshake}
                              navigation={navigation}
                              route={route} 
                             />

                <CategoryCard categoryName={`משקאות קרים`} image={coldDrinks} 
                              navigation={navigation}
                              route={route} 
                              />
                              
                <CategoryCard categoryName={`תה`} image={teacup}
                              navigation={navigation} 
                              route={route}
                             />
                <CategoryCard categoryName={'קפה הבית'} image={coffeeBeans}
                              navigation={navigation}
                              route={route} 
                             />
            </ScrollView>
    )
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 30
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
  });