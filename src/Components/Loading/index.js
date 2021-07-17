import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import images from '../../../assets/images';

const Loading = () => {
    return (
        <View style={styles.centeredView}>
            <Image style={{ width: 100, height: 70,marginVertical:20 }} source={images.pikachuRun} />
            <Text style={styles.text}>Carregando...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        fontFamily: 'PressStart2P-Regular'
    }
});

export default Loading;