import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

const SignUpForm = ({ navigation }) => {
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

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required.";
    } else if (!/^\d{10}$/.test(form.contactNumber.trim())) {
      newErrors.contactNumber = "Enter a valid 10-digit contact number.";
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const onSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Alert.alert("", "Please fil the form before signUp.");
    } else {
      
      setForm({
        name: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
      });
      navigation.navigate("List");
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
            placeholder="Name"
            value={form.name}
            onChangeText={(text) => handleInputChange("name", text)}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            keyboardType="numeric"
            value={form.contactNumber}
            onChangeText={(text) => handleInputChange("contactNumber", text)}
          />
          {errors.contactNumber && (
            <Text style={styles.error}>{errors.contactNumber}</Text>
          )}
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

        <View>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={(text) => handleInputChange("confirmPassword", text)}
          />
          {errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  imageContainer: {
    position: "relative",

  
  },
  welcomeImage: {
    width: "100%",
  height:'400',
 
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
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom:10,
    borderRadius: 5,
  },
  error: {
    color: "#CE3535",
    marginBottom:10,

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

export default SignUpForm;
