import { StyleSheet, Text, View, StatusBar, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import react, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/moviecards";
import { useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';


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
          <Pressable
            key={movie.id}
            onPress={() => router.push({
              pathname: './screens/details',
              params: {
                title: movie.title,
                image_background: movie.backdrop_path,
                vote: movie.vote_average,
                data: movie.release_data,
                overview: movie.overview
              }
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

      <View style={styles.tabNav}>

        <TouchableOpacity>
          <AntDesign name="home" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="search1" size={30} color="white" />
        </TouchableOpacity>

      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: '#101010'
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
  },
  tabNav: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});