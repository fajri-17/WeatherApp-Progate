import React, { useState } from 'react';
import { Button, StyleSheet, View } from "react-native"
import CustomTextInput from "./CustomTextInput"

const WeatherSearch = ({ searchWeather }) => {
   const [location, setLocation] = useState('')
   const onSearch = () => {
      searchWeather(location);
      setLocation('');
   }
   return (
      <View>
         <CustomTextInput
            placeholder="Search the weather of your city"
            numberOfLines={1}
            onChange={setLocation}
            text={location}
         />
         <View style={styles.buttonWrapper}>
            <Button
               title="Search"
               onPress={() => {onSearch()}}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   buttonWrapper: {
      marginTop: 20,
   },
});

export default WeatherSearch;