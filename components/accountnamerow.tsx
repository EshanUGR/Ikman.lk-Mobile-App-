// components/AccountNameRow.tsx
import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";

interface Props {
  name: string;
  backgroundColor?: string;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

const AccountNameRow: React.FC<Props> = ({
  name,
  backgroundColor = "gray",
  height = 70, // default height
  style,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor,
          height,
          marginTop: 0,
          justifyContent: "center",
          paddingHorizontal: 15,
        },
        style,
      ]}
    >
      <Text style={{ fontSize: 20, fontWeight: "400" ,color:"gray"}}>{name}</Text>
    </View>
  );
};

export default AccountNameRow;
