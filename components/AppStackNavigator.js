import React from 'react';
import {BookDonateScreen}  from '../screens/BookDonateScreen';
import {RecieverDetailScreen} from '../screens/RecieverDetailScreen';
import {createStackNavigator} from 'react-navigation-stack';


export const AppStackNavigator = createStackNavigator({
  Books : {
    screen: BookDonateScreen,
    navigationOptions :{
        headerShown: false
    }
  },
  RecieverDetails: {
    screen: RecieverDetailScreen,
    navigationOptions :{
        headerShown: false
    }
  }
},
{initialRouteName: 'Books'}
);