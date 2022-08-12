import { StatusBar } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight } from "react-native"

const DashBoard = ({navigation}) => {

    return (
        <View style={{
            flex: 3,
            flexDirection: 'column',
            width: '100%'
        }}>
            <View style={[HomeSheet.Container]}>
                <Image
                    source={require('../components/logo.png')}
                    style={[HomeSheet.logo]}
                />

            </View>

            <View style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* First Row  */}

                <View style={{ flexDirection: 'row' }}>
                    <View style={[HomeSheet.ItemContainer.firstContainer]}>

                        <TouchableOpacity style={[HomeSheet.ItemStyle, {
                            backgroundColor: '#E07A5F'
                        }]}
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Image
                                source={require('../components/home.png')}
                                style={[HomeSheet.ImageStyle]}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>Home</Text>
                    </View>

                    <View style={[HomeSheet.ItemContainer.secondContainer]}>
                        <TouchableOpacity style={[HomeSheet.ItemStyle, {
                            backgroundColor: '#8D99AE',
                        }]}
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('TimeTable')}

                        >
                            <Image
                                source={require('../components/timetable.png')}
                                style={[HomeSheet.ImageStyle]}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>Time Table</Text>
                    </View>
                </View>


                {/* Second Row  */}
                <View style={{ flexDirection: 'row' }}>
                    <View style={[HomeSheet.ItemContainer.firstContainer]}>
                        <TouchableOpacity style={[HomeSheet.ItemStyle, {
                            backgroundColor: '#F6BD60'
                        }]}
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Attandance')}
                        >
                            <Image
                                source={require('../components/attandence.png')}
                                style={[HomeSheet.ImageStyle]}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, }}>Attandance</Text>
                    </View>

                    <View style={[HomeSheet.ItemContainer.secondContainer]}>
                        <TouchableOpacity style={[HomeSheet.ItemStyle, {
                            backgroundColor: '#F4A261'
                        }]}
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Assessment')}
                        >
                            <Image
                                source={require('../components/assesment.png')}
                                style={[HomeSheet.ImageStyle]}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>Assessment</Text>
                    </View>
                </View>


                {/* Third Row  */}
                <View style={{ flexDirection: 'row' }}>
                    <View style={[HomeSheet.ItemContainer.firstContainer]}>
                        <TouchableOpacity style={[HomeSheet.ItemStyle, {
                            backgroundColor: '#FFB5A7'
                        }]}
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Event')}
                        >
                            <Image
                                source={require('../components/event.png')}
                                style={[HomeSheet.ImageStyle]}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, }}>Events</Text>
                    </View>

                    <View style={[HomeSheet.ItemContainer.secondContainer]}>
                        <TouchableOpacity style={[HomeSheet.ItemStyle, {
                            backgroundColor: '#219EBC'
                        }]}
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('FAQ')}
                        >
                            <Image
                                source={require('../components/faq.png')}
                                style={[HomeSheet.ImageStyle]}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>FAQ</Text>
                    </View>
                </View>


            </View>

        </View>
    )
}


const HomeSheet = StyleSheet.create({
    ItemStyle: {
        width: 120,
        height: 120,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,

    },
    ImageStyle: {
        width: 60,
        height: 60
    },

    ItemContainer: {
        firstContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        secondContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginStart: 40
        }
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 60
    },
    Container: {
        flex: 1,
        backgroundColor: '#E29578',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default DashBoard