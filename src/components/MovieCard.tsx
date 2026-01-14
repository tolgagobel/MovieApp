import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Movie } from '../api/omdb'

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <Pressable style={styles.container}>
            <View style={styles.body}>
                <Image source={{ uri: movie.Poster }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{movie.Title}</Text>
                    <Text style={styles.year}>{movie.Year}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    container: {},
    body: {},
    image: {},
    infoContainer: {},
    title: {},
    year: {}
})
