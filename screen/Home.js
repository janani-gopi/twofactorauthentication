import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}></View>
      <Image
        style={styles.image}
        source={require("../assets/cyber-security.png")}
      />
      <Text style={styles.text}>Protect your account with</Text>
      <Text style={styles.redtext}>2 step verification</Text>
      <Text style={styles.smalltext}>
        Each time you'll sign in to your account, you'll need password and
        verfication code
      </Text>
      <Pressable onPress={()=>{navigation.navigate("Phone")}}>
        <Text style={styles.button}>Get started</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width:420,
    overflow:"hidden"
  },
  topcontainer: {
    height: "30%",
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: "#7d5ba6",
    borderBottomStartRadius: 550,
    borderBottomEndRadius: 550,
    transform:[{scaleX:2}],
    overflow:"hidden"
  },
  redtext: {
    color: "red",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    marginTop:40
  },
  smalltext: {
    color: "gray",
    margin: 20,
    marginBottom: 120,
    textAlign:"center",
    marginLeft:-10
  },
  button: {
    backgroundColor:"#7d5ba6",
    padding: 15,
    paddingHorizontal: 95,
    color: "white",
    borderRadius: 5,
    margin: 10,
    marginLeft:-20
  },
  image: {
    height: 200,
    width: 200,
    marginTop: 160,
    marginBottom: 50,
    marginLeft:-20
  },
});
