

import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({

  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",

  },
  modalContent: {
    height: 100,
    position: 'absolute', // Set the content to the absolute position
    bottom: 0, // Place the content at the bottom of the container
    left: 0, // Place the content on the left side of the container
    right: 0, // Place the content on the right side of the container
 },
  // Background color for screens
  screenBackground: {
    backgroundColor: "#001B48",
    height: "100%",
  },

  // Text styles
  text: {
    fontSize: 25,
    textAlign: "center",
    margin: 5,
    color: "#D6E8EE",
    },

    h2: {
      fontSize: 20,
      textAlign: "center",
      margin: 5,
      color: "#D6E8EE",
      },

    textLeft: {
      fontSize: 15,
      textAlign: "left",
      marginLeft: 50,
      color: "#D6E8EE",
      },

  // Button styles
  button: {
    backgroundColor: "#02457A",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },

  input: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#02457A",
    borderRadius: 20,

  },


});

export default commonStyles;
