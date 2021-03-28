import React from 'react';
import { View, Text } from 'react-native';
import { TwootType } from '../../../../types';
import styles from './styles';
import { Ionicons, Feather, EvilIcons, AntDesign} from '@expo/vector-icons';
export type FooterContainerProps = {
    twoot: TwootType
}

const Footer = ({ twoot }: FooterContainerProps) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Feather name={"message-circle"} size={20} color={'grey'} />
            <Text style= {styles.number}>{twoot.numberOfComments}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"retweet"} size={32} color={'grey'} />
            <Text style= {styles.number}>{twoot.numberOfRetwoots}</Text>
        </View>
        <View style={styles.iconContainer}>
            <AntDesign name={"hearto"} size={20} color={'grey'} />
            <Text style= {styles.number}>{twoot.numberOfLikes}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"share-google"} size={30} color={'grey'} />    
        </View>
    </View>
);

export default Footer;