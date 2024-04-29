import { View, Text, StyleSheet, Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import { FontAwesome6 ,MaterialCommunityIcons  } from '@expo/vector-icons';
import { useState } from 'react';


export default function CoffeeCard({ coffeeData, onClick ,routeName  }){



  const { name, price, image } = coffeeData;
  
  const [largePressed, setLargePressed] = useState(false);
  const [smallPressed, setSmallPressed] = useState(false);
 
  const handleSave = () => {
   
   routeName ==="orders"?  onClick(coffeeData.id) : onClick({...coffeeData,size:largePressed ? "גדול" : "קטן"}); 
  };
 

  const handleSize = (size) => {
    if (size === 'large') {
      setLargePressed((prev) => !prev);
      setSmallPressed(false); 
    } else if (size === 'small') {
      setSmallPressed((prev) => !prev);
      setLargePressed(false); 
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <FontAwesome6  name={routeName === "orders" ? "trash-alt" :"add" } size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}> ₪ {price}</Text>
      </View>
        { !(routeName==="orders") && ( 
          <View >
        <View style={styles.imageContainer}>
                <Image
                  source={{uri: `data:image/jpeg;base64,${image}` }}
                  style={styles.image}
                />
            </View>
          <View style={styles.sizeContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>handleSize('large')}>
            <MaterialCommunityIcons name="size-l" size={24} color={largePressed ? 'white': 'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>handleSize('small')}>
            <MaterialCommunityIcons name="size-s" size={24} color={smallPressed ? 'white' : 'black'} />
            </TouchableOpacity>
          </View> 
        
      </View>)
       }
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: 'row',
      backgroundColor: 'gray', 
      borderRadius: 10,
      padding: 10,
    //   marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
      resizeMode: 'cover',
      borderRadius:6,
    },
    textContainer: {
      flex: 1,
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: 'space-between',
      paddingHorizontal:6,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    price: {
      fontSize: 16,
    },
    button: {
      // paddingVertical: 1,
      paddingHorizontal: 10,
    //   borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      borderRadius:100,
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    sizeContainer:{
    
     flexDirection: "row",
     alignContent:"center",
     alignItems:"center",
     justifyContent:"space-evenly"
    },
  });
