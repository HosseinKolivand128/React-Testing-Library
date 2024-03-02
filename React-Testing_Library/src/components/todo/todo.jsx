import  { useState } from 'react'
import AddInput from '../addInput/AddInput'
import Header from '../header/Header'
import TodoList from '../todoList/TodoList'
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