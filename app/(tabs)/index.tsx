// import { Image, StyleSheet, Platform } from "react-native";

// import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/2.png")} // Replace with your background image path
      style={styles.background}
      resizeMode="cover" // Makes the image cover the entire screen
    >
      {/* App Title */}
      <Text style={styles.title}>Lytë</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Where Connections Spark!</Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => router.push("/")} // Navigate to sign-up page
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => router.push("/")} // Navigate to sign-in page
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <Text style={styles.terms}>
        By creating an account, you agree to our{" "}
        <Text style={styles.link}>Terms and Conditions</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 65,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF8C6C",
    fontFamily: "Poppins_700Bold",
    fontStyle: "normal",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: "#FF8C6C",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    marginBottom: 520,
  },
  image: {
    width: 409,
    height: 866,
    resizeMode: "contain",
    marginBottom: 24,
  },
  createAccountButton: {
    backgroundColor: "#FF8C6C",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    flexShrink: 0,
    marginBottom: 16,
  },
  createAccountText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    fontWeight: 600,
    fontStyle: "normal",
  },
  signInButton: {
    backgroundColor: "#FF8c6c",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FF6B6B",
    marginBottom: 16,
  },
  signInText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    fontWeight: 600,
    fontStyle: "normal",
  },
  terms: {
    fontSize: 12,
    color: "#FFF",
    textAlign: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  link: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
