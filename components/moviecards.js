import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import react, { useEffect, useState } from "react";

const MovieCard = (props) => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'
    const data = props.data
    const genreAPI = props.genre
    const genreOBJ = [
        {
            "id": 28,
            "name": "Ação"
        },
        {
            "id": 12,
            "name": "Aventura"
        },
        {
            "id": 16,
            "name": "Animação"
        },
        {
            "id": 35,
            "name": "Comédia"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentário"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Família"
        },
        {
            "id": 14,
            "name": "Fantasia"
        },
        {
            "id": 36,
            "name": "História"
        },
        {
            "id": 27,
            "name": "Terror"
        },
        {
            "id": 10402,
            "name": "Música"
        },
        {
            "id": 9648,
            "name": "Mistério"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Ficção científica"
        },
        {
            "id": 10770,
            "name": "Cinema TV"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "Guerra"
        },
        {
            "id": 37,
            "name": "Faroeste"
        }
    ]
    const [genre, setGenre] = useState([])
    //console.log(props.title, props.data, genreAPI)
    //console.log(genreOBJ,genreAPI)

    useEffect(() => {
        var i = 0
        while (i <= genreAPI.length - 1) {
            genreOBJ.filter(e => {
                if (e.id === genreAPI[i]) {
                    setGenre(e.name)
                }
            })
            i++
        }
    }, [])

    return (

        <View style={styles.container}>

            <Image style={styles.image} source={{ uri: URL_IMAGE + props.img }} />
            <View style={styles.viewTexts}>
                <Text style={styles.text}>{props.title}</Text>
                <Text style={styles.textGenre}>{genre}</Text>
                <Text style={styles.textData}>{data.slice(-10, 4)}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        padding: 20,
    },
    text: {
        alignItems: 'flex-start',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        width: 139,
        paddingBottom: 5
    },
    textGenre: {
        alignItems: 'flex-start',
        color: '#fff',
        fontSize: 15,
        width: 139,
        paddingBottom: 5
    },
    textData: {
        color: '#fff',
        fontStyle: 'italic'
    },
    viewTexts: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: 10,

    },
    image: {
        width: 140,
        height: 210,
        borderRadius: 20
    }
})

export default MovieCard