// components/CustomButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  backgroundColor?: string; // Button background
  textColor?: string; // Button text color
  onPress?: () => void; // Optional click handler
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  backgroundColor = "#4A90E2", // Default button color
  textColor = "#FFFFFF", // Default text color
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    alignItems: "center",
    borderWidth:0.2,
    marginVertical: 5,
    marginLeft:14,
    marginRight:14,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
