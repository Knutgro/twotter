import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    twootHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    twootHeaderNames: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    username: {
        marginRight: 5,
        color: 'grey',
    },
    createdAt: {
        marginRight: 5,
        color: 'grey',
    },
    content: {
        marginTop: 3,
        lineHeight: 18
    },
    dot: {
        marginRight: 5,
        color: 'grey',
    },
    image: {
        marginVertical: 10,
        width: "100%",
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
    },
});

export default styles;