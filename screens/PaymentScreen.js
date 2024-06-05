import  { useState, useEffect } from 'react';
import {  Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useOrders } from "../OrdersContext";
import axios from 'axios';

export default function PaymentScreen() {
  
  const { ordersList} = useOrders();

  const [name, setName] = useState('');
  const [notes,setNotes] = useState('');
  const [totalAmount,setTotalAmount] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!name) errors.name = "חסר שם להזמנה";
    if (!totalAmount) errors.totalAmount = "סל הקניות שלך ריק";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handlePayment = async () => {
    try {
      const flag = validateForm();
        if (flag) {
            const order = {
                items: ordersList,
                totalPrice: totalAmount,
                customerName: name,
                notes: notes
            };
            await axios.post( `${process.env.API_URL_ORDERS} `, order);

            setName('') ;
            setNotes('');
            setErrors({});
        }
    } catch (error) {
        console.error('Error occurred while processing payment:', error);
    }
  };

  useEffect(() => {
    let total = 0;
    ordersList.forEach(item => { 
      total += (parseFloat(item.price) * item.quantity);
    });
    setTotalAmount(total);
  }, [ordersList]); 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}

    >
        <Text style={styles.title}>תשלום</Text>
        <Text style={styles.amount}>₪ {totalAmount}</Text>
        {errors.totalAmount ? (
          <Text style={styles.errorText}>{errors.totalAmount}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="שם"
          value={name}
          onChangeText={setName}
          placeholderTextColor="gray"
        />
         {errors.name ? (
          <Text style={styles.errorText}>{errors.name}</Text>
        ) : null}
        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="הערות : סוג חלב ,קפה חזק ,קפה חלש ..."
          value={notes}
          onChangeText={setNotes}
          placeholderTextColor="gray"
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>בצע תשלום</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  amount: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    color: 'white',
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
  notesInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
