import {useReducer} from "react";
import {AddTask} from "./AddTask";
import {TaskList} from "./TaskList";

export const TaskApp = () => {
    //const [tasks, setTasks] = useState(initialTasks);
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    function tasksReducer(tasks,action) {
        switch(action.type){
            case 'added':{
                return [...tasks,{id: nextId++, done: false, text: action.text}]
            }
            case 'edited': {
                return tasks.map(t => {
                        if (t.id === action.task.id) {
                            return action.task
                        }
                        return t
                    }
                )
            }
            case 'deleted':{
                return tasks.filter((task)=> task.id !== action.id)
            }
            default:
                throw  new Error("No type found")

        }
    }

    function addTasks(text) {
        dispatch({
            type: 'added',
            text: text
        })
    }
    function onEditTask(task) {
        dispatch({
            type: 'edited',
            task: task
        }
        );
    }
    function onDeleteTask(id) {
        dispatch({
                type: 'deleted',
                id: id
            }
        );
    }

    return (
        <>
            <AddTask onAddTask={addTasks}/>
            <TaskList tasks={tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask}/>
        </>
    );
}
let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];