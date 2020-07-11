import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { LoggedOut } from "./views/screens/loggedout/LoggedOut";
import {Login} from "./views/screens/login/Login";
import {HomeScreenNavigation} from "./components/navigation/HomeScreenNavigation";

export default class App extends Component {
  render() {
    return <HomeScreenNavigation />;
  }
}