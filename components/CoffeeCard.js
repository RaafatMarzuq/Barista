import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome6 ,MaterialCommunityIcons  } from '@expo/vector-icons';

export default function CoffeeCard({ coffeeData, onSave }){
  const { name, price, image } = coffeeData;

  const handleSave = () => {
    onSave({...coffeeData,size:"large"}); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <FontAwesome6  name="add" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View>
      <MaterialCommunityIcons name="size-l" size={24} color="black" />
      <MaterialCommunityIcons name="size-s" size={24} color="black" />
      </View>
      <Image source={image} style={styles.image} />
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
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
    },
    textContainer: {
      
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
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
    
      paddingVertical: 10,
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
  });
