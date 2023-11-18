import React from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';
import {TProps} from '../Types/Type';

type Props = {
  todos: TProps[];
  deleteTodo: (id: number) => void;
};
const Todos: React.FC<Props> = ({todos, deleteTodo}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        keyExtractor={(item: TProps) => item.id.toString()}
        renderItem={({item}) => (
          <>
            <Text>{item.todo}</Text>
            <Button title="Delete" onPress={() => deleteTodo(item.id)} />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Todos;
