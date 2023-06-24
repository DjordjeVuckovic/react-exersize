import {useState} from "react";

export const AddTask = ({onAddTask}) => {
    const [text,setText] = useState('')
    return (
        <>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>{
                onAddTask(text)
                setText('')
            }}>
                Add
            </button>
        </>
    );
}