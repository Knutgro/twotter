import React from 'react';
import { View, Text, Image } from 'react-native';
import { TwootType } from '../../../types';
import styles from './styles';
import { Ionicons} from '@expo/vector-icons';
import Footer from './Footer';
export type MainContainerProps = {
    twoot: TwootType
}

const MainContainer = ({ twoot }: MainContainerProps) => (
    <View style={styles.container}>
        <View style= {styles.twootHeaderContainer}>
            <View style= {styles.twootHeaderNames}>
                <Text style={styles.name}>{twoot.user.name}</Text>
                <Text style={styles.username}>@{twoot.user.username}</Text>
                <Text style={styles.createdAt}> 15s </Text>
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