import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/girl.png")} // Change path to your image file
        style={styles.welcomeImage}
      />
      <Text style={styles.started}>The Best Music{"\n"}Collection </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  started: {
    color: "000000",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 10,
    marginTop: 15,
    marginLeft: 15,

    alignItems: "left",
    letterSpacing: 2,
  },
  welcomeImage: {
    width: "100%",
    height: "80%",
    marginTop: "-8%",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#425537", // Button background color
    width: 141,
    height: 50,
    borderRadius: 20, // Rounded corners
    
    marginTop: 10, // Spacing between buttons
    justifyContent: "center",
    alignItems: "center",
    alignSelf:'center',

  },
  buttonText: {
    color: "#FFFFFF", // Text color
    fontSize: 16, // Font size
    fontWeight: "300", // Semi-bold text
    letterSpacing: 3,
    textAlign: "center", // Center text within the button
    
  },
});

export default LoginScreen;
