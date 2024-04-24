import { View, Text, StyleSheet,Platform,ImageBackground,Pressable } from "react-native";



export default function CategoryCardCard({categoryName,image,navigation}) {
 
    return (
        <Pressable onPress={() => navigation.navigate(categoryName,{screen:categoryName})}>
            <View style={{paddingVertical:16}}>
            <ImageBackground 
                    style={styles.card} 
                    source={image} 
                    borderRadius={16}
                    >
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{categoryName}</Text>
            </View>

            
            </ImageBackground>
            </View>
            </Pressable>
        );
}

const styles = StyleSheet.create({
  card: {
    height :200 ,
    width :"100%" ,
     
    alignItems :"center" ,
    alignContent:"center",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
      
    }),
  },
  nameContainer: {
    paddingHorizontal:16,
    paddingVertical:70,
    justifyContent: "center",
    alignContent: "center",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
 

 
});