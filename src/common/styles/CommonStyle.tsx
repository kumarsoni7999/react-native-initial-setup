import { StyleSheet } from "react-native";
import { BLACK, WHITE } from "../colors/Colors";

const CommonStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: WHITE
    },
    text_white:{
        color: WHITE
    },
    text_black:{
        color: BLACK
    }
})

export default CommonStyle