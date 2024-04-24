import {  StyleSheet, ImageBackground ,ScrollView } from "react-native";
import CategoryCard from "../components/CategoryCard/";
import Milkshake from '../assets/milkshake.jpg/'
import coffee from '../assets/coffee.jpg/'
import backgroundImage from '../assets/background1.jpg/'


export default function HomeScreen({ navigation}){
   
    
    return (
        
        <ImageBackground source={backgroundImage}  
                         style={{ flex: 1 }}>
            <ScrollView style={styles.container} >
                <CategoryCard categoryName={'משקה חם'} 
                              image={coffee} 
                              navigation={navigation}
                               
                               />

                <CategoryCard categoryName={`מילקשייק`} 
                              image={Milkshake}
                              navigation={navigation} 
                             />

                <CategoryCard categoryName={`משקה קר`} image={Milkshake} 
                              navigation={navigation} 
                              />
                              
                <CategoryCard categoryName={`משקה קר`} image={Milkshake}
                              navigation={navigation} 
                             />
                <CategoryCard categoryName={'קפה הבית'} image={Milkshake}
                              navigation={navigation} 
                             />
            </ScrollView>
        </ImageBackground>
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