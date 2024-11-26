import React from "react";
import { View, Text, Image, StyleProp, ViewStyle, ImageStyle } from "react-native";
import styles from "./styles";

interface ChatItemProps {
  name: string; // Name of the person in the chat
  message: string; // Last message in the chat
  profileImage?: string; // Optional profile image URL or local path
  containerStyle?: StyleProp<ViewStyle>; // Additional styles for the container
  imageStyle?: StyleProp<ImageStyle>; // Additional styles for the image
}

const ChatItem: React.FC<ChatItemProps> = ({
  name,
  message,
  profileImage,
  containerStyle,
  imageStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Profile image */}
      <Image
        source={
          profileImage
            ? { uri: profileImage } // Remote image
            : require("../../assets/images/2.png") // Default local image
        }
        style={[styles.image, imageStyle]}
      />
      {/* Text container */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default ChatItem;
