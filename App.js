import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const[weight, setWeight] = useState('')
  const[intensity, setIntensity] = useState(1.3)
  const[gender, setGender] = useState('male')
  const[calories, setCalories] = useState(0)

  const intensities = [
    {label: 'light',value: 1.3},
    {label: 'usual',value: 1.5},
    {label: 'moderate',value: 1.7},
    {label: 'hard',value: 2},
    {label: 'very hard',value: 2.2}
  ]

  const genders = [
    {label: 'Male',value: 'male'},
    {label: 'Female',value: 'female'}
  ]

  /*function calculate() {
    let result = 0
    if (gender === 'male') {
      result = (879+10.2*weight)*intensity
    }
    else {
      result = (795+7.18*weight)*intensity
    }
    setCalories(result)
  }*/

  //harjoiteltu ylemmän funktion kirjoittamista eri muodossa
  const calculate = () =>{
    let result = 0
    if (gender === 'male') {
      result = (879+10.2*weight)*intensity
    }
    else {
      result = (795+7.18*weight)*intensity
    }
    setCalories(result)
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput 
          style={styles.input}
          value={weight}
          placeholder='Enter your weight in kilograms'
          keyboardType='numeric'
          onChangeText={text=> setWeight(text)}>
        </TextInput>
      </View>
      <View style={styles.field}>
      <Text>Intensity</Text>
        <Picker
        onValueChange={(itemValue) => setIntensity(itemValue)}
        selectedValue={intensity}>
          {intensities.map((intensity,index)=>(
            <Picker.Item key={index} label={intensity.label} value={intensity.value}/>
          ))
        }
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize = {10}
          radio_props={genders}
          initial={0}
          buttonColor={'#2196f3'}
          animation={true}
          onPress={(value) => {setGender(value)}}
        />
        <Text>{calories.toFixed(0)}</Text>
      </View>
      <Button onPress={calculate} title='Calculate'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  field:{
    margin: 10,
  },
  input:{
    marginLeft: 10,
  },
  radio:{
    marginTop: 10,
    marginBottom: 10,
  }
});
