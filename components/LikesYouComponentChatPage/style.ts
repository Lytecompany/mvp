import { StyleSheet } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";

const styles = StyleSheet.create({
  circle: {
    width: 100, // Adjust size as per design
    height: 100,
    borderRadius: 100, // Makes it a perfect circle
    overflow: "hidden", // Ensures the image stays within the circle
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    borderWidth: 3, // Highlight border width
    borderColor: "#FF798D", // Highlight color (pink/red)
  },
  image: {
    width: 70,
    height: 70,
    //resizeMode: "cover", // Ensure the image covers the circle
    borderRadius: 35,
  },
});

export default styles;
