import React, { Component } from "react";
import { AppLoading } from 'expo';
import { Container, Header, Content, Button, Text } from 'native-base';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


export default class Kargo extends Component {


    constructor() {
        super();
        this.state = { screenWidth: Math.round(Dimensions.get('window').width), 
        screenHeight: Math.round(Dimensions.get('window').height),
        imageSrc : '../img/aras.png',
        imageLink : require('../img/surat.png') }
    }
    getScreenSize = () => {
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
        this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })
    }
    componentDidMount() {
        const companyImage = '../img/' + this.props.company + '.png';;
        this.setState({
            imageSrc : companyImage,
            imageLink: require('../img/surat.png')
        })
    }

    render() {
        // const companyImage = '../img/' + this.props.company + '.png';
        return (

            <Content>
                <Text style={{ fontWeight: "bold" }}>Aras Kargo xxxxxxx takip numaralı kargo:</Text>
                <Image source={{ uri: this.state.imageSrc }}  style={styles.kargoLogo}   width = {this.state.screenWidth*0.6}  resizeMode="contain" />
                <Text> <Text style={{ fontWeight: "bold" }}> Kargolanma Tarihi :</Text> 15 Şubat 2020</Text>

                <Text> <Text style={{ fontWeight: "bold" }}> Çıkış Şubesi :</Text> Melikgazi Şubesi</Text>
                <Text> <Text style={{ fontWeight: "bold" }}> Varış Şubesi :</Text> Balgat Şubesi {this.state.imageSrc}</Text>
            </Content>

        );
    }
};


var styles = StyleSheet.flatten({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h2Title: {
        fontSize: 22,
        fontWeight: "bold"
    },
    kargoLogo: {

        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "red"
    }

});
