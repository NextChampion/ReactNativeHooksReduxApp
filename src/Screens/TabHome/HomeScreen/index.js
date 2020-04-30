/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 17:43:44
 * @LastEditTime: 2020-04-30 18:20:20
 * @LastEditors: zhangcunxia
 * @Description:首页页面
 */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = (props) => {
  const {navigation} = props;
  const onPress = () => {
    navigation.navigate('HomeDetail', {a: 123});
  };

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title={'HomeDetailScreen'} />
      <Text>Home Screen11</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
