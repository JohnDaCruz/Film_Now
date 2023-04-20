import { StyleSheet, Text, View, Image } from "react-native";
import react from "react";

const MovieCard = (props) => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'
    return (

        <View style={styles.container}>
            <Image style={{ width: 720, height: 420 }} source={URL_IMAGE + props.image} />
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1
    },
    text: {
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MovieCard