import { StatusBar, StyleSheet, Text, View,Image, FlatList, Pressable } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { profiles } from "../data/profiles";
import { ProfileContext } from "../../Context";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {

  const [profile,setprofile] = useContext(ProfileContext);
  console.log(profile)
  const navigate = useNavigation();
  const auth = getAuth()


  const signout = () => {
    signOut(auth).then(() => {
      navigate.replace('Login')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center",marginVertical:5 }}>
        <Ionicons name="arrow-back" size={27} color="white" />
        <Text style={{ color: "white", fontSize: 18 }}>Profile and more</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Image
          style={{ width: 120, height: 50, marginTop: 20 }}
          source={{
            uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
          }}
        />
      </View>
      <Text style={{color:'gray',fontSize:17,textAlign:'center',marginVertical:30}}>Who's Watching ?</Text>
      <View style={{alignItems:'center'}}>
          <FlatList data={profiles} 
          numColumns={2}
          renderItem={({ item }) => (
            <Pressable style={{ marginHorizontal: 20, padding: 10 }} onPress={() => {
               setprofile(item)
               navigate.replace('Loading')
            }
            }> 
              <Image source={{ uri: item.image }} style={{ width: 110, height: 110 }} />
              <Text style={{ color: 'white', fontSize: 13,textAlign:'center' }}>{item.name}</Text>
            </Pressable>
          )}
         />
      </View>
      <Pressable style={{alignItems:'center',marginTop:20}} >
        <Text style={{fontSize:15,color:'gray'}} onPress={signout}>Sign Out</Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
