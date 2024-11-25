import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import Octicons from '@expo/vector-icons/Octicons'; // Import AntDesign from @expo/vector-icons
import styles from "./style";


/* FRONT ARROW
const NavigationArrowFront = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Next page")}
      >
        
        <Octicons name="chevron-right" size={35} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "top",
    alignItems: "center",
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: "#FF8C6C", // Button background color
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

export default NavigationArrowFront;

*/
const NavigationArrowBack = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Previous page")}
        >
          
    
          <Octicons name="chevron-left" size={35} color="#FF8C6C" />
        </TouchableOpacity>
      </View>
    );
  };
  
 
  
  export default NavigationArrowBack;