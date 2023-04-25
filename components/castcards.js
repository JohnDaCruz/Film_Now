import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CastCards = (props) => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original/'
    return (
        <View style={styles.container}>
            <Image style={styles.imagemPerfil} source={{ uri: URL_IMAGE + props.imagem }}
            />
            <Text style={styles.textName}>{props.nome}</Text>
            <Text style={styles.textPersona}>{props.personagem}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        marginHorizontal: 10
    },
    imagemPerfil: {
        width: 100,
        height: 200,
        borderRadius: 10
    },
    textName: {
        fontSize: 12,
        color: '#fff'
    },
    textPersona: {
        fontSize: 9,
        color: '#fff'
    }
})
export default CastCards
