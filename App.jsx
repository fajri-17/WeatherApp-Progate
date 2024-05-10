import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import WeatherSearch from './src/components/WeatherSearch';
import WeatherInfo from './src/components/WeatherInfo';
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('');

  const searchWeather = async (location) => {
    setStatus('loading');
    try {
      const weather = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}`);
      const data = weather.data;

      data.visibility /= 1000;
      data.visibility = data.visibility.toFixed(2);
      data.main.temp -= 273.15; // Konversi Kelvin ke Celcius
      data.main.temp = data.main.temp.toFixed(2);
      setWeatherData(data);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.log('ERROR GET WEATHER DATA', error);
    }
  }

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />
      case 'success':
        return weatherData && <WeatherInfo weatherData={weatherData} /> 
      case 'error':
        return (
          <Text>Something went wrong. Please try again with a correct city name.</Text>
        );
      default: 
        return;
    }
  }
  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>
        {renderComponent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  marginTop20: {
    marginTop: 20,
  }
});
