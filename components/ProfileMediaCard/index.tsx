import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";

type MediaCardProps = {
  mediaSource: any; // Source for the image or video
  caption: string;  // Caption text at the bottom
};

const ProfileMediaCard: React.FC<MediaCardProps> = ({ mediaSource, caption }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={mediaSource}
        style={styles.media}
        imageStyle={styles.mediaImage}
      >
        {/* Gradient Overlay */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradientOverlay}
        />
        {/* Caption */}
        <Text style={styles.captionText}>{caption}</Text>
      </ImageBackground>
    </View>
  );
};

export default ProfileMediaCard;
