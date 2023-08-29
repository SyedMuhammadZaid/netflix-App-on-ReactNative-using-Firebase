import React from "react";
import { View, StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator";
// import { StripeProvider } from '@stripe/stripe-react-native';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <StripeProvider publishableKey="pk_test_51Njq7MLL1aI8SHQJjxHSIbPcje2u2JJQxfXZZavMurf4lwmNxjOdfBFmJDX8YELDgBepIn78Z1nrU8fXdWcpTJPd00JsGAyEaR"> */}
        <StackNavigator />
      {/* </StripeProvider> */}
    </View>
  );
};

export default App;
