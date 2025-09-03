import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface AdProps {
  id: string;
  image: string; // image URL
  description: string;
  price: string;
  icon1: keyof typeof MaterialIcons.glyphMap;
  icon2: keyof typeof MaterialIcons.glyphMap;
  descColor?: string;
  priceColor?: string;
  time?: string; // e.g. "Just now"
}

interface AdGridProps {
  ads: AdProps[];
}

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const itemWidth = screenWidth / numColumns;

const AdCard: React.FC<{ item: AdProps }> = ({ item }:any) => {
  return (
    <View style={styles.card}>
      {/* Image */}
      <Image
        source={
          typeof item.image === "string" ? { uri: item.image } : item.image
        }
        style={styles.image}
        resizeMode="cover"
      />

      {/* Description */}
      <Text
        style={[styles.desc, { color: item.descColor || "#333" }]}
        numberOfLines={2}
      >
        {item.description}
      </Text>

      {/* Price row */}
      <View style={styles.row}>
        <Text style={[styles.price, { color: item.priceColor || "#000" }]}>
          {item.price}
        </Text>

        <MaterialIcons
          name={item.icon2}
          size={14}
          color={item.priceColor || "#000"}
          style={{ marginTop: 4 }}
        />

        <MaterialIcons
          name={item.icon1}
          size={16}
          color={item.priceColor || "#000"}
          style={{ marginTop: 4 }}
        />
      </View>

      {/* Post time */}
      {item.time && <Text style={styles.time}>{item.time}</Text>}
    </View>
  );
};


const AdGrid: React.FC<AdGridProps> = ({ ads }) => {
  return (
    <FlatList
      data={ads}
      renderItem={({ item }) => <AdCard item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default AdGrid;

const styles = StyleSheet.create({
  card: {
    width: itemWidth,
    padding: 8,
    borderWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 8,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    // Android Shadow
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180, // fixed height, keeps grid uniform
    borderRadius: 4,
    marginBottom: 6,
  },
  desc: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "500"
  },
  row: {
    flexDirection: "column",
    alignItems: "left",
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  time: {
    fontSize: 10,
    color: "gray",
    textAlign: "right",
    marginTop: 4,
  },
});
