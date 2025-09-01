import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Props: name (string), paragraph (string)
const PostWelcome = ({ name, paragraph }: any) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Welcome, {name}!</Text>
      <Text style={styles.paragraph}>{paragraph}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff", // Match header color if you want seamless look
    padding: 15,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray", // text color to contrast with green
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: "gray",
  },
});

export default PostWelcome;
