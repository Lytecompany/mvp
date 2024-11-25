import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: "top",
      alignItems: "center",
    },
    button: {
      width: 45,
      height: 45,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8, // Rounded corners
      position: 'absolute',
      top: 100,
      left: 100,
    },
    iconStyle: {
      textShadowColor: "black", // Shadow color
      textShadowOffset: { width: 1, height: 1 }, // Shadow position
    },
  });
  
  export default styles;