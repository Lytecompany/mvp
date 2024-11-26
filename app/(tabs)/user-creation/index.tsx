import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import HeaderTitleUserCreation from "@/components/HeaderTitleUserCreation";
import OtpField from "@/components/OtpInputUserCreation";
import InputField from "@/components/InputFieldUserCreation";
import { GENDER_OPTIONS, STAR_SIGN } from "@/constants/Data";
import UnitToggle from "@/components/ToggleButtonUserCreation";
import ProfileCircle from "@/components/LikesYouComponentChatPage";
import Card from "@/components/ChatCard";
import ChatItem from "@/components/ChatItem";



const UserCreate = () => {
  const chats = [
    { name: "Rohan Bhatia", message: "Hey Sexy" },
    { name: "Vedant Gandhi", message: "Hey baby doll, Wanna come over?" },
    { name: "Vaibhav K", message: "Hey I wanna open up tonight" },
    { name: "Nihal S", message: "Can't talk today" },
    { name: "Fenil", message: "What is Strategy?" },
    { name: "Asit", message: "Have a doubt, can you join?" },
  ];
  
  return (
    <View style={styles.container}>
      <View style = {styles1.container}>
      <ProfileCircle isHighlighted = {true}/>
      <ProfileCircle/>
      <ProfileCircle/>
      </View>
      <Card title="Chats">
        {chats.map((chat, index) => (
          <ChatItem key={index} name={chat.name} message={chat.message} />
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 11,
    paddingVertical: 10,
    backgroundColor: "rgba(254, 214, 187, 0.80)", // Fallback color
    borderTopColor: "rgba(230, 230, 230, 0.80)",
    borderBottomColor: "rgba(230, 230, 230, 0.80)",
    shadowColor: "#FDE3C8",
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 0.9 }, 
  },
});

const styles1 = StyleSheet.create({
  container: {
    flexDirection: "row",},
  profileCircle: {
    marginHorizontal: 10
  },

  }
);



export default UserCreate