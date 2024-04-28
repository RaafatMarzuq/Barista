import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SubCategoryScreen from './SubCategoryScreen';
import { useFocusEffect } from '@react-navigation/native';
import { useState ,useEffect} from "react";



const Tab = createMaterialTopTabNavigator();

export default function MenuScreen({ navigation,route}) {
  const { name } = route.params ? route.params : { name: "משקה חם" };


  useEffect(()=>{
    navigation.navigate(name,{...route.params})
  },[name])

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