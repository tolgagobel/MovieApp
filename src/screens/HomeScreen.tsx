import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s } from 'react-native-size-matters'
import Feather from '@expo/vector-icons/Feather';
import colors from '../themes/colors';
import searchMovies, { Movie } from '../api/omdb';
import MovieCard from '../components/MovieCard';

const HomeScreen = () => {

    const [searchText, setSearchText] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = async () => {
        setLoader(true);
        setError("");
        try {
            const data = await searchMovies(searchText);
            if (data.Response === "True") {
                const res = data.Search || [];
                setMovies(res);
            } else {
                setMovies([]);
                setError(data.Error || "No movies found");
            }
            setLoader(false);
        } catch (error) {
            console.log("error", error)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchcontainer}>
                <TextInput
                    value={searchText}
                    onChangeText={setSearchText}
                    style={styles.input} placeholder="Search..."
                    onSubmitEditing={onSubmit} />
                <TouchableOpacity onPress={onSubmit}>
                    <View style={styles.buttoncontainer}>
                        <Feather name="search" size={s(24)} color={colors.primary} />
                    </View>
                </TouchableOpacity>
            </View>
            {loader ? (
                <View style={styles.centerContainer}>
                    <ActivityIndicator size="large" color={colors.activeIcon} />
                    <Text style={styles.loadingText}>Loading</Text>
                </View>
            ) :
                error ? (
                    <View style={styles.centerContainer}>
                        <Text style={{ color: colors.activeIcon, fontSize: s(16), fontWeight: 'bold' }}>{error}</Text>
                    </View>
                ) :
                    (
                        <FlatList
                            data={movies}
                            keyExtractor={(item) => item.imdbID}
                            numColumns={2}
                            renderItem={({ item }) => <MovieCard movie={item} />}
                        />
                    )}
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    searchcontainer: {
        flexDirection: 'row',
        borderColor: colors.activeIcon,
        padding: s(10),
    },
    input: {
        flex: 1,
        padding: s(10),
        borderRightColor: colors.activeIcon,
        marginRight: s(5),
        color: colors.primary,
        backgroundColor: colors.activeIcon,
        fontWeight: '700',
        borderRadius: s(10),
    },
    buttoncontainer: {
        padding: s(10),
        backgroundColor: colors.activeIcon,
        borderRadius: s(10),
    },
    loadingText: {
        color: colors.activeIcon,
        fontSize: s(14),
        fontWeight: 'bold',
        marginTop: s(10),
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
