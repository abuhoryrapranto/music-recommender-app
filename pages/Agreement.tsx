import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const LogoImage = require("../assets/images/questionnaire.png")
import GeneralButton from "../components/GeneralButton";

export default function Agreement({navigation}: {navigation: any}) {
  return (
    <SafeAreaView>
        <View style={styles.container}>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => navigation.goBack()} >
            <MaterialIcons name="arrow-back-ios" color="white" size={20}/>
            <Text style={{fontSize: 17, color: "white"}}>Agreement</Text>
        </TouchableOpacity>

        <View style={styles.logoSection}>
            <Image source={LogoImage} style={styles.logoImage}/>
        </View>

        <View style={{justifyContent: "center", alignItems: "center", marginTop: 80}}>
            <Text style={{color: "#ff8fb8", fontSize: 22}}>
                We take an assessment{'\n'}
                which is consist of 50 questions{'\n'}
                for detect your{'\n'}
                personality profile
            </Text>
        </View>

        <Text style={{textAlign: "center", fontSize: 20, color: "#979fef", marginTop: 100}}>Are you ready?</Text>

        <View style={{flexDirection: "row", alignItems: "center", marginTop: 50, paddingLeft: 35, paddingRight: 35}}>
            <View>
                <GeneralButton name="No" backgroudColor="#FF5038" borderRadius={10} padding={12} fontSize={17} color="white" width={80}/>
            </View>
            
            <View style={{marginLeft: "auto"}}>
                <GeneralButton name="Yes" backgroudColor="#0FE38A" borderRadius={10} padding={12} fontSize={17} color="white" width={80} click={() => navigation.navigate('questionone')}/>
            </View>
        </View>

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        marginLeft: 10,
        marginRight: 10,
    },

    cardText: {
        width: '33%',
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        paddingTop: 15,
    },

    logoSection: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80
    },
    logoImage: {
        height: 180,
        width: 180,
    }

})
