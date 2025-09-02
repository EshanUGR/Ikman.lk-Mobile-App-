// components/SearchRow.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface SearchRowProps {
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconColor?: string;
  labelLeft: string;
  labelLeftColor?: string;
  labelLeftSize?: number;
  labelRight: string;
  labelRightColor?: string;
  labelRightSize?: number;
  onLeftPress?: () => void; // left button click
  onRightPress?: () => void; // right button click
}



const SearchRow: React.FC<SearchRowProps> = ({
  iconName,
  iconColor = "#000",
  labelLeft,
  labelLeftColor = "#000",
  labelLeftSize = 16,
  labelRight,
  labelRightColor = "#555",
  labelRightSize = 14,
  onLeftPress,
  onRightPress,
}) => {









  return (
    <View style={styles.container}>
      {/* Left side: Icon + Label (clickable) */}
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={onLeftPress}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name={iconName}
          size={24}
          color={iconColor}
          style={{ marginRight: 8 }}
        />
        <Text style={{ color: labelLeftColor, fontSize: labelLeftSize }}>
          {labelLeft}
        </Text>
      </TouchableOpacity>

      {/* Right side Label (clickable) */}
      <TouchableOpacity onPress={onRightPress} activeOpacity={0.7}>
        <Text style={{ color: labelRightColor, fontSize: labelRightSize }}>
          {labelRight}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
