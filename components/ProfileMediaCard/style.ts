
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: 370, // Card width
    height: 277, // Card height
    borderRadius: 20, // Rounded corners for the card
    overflow: "hidden", // Ensure child elements respect the rounded corners
    marginBottom: 20,
  },
  media: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Ensure the caption is at the bottom
  },
  mediaImage: {
    borderRadius: 20, // Rounded corners for media
  },
  gradientOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "40%", // Adjust this to control the gradient size
  },
  captionText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Righteous',
    padding: 12,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default styles;
