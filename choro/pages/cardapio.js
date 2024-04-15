import { View, StyleSheet, Text, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Dois() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Cardápio - Isaqkeizin
                </Text>
                 </View>
                <View>
                    <Image style={ESTILO.image} source={require('../src/img/coxinha.jpg')}></Image>
                    <Text>
                        Coxinha - $2.00
                    </Text>
                    <Image style={ESTILO.image} source={require('../src/img/paodequeijo.jpg')}></Image>
                    <Text>
                        Pão de Quejio - $1.50
                    </Text>
                </View>
           
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: 'orange'
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 412,
        height: 240
    }

})