

import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  // Background color for screens
  screenBackground: {
    backgroundColor: "#001B48",
    height: "100%",
  },

  // Text styles
  text: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
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
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#02457A",
    borderRadius: 20,
    color: "#D6E8EE",
    fontSize: 20,
    textAlign: "center",
  },

});

export default commonStyles;
