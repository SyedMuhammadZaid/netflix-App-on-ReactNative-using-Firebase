import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Input } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase";
import { ActivityIndicator } from "react-native";
import Toast from 'react-native-toast-message';


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigation();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate.navigate("Profile");
      }
      if(!user){
        setloading(false);
      }
    }, []);
    return unsubscribe;
  });

  // const subscribe = () => {
  //   const auth = getAuth();
  //   const user = auth.currentUser;
    
  //   signInWithEmailAndPassword(auth, email, password).then(
  //     (userCredentials) => {
  //       console.log(userCredentials);
  //       const user = userCredentials.user;
  //       console.log(user.email);
  //     }
  //   );
  // };

  const subscribe = async () => {
    const auth = getAuth();
  
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      console.log('User signed in:', user);
      Toast.show({
        type:'success',
        text1:'logged in'
      })
      // User successfully signed in, you can navigate to the next screen or perform actions here.
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle sign-in error
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        // The email or password is incorrect
        // Display an alert to the user
        Toast.show({
          type:'error',
          text1:'Invalid email or password. Please try again.'
        })
      } else {
        // Handle other sign-in errors as needed
        Toast.show({
          type:'error',
          text1:'An error occurred while signing in. Please try again later.Invalid email or password. Please try again.'
        })
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        {loading ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
          }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}>
              Loading
            </Text>
            <ActivityIndicator size={'large'} color={'red'} />
          </View>
        ) : (
          <>
            <View
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Image
                style={{ width: 120, height: 50, marginTop: 20 }}
                source={{
                  uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
                }}
              />
            </View>

            <View style={{ width: 300 }}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChangeText={(val) => setemail(val)}
                placeholderTextColor={"white"}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                style={{
                  width: 300,
                  marginTop: 20,
                  padding: 15,
                  borderRadius: 5,
                  backgroundColor: "gray",
                  color: "white",
                }}
              />
              <Input
                type="password"
                placeholder="password"
                secureTextEntry={true}
                value={password}
                onChangeText={(val) => setpassword(val)}
                placeholderTextColor={"white"}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                style={{
                  width: 50,
                  marginTop: 20,
                  padding: 15,
                  borderRadius: 5,
                  backgroundColor: "gray",
                  color: "white",
                }}
              />
            </View>
            {console.log(email)}

            <Pressable
              onPress={subscribe}
              style={
                password.length > 4
                  ? {
                      width: 260,
                      padding: 15,
                      marginTop: 20,
                      marginLeft: "auto",
                      marginRight: "auto",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 2,
                      borderRadius: 5,
                      backgroundColor: "red",
                    }
                  : {
                      width: 260,
                      borderColor: "white",
                      padding: 15,
                      marginTop: 20,
                      marginLeft: "auto",
                      marginRight: "auto",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 2,
                      borderRadius: 5,
                    }
              }
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
                Sign in
              </Text>
            </Pressable>

            <Pressable onPress={() => navigate.navigate("Register")}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 17,
                  fontWeight: 500,
                  marginTop: 10,
                }}
              >
                New to Netflix! Signup Now
              </Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent:'center'
  },
});

export default Login;
