import { View, Text, Image, ImageBackground } from 'react-native'


const FaqScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

            <Image
                source={require("../bgIllustrations/Ifaq.png")}
                style={{ width: 300, height: 250 }}
            />

            <Text style={{ fontSize: 24 }}>
                FAQ Screen
            </Text> 

        </View>
    )
}

export default FaqScreen