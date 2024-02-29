import  { useState } from 'react'
import AddInput from '../addInput/addInput'
import Header from '../header/header'
import TodoList from '../todoList/todoList'
import "./todo.css"

function Todo() {

    const [todos, setTodos] = useState([])

    return (
        <div className="todo">
            <Header title="Todo" />
            <AddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default Todo