import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import propTypes from "prop-types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#457fca', '#5691c8'],
    title: "Ohh it's rainy outside",
    subtitle: "It's raining cats and dogs!"
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'A clear day',
    subtitle: "Isn't it great that we're having such clear day?"
  },
  Clouds: {
    iconName: 'cloud',
    gradient: ['#D3D3D3', '#7F8C8D'],
    title: 'It looks cloudy',
    subtitle: 'You should bring an umbrella in case it rains'
  },
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'Thunderstorm is here',
    subtitle: 'Bright flashes of light in the sky from the lightning'
  },
  Drizzle: {
    iconName: 'weather-partly-rainy',
    gradient: ['#00416A', '#E4E5E6'],
    title: 'Drizzle',
    subtitle: 'You should bring an umbrella'
  },
  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'As dust motes drifted',
    subtitle: 'Grit grated in the teeth'
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#bdc3c7', '#2c3e50'],
    title: 'Snow, crisp and cool',
    subtitle: 'Snow falling soundlessly in the middle of the night will always fill my heart with sweet clarity'
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#283048', '#859398'],
    title: 'Misty',
    subtitle: "It's misty up in the mountains in the mornings"
  },
  Fog: {
    iconName: 'weather-fog',
    gradient: ['#304352', '#d7d2cc'],
    title: 'Foggy',
    subtitle: "Be sure to turn on your headlights when driving through foggy areas"
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#283048', '#859398'],
    title: 'Haze',
    subtitle: 'You should bring an umbrella in case it rains'
  }
}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Haze", "Smoke", "Fog", "Mist", "Clear", "Clouds"]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: 'white'
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: '600',
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
