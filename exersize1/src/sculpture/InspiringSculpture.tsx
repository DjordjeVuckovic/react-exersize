import {useState} from "react";
import {ButtonBasic} from "./ButtonBasic";

let id = 0

export const InspiringSculpture = () => {
    const [search,setSearch] = useState<string>('')
    const [list,setList] = useState([])
    function addToList(){
        setList([...list,{text: search, id: id++}])
    }
    function deleteText(id: string) {
        setList(list.filter(item => item.id !== id))
    }
    return (
        <div className="">
            <h1>Add sculpure</h1>
            <input value={search} onChange={event => setSearch(event.target.value)}/>
            <ButtonBasic onClick={() => addToList()}>
                Add
            </ButtonBasic>
            <ol>
            {list.map(value =>
                <div key={value.id} className="flex-row">
                <li>{value.text}{' '}</li>
                    <ButtonBasic onClick={()=>deleteText(value.id)}>Delete</ButtonBasic>
                </div>
            )}
            </ol>
        </div>
    );
}