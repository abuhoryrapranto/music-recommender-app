import classNames from 'classnames'
import { Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {
    name: string,
    padding?: number,
    backgroudColor?: string,
    click?: () => void,
    fontSize?: number,
    borderRadius?: number,
    width?: number,
    color?: string
}

export default function GeneralButton(props: Props) {

    return (
        <TouchableOpacity style={{backgroundColor: props.backgroudColor, padding: props.padding, borderRadius: props.borderRadius, width: props.width}} onPress={props.click}>
            <Text style={{textAlign: "center", color: props.color ? props.color : Colors.dark, fontSize: props.fontSize, fontWeight: "500"}}>{props.name}</Text>
        </TouchableOpacity>
    )
}
