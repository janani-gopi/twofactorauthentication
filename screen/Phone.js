import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";

const Phone = ({ navigation }) => {
  const [ismailClicked, setIsmailClicked] = useState(false);
  const [isphoneClicked, setIsphoneClicked] = useState(false);
  const [value, setValue] = useState("68696");
  const phoneInput = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.purpletext}>Let's set up your phone</Text>
      <View style={styles.mobilecontainer}>
        <Text style={styles.containertext}>Mobile Number</Text>
        <PhoneInput
          containerStyle={{ marginTop: 10, width: 300 ,marginLeft:-10}}
          ref={phoneInput}
          defaultValue={value}
          value={value}
          defaultCode="IN"
          layout="first"
          onChangeText={(text) => {
            console.log(text, "TEXT");
            setValue(text);
          }}
          Ionicons
          codeTextStyle={{ color: "black" }}
          textInputStyle={{ color: "black" }}
          withDarkTheme
          placeholder="Phone number"
          withShadow
          autoFocus
        />
      </View>
      <Text style={styles.text}>select any one option to get code</Text>
      <Pressable
        style={[ismailClicked ? styles.codeoptselected : styles.codeopt]}
        onPress={() => {
          setIsmailClicked((prev) => !prev);
        }}
      >
        <Ionicons name="mail" size={35} color={"#00cde1"} />
        <View style={styles.textcontainer}>
          <Text>Text message</Text>
          <Text>Received code via message</Text>
        </View>
      </Pressable>
      <Pressable
        style={[isphoneClicked ? styles.codeoptselected : styles.codeopt]}
        onPress={() => {
          setIsphoneClicked((prev) => !prev);
        }}
      >
        <Ionicons name="call" size={35} color={"#00cde1"} />
        <View style={styles.textcontainer}>
          <Text>Phone call</Text>
          <Text>Received code via phone</Text>
        </View>
      </Pressable>
      <View style={styles.btmcontainer}>
        <Text style={styles.purpletext}>step2</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Otp");
          }}
        >
          <Text style={styles.button}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 30,
  },
  purpletext: {
    color: "#7d5ba6",
    fontSize: 20,
    padding: 10,
  },
  mobilecontainer: {
   borderWidth:2,
   borderRadius:25,
   padding:20,
   marginTop:25,
   borderColor:"lightgray"
  },
  containertext: {
    marginTop: 40,
  },
  codeopt: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#e6e1f9",
    borderRadius: 10,
    marginTop: 20,
  },
  codeoptselected: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#7d5ba6",
    borderRadius: 10,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  text: {
    marginTop: 95,
    textAlign: "center",
  },
  textcontainer: {
    marginLeft: 7,
  },
  btmcontainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
   marginTop:130
  },
  button: {
    backgroundColor: "#7d5ba6",
    paddingHorizontal: 30,
    padding: 10,
    color: "white",
    borderRadius: 5,
    margin: 10,
  },
});
