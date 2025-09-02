import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ChatProps {
  title: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconSize?: number;
  iconColor?: string;
  paragraph: string;
}

const ChatComponent: React.FC<ChatProps> = ({
  title,
  iconName,
  iconSize = 100,
  iconColor = "#4A90E2",
  paragraph,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
      <Text style={styles.paragraph}>{paragraph}</Text>
    </View>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff", // optional
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },
});
