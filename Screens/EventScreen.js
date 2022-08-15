import { View, Text,Image } from 'react-native'

const EventScreen = () => {
    return (
        <View style={{ flex : 1,alignItems: "center", justifyContent: "center" }}>
        <Image
        source={require("../bgIllustrations/Ievents.png")}
        style={{ width: 300, height: 250 }}
      />
          <Text style={{ fontSize: 24 }}>
                Event Screen
            </Text>
        </View>
    )
}

export default EventScreen