import {Task} from "./Task";

export const TaskList = ({tasks,onEditTask,onDeleteTask}) => {
    function onDelete(id) {
        onDeleteTask(id)
    }
    return (
        <ul>
            {
                tasks.map((task)=>
                        <li key={task.id}>
                            <Task onDelete={onDelete} onEdit={onEditTask} task={task}/>
                        </li>
                )
            }
        </ul>
    );
}