import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect,useState } from "react";

const Movie = ({ id, name, url }) => {
  const API_KEY = "b93a64480573ce5248c28b200d79d029";
  const [moviedata, setmoviedata] = useState([]);
  console.log("from movie",moviedata)
  useEffect(() => {
    const movies = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((result) => setmoviedata(result.results));
    };
    movies();
  }, []);
  return (
    <View style={{marginVertical:5}}>
      <Text style={{color: "white",fontSize:20,fontWeight:"bold",marginHorizontal:5,marginBottom:5}}>{name}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {moviedata.length !== 0
          ? moviedata.map((item) => {
            return(
              <Pressable key={item.id}>
                <Image
                  style={{ width: 100, height: 140, resizeMode:'cover' }}
                  source={
                    item.poster_path
                      ? {
                          uri: `http://image.tmdb.org/t/p/w500${item.poster_path}`,
                        }
                      : {
                          uri: "http://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
                        }
                  }
                />
              </Pressable>
            );
            })
          : ""}
      </ScrollView>
      ;
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({});
