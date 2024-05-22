import {  StyleSheet,ScrollView } from "react-native";
import CategoryCard from "../components/CategoryCard/";
import Milkshake from '../assets/milkshake.jpg/'
import coffee from '../assets/coffee.jpg/'




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

                <CategoryCard categoryName={`משקאות קרים`} image={Milkshake} 
                              navigation={navigation}
                              route={route} 
                              />
                              
                <CategoryCard categoryName={`תה`} image={Milkshake}
                              navigation={navigation} 
                              route={route}
                             />
                <CategoryCard categoryName={'קפה הבית'} image={Milkshake}
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