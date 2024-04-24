import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import MenuScreen from "./screens/MenuScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          //   tabBarShowLabel: false,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tab.Screen name="ראשי" 
                    component={HomeScreen}  
                    options={{
                        tabBarLabel: "ראשי",
                        tabBarIcon: () => <Ionicons name={"home"} size={20} />,
                        // tabBarBadge: 3,
                      }} />
        
        <Tab.Screen name="תפריט" 
                    component={MenuScreen} 
                    options={{
                      tabBarLabel: "תפריט",
                      tabBarIcon: () => <Fontisto name={"coffeescript"} size={20} color="black"/>,
                      // tabBarBadge: 3,
                    }}
                    />
        <Tab.Screen
          name="הזמנות"
          component={CartScreen}
          options={{
            tabBarLabel: "הזמנות",
            tabBarIcon: () => <FontAwesome name="opencart" size={24} color="black" />,
            // tabBarBadge: 3,
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}