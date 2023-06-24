import React, {Fragment} from "react";

const Button = ({eventClick,children}) => {
  return (
    <button className="button-basic" onClick={eventClick}>
        {children}
    </button>
  );
}
const ButtonGroup = ({onPlayMove,onUploadingImage}) => {
    return(
        <Fragment>
            <Button eventClick={onPlayMove}>
                Play Movie
            </Button>
            <Button eventClick={onUploadingImage}>
                Upload
            </Button>
        </Fragment>
    );
}

export const Buttons = () => {
    return (
        <>
            <ButtonGroup onPlayMove={() => alert("Play")}
                         onUploadingImage={() => alert("Upload")}
            />
        </>
    );
}