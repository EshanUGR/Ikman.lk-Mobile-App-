import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

interface Category {
  id: string;
  name: string;
  image: any; // require() or URL
}

interface CategoryGridDisplayProps {
  categories: Category[];
  onCategoryPress?: (category: Category) => void; // Function called on click
}

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / numColumns;

const CategoryGridDisplay: React.FC<CategoryGridDisplayProps> = ({
  categories,
  onCategoryPress,
}) => {
  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onCategoryPress?.(item)}
      activeOpacity={0.7}
    >
      <Image source={item.image} style={styles.icon} resizeMode="contain" />
      <Text style={styles.label}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoryGridDisplay;

const styles = StyleSheet.create({
  itemContainer: {
    width: itemWidth,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 0.7,
    borderColor: "#eee",
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "480",
    color: "#888",
  },
});
