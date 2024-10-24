import React, {useState} from "react";
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import Project from './Components/Projects'
import Dialog from './Components/Dialog'
import './styles.css';

function App(){

    return(
    <div className="App">
        <Project/>
    </div>
    );
}

export default App;