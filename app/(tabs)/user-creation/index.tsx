import {  View, Text, StyleSheet, Image, ScrollView, Button, Modal, StatusBar} from "react-native";
import { Stack } from "expo-router";
import React, { useState } from "react";
import HeaderTitleUserCreation from "@/components/HeaderTitleUserCreation";
import OtpField from "@/components/OtpInputUserCreation";
import InputField from "@/components/InputFieldUserCreation";
import { GENDER_OPTIONS, STAR_SIGN } from "@/constants/Data";
import UnitToggle from "@/components/ToggleButtonUserCreation";
import ProfileCircle from "@/components/LikesYouComponentChatPage";
// import Card from "@/components/ChatCard";
import ChatItem from "@/components/ChatItem";
import ProfileCard from "@/components/ProfilePicturesCard";
import { GestureHandlerRootView } from 'react-native-gesture-handler';




const UserCreate = () => {
const photo1 = require('@/assets/images/2.png');
const photo2 = require('@/assets/images/StarSignImages/gemini.png');
const photo3 = require('@/assets/images/StarSignImages/aries.png');
const photo4 = require('@/assets/images/StarSignImages/cancer.png');
  const [isModalVisible, setModalVisible] = useState(false);
  
  return (
    // <View style = {styles.container}>
    //     <View style = {styles1.container}>
    //     <ProfileCircle isHighlighted = {true}/>
    //     <ProfileCircle/>
    //     <ProfileCircle/>
    //     </View>
    //     <Card title="Chats">
    //       {chats.map((chat, index) => (
    //         <ChatItem key={index} name={chat.name} message={chat.message} />
    //       ))}
    //     </Card> 
    // </View>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ScrollView>
      <View style = {styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ProfileCard name="Rohan" age={23} pronouns="He/Him" 
      photoSource={[photo1, photo2, photo3, photo4]}
      />
        </View>
    </ScrollView>
    </GestureHandlerRootView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    color: "FEDEC9",
    paddingHorizontal: 9

  },
});


export default UserCreate