import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Twoot from '../components/twoot';
import Feed from '../components/Feed';
import twoots from '../data/Twoots';
import NewTwootButton from '../components/NewTwootButton';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTwootButton />
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
