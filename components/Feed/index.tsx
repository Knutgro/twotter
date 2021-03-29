import React from 'react'
import {View, FlatList} from 'react-native';
import twoots from '../../data/Twoots';
import Twoot from '../twoot';
const Feed = () => (
 <View style={{ width: '100%'}}>
    <FlatList
    data= {twoots}
    renderItem= {({item}) => <Twoot twoot={item} />}
    keyExtractor= {(item) => item.id}
    />
</View>

);

export default Feed;