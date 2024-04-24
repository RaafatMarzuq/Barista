import { View,Text, StyleSheet } from "react-native";

export default function SubCategoryScreen({name}){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color:"white",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
  });