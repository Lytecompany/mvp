import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import HeaderTitleUserCreation from "@/components/HeaderTitleUserCreation";
import OtpField from "@/components/OtpInputUserCreation";
import InputField from "@/components/InputFieldUserCreation";
import { GENDER_OPTIONS, STAR_SIGN } from "@/constants/Data";
import UnitToggle from "@/components/ToggleButtonUserCreation";
import ProfileCircle from "@/components/LikesYouComponentChatPage";


const UserCreate = () => {
  /*const [selectedGender, setSelectedGender] = useState(STAR_SIGN[0]);*/
  
  return (
    <View style={styles.container}>
      <ProfileCircle imageSource= {require("../../../assets/images/2.png")} isHighlighted = {true}/>
      <ProfileCircle imageSource= {require("@/assets/images/2.png")} isHighlighted = {true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#FFF",
  },
});


export default UserCreate