import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s } from 'react-native-size-matters'
import Feather from '@expo/vector-icons/Feather';
import colors from '../themes/colors';
import { fetchMoviesBySearch } from '../api/omdb';

const HomeScreen = () => {

    const [searchText, setSearchText] = useState('');

    const onSubmit = () => {
        fetchMoviesBySearch(searchText)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchcontainer}>
                <TextInput
                    value={searchText}
                    onChangeText={setSearchText}
                    style={styles.input} placeholder="Search..." />
                <TouchableOpacity onPress={onSubmit}>
                    <View style={styles.buttoncontainer}>
                        <Feather name="search" size={s(24)} color={colors.primary} />
                    </View>
                </TouchableOpacity>
            </View>
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
    }
})
