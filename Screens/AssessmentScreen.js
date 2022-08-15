import { View, Text,Image } from 'react-native'

const AssessmentScreen = () => {
    return (
        <View style={{ flex : 1,alignItems: "center", justifyContent: "center" }}>
        <Image
        source={require("../bgIllustrations/Iassessment.png")}
        style={{ width: 250, height: 250 }}
      />
          <Text style={{ fontSize: 24 }}>
                Assessment Screen
            </Text>
        </View>
    )
}

export default AssessmentScreen