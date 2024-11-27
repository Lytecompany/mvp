import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingLeft: 15,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 16,
    marginTop: 16,
    width: 370,
    height: 279,
  },
  row: {
    flexDirection: "row",
    //flexWrap: "wrap", // Allow wrapping if items exceed row space
    alignItems: "center",
    justifyContent: "flex-start", // Align all items to the start
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    //width: "100%", // Make all items occupy roughly half of the row (ensures even spacing)
    marginVertical: 5, // Add some space between items vertically for better consistency
  },
  itemFull: {
    flexDirection: "row",
    alignItems: 'center',
    width: "100%", // Occupy the full row width
    marginBottom: 12,
  },
  icon: {
    fontSize: 20, // Uniform size for the icon
    color: "#555", // Gray color for consistency
    marginRight: 8,
  },
  iconImage: {
    width: 20, // Uniform width for image icons
    height: 20, // Uniform height for image icons
    resizeMode: "contain",
    marginRight: 8,
  },
  label: {
    fontSize: 15, // Font size for the text label
    color: "#000", // Black color for labels
    flexShrink: 1, // Prevent the label from growing beyond the item space
    wordWrap: 'break-word',
    marginRight: 16,
    fontFamily: 'Montserrat',
  },
});

export default styles;
