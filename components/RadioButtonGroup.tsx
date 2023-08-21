import { View, Text } from 'react-native'
import React from 'react'
import { RadioButton, Provider as PaperProvider } from 'react-native-paper';

type Props = {
    onValueChange: () => void,
    myValue: string
}

export default function RadioButtonGroup(props : Props) {

    // const [selectedValue, setSelectedValue] = React.useState('');

    return (
        <View>
            <Text style={{ color: "white", fontSize: 20 }}>Question 1:</Text>
            <RadioButton.Group onValueChange={props.onValueChange} value={props.myValue}>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton value="first" />
                        <Text style={{ fontSize: 17 }}>Strogly Disagree</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton value="second" />
                        <Text style={{ fontSize: 17 }}>Disagree</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton value="third" />
                        <Text style={{ fontSize: 17 }}>Neutral</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton value="forth" />
                        <Text style={{ fontSize: 17 }}>Agree</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton value="fifth" />
                        <Text style={{ fontSize: 17 }}>Disagree</Text>
                    </View>
                </View>
            </RadioButton.Group>
        </View>
    )
}