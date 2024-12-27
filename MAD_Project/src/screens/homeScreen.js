import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const LoginForm = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!form.name.trim()) newErrors.name = "Name is required.";

    // Validate password
    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const onSubmit = () => {

      // Hardcoded credentials for demonstration
      const correctUsername = "user123";
      const correctPassword = "123456789";

      if (form.name === correctUsername && form.password === correctPassword) {
      
        setForm({
          name: "",
          email: "",
          contactNumber: "",
          password: "",
          confirmPassword: "",
        });
        navigation.navigate("List");
      } else {
        Alert.alert("", "Invalid username or password. Please try again.");
      }
    
  };

  return (
    <ScrollView style={styles.container}>
      {/* Image Container with Text Overlay */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/girl.png")}
          style={styles.welcomeImage}
        />
        <Text style={styles.imageText}>Welcome to {"\n"}Our music world!</Text>
      </View>

      {/* Sign-Up Form */}
      <View style={styles.signupForm}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="User name"
            value={form.name}
            onChangeText={(text) => handleInputChange("name", text)}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(text) => handleInputChange("password", text)}
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageContainer: {
    position: "relative",
  },
  welcomeImage: {
    width: "100%",
    height: 400,
    opacity: 0.7,
  },
  imageText: {
    position: "absolute",
    bottom: "50%",
    left: "15%",
    color: "#425537",
    fontSize: 35,
    fontWeight: "400",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    letterSpacing: 3,
  },
  signupForm: {
    flex: 1,
    padding: 20,
    marginTop:50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: "#CE3535",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#425537",
    width: 141,
    height: 50,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "300",
    letterSpacing: 3,
    textAlign: "center",
  },
});

export default LoginForm;
