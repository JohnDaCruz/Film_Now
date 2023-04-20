import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import react from "react";

const MovieCard = (props) => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'
    const data = props.release_date
    return (

        <View style={styles.container}>

            <Image style={styles.image} source={{ uri: URL_IMAGE + props.poster_path }} />

            <View style={styles.viewTexts}>
                <Text style={styles.text}>{props.title}</Text>
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
        width:139
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