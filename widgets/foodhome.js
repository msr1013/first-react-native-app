import React from "react";
import { View, Text, StyleSheet, ProgressViewIOSComponent, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constant/color";
import { CardView, ListName, Menulist } from "../comp/menu.js";

const FoodHome = () => {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.home}>
                    <View style={styles.location}>
                        <Ionicons name='location' size={30} color='brown' />
                        <Text style={{ fontSize: 10, padding: 5 }}>Lalitpur,Patan Darbar</Text>
                    </View>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, padding: 5 }}>Find what to Eat?</Text>
                        <Ionicons name='search' size={30} color='gray' />
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 20 }}>
                        Hot Picks Today
                </Text>
                    <View style={styles.m}>
                        <CardView
                            title='Momo'
                            imageSource={require('../assets/momo.png')}
                            amount='$20'
                            color={Color.lightYellow} />
                    </View>
                    <View style={styles.m}>
                        <CardView
                            title='Momo'
                            imageSource={require('../assets/momo.png')}
                            amount='$20'
                            color={Color.lightBlue} />
                    </View>


                    <View style={styles.m}>
                        <ListName icon='pizza-outline' txt='Italian Pizza' />
                        <ListName icon='fast-food-outline' txt='Coke n Burger' />
                        <ListName icon='beer-outline' txt='Beers' />

                    </View>

                    <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 20 }}>
                        Other Food
                    </Text>
                    <View>
                        <Menulist imagesource={{
                            uri:
                                'https://images.squarespace-cdn.com/content/v1/54b04776e4b0978f55a264b3/1592191774528-EDROC3VGMMQ69Z0BIX26/ke17ZwdGBToddI8pDm48kLcCyqm59C3feZHaRXjsmSF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMzCLa7uFkdv2vMekBxfSUkxklzQQsKyEKCsoXqT_uq_OYcE9zvKwG2IPkTOl2cn5/vnyc-burger.png',

                        }}
                        />
                    </View>




                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 2,
    },
    home: {
        flex: 15,
        padding: 10,
        margin: 15,
    },
    location: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    search: {
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: Color.lightesGray,
        borderRadius: 50,
    },
    m: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#dee1e3",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default FoodHome;