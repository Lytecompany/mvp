import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './style';

interface HeaderTitleProps {
  header: string; // The main header text
  title: string; // The subtitle or description
  containerStyle?: StyleProp<ViewStyle>; // Optional custom container styles
  headerStyle?: StyleProp<TextStyle>; // Optional custom header styles
  titleStyle?: StyleProp<TextStyle>; // Optional custom title styles
}

const HeaderTitleUserCreation: React.FC<HeaderTitleProps> = ({
  header,
  title,
  containerStyle,
  headerStyle,
  titleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.header, headerStyle]}>{header}</Text>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default HeaderTitleUserCreation;
