import {useState} from "react";
import {sculptureList} from "./dataSclp";
import {ButtonBasic} from "./ButtonBasic";

function SculptureContent(props: {
    sculpture: { artist: string; name: string; alt: string; description: string; url: string},index:number,showMore:boolean
}) {
    return <>
        <h2>{props.sculpture.name} {props.sculpture.artist}</h2>
        <h3>({props.index + 1}) of {sculptureList.length}</h3>
        <img src={props.sculpture.url} alt={props.sculpture.alt}/>
        {props.showMore && <p>{props.sculpture.description}</p>}
    </>;
}

export const Sculpture = () => {
    const [index,setIndex] = useState(0);
    const [showMore,setShowMore] = useState(false);
    function handleNextClick() {
        index > sculptureList.length - 2 ?  setIndex(0) : setIndex(index => index + 1);
    }
    function handlePrevClick() {
        index < 1 ?  setIndex(sculptureList.length - 1) : setIndex(index => index - 1);
    }
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index];
    return (
        <div className="sculpture-card">
            <div className="d-flex">
            <ButtonBasic onClick={() => handlePrevClick()}>
                Prev
            </ButtonBasic>
                <ButtonBasic onClick={() => handleNextClick()}>
                    Next
                </ButtonBasic>
            </div>
            <SculptureContent sculpture={sculpture} index={index} showMore={showMore}/>
            <ButtonBasic onClick={() => handleMoreClick()}>
                {showMore ? "Hide" : "Show"} details
            </ButtonBasic>
        </div>
    );
}