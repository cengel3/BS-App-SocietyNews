import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


import MainNewsPage from './MainNewsPage';
import MonthlyNews from './MonthlyNews';
import COVID19Impacts from './COVID19Impacts';
import ExtraNewsPage from './ExtraNewsPage';
import ExtraNewsPage2 from './ExtraNewsPage2';


const App = createStackNavigator({
  
    MainNewsPage: { screen: MainNewsPage },
    MonthlyNews: { screen: MonthlyNews },
    COVID19Impacts: { screen: COVID19Impacts },
    //ExtraNewsPage: { screen: ExtraNewsPage },
    //ExtraNewsPage2: { screen: ExtraNewsPage2 },
    
  },
  {
    initialRouteName: 'MainNewsPage',
  }
);
export default createAppContainer(App);