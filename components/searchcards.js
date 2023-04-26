import { StyleSheet, Text, View, StatusBar, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react'

const SearchCards = () => {
    const [movieName, setMovieName] = useState()
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputSearch} />

        </View>
    )
}

export default SearchCards

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputSearch: {
        borderColor: '#fff',
        width: '100%',
        height: 20
    }
})