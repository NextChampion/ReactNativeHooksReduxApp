/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 18:08:00
 * @LastEditTime: 2020-04-30 18:19:05
 * @LastEditors: zhangcunxia
 * @Description:抽屉路由
 */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from '../StackNavigator';
import NotificationsScreen from '../../Screens/DrawerScreens/NotificationsScreen';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
