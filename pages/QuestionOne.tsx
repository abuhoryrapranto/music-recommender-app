import { View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RadioButton, Provider as PaperProvider } from 'react-native-paper';

export default function QuestionOne({navigation}: {navigation: any}) {
    
    const [selectedValue, setSelectedValue] = React.useState('');

  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={{marginLeft: 10, marginRight: 10}}>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => navigation.goBack()} >
                <MaterialIcons name="arrow-back-ios" color="white" size={20}/>
                <Text style={{fontSize: 17, color: "white"}}>First Phase - 10 Questions</Text>
        </TouchableOpacity>

        <View style={{marginTop: 10}}>
            <Text style={{color: "white", fontSize: 20}}>Question 1:</Text>

            <View>
            <RadioButton.Group onValueChange={newValue => setSelectedValue(newValue)} value={selectedValue}>
                <View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <RadioButton value="first" />
                        <Text>Strogly Disagree</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <RadioButton value="second" />
                        <Text>Disagree</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <RadioButton value="third" />
                        <Text>Neutral</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <RadioButton value="forth" />
                        <Text>Agree</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <RadioButton value="fifth" />
                        <Text>Disagree</Text>
                    </View>
                </View>
                </RadioButton.Group>
            </View>
        </View>
      </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FF603E"
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