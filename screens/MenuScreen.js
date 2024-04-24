import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

export default function MenuScreen() {
  return (
    <Tab.Navigator screenOptions={{
        // tabBarShowLabel: false,
      // tabBarLabelPosition: "below-icon",
      // tabBarActiveTintColor: "white",
      // tabBarStyle:{backgroundColor:"black"}
    }}>
        <Tab.Screen
            name="coffee"
            component={HomeScreen}
            options={{
              tabBarLabel: "קפה",
              // tabBarIcon: () => <Ionicons name={"home"} size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />

          {/* <Tab.Screen
            name="תפריט"
            component={MenuScreen}
            options={{
              tabBarLabel: "תפריט",
              tabBarIcon: () => <Fontisto name={"coffeescript"} size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          /> */}
          <Tab.Screen
            name="מילקשייק"
            component={CartScreen}
            options={{
              tabBarLabel: "מילקשייק",
              // tabBarIcon: () => <FontAwesome name="opencart" size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="תה"
            component={CartScreen}
            options={{
              tabBarLabel: "תה",
              // tabBarIcon: () => <FontAwesome name="opencart" size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="משקה קר"
            component={CartScreen}
            options={{
            tabBarLabel: "משקה קר",
              // tabBarIcon: () => <FontAwesome name="opencart" size={20} color="white" />,
              // tabBarBadge: 3,
            }}
          />

    </Tab.Navigator>
  );
}