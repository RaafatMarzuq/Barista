import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SubCategoryScreen from './SubCategoryScreen';
import {useEffect} from "react";



const Tab = createMaterialTopTabNavigator();

export default function MenuScreen({ navigation,route}) {
  const { name } = route.params ? route.params : { name: "משקה חם" };


  useEffect(()=>{
    navigation.navigate(name)
  },[name])

  return (
    <Tab.Navigator  screenOptions={{tabBarScrollEnabled:true}}>
        <Tab.Screen
            name='משקאות חמים'
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "משקאות חמים",
             
            }}
            initialParams={{name:"משקאות חמים" }}
            
            
          />

          <Tab.Screen
            name="מילקשייקים"
            component={SubCategoryScreen}
            options={{
              tabBarLabel: "מילקשייקים",
              
            }}
            initialParams={{name:"מילקשייקים" }}
          />
          <Tab.Screen
            name="תה"
            component={SubCategoryScreen}
            options={{
              tabBarLabel: "תה",
            }}
            initialParams={{name:"תה" }}
          />
          <Tab.Screen
            name="משקאות קרים"
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "משקאות קרים",
            }}
            initialParams={{name:"משקאות קרים" }}
          />
          <Tab.Screen
            name="קפה הבית"
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "קפה הבית",
            }}
            initialParams={{name:"קפה הבית" }}
          />

    </Tab.Navigator>
  );
}