import { View, Text,Image} from 'react-native'

const AttandanceScreen = () => {
    return (
        <View style={{ flex : 1,alignItems: "center", justifyContent: "center" }}>
        <Image
        source={require("../bgIllustrations/Iattandance.png")}
        style={{ width: 300, height: 350 }}
      />
          <Text style={{ fontSize: 24 }}>
                Attandance Screen
            </Text>
        </View>
    )
}

export default AttandanceScreen