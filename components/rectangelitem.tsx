import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface RectangleItemProps {
  text: string;
  onPress?: () => void;
  backgroundColor?: string;
  iconName?: string; // default arrow
}

const RectangleItem: React.FC<RectangleItemProps> = ({
  text,
  onPress,
  backgroundColor = "#f0f0f0",
  iconName = "arrow-forward-ios",
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
      <MaterialIcons name={iconName} size={24} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:0,
    marginLeft:10,
    marginRight:10,
    alignItems: "center",
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
 borderWidth:0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // for Android shadow
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
  },
});

export default RectangleItem;
