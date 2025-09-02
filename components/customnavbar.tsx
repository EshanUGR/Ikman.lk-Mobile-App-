// components/CustomNavbar.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomNavbarProps {
  logo: any; // require() or URL
  totalAds: number;
  onSavedPress?: () => void;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({
  logo,
  totalAds,
  onSavedPress,
}) => {
  return (
    <View style={styles.navbar}>
      {/* Left side: Logo + total ads */}
      <View style={styles.leftContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.totalAds}>{totalAds} results</Text>
      </View>

      {/* Right side: Saved icon + label */}
      <TouchableOpacity
        style={styles.rightContainer}
        onPress={onSavedPress}
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="bookmark" size={22} color="#D3D3D3" />
          <Text style={[styles.savedLabel, { marginLeft: 5 }]}>
            Save search
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomNavbar;

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    backgroundColor: "#149777",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  leftContainer: {
    alignItems: "flex-start",
  },
  logo: {
    width: 80,
    height: 60,
    marginBottom: 4,
  },
  totalAds: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    marginTop: -28,
  },
  rightContainer: {
    alignItems: "center",
  },
  savedLabel: {
    color: "white",
    fontSize: 14,
    marginTop: 2,
  },
});
