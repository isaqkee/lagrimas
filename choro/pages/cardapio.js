import { View, StyleSheet, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Dois() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Cardápio
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
    }

})