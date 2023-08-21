import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useRef } from "react";
import OTPTextInput from "react-native-otp-textinput";

const Otp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/otp.jpg")} />
      <Text style={styles.text}>
        A text message with your code has been sent to +1XXXX YYYY65
      </Text>
      <View>
        <Text style={styles.text}>Enter 5 digit code</Text>
        <OTPTextInput  inputCount={5} autoFocus tintColor={"#7d5ba6"} />
     </View>
     <Text style={styles.purpletextunderline}>Resend verification code</Text>
      <View style={styles.btmcontainer}>
        <Text style={styles.purpletext}>step2</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.button}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    height: 810,
  },
  image: {
    height: 250,
    width: 300,
    margin: 20,
  },
  btmcontainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 150,
  },
  button: {
    backgroundColor: "#7d5ba6",
    paddingHorizontal: 30,
    padding: 10,
    color: "white",
    borderRadius: 5,
    margin: 10,
  },
  purpletext: {
    color: "#7d5ba6",
    fontSize: 20,
    padding: 15,
  },
  purpletextunderline: {
    color: "#7d5ba6",
    fontSize: 14,
    textDecorationLine:"underline",
    textAlign:"center",
    paddingTop:60
  },
  text: {
    textAlign: "center",
    padding: 20,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
