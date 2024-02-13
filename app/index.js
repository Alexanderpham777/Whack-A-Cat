import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput, SafeAreaView, } from 'react-native';
import Styles from '../styles/page-styles';
import { Link } from 'expo-router';

export default function Page() {
   
    return (
        <View style={Styles.page} >
            <Text style={Styles.title}>Whack-A-Cat </Text>
            <View style={Styles.space} />
            <Text style={Styles.text }>How to Play Mad Libs Hall Pass: Fill in the Blanks For the Hall Pass. </Text>
            <View style={Styles.space} />
            
            <Link
                style={Styles.button}
                href={{
                    pathname: "/CatGame",
                }} asChild
            >
                <Pressable >
                    <Text>Start</Text>
                </Pressable>
            </Link>
            
               
        </View>
    )
}

