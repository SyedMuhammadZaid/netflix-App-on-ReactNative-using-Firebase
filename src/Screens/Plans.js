import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto, Entypo } from "@expo/vector-icons";
import plandata from "../data/plandata";
import { useState } from "react";
import auth from "../../Firebase";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";

// import { useStripe } from "@stripe/stripe-react-native";

const Plans = () => {
  const [selectedplan, setplan] = useState("");
  const [selectedprice, setprice] = useState("");
  const [plandisplay, setdisplay] = useState(false);
  const navigate = useNavigation();
  console.log(selectedplan);
  console.log(selectedprice);

  const route = useRoute();
  const { email, password } = route.params;

  console.log('Email:', email);
  console.log('Password:', password);
  


  // const stripe = useStripe()
  const subscribe = async() => {
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
      console.log(userCredentials)
      const user = userCredentials.user;
      console.log(user.email)
    })
    navigate.navigate('Profile');

  //   const response = await fetch("http:localhost:8000/payment",{
  //     method:"POST",
  //     body: JSON.stringify({
  //       amount:selectedprice
  //     }),
  //     headers:{
  //       "Content-Type":"application/json",
  //     }
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   if(!response.ok) return Alert.alert(data.message);
  //   const clientSecret = data.clientSecret;
  //   const initSheet = await stripe.initPaymentSheet({
  //     paymentIntentClientSecret: clientSecret,
  //   });
  // if (initSheet.error) return Alert.alert(initSheet.error.message);
  // const presentSheet = await stripe.presentPaymentSheet({
  //   clientSecret
  // });
  // if (presentSheet.error) return Alert.alert(presentSheet.error.message);
  }  
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: 600 }}>
              Choose the plan that's right for you
            </Text>
            <View style={{ marginTop: 5, marginLeft: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 3,
                }}
              >
                <Feather name="check" size={22} color="red" />
                <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 5 }}>
                  Watch all you want Ad-Free
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 3,
                }}
              >
                <Feather name="check" size={22} color="red" />
                <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 5 }}>
                  Recommendations just for you
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 3,
                }}
              >
                <Feather name="check" size={22} color="red" />
                <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 5 }}>
                  Change or cancel your plan anytime
                </Text>
              </View>
            </View>
          </View>
          <View>
            {plandata.map((item) => {
              return (
                <Pressable
                  onPress={() => {
                    setplan(item.name);
                    setprice(item.price);
                    setdisplay(true);
                  }}
                  style={
                    selectedplan === item.name
                      ? {
                          paddingTop: 10,
                          paddingBottom: 10,
                          paddingHorizontal: 15,
                          borderWidth: 2,
                          borderColor: "red",
                          margin: 10,
                        }
                      : {
                          paddingTop: 10,
                          paddingBottom: 10,
                          paddingHorizontal: 15,
                          borderWidth: 0.5,
                          borderColor: "#D0312D",
                          margin: 10,
                        }
                  }
                  
                >
                  <View key={item.index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: 5,
                    }}
                  >
                    <View style={{}}>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 18,
                          width: 100,
                          backgroundColor: "#D0312D",
                          color: "white",
                          paddingHorizontal: 3,
                          paddingVertical: 6,
                          borderRadius: 4,
                          textAlign: "center",
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        Price: Rs {item.price}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: 4,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: 5,
                    }}
                  >
                    <View>
                      <Text>Video Quality : {item.videoQuality}</Text>
                      <Text>Resolution : {item.resolution}</Text>
                    </View>
                    <View>
                      <Fontisto name="netflix" size={24} color="#D0312D" />
                    </View>
                  </View>

                  <View style={{ marginTop: 5 }}>
                    <Text>Devices You can Watch</Text>
                    <View style={{ flexDirection: "row", marginTop: 4 }}>
                      {item.devices.map((device) => {
                        return (
                          <Entypo
                            name={device.name}
                            size={28}
                            color="#D0312D"
                            style={{ padding: 2, margin: 3 }}
                          />
                        );
                      })}
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>

      {plandisplay && (
      <Pressable onPress={subscribe}>
        <View
          style={{
            backgroundColor: "#D0312D",
            height: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent:'space-between',
            margin:5,
            padding:10
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>
            selected Plan {selectedplan}
          </Text>
          <Text style={{ fontSize: 16, color: "white" }}>Pay Now {selectedprice}</Text>
        </View>
        </Pressable>
      )}
    </>
  );
};

export default Plans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
