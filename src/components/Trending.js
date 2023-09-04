import { Pressable, ScrollView, StyleSheet, Text, View,Image } from "react-native";
import React, { useEffect,useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Screens/Loading";

const Trending = () => {

    const api_key = "012eb1fffd6250cced083973954d48aa";
    const navigate = useNavigation();
    let [moviedata, setmoviedata] = useState([]);
    console.log(moviedata[0]);
    
  useEffect(() => {
    const movies = async () => {
      try {
        await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`
        )
          .then((response) => response.json())
          .then((data) => setmoviedata(data.results));
      } catch (e) {
        console.log(e);
      }
    };
    movies();
  }, []);

  return (
    <View style={{marginTop:10}}>
      <Text style={{ color: "white",fontSize:20,fontWeight:"bold",marginHorizontal:5,marginBottom:5 }}>Trending</Text>
      {/* {console.log(moviedata)} */}

      {moviedata.length !== 0 ? (
        <ScrollView horizontal>
          
          {moviedata.slice(0,10).map((item,index) => {
            return(
            <Pressable key={item.id}>
              <View style={{position:'relative'}}>

                <Text style={{color:'white',fontSize:80,fontWeight:700,position:'absolute',top:50,left:3,zIndex:999}}>{index + 1}</Text>
                <Image style={{width:130,height:150,resizeMode:'cover'}}
                  source={
                    item.poster_path
                      ? {
                          uri: `http://image.tmdb.org/t/p/w500${item.poster_path}`,
                        }
                      : ""
                  }
                />
              </View>
            </Pressable>
            )
          })}
        </ScrollView>
      ) : ''
      }
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({});
