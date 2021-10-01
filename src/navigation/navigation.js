import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Home from '../screens/home';
import JeanCollection from '../screens/jeanCollection';
import SelectedProduct from '../screens/jeanCollection/selected';
import Profile from '../screens/profile';
import Details from '../screens/profile/details';
import Edit from '../screens/profile/edit';
import Collections from '../screens/collections';
import StoreCollection from '../screens/storeCollection';
import SelectedStore from '../screens/storeCollection/selected';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profilee" component={Profile} />
      <Stack.Screen name="edit" component={Edit} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
};

const CollectionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
       <Stack.Screen name="collections" component={Collections} />
      <Stack.Screen name="jeanCollection" component={JeanCollection} />
      <Stack.Screen name="selectedProduct" component={SelectedProduct} />
      
    </Stack.Navigator>
  );
};

const StoreCollectionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
       <Stack.Screen name="storeCollection" component={StoreCollection} />
       <Stack.Screen name="selectedstore" component={SelectedStore} />
      
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export function TabStack() {
  return (
    <Tab.Navigator  screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: focused ? 25 : 15,
                height: focused ? 20 : 15,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../assets/icons/homeActive.png')
                  : require('../assets/icons/home.png')
              }
            />
          ),
        }}
        name="home"
        component={Home}
      />

<Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: focused ? 25 : 15,
                height: focused ? 20 : 15,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../assets/icons/collectionActive.png')
                  : require('../assets/icons/collection.png')
              }
            />
          ),
        }}
        name="collections"
        component={CollectionStack}
      />

<Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: focused ? 25 : 15,
                height: focused ? 20 : 15,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../assets/icons/storeActive.png')
                  : require('../assets/icons/store.png')
              }
            />
          ),
        }}
        name="stores"
        component={StoreCollectionStack}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: focused ? 25 : 15,
                height: focused ? 20 : 15,
                resizeMode: 'contain',
              }}
              source={
                focused
                  ? require('../assets/icons/profileActive.png')
                  : require('../assets/icons/profile.png')
              }
            />
          ),
        }}
        name="profile"
        component={ProfileStack}
      />
     
    </Tab.Navigator>
  );
}
