import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Movie from './Movie'
import movieUrl from '../data/movieUrl'

const Movies = () => {
  const data = movieUrl;
  const API_KEY = "b93a64480573ce5248c28b200d79d029";

  return (
    <View>
        {
            data.map((item)=>{
                return <Movie id={item.id} name={item.name} url={item.url} />
            })
        }
    </View>
  )
}

export default Movies

const styles = StyleSheet.create({})