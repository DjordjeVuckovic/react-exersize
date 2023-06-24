import {useState} from "react";
import {ButtonBasic} from "../../sculpture/ButtonBasic";
const Counter = ({fancy}) => {
    const [cnt,setCnt]=useState(0)
    let className = 'counter'
    if(fancy){
        className += ' fancy'
    }
    return (
        <div className={className}>
            <h1>{cnt}</h1>
            <ButtonBasic onClick={() => setCnt(prevState => prevState + 1)}>
                Add one
            </ButtonBasic>
        </div>
    );
}

export const MultipleCounter = () => {
    const [shown,setShown] = useState(true)
    const [fancy,setFancy] = useState(false)
    return (
        <div>
            <Counter fancy={fancy}/>
            {shown && <Counter fancy={fancy}/>}
            <label className="display-label">
                <input  type="checkbox" checked={shown} onChange={(e ) => setShown(e.target.checked)}/>
                Render second
            </label>
            <label className="display-label">
                <input  type="checkbox" checked={fancy} onChange={(e ) => setFancy(e.target.checked)}/>
                Fancy styling
            </label>
        </div>
    );
}