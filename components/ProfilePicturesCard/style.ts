// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//     height: 689,
//     width: 376,
//   },
//   image: {
//     width: 400,
//     height: 500,
//     resizeMode: "cover",


//   },
//   textContainer: {
//     padding: 18,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   pronouns: {
//     fontSize: 16,
//     color: '#666',
//   },
//   photoIndicatorContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   photoIndicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#ccc',
//     marginHorizontal: 3,
//   },
//   photoIndicatorActive: {
//     backgroundColor: '#ff6347',
//   },
// });

// export default styles;




import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 689, // Adjust the height as needed
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 15,
  },
  textContainer: {
    marginTop: 10,
  },
  name: {
    fontSize: 36,
    fontWeight: 600,
    color: '#fff',
    paddingHorizontal: 5,
    borderRadius: 5,
    fontFamily: "Montserrat",
  },
  pronouns: {
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 5,
    fontWeight: 600,
    borderRadius: 5,
    fontFamily: "Montserrat",
  },
  photoIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  photoIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C0C0C0',
    marginHorizontal: 3,
  },
  photoIndicatorActive: {
    backgroundColor: '#807C7C',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 15,
  },
  navButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;