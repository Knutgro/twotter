import React from 'react';
import { View } from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';

import {TwootType} from '../../types';
import styles from './styles';

export type TwootProps = {
    twoot: TwootType,
}

const Twoot = ({ twoot }: TwootProps) => (
    <View style = {styles.container}>
        <LeftContainer user = { twoot.user } />
        <MainContainer twoot = { twoot }  />
    </View>
)

export default Twoot;