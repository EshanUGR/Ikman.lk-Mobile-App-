import { View, TextInput, StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchRow from "@/components/searchrow";
import CategoryGridDisplay from "@/components/categorygrid";

const Search = () => {

  const categories = [
    {
      id: "1",
      name: "Mobile",
      image: require("@/assets/images/Categories/phone.png"),
    },
    {
      id: "2",
      name: "Electronic",
      image: require("@/assets/images/Categories/tv.png"),
    },
    {
      id: "3",
      name: "Vehicles",
      image: require("@/assets/images/Categories/car.png"),
    },
    {
      id: "4",
      name: "Property",
      image: require("@/assets/images/Categories/property.png"),
    },
    {
      id: "5",
      name: "Home & Garden",
      image: require("@/assets/images/Categories/garden.png"),
    },
    {
      id: "6",
      name: "Animals",
      image: require("@/assets/images/Categories/dog.png"),
    },
    {
      id: "7",
      name: "Services",
      image: require("@/assets/images/Categories/service.png"),
    },
    {
      id: "8",
      name: "Business & Industry",
      image: require("@/assets/images/Categories/business.png"),
    },
    {
      id: "9",
      name: "Jobs",
      image: require("@/assets/images/Categories/suitcase.png"),
    },
    {
      id: "10",
      name: "Hobby,Sport & kids",
      image: require("@/assets/images/Categories/football.png"),
    },
    {
      id: "11",
      name: "Fashion & Beauty",
      image: require("@/assets/images/Categories/wrist-watch.png"),
    },
    {
      id: "12",
      name: "Essentials",
      image: require("@/assets/images/Categories/essentials.png"),
    },
    {
      id: "13",
      name: "Education",
      image: require("@/assets/images/Categories/graduation-hat.png"),
    },
    {
      id: "14",
      name: "Agriculture",
      image: require("@/assets/images/Categories/farm.png"),
    },
    {
      id: "15",
      name: "Work Overseas",
      image: require("@/assets/images/Categories/work-overseas.png"),
    },
    {
      id: "16",
      name: "Other",
      image: require("@/assets/images/Categories/other.png"),
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 0 }}>
      {/* Green Navbar */}
      <View style={styles.navbar}>
        {/* Search Input */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="What are you looking for?"
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
          {/* <MaterialIcons
            name="search"
            size={24}
            color="#555"
            style={{ marginRight: 0 }}
          /> */}
          <Ionicons
            name="search-circle-sharp"
            size={30}
            color="orange"
            style={{ marginRight: 0 }}
          />
        </View>
      </View>
      <SearchRow
        iconName="location-on"
        iconColor="#00FF7F" // orange icon
        labelLeft="All of Sri Lanka"
        labelLeftColor="#888" // blue
        labelLeftSize={18}
        labelRight="Change location"
        labelRightColor="#87CEEB" // green
        labelRightSize={14}
      />

      <CategoryGridDisplay categories={categories} />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#00FF7F",
    padding: 15,
    alignItems: "center", // Center content horizontally
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 28, // Rounded pill shape
    paddingHorizontal: 4,
    paddingVertical: 14,
    width: "90%", // Make the search bar smaller than navbar width
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
  },
});
