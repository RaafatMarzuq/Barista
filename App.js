import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import OrdersScreen from "./screens/OrdersScreen";
import MenuScreen from "./screens/MenuScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto,FontAwesome } from '@expo/vector-icons';
import MyHeader from "./components/MyHeader";
import { OrdersProvider } from "./OrdersContext";
import PaymentScreen from "./screens/PaymentScreen";
import { MaterialIcons } from '@expo/vector-icons';

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
            }}
            
          />
           <Tab.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            headerShown: false,
            tabBarLabel: "תשלום",
            tabBarIcon: () => <MaterialIcons name="payment" size={20} color="white" />,
          }}
        />

        </Tab.Navigator>

    </NavigationContainer>
   </OrdersProvider>         
  );
}

