import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'
import { useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';


const Details = () => {
    const { title, image_background, vote, data, overview } = useSearchParams()
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original/'
    const router = useRouter()
    return (
        <View style={styles.container}>
            <ScrollView>

                <StatusBar barStyle={'light'} />
                <Image style={styles.img} source={{ uri: URL_IMAGE + image_background }} />

                <View style={styles.mainView}>

                    <Text style={styles.text}>{title}</Text>
                    <View style={styles.descricao}>
                        <Text style={styles.overviewTitle}>Descrição</Text>
                        <Text style={styles.overview}>{overview}</Text>
                    </View>

                </View>
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
    }
})