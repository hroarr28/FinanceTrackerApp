import { StyleSheet } from 'react-native';

const modalStyles = StyleSheet.create({

modal: {
    borderRadius: 20,
  },
  modalBackground: {
    backgroundColor: "#001B48",
    width: "85%",
    height: "80%",
    padding: 20,
    borderRadius: 20,
    marginTop: 80,
    
  },
  modalBackdrop: {
    height: "100%",
    width: "100%",

    position: 'absolute', // Set the content to the absolute position
    backgroundColor: 'red',
  
  
  }
});

export default modalStyles;