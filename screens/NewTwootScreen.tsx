import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Twoot from '../components/twoot';
import Feed from '../components/Feed';
import twoots from '../data/Twoots';
import { AntDesign } from '@expo/vector-icons';
import NewTwootButton from '../components/NewTwootButton';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePicture from '../components/ProfilePicture';
export default function NewTweetScreen() {

  const [twoot, setTwoot] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const onPostTwoot = () => {
    console.warn(`Posting the tweet: ${twoot}
    Image: ${imageUrl}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint}  />
        <TouchableOpacity style={styles.button} onPress={onPostTwoot}>
          <Text style={styles.buttonText}> Twoot </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTwootContainer}>
        <ProfilePicture image="https://avatars.githubusercontent.com/u/43546391?v=4" />
        <View style={styles.inputContainer}>
          <TextInput
            value={twoot}
            onChangeText={(value)=> setTwoot(value)}
            multiline={true}
            numberOfLines= {3}
            style= {styles.twootInput}
            placeholder= {"What's happening?"}
          />
          <TextInput
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
            style={styles.imageInput}
            placeholder= {"Image url (optional)"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  headerContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15

  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30

  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  newTwootContainer: {
    flexDirection: 'row',
    padding: 15
  },
  inputContainer: {
    marginLeft: 10
  },
  twootInput: {
    maxHeight: 300,
    height: 100,
    fontSize: 18,
  },
  imageInput: {

  }


});
