import React, {useState} from "react";
import Dialog from "./Dialog"

function TodoInput({addTodo}){
    const [showDialog, setShowDialog] = useState(false);

    const handleAddTodo = () => {
        setShowDialog(!showDialog);
    };

return(
    <div>
        <button
        onClick={handleAddTodo}
        className="addTodo">Add
        </button>
        {showDialog && <Dialog closeDialog={()=>setShowDialog(false)} returnData={addTodo}/>}
    </div>
)
}

export default TodoInput;