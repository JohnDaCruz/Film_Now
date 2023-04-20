import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from "react-native";
import react, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/moviecards";

export default function Page() {

  const [movie, setMovie] = useState([])

  const movieApi = async () => {
    const { data: { results } } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=41ba433527c6290929ce704a876d3649&language=pt-BR&page=1')
    setMovie(results)
    console.log(results)
  }


  useEffect(() => {
    movieApi()
  }, [])

  return (
    <View View style={styles.container} >
      <StatusBar barStyle={'light'} />

      <View style={styles.imgView}>
        <Image style={styles.img} source={require('../src/images/filmnow.png')} />
      </View>

      <View>
        {movie.map((movie) =>
          <MovieCard {...movie} />
        )}
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: '#100D0D'
  },
  text: {
    fontSize: 20
  },
  img: {
    width: 720,
    height: 120,
    resizeMode: 'cover',
  },
  scrollView: {
  }
});
