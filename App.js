import React from "react";
import { View, StyleSheet } from "react-native";
import { ProfileProvider } from "./Context"; // Use ProfileProvider
import StackNavigator from "./StackNavigator";
// import { StripeProvider } from '@stripe/stripe-react-native';
import Toast from 'react-native-toast-message';



const App = () => {
  return (
    <>
      <ProfileProvider
        Children={
          <View style={{ flex: 1 }}>
            {/* <StripeProvider publishableKey="pk_test_51Njq7MLL1aI8SHQJjxHSIbPcje2u2JJQxfXZZavMurf4lwmNxjOdfBFmJDX8YELDgBepIn78Z1nrU8fXdWcpTJPd00JsGAyEaR"> */}
            <StackNavigator />
            <Toast />

            {/* </StripeProvider> */}
          </View>
        }
      ></ProfileProvider>
    </>
  );
};

export default App;
