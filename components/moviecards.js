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
                <Text style={styles.text}>{data.slice(-10,4)}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        padding:20
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
    },
    viewTexts:{
        flexDirection: 'column',
        alignItems:'flex-start',
        fontWeight: 'bold',
        paddingHorizontal:10
    },
    image: {
        width: 150,
        height: 210,
        borderRadius:20
    }
})

export default MovieCard