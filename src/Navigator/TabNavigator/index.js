/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 17:47:29
 * @LastEditTime: 2020-04-30 17:55:09
 * @LastEditors: zhangcunxia
 * @Description:Tab路由
 */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../Screens/TabHome/HomeScreen';
import MineScreen from '../../Screens/TabMine/MineScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Mine" component={MineScreen} />
    </Tab.Navigator>
  );
}
