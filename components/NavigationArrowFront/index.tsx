import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import Octicons from '@expo/vector-icons/Octicons'; // Import AntDesign from @expo/vector-icons
import styles from "./style";

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

  export default NavigationArrowFront;