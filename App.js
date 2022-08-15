import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";

import axios from "axios";
import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = "5e373fa3d06b96fafe8ef34fd5f4d1af";
export default class App extends Component {
  state = {
    isLoading: true,
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can not find the location");
    }
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
    this.setState({ 
      isLoading: false, 
      temp: temp, 
      condition: weather[0].main 
    });
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    console.log(condition)
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
