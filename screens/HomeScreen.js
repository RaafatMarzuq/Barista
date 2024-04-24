import {  StyleSheet, ImageBackground ,ScrollView ,Pressable} from "react-native";
import CategoryCard from "../components/CategoryCard/";
import Milkshake from '../assets/milkshake.jpg/'
import coffee from '../assets/coffee.jpg/'
import backgroundImage from '../assets/background1.jpg/'


export default function HomeScreen({ navigation}){
    return (
        
        <ImageBackground source={backgroundImage}  
                         style={{ flex: 1 }}>
            <ScrollView style={styles.container} >
            <Pressable onPress={() => navigation.navigate("Menu")}>
                <CategoryCard name={`משקה חם`} image={coffee} />
           
                <CategoryCard name={`מילקשייק`} image={Milkshake}/>
                <CategoryCard name={`משקה קר`} image={Milkshake}/>
                <CategoryCard name={`מילקשייק`} image={Milkshake}/>
                </Pressable>
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