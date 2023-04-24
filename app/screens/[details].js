import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'


const Details = () => {
    const { title } = useSearchParams()
    console.log(title)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#0E0E0E'
    },
    text: {
        fontSize: 50,
        color: '#fff'
    }
})