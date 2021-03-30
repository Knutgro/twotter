import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'; 

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import config from './aws-exports';
import { getUser } from './graphql/queries';
import { createUser, updateUser } from './graphql/mutations';
import { CreateUserInput } from './API';

Amplify.configure(config);
function App() {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const getRandomImage = () => {
    return "https://avatars.githubusercontent.com/u/43546391?v=4";
  }
  const saveUserToDB = async(user: CreateUserInput) => {
    await API.graphql(graphqlOperation(createUser, {input: user}));
  }
  useEffect(() => {
    const updateUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      if (userInfo) {
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));

        if (!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage()
          }
          await saveUserToDB(user);
        
        } else {
          console.log("User already exists")
        }
      }
    }
    updateUser();
  }, [])

 /* useEffect(() => {
    const updateUser = async() => {
      console.log("hei");
      // Get current authed user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      // Check if it exists in database
      if(userInfo) {
        
        
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
        console.log(userData);
        if (!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.username,
            image: getRandomImage(),
          }
          console.log("Creating user");
          await saveUserToDB(user);

        } else {
          console.log("User already exists");
        }  
        
      }
    }
      // If it doesnt. Create user in db
  }, []);*/
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);