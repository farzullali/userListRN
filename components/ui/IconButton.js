import { View, Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({size, name, color, style, onPress}){
    return <View>
        <Pressable onPress={onPress}>
            <Ionicons name={name} size={size} color={color} style={style}/>
        </Pressable>
    </View>
}

export default IconButton;

const styles = StyleSheet.create({

});