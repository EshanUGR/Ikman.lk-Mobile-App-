import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface Props {
  firstIcon: keyof typeof MaterialIcons.glyphMap;
  firstLabel: string;
  secondIcon: keyof typeof MaterialIcons.glyphMap;
  secondLabel: string;
  thirdIcon: keyof typeof MaterialIcons.glyphMap;
}

const ThreeColumnRow: React.FC<Props> = ({
  firstIcon,
  firstLabel,
  secondIcon,
  secondLabel,
  thirdIcon,
}) => {
  return (
    <View style={styles.container}>
      {/* First Box */}
      <View style={[styles.box, styles.rightBorder]}>
        <MaterialIcons name={firstIcon} size={20} color="#149777" />
        <Text style={styles.label}>{firstLabel}</Text>
      </View>

      {/* Second Box */}
      <View style={[styles.box, styles.rightBorder]}>
        <MaterialIcons name={secondIcon} size={20} color="#149777" />
        <Text style={styles.label}>{secondLabel}</Text>
      </View>

      {/* Third Box (half height, icon only) */}
      <View style={styles.smallBox}>
        {/* <MaterialIcons name="grip-lines-vertical" size={16} color="black" /> */}

        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="grip-lines-vertical" size={16} color="#149777" />
          <FontAwesome5 name="grip-lines-vertical" size={16} color="#149777" />
        </View>
      </View>
    </View>
  );
};

export default ThreeColumnRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "gray",
    borderRadius: 5,
    overflow: "hidden",
  },
  box: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  rightBorder: {
    borderRightWidth: 0.2,
    borderRightColor: "gray",
  },
  label: {
    marginLeft: 6,
    fontSize: 14,
    color: "gray",
  },
  smallBox: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
});
