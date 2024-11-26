import React from "react";
import { View, Text, StyleProp, ViewStyle, ScrollView } from "react-native";
import styles from "./styles";

interface CardProps {
  title: string; // The title to be displayed, e.g., "Chats"
  children: React.ReactNode; // Content to be rendered inside the card
  containerStyle?: StyleProp<ViewStyle>; // Additional custom styles for the card
}

const Card: React.FC<CardProps> = ({ title, children, containerStyle }) => {
  return (
    <View style={[styles.cardContainer, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        <View style={styles.contentContainer}>{children}</View>
      </ScrollView>
    </View>
  );
};

export default Card;
