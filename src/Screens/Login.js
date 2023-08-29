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
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from "../../Firebase";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigation();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      if(user){
        navigate.navigate('Profile')
      }
    },[])
    return unsubscribe
  })

  const subscribe = () =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
      console.log(userCredentials)
      const user = userCredentials.user;
      console.log(user.email)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
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

        <Pressable onPress={subscribe}
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
  },
});

export default Login;
