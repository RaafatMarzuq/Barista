import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SubCategoryScreen from './SubCategoryScreen';
import CartScreen from './CartScreen';
import { useLayoutEffect } from 'react';



const Tab = createMaterialTopTabNavigator();

export default function MenuScreen({ navigation, route }) {
  const { name } = route.params ? route.params : "Cart";

  useLayoutEffect(() => {
      navigation.setOptions({
      title: name,
      });
  }, [navigation, name]);
  return (
    <Tab.Navigator >
        <Tab.Screen
            name='משקה חם'
            component={SubCategoryScreen}
            options={{
              tabBarLabel: "קפה",
              // tabBarIcon: () => <Ionicons name={"home"} size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />

          <Tab.Screen
            name="מילקשייק"
            component={SubCategoryScreen}
            options={{
              tabBarLabel: "מילקשייק",
              // tabBarIcon: () => <FontAwesome name="opencart" size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="תה"
            component={SubCategoryScreen}
            options={{
              tabBarLabel: "תה",
              // tabBarIcon: () => <FontAwesome name="opencart" size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="משקה קר"
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "משקה קר",
              // tabBarIcon: () => <FontAwesome name="opencart" size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="קפה הבית"
            component={CartScreen}
            options={{
            tabBarLabel: "קפה הבית",
              // tabBarIcon: () => <FontAwesome name="opencart" size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />

    </Tab.Navigator>
  );
}