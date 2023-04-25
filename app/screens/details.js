import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'expo-router'
import { useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import CastCards from '../../components/castcards';


const Details = () => {
    const { title, image_background, vote, data, overview, film_id } = useSearchParams()
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original/'
    const router = useRouter()
    const [credit, setCredit] = useState([])

    const movieApi = async () => {
        const { data: { cast } } = await axios.get(`https://api.themoviedb.org/3/movie/${film_id}/credits?api_key=41ba433527c6290929ce704a876d3649&language=pt-BR`)
        setCredit(cast)
    }
    useEffect(() => {
        movieApi()
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>

                <StatusBar barStyle={'light'} backgroundColor={'#900'} />
                <Image style={styles.img} source={{ uri: URL_IMAGE + image_background }} />

                <View style={styles.mainView}>
                    <Text style={styles.text}>{title}</Text>
                    <View style={styles.descricao}>
                        <Text style={styles.overviewTitle}>Descrição</Text>
                        <Text style={styles.overview}>{overview}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 20 }}>Elenco</Text>

                <ScrollView horizontal={true} style={styles.scrollHorizontal}>
                    {(credit).map((credit) =>
                        <CastCards
                            personagem={credit.character}
                            nome={credit.name}
                            imagem={credit.profile_path}
                            key={credit.cast_id}
                        />
                    )}
                </ScrollView>

            </ScrollView>

            <View style={styles.tabNav}>
                <TouchableOpacity onPress={() => router.back()}>
                    <AntDesign name="home" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <AntDesign name="search1" size={30} color="white" />
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010'

    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    mainView: {
        flexDirection: 'column',
        padding: 10
    },
    descricao: {
        marginTop: 20
    },
    overviewTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
    overview: {
        color: '#fff'
    },
    img: {
        width: '100%',
        height: 300,
        marginTop: 22,
        resizeMode: 'cover'
    },
    tabNav: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    scrollHorizontal: {
        padding: 5
    }
})