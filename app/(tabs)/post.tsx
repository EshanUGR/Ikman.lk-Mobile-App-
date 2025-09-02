import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PostWelcome from '@/components/postwelcome';
import VehicleRow from '@/components/vehiclerow';
import RectangleItem from '@/components/rectangelitem';
import ThreePartRow from '@/components/posthreepart'
const Postadd = () => {
const items = [
  { name: "Car", icon: require("@/assets/images/car-wash.png") },
  { name: "Motorbike", icon: require("@/assets/images/motorbike.png") },
  { name: "Mobile Phones", icon: require("@/assets/images/phone.png") },
  { name: "Property", icon: require("@/assets/images/house.png") },
  { name: "Home & Garden", icon: require("@/assets/images/garden.png") },
  { name: "Jobs", icon: require("@/assets/images/suitcase.png") },
];



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
      <View style={{ backgroundColor: "#fff", marginBottom: 0, marginTop: 0 }}>
        <View
          style={{
            backgroundColor: "#00FF7F",
            padding: 15,
            marginBottom: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 0,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Post an ad
            </Text>
          </View>
        </View>

        <PostWelcome
          name="Ravindu Eshan"
          paragraph="Choose an option to below to post an ad"
        />

        <VehicleRow items={items} />
        <View style={{ marginTop: -50 }}>
          <RectangleItem
            text="Sell in other categories"
            backgroundColor="white"
            iconName="arrow-forward-ios"
          />
          <RectangleItem
            text="Look for something"
            backgroundColor="white"
            iconName="arrow-downward"
          />
        </View>

        <ThreePartRow
          leftText="Posting allowance"
          iconName="arrow-forward-ios"
          rightText="Posting rules"
        />
      </View>
    </SafeAreaView>
  );
}

export default Postadd