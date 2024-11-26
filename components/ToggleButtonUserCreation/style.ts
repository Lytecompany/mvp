import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', // Align buttons horizontally
      justifyContent: 'center',
      textAlign: 'center',
      marginVertical: 20,
    },
    toggleButton: {
      paddingVertical: 18, // Vertical padding for the button
      paddingHorizontal: 63, // Horizontal padding
      borderRadius: 20, // Rounded corners
      marginHorizontal: 0, // Space between the buttons
      width: 150,
      height: 57,
    },
    activeButton: {
      backgroundColor: '#FDE3C8', // Active background color
    },
    inactiveButton: {
      backgroundColor: 'transparent', // Inactive button with no background
    },
    toggleText: {
      fontSize: 15,
      fontWeight: '700',
    },
    activeText: {
      color: '#DC5650', // Active text color
    },
    inactiveText: {
      color: '#DC5650', // Inactive text color
    },
  });
  
  export default styles;
