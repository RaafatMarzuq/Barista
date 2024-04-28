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
            name='משקה חם'
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "משקה חם",
             
            }}
            initialParams={{name:"משקה חם" }}
            
            
          />

          <Tab.Screen
            name="מילקשייק"
            component={SubCategoryScreen}
            options={{
              tabBarLabel: "מילקשייק",
              
            }}
            initialParams={{name:"מילקשייק" }}
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
            name="משקה קר"
            component={SubCategoryScreen}
            options={{
            tabBarLabel: "משקה קר",
            }}
            initialParams={{name:"משקה קר" }}
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