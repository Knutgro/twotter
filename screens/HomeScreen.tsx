import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Twoot from '../components/twoot'

import twoots from '../data/Twoots';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Twoot twoot = {twoots[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
