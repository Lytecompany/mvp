import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Align items vertically in the center
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 0, // Horizontal padding
    borderBottomWidth: 1, // Bottom border
    borderBottomColor: "#F5F4F4", // Light gray border

  },
  image: {
    width: 60, // Profile image width
    height: 60, // Profile image height
    borderRadius: 60, // Makes the image circular
    marginRight: 11, // Space between the image and text'
  },
  textContainer: {
    flex: 1, // Take up remaining space
  },
  name: {
    fontSize: 15, // Slightly larger font size for name
    fontWeight: 700, // Bold font for name
    color: "#000", // Black text
    marginBottom: 4, // Space between name and message
    fontFamily: "Montserrat",
  },
  message: {
    fontSize: 12, // Slightly smaller font size for message
    color: "#000", // Gray text color for message
    fontWeight: 300,
    fontFamily: 'Montserrat',
  },
});

export default styles;
