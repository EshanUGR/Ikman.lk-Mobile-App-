import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  leftText: string;
  rightText: string;
  iconName: string;
}

const ThreePartRow: React.FC<Props> = ({ leftText, rightText, iconName }) => {
  return (
    <View style={styles.container}>
      {/* Left Paragraph */}
      <Text style={styles.text}>{leftText}</Text>

      {/* Middle Icon */}
    
  <Text style={{ fontSize: 24, color: "#87CEEB", marginHorizontal: 5 }}>|</Text>



      {/* Right Paragraph */}
      <Text style={styles.text}>{rightText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // center items horizontally
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  text: {
    fontSize: 12,
    color: "#87CEEB",
    flex: 1, // each text takes equal space
    textAlign: "center", // keep text centered in its space
    fontWeight: "600",
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default ThreePartRow;
