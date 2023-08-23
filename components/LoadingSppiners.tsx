import classNames from 'classnames'
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

type Props = {
    name: string,
    padding?: number,
    backgroudColor?: string,
    fontSize?: number,
    borderRadius?: number,
    width?: number,
    color?: string
}

export default function LoadingSppiner(props: Props) {

    return (
        <TouchableOpacity style={{backgroundColor: props.backgroudColor, padding: props.padding, borderRadius: props.borderRadius, width: props.width}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator animating={true} color={props.color} />
                <Text style={{textAlign: "center", color: props.color ? props.color : Colors.dark, fontSize: props.fontSize, fontWeight: "500", marginLeft: 10}}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
