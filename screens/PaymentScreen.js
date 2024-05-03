import { useState ,useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useOrders } from "../OrdersContext";


export default function PaymentScreen({ route }) {
  
    const { ordersList, setOrdersList } = useOrders();

  const [name, setName] = useState('');
  const [notes,setNotes] = useState('')
  const[totalAmount,setTotalAmount] =useState(0)

  
  const handlePayment = () => {
    alert(`${name} , ${notes}`)
    setName('');
    setNotes('');
  };

  useEffect(() => {
    
    let total = 0;

    ordersList.forEach(item => { 
      total += (parseFloat(item.price)*item.quantity);
    });
    setTotalAmount(total);
    
  }, [ordersList]); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>תשלום</Text>
      <Text style={styles.amount}>₪ {totalAmount}</Text>
      <TextInput
        style={styles.input}
        placeholder="שם"
        value={name}
        onChangeText={setName}
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="הערות : סוג חלב ,קפה חזק ,קפה חלש ..."
        value={notes}
        onChangeText={setNotes}
        placeholderTextColor="gray"
        
      />
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>בצע תשלום</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:"white",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  amount: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    color:"white",
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
