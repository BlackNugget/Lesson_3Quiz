import React, { useState } from 'react';
import { ScrollView, StatusBar, Text, View, Alert, Button, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';

const questions = [
  {
    question: "Who is this Demon Slayer?",
    image: require('./image/tanjiro.gif'),
    options: ['Tanjiro', 'Rengoku', 'Nezuko'],
    answer: 'Tanjiro',
  },
  {
    question: "Which two participated in this fight? ",
    image: require('./image/Tengen.gif'),
    options: ['Giyu and Inosuke', 'Sanemi and Mitsuri', 'Tengen and Tanjiro', 'Tengen and Gyutaro'],
    answer: 'Tengen and Gyutaro',
  },
  {
    question: "Who is this Hashira",
    image: require('./image/Rengoku.gif'),
    options: ['Donut', 'Rengoku', 'Fire Boy', 'Blazing Lion'],
    answer: 'Rengoku',
  },
  {
    question: "Who is this Demon Slayer and what is his/her rank",
    image: require('./image/Inosuke.gif'),
    options: ['Kanoe - Inosuke', 'Hashira - Inosuke', 'Hashira - Pigman', 'Kanoe - WildBoar'],
    answer: 'Kanoe - Inosuke',
  },
  {
    question: "What is this Breathing Technique",
    image: require('./image/Giyu.webp'),
    options: ['Water Breathing', 'Fire Breathing', 'Lightning Breathing', 'Wind Breathing'],
    answer: 'Water Breathing',
  },
  {
    question: "What is this Breathing Technique",
    image: require('./image/Fire.webp'),
    options: ['Water Breathing', 'Fire Breathing', 'Lightning Breathing', 'Wind Breathing'],
    answer: 'Fire Breathing',
  },
];

function App() {
  // Moved useState inside the component
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(""));

  const handlePickerChange = (value, index) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = value;
    setSelectedAnswers(newAnswers);
  };

  const submitAnswers = () => {
    const score = selectedAnswers.reduce((count, answer, index) => {
      return answer === questions[index].answer ? count + 1 : count;
    }, 0);
    Alert.alert(`You have ${score} correct answers!`);
  };

  return (
      <ScrollView contentContainterStyle ={{ paddingBottom: 20 }}>
        <Icon name="bolt" size={20} color="#808080">
          <Text>Darren's Quiz</Text>
        </Icon>
        <StatusBar hidden={true} />
        {questions.map((q, index) => (
            <View key={index} style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 18}}>{q.question}</Text>
              <Text></Text>
               <Image source={q.image} style={{ width: 400, height: 400 }} />
              <RNPickerSelect
                  onValueChange={(value) => handlePickerChange(value, index)}
                  items={q.options.map(option => ({ label: option, value: option }))}
              />
            </View>
        ))}
        <Button title="SUBMIT ANSWERS" onPress={submitAnswers} />
      </ScrollView>
  );
}

export default App;
