import { Text, View } from "react-native";
import '../global.css'
import { SafeAreaView } from "react-native-safe-area-context";
import ThreeColumnRow from "@/components/threecolumnrow";
import CustomNavbar from "@/components/customnavbar";
export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomNavbar
        logo={require("@/assets/images/logo.jpeg")} // Your logo
        totalAds={380739} // Example total ads
        onSavedPress={() => console.log("Saved icon pressed")}
      />

      <ThreeColumnRow
        firstIcon="location-on"
        firstLabel="Location"
        secondIcon="category"
        secondLabel="Category"
        thirdIcon="navigate-next"
      />
    </SafeAreaView>
  );
}
