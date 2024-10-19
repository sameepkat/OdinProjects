import React, {useEffect, useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Cards(){
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos( prevTodos => [...prevTodos, todo]);
    };
    useEffect(()=>{
        console.log(todos);
    }, [todos])
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
    return(
        <div>
        <div className="ProjectCardContainer">
            {card.map((_, i) => (
                <Cards key={i} />
            ))}
        <button
        onClick={addCard}
        className="addProject">Add Project</button>
        </div>
        </div>
    )
}

export default ProjectBoard