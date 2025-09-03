import { Text, View } from "react-native";
import '../global.css'
import { SafeAreaView } from "react-native-safe-area-context";
import ThreeColumnRow from "@/components/threecolumnrow";
import CustomNavbar from "@/components/customnavbar";
import AdGrid from "@/components/postcard";
export default function Index() {


  
const ads = [
  {
    id: "1",
    image: require("@/assets/images/Home/img1.png"), // portrait
    description: "Dog Cages Gampaha,Animal Accessories",
    price: "Rs.60,000",
    icon1: "verified",
    icon2: "schedule",
    descColor: "gray",
    priceColor: "#149777",
    time: "Just now",
  },
  {
    id: "2",
    image: require("@/assets/images/Home/img2.png"), // portrait
    description: "Tibetan Terrier Puppies Kegalle Pets",
    price: "Rs.30,000",
    icon1: "verified",
    icon2: "schedule",
    descColor: "gray",
    priceColor: "#149777",
    time: "Just now",
  },
  {
    id: "3",
    image: require("@/assets/images/Home/img3.png"), // portrait
    description:
      "Seylan Residences Apartement for Rent In Colombo 03-77OU Beds3 ,Baths3",
    price: "Rs.675,000/month",
    icon1: "verified",
    icon2: "schedule",
    descColor: "gray",
    priceColor: "#149777",
    time: "Just now",
  },
  {
    id: "4",
    image: require("@/assets/images/Home/img4.png"), // portrait
    description: "iPhone 14 128 (Used) Colombo Mobile Phones",
    price: "Rs.126,900",
    icon1: "verified",
    icon2: "schedule",
    descColor: "gray",
    priceColor: "#149777",
    time: "Just now",
  },
];
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

      

      <AdGrid ads={ads} />
    </SafeAreaView>
  );
}
