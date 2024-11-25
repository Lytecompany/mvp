import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 92, // Space between the header and next elements
    paddingHorizontal: 0, // Consistent padding
  },
  header: {
    fontSize: 30, // Header font size
    fontWeight: 700, // Bold text
    color: '#000', // Black text color
    marginBottom: 13, // Space below the header
    fontFamily: 'Poppins_700Bold', // Custom font
    fontStyle: 'normal',
    lineHeight: 35,

  },
  title: {
    fontSize: 12, // Title font size
    fontWeight: '400', // Regular weight
    color: '#8A8A8A', // Gray text color
    fontFamily: 'Montserrat_400Regular', // Custom font
    lineHeight: 18, // Line height for readability
    fontStyle: 'normal',
  },
});

export default styles;
