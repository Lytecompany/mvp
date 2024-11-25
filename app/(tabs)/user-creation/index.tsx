import { View, Text, StyleSheet } from "react-native";
import React from "react";

const UserCreate = () => {
  return (
    <View>
      <Text>UserCreate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 82, // Top padding to avoid overlap with status bar
    padding: 37,
    backgroundColor: '#FFF',
  },
});


export default UserCreate