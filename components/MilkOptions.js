import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function MilkOptions({checked0, handleCheckbox0Change,checked1, handleCheckbox1Change,checked2, handleCheckbox2Change}) {
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>סוג חלב: </Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="חלב רגיל"
          checked={checked0}
          onPress={handleCheckbox0Change}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon="checkbox-blank-outline"
          size={18}
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
          uncheckedColor="black"
          iconRight
        />
        <CheckBox
          title="חלב רגיל"
          checked={checked1}
          onPress={handleCheckbox1Change}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon="checkbox-blank-outline"
          size={18}
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
          uncheckedColor="black"
          iconRight
        />
        <CheckBox
          title="חלב רגיל"
          checked={checked2}
          onPress={handleCheckbox2Change}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon="checkbox-blank-outline"
          size={18}
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
          uncheckedColor="black"
          iconRight
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "gray",
    borderBottomStartRadius : 10,
    borderBottomEndRadius : 10,
  },
  title: {
    fontSize: 15,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkbox: {
    backgroundColor: 'gray',
    padding: 0,
    margin: 0,
    marginRight: 20,
  },
  checkboxText: {
    color: 'black',
  },
});
