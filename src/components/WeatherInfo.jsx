import { Image, StyleSheet, Text, View } from "react-native";

const WeatherInfo = ({ weatherData }) => {
   return (
      <View styles={styles.marginTop20}>
         <Text style={[styles.text, styles.marginTop20]}>The weather of {weatherData.name}</Text>
         <Text style={[styles.temperature, styles.marginTop20]}>{weatherData.main.temp} C</Text>
         <View style={[styles.rowContainer, styles.marginTop20]}>
            <Image 
               source={{ 
                  uri: "https://openweathermap.org/img/w/04d.png"
                }}
               style={styles.weatherIcon}
            />
            <Text style={[styles.text, styles.bold]}>Clouds</Text>
         </View>
         <Text style={styles.text}>overcast clouds</Text>
         <View style={[styles.rowContainer, styles.marginTop20]}>
            <Text style={[styles.text, styles.bold]}>Visibility:</Text>
            <Text style={[styles.text, styles.marginLeft15]}>{weatherData.visibility} km</Text>
         </View>
         <View style={[styles.rowContainer, styles.marginTop20]}>
            <Text style={[styles.text, styles.bold]}>Wind Speed:</Text>
            <Text style={[styles.text, styles.marginLeft15]}>{weatherData.wind.speed} m/s</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   marginTop20: {
      marginTop: 20,
   },
   weatherIcon: {
      width: 50,
      height: 50,
   },
   text: {
      textAlign: 'center',
      fontSize: 16,
      color: 'gray',
   },
   temperature: {
      fontWeight: '700',
      textAlign: 'center',
      fontSize: 72,
   },
   marginTop15: {},
   bold: {
      fontWeight: '700',
      color: '#000'
   },
   rowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   marginLeft15: {
      marginLeft: 15
   }
});



export default WeatherInfo;