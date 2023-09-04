import { ImageBackground, StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ProfileContext } from "../../Context";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const api_key = "012eb1fffd6250cced083973954d48aa";
  const navigate = useNavigation();
  let [moviedata, setmoviedata] = useState([]);
  console.log(moviedata);

  const [profile, setprofile] = useContext(ProfileContext);

  useEffect(() => {
    const movies = async () => {
      try {
        await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`
        )
          .then((response) => response.json())
          .then((data) =>
            setmoviedata(
              data.results[Math.floor(Math.random() * data.results.length - 1)]
            )
          );
      } catch (e) {
        console.log(e);
      }
    };
    movies();
  }, []);

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={
          moviedata.poster_path
            ? { uri: `http://image.tmdb.org/t/p/w500${moviedata.poster_path}` }
            : ""
        }
        style={{ width: "100%", height: 480 }}
      >
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:'space-between'}}>
          <Image
            style={{ width: 120, height: 50 }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />

          <View style={{flexDirection:'row',alignItems:'center',marginRight:8}}>
            <AntDesign name="search1" size={24} color="white" />
            <Pressable onPress={()=>{navigate.navigate('Profile')}}>
              <Image source={{ uri: profile.image }} style={{width:25,height:25,marginLeft:5,borderRadius:10}}></Image>
            </Pressable>
          </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginRight:8}}>
        <Text style={{color:'white',fontSize:20}}>{profile.name}</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:20}}>
          <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>TV SHOWS</Text>
          <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>MOVIES</Text>
          <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>CATEGORIES</Text>
        </View>
      </ImageBackground>

      <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',marginTop:5}}>
        <Pressable style={{justifyContent:'center',alignItems:'center'}}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={{color:'white',fontSize:14}}>My List</Text>
        </Pressable>
        <Pressable style={{justifyContent:'center',alignItems:'center'}}>
          <AntDesign name="play" size={24} color="white" />        
          <Text style={{color:'white',fontSize:14}}>Play</Text>
        </Pressable>        
        <Pressable style={{alignItems:'center',justifyContent:"center"}}>
          <AntDesign name="infocirlceo" size={24} color="white" />
          <Text style={{color:'white',fontSize:14}}>Info</Text>
        </Pressable>
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
