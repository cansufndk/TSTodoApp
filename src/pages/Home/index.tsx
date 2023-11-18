import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import Todo from '../../components/Todo/Todo'
import Todos from '../../components/Todos/Todos'
import {TProps} from '../../components/Types/Type'

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<TProps[]>([])


  const addTodo = () => {
    setTodos([...todos, { todo, id: todos.length + 1 }])
    setTodo("")
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  console.log("todo", todos)

  return (
    <SafeAreaView>
      <Todo todo={todo} setTodo={setTodo} addTodo={addTodo}  />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </SafeAreaView>
  )
}

export default Home
