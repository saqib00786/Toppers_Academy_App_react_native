import { View, Text,Image } from 'react-native'

const TimeTableScreen = () => {
    return (
        <View style={{flex : 1, alignItems: "center", justifyContent: "center" }}>
        <Image
        source={require("../bgIllustrations/Itimetable.png")}
        style={{ width: 300, height: 200 }}
      />
          <Text style={{ fontSize: 24 }}>
                Time Table Screen
            </Text>
        </View>
    )
}

export default TimeTableScreen