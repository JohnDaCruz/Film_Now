import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from "react-native";
import react, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/moviecards";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function Page() {
  //Criar um objeto com cada necessidade 
  const [movie, setMovie] = useState([])
  const router = useRouter();
  const title = movie.title


  const movieApi = async () => {
    const { data: { results } } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=41ba433527c6290929ce704a876d3649&language=pt-BR&page=1')
    setMovie(results)
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

      <View style={styles.ViewMaisPopulares}>
        <Text style={styles.TextMaisPopulares}>Mais Populares</Text>
      </View>

      <ScrollView>
        {(movie).map((movie) =>
          <Pressable onPress={() => router.push({
            pathname: './screens/details',
            params: { title: movie.title }
          })}>
            <MovieCard
              title={movie.title}
              data={movie.release_date}
              img={movie.poster_path}
              genre={movie.genre_ids}
            />
          </Pressable>
        )}
      </ScrollView>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: '#0E0E0E'
  },
  text: {
    fontSize: 20
  },
  img: {
    width: 590,
    height: 100,
    resizeMode: 'cover',
  },
  ViewMaisPopulares: {
    padding: 10
  },
  TextMaisPopulares: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',

  }
});