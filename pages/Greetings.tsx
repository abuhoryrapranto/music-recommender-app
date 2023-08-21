import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const LogoImage = require("../assets/images/high-five.png")
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GeneralButton from '../components/GeneralButton';

export default function Greetings({navigation, route}: {navigation : any, route: any}) {

    const { items } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => navigation.goBack()} >
                <MaterialIcons name="arrow-back-ios" color="white" size={20}/>
                <Text style={{fontSize: 17, color: "white"}}>Back</Text>
            </TouchableOpacity>
            <StatusBar backgroundColor={Colors.darker} barStyle="dark-content" />
            <View style={styles.logoSection}>
                <Image source={LogoImage} style={styles.logoImage}/>
                <Text style={{textAlign: 'center', fontSize: 25, color: 'white', paddingTop: 20}}>{items.greetings}</Text>
                <Text style={{textAlign: 'center', fontSize: 20, color: '#979fef', paddingTop: 10}}>You have only {items.value} questions remaining</Text>
            </View>
            

            <View style={{marginBottom: 20}}>
                <GeneralButton name='Next' color='black' padding={10} borderRadius={10} fontSize={20} backgroudColor='#0FE38A' />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        justifyContent: 'space-between',
    },
    logoSection: {
        justifyContent: "center",
        alignItems: "center",
        //paddingTop: 200
    },
    logoImage: {
        height: 180,
        width: 180,
    }
})