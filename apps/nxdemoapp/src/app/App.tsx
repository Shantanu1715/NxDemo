/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Layout } from '@happynrwl/shared-ui-layout';
export const App = () => {
  

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       <Layout/>
      </SafeAreaView>
    </>
  );
};


export default App;
