import React from 'react';
import { View, TextInput, Text, StyleProp, ViewStyle, TextInputProps } from 'react-native';
import styles from './style';

interface OtpFieldProps extends TextInputProps {
  placeholder: string; // Placeholder for the input field
  value: string; // Value of the input
  onChangeText: (text: string) => void; // Function to update the value
  containerStyle?: StyleProp<ViewStyle>; // Custom styles for the container
  errorMessage?: string; // Error message to display below the input
}

const OtpField: React.FC<OtpFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  errorMessage,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#EDEDED" // Light gray for placeholder text
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default OtpField;
