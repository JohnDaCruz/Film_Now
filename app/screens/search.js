import { StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity, Pressable, ScrollView, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import MovieCard from '../../components/moviecards';
import { useRouter } from 'expo-router';


const Search = () => {
    const [movieName, setMovieName] = useState();
    const [movieSearch, setMovieSeach] = useState([]);
    const router = useRouter();

    const axiosUrl = async () => {
        Keyboard.dismiss()
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=41ba433527c6290929ce704a876d3649&language=pt-BR&query=${movieName}&page=1&include_adult=True`)
        setMovieSeach(results)
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light'} />
            <TextInput
                placeholder='Digite um filme...'
                placeholderTextColor={'#fff'}
                style={styles.inputSearch}
                onChangeText={(text) => setMovieName(text)}
                value={movieName}
            />

            <TouchableOpacity
                style={styles.icon}
                onPress={() => axiosUrl()}
            >
                <AntDesign name="search1" size={30} color="white" />
            </TouchableOpacity>

            <ScrollView>
                {
                    (movieSearch).map((movieSearch) =>
                        <Pressable
                            key={movieSearch.id}
                            onPress={() => router.push({
                                pathname: './details',
                                params: {
                                    title: movieSearch.title,
                                    image_background: movieSearch.backdrop_path,
                                    vote: movieSearch.vote_average,
                                    data: movieSearch.release_data,
                                    overview: movieSearch.overview,
                                    film_id: movieSearch.id,
                                }
                            })}>
                            <MovieCard
                                title={movieSearch.title}
                                data={movieSearch.release_date}
                                img={movieSearch.poster_path}
                                genre={movieSearch.genre_ids}
                            />
                        </Pressable>
                    )
                }
            </ScrollView>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010',
        alignItems: "center",
        paddingTop: 10,
    },
    inputSearch: {
        borderColor: '#fff',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 40,
        color: '#fff',
        padding: 15
    },
    icon: {
        position: 'absolute',
        marginTop: 60,
        right: 16,
    }
})