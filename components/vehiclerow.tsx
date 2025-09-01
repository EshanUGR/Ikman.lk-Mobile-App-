import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface VehicleItem {
  name: string;
  icon: any; // local image require
}

const VehicleRow = ({ items }: { items: VehicleItem[] }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.box}>
          <Image
            source={item.icon} // local asset
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          />
          <Text style={styles.label}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },
  box: {
    width: "30%", // 3 columns
    aspectRatio: 1,
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  label: {
    color: "#87CEEB",
    fontWeight: "500",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
});

export default VehicleRow;
