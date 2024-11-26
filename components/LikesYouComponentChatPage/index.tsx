import React from "react";
import { View, Image, StyleProp, ImageStyle } from "react-native";
import styles from "./style";

interface ProfileCircleProps {
  imageSource: string; // URL or path to the profile picture
  isHighlighted?: boolean; // Highlight with border if true
  imageStyle?: StyleProp<ImageStyle>; // Custom styling for the image
}

const ProfileCircle: React.FC<ProfileCircleProps> = ({
  imageSource,
  isHighlighted = false,
  imageStyle,
}) => {
  return (
    <View style={[styles.circle, isHighlighted && styles.highlight]}>
      <Image source={{ uri: imageSource }} style={[styles.image, imageStyle]} />
    </View>
  );
};

export default ProfileCircle;
