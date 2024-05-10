import { StyleSheet, TextInput, View } from "react-native"

const CustomTextInput = ({
   text,
   onChange,
   multiline = false,
   placeholder,
   numberOfLines,
}) => {
   return (
      <View style={styles.container}>
         <TextInput
            multiline={multiline}
            numberOfLines={numberOfLines}
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChange}
            defaultValue={text}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      marginTop: 20,
   },
   input: {
      borderWidth: 2,
      borderColor: 'gray',
      padding: 10
   }
});

export default CustomTextInput;