import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF", // White background for the card
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, // Rounded corners for the card
    padding: 17, // Padding inside the card
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset for elevation effect
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 8, // How blurry the shadow appears
    elevation: 4, // For Android shadow
    width: 370,
    height: 574,
    paddingVertical: 25,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 1, // Space between the title and content
    color: "#000", // Black text color
    fontFamily: "Poppins",
  },
  contentContainer: {
    marginTop: 1, // Space above the content
  },
});

export default styles;
