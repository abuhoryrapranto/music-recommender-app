import React from "react";
import { Image, SafeAreaView, Text, View,StyleSheet } from "react-native";
const LogoImage = require("../assets/images/musical-note.png")
import GeneralButton from "../components/GeneralButton";

export default function Welcome({navigation}: {navigation: any}) {

    const aggrementPage = () => {
        navigation.navigate('agreement');
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
