import React from 'react';
import {Button, SafeAreaView, Text, TextInput} from 'react-native';

type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void
};

const Todo: React.FC<IProps> = ({todo, setTodo, addTodo}) => {
  return (
    <SafeAreaView>
      <TextInput value={todo} onChangeText={setTodo} placeholder="Add Todo" />
      <Button onPress={addTodo} title="Add" />
    </SafeAreaView>
  );
};

export default Todo;
