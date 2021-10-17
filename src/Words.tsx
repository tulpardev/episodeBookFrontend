import React from 'react';
import {Text} from 'react-native';

interface WordsPropsTypes {
  name?: string;
}
const Words: React.FC<WordsPropsTypes> = ({name}) => {
  console.log(name);
  return <Text>Hello,{name} </Text>;
};

export default Words;
