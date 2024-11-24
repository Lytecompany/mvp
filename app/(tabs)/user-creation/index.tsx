import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import HeaderTitleUserCreation from "@/components/HeaderTitleUserCreation";
import OtpField from "@/components/OtpInputUserCreation";
import InputField from "@/components/InputFieldUserCreation";
import { GENDER_OPTIONS, STAR_SIGN } from "@/constants/Data";


const UserCreate = () => {
  /*const [selectedGender, setSelectedGender] = useState(STAR_SIGN[0]);*/
  
  return (
    <View style={styles.container}>
      <Image source ={STAR_SIGN[2].image}/>
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