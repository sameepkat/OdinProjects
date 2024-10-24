import React, {useEffect, useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import App from "../App";

function Cards({items}){
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        setTodos(items);
        console.log(items);
    }, []);

    const addTodo = (todo) => {
        setTodos( prevTodos => {
        const updatedTodos = [...prevTodos, todo];
        localStorage.setItem('savedTodos', JSON.stringify(updatedTodos));
        return updatedTodos;
    });
    };
    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i!== index);
        setTodos(newTodos);
    };
    return (
        <div className="projectCard">
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} /> 
        </div>
    )
}

function ProjectBoard(){
    const [card, setCard] = useState([]);

    const addCard = () => {
        setCard([...card, {}]);
    }
    const savedTodos = localStorage.getItem('savedTodos');
    const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
    return(
        <div className="ProjectCardContainer">
            {card.map((_, i) => (
                <Cards key={i} items={parsedTodos}/>
            ))
            }
        <button
        onClick={addCard}
        className="addProject">Add Project</button>
        </div>
    )
}

export default ProjectBoard