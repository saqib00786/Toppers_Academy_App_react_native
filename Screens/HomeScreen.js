import { View, Text,Image } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={{ flex : 1,alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../bgIllustrations/Ihome.png")}
          style={{ width: 300, height: 300 }}
        />
            <Text style={{ fontSize: 24 }}>
                Home Screen
            </Text>
        </View>
    )
}

export default HomeScreen