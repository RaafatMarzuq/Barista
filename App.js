import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import OrdersScreen from "./screens/OrdersScreen";
import MenuScreen from "./screens/MenuScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import MyHeader from "./components/MyHeader";
import { OrdersProvider } from "./OrdersContext";

const Tab = createBottomTabNavigator();

export default function App() {

  
  return (
    
    <OrdersProvider>
    <NavigationContainer theme={DarkTheme }  >
        <Tab.Navigator  screenOptions={{ 
                                         header: (props)=><MyHeader {...props}/>
                                          }} >
          <Tab.Screen
            name="ראשי"
            component={HomeScreen}
            options={{
              tabBarLabel: "ראשי",
              tabBarIcon: () => <Ionicons name={"home"} size={20} color="white" />,
              
            }}
          />

          <Tab.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              tabBarLabel: "תפריט",
              tabBarIcon: () => <Fontisto name={"coffeescript"} size={20} color="white" />,
             
            }}
          />
          <Tab.Screen
            name="הזמנות"
            component={OrdersScreen}
            initialParams={{name:"orders" }}
            options={{
              tabBarLabel: "הזמנות",
              tabBarIcon: () => <FontAwesome name="opencart" size={20} color="white" />,
              // tabBarBadge: 3,
            }}
            
          />

        </Tab.Navigator>
    </NavigationContainer>
    </OrdersProvider>         
  );
}

