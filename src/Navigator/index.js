/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 17:31:27
 * @LastEditTime: 2020-04-30 18:14:28
 * @LastEditors: zhangcunxia
 * @Description:路由组件
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import HomeDetailScreen from '../Screens/TabHome/HomeDetailScreen';
import DrawerNavigator from './DrawerNavigator';
const Stack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default Navigator;
