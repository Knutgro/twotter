import React from 'react';
import { View, Text, Image } from 'react-native';
import { TwootType } from '../../../types';
import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Footer from './Footer';
import moment from 'moment';
export type MainContainerProps = {
    twoot: TwootType
}

const MainContainer = ({ twoot }: MainContainerProps) => (
    <View style={styles.container}>
        <View style= {styles.twootHeaderContainer}>
            <View style= {styles.twootHeaderNames}>
                <Text style={styles.name}>{twoot.user.name}</Text>
                <Text style={styles.username}>@{twoot.user.username}</Text>
                <Entypo style= {styles.dot} name = {"dot-single"} />
                <Text style={styles.createdAt}>{moment(twoot.createdAt).fromNow()}</Text>
            </View>

            <Ionicons name= {"chevron-down"} size={16} color={"grey"}></Ionicons>

        </View>
        <View>
            <Text style={styles.content}>{twoot.content}</Text>
            {!!twoot.image && <Image style= {styles.image} source = {{uri: twoot.image}}></Image>}
        </View>
    
    <Footer twoot = {twoot} />
    </View>
)

export default MainContainer;