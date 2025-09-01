// components/AccountRow.tsx
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  iconName?: string; // optional
  label: string;
  onPress?: () => void;
  backgroundColor?: string;
}

const AccountRow: React.FC<Props> = ({
  iconName,
  label,
  onPress,
  backgroundColor = "#fff",
}:any) => {
  // Define which labels need special margins
  // key = label, value = {marginTop, marginBottom}
  const specialMargins: Record<
    string,
    { marginTop?: number; marginBottom?: number }
  > = {
    // "": { marginTop: 10, marginBottom: 10 }, // top & bottom
    "Phone Numbers": { marginBottom: 8 }, // only bottom
    "My Profile": { marginBottom: 8}, // only bottom
    "Log Out": { marginTop: 8 }, // only top
  };

  const marginStyle = specialMargins[label] || {};

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor,
        padding: 11,
        borderWidth: 0.2,
        borderColor: "#ccc",
        ...marginStyle, // apply dynamic margins
      }}
    >
      {iconName && <MaterialIcons name={iconName} size={28} color="#D3D3D3" />}
      <Text
        style={{
          fontSize: 19,
          fontWeight: "400",
          marginLeft: iconName ? 30 : 0,
          color: "gray",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default AccountRow;
