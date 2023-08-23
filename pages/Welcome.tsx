import React from "react";
import { Image, SafeAreaView, Text, View,StyleSheet } from "react-native";
const LogoImage = require("../assets/images/musical-note.png")
import GeneralButton from "../components/GeneralButton";
import axios from "axios";
const Buffer = require('buffer').Buffer;
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Welcome({navigation}: {navigation: any}) {

    const aggrementPage = () => {
        getSpotifyAccessToken("59b69a4c4abc4969a77cd0f7491667d3", "a594822719d942d4a67a7376c32f74e2");
        navigation.navigate('agreement');
    }

    async function getSpotifyAccessToken(clientId : string, clientSecret: string) {

        AsyncStorage.removeItem('access_token');

        const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        
        try {
          const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            'grant_type=client_credentials',
            {
              headers: {
                'Authorization': `Basic ${authHeader}`,
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
          );
      
          if (response.status === 200) {
            console.log(response.data.access_token);
            AsyncStorage.setItem('access_token', response.data.access_token);
            //return response.data.access_token;
          } else {
            throw new Error('Failed to retrieve access token');
          }
        } catch (error) {
          throw error;
        }
      }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.logoSection}>
                    <Image source={LogoImage} style={styles.logoImage}/>
                </View>
                <View style={{marginTop: 70}}>
                    <Text style={{color: "#ff8fb8", fontSize: 25, textAlign: 'center'}}>
                        Welcome To{'\n'}Personality Based Music{'\n'}Recommender
                    </Text>
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={{color: "#979fef", fontSize: 15, textAlign: 'center'}}>
                        Find Tracks with AI and Your Personality Profile
                    </Text>
                </View>

                <View style={{marginTop: 80, justifyContent: "center", alignItems: "center"}}>
                    <GeneralButton name="Get Started" backgroudColor="#0FE38A" padding={15} fontSize={18} borderRadius={30} width={300} click={aggrementPage} />
                </View>
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({

    container: {
        marginLeft: 10,
        marginRight: 10
    },
    logoSection: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 150
    },
    logoImage: {
        height: 180,
        width: 180,
    }
})
