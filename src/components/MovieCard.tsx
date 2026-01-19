import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Movie } from '../api/omdb'
import colors from '../themes/colors'
import { s } from 'react-native-size-matters'

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <Pressable style={styles.container}>
            <View style={styles.body}>
                <Image source={{ uri: movie.Poster }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={1}>{movie.Title}</Text>
                    <Text style={styles.year}>{movie.Year}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: s(8),
        maxWidth: '50%',
    },
    body: {
        backgroundColor: colors.activeIcon,
        borderRadius: 10,
        overflow: 'hidden',
        padding: s(10),
    },
    image: {
        width: '100%',
        aspectRatio: 2 / 3,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    infoContainer: {
        marginTop: s(10),
    },
    title: {
        fontWeight: 'bold',
        fontSize: s(16),
        color: colors.primary,
    },
    year: {
        fontSize: s(14),
        marginTop: s(5),
        color: colors.primary,
    }
})
