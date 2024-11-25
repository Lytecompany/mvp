import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16, // Space below the input field
  },
  input: {
    height: 52, // Input height
    borderWidth: 1, // Border around the input
    borderColor: '#000', // Black border
    borderRadius: 10, // Rounded corners
    paddingHorizontal: 13, // Horizontal padding inside the input
    fontSize: 25, // Font size for input text
    fontFamily: 'Righteous', // Use Righteous Regular font
    color: '#000', // Text color,
    width: 319,
    textAlign: 'left',
    fontWeight: 400,
    lineHeight: 27,
    
  },
  errorText: {
    marginTop: 4,
    color: '#F00', // Red for error message
    fontSize: 12, // Small font size for error message
    fontFamily: 'Poppins_400Regular', // Use Poppins font
  },
});

export default styles;
