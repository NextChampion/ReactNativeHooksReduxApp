/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 17:43:44
 * @LastEditTime: 2020-04-30 17:46:00
 * @LastEditors: zhangcunxia
 * @Description:首页页面
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen11</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
