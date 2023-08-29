import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React,{useState} from "react";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const navigate = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{alignItems:'center'}}>
        <Image
          style={{
            width: 120,
            height: 50,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
          source={{
            uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
          }}
        />
        </View>
        <View style={{width:300 }}>
          <Input
            type="email"
            placeholder="Email"
            placeholderTextColor={"white"}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            value={email}
            onChangeText={(val)=>{setemail(val)}}
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
            placeholder="Password"
            placeholderTextColor={"white"}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            value={password}
            onChangeText={(val)=>setpassword(val)}
            secureTextEntry={true}
            style={{
              width: 300,
              marginTop: 20,
              padding: 15,
              borderRadius: 5,
              backgroundColor: "gray",
              color: "white",
            }}
          />
        </View>

        <Pressable style={
            password.length > 4 ? 
            {
                width: 260,
                padding: 15,
                marginTop: 20,
                marginLeft: "auto",
                marginRight: "auto",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor:'red'
           }:
           {
            width: 260,
            padding: 15,
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderRadius: 5,
            borderColor: "white",
       }
        }
        onPress={()=>
            {navigate.navigate('Plans'),
            {
                email:email,
                password:password
            }
        }
        }
        >
            <Text style={{color:'white'}}>Register</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "black",
    alignItems: "center",
  },
});
