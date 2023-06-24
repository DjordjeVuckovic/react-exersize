import {useState} from "react";
import {ButtonBasic} from "../sculpture/ButtonBasic";

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];
export const ShapeEditor = () => {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClickCircleDown() {
        const nextShapes = shapes.map(s => s.type === 'circle' ? {...s, y: s.y + 30} : s)
        console.log(nextShapes)
        setShapes(nextShapes)
    }

    function handleClickCircleUp() {
        const nextShapes = shapes.map(s => s.type === 'circle' ? {...s, y: s.y - 30} : s)
        console.log(nextShapes)
        setShapes(nextShapes)
    }

    return (
        <div className="main-mg">
            <div className="flex-row">
            <ButtonBasic onClick={()=>handleClickCircleDown()}>
                Move circles down!
            </ButtonBasic>
            <ButtonBasic onClick={()=>handleClickCircleUp()}>
                Move circles up!
            </ButtonBasic>
            </div>
            <div className="gallery main-mg">
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'relative',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }} />
            ))}
            </div>
        </div>
    );
}