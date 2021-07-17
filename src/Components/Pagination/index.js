import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

// import { Container } from './styles';

const Pagination = ({ next, previous, page }) => {


    return <View style={styles.pagination}>
        <TouchableOpacity onPress={previous}>
            <View style={styles.button}>
                <Text>Anterior</Text>
            </View>
        </TouchableOpacity>
        <Text>Página {page}</Text>
        <TouchableOpacity onPress={next}>
            <View style={styles.button}>
                <Text>Próxima</Text>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.8,
        paddingHorizontal: 20
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 2,
        borderRadius: 50,
        marginVertical: 5
    }
})

export default Pagination;