import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: 370, // Card width
    height: 267, // Card height
    backgroundColor: "#FDE3C8", // Background color for the card
    borderRadius: 20, // Rounded corners for the card
    padding: 10,
    overflow: "hidden", // Ensure child elements respect the rounded corners
    alignItems: "center",
    justifyContent: "flex-end", // Push the caption text to the bottom
  },
  waveformContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    width: 300,
    height: 50,
    marginBottom: 80,


  },
  waveformBar: {
    width: 8,
    height: "100%",
    backgroundColor: "#FF8C6C", // Set color to visually match your theme
    borderRadius: 4,
    marginHorizontal: 4,
  },
  playPauseButton: {
    position: "absolute",
    right: 30, // Position on the right side of the card
    bottom: 40, // Align with the bottom of the card
  },
  captionText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#9B4304",
    textAlign: "left",
    left: 5,
    bottom: 0,
    width: "100%",
  },
});

export default styles;
