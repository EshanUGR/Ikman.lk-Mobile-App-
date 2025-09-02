import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import AccountRow from "@/components/accountrow";

import AccountNameRow from "@/components/accountnamerow";
const Account = () => {
   const userName = "Ravindu Eshan";
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
      {/* Top Green Row */}
      <View style={{ backgroundColor: "#D3D3D3" }}>
        <View
          style={{
            backgroundColor: "#149777",
            padding: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Account
            </Text>
            <Feather name="settings" size={24} color="white" />
          </View>
        </View>

        <AccountNameRow name={userName} backgroundColor="#D3D3D3" height={80} />

        <AccountRow iconName="article" label="My Ads" backgroundColor="#fff" />
        <AccountRow
          iconName="card-membership"
          label="My memberships"
          backgroundColor="#fff"
        />
        <AccountRow iconName="star" label="Favorites" backgroundColor="#fff" />
        <AccountRow
          iconName="bookmark"
          label="Saved searches"
          backgroundColor="#fff"
        />
        <AccountRow
          iconName="phone"
          label="Phone Numbers"
          backgroundColor="#fff"
        />
        <AccountRow
          iconName="person"
          label="My Profile"
          backgroundColor="#fff"
        />

        <AccountRow
          iconName="safety-check"
          label="Stay Safe"
          backgroundColor="#fff"
        />
        <AccountRow
          iconName="questioncircle"
          label="FAQ"
          backgroundColor="#fff"
        />
        <AccountRow
          iconName="sell"
          label="How to sell fast?"
          backgroundColor="#fff"
        />
        <AccountRow iconName="more-horiz" label="More" backgroundColor="#fff" />
        <AccountRow iconName="logout" label="Log Out" backgroundColor="#fff" />
      </View>
    </SafeAreaView>
  );
};

export default Account;
