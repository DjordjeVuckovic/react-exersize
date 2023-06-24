import {useState} from "react";

export const Task = ({task,onDelete,onEdit}) => {
    const [isEditing, setIsEditing] = useState(false);
    function editTask() {
        setIsEditing(!isEditing)
    }
    return (
        <div className="d-flex mg-10">
            {isEditing ?
                <input key={task.id} value={task.text}
                       onChange={(e) => onEdit({...task,text: e.target.value})
                }/>
                : task.text
            }
            {
             !isEditing ?
                 <button className="p-5 mg-l-10" onClick={()=>setIsEditing(!isEditing)}> Edit</button>
                 :
                 <button className="p-5 mg-l-10" onClick={editTask}> Save </button>
            }
            <button className="p-5 mg-l-10" onClick={() => onDelete(task.id)}> Delete</button>
        </div>
    );
}