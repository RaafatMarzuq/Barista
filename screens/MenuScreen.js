import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SubCategoryScreen from './SubCategoryScreen';
import CartScreen from './CartScreen';



const Tab = createMaterialTopTabNavigator();

export default function MenuScreen() {
  
  return (
    <Tab.Navigator  screenOptions={{tabBarScrollEnabled:true}}>
        <Tab.Screen
            name='משקה חם'
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "משקה חם",
             
            }}
            
            
          />

          <Tab.Screen
            name="מילקשייק"
            component={SubCategoryScreen}
            options={{
              tabBarLabel: "מילקשייק",
              
            }}
          />
          <Tab.Screen
            name="תה"
            component={SubCategoryScreen}
            options={{
              tabBarLabel: "תה",
            }}
          />
          <Tab.Screen
            name="משקה קר"
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "משקה קר",
            }}
          />
          <Tab.Screen
            name="קפה הבית"
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "קפה הבית",
            }}
          />

    </Tab.Navigator>
  );
}