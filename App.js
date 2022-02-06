import { StatusBar } from 'expo-status-bar';

import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function App() {
    return ( < View style = { styles.container } >
        <
        Text > Univeristy < /Text>  <
        Image source = { require('./assets/PMAS.png') }
        style = {
            { position: 'relative', left: 0, Top: 0, height: 250, width: 250, marginHorizontal: 'auto' }
        }
        />  <
        Text > Name: Muhammad Farooq Qasim < /Text>  <
        Image source = { require('./assets/Farooq.JPG') }
        style = {
            { position: 'relative', left: 0, Top: 0, height: 200, width: 150, marginHorizontal: 'auto' }
        }
        />  <
        Text > Registeration No: 19 - ARID - 1200 < /Text>   <
        Text > S / O: Khalid Mehmood < /Text>   <
        Text > Degree: BS - Software Eng < /Text>  <
        StatusBar style = "auto" / >
        <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});