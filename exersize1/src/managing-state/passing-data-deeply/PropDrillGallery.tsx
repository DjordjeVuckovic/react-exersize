import React, {useContext, useState} from "react";
import { ImageSizeContext } from "./Context";
import {getImageUrl, Place, places} from "./data";

export const PropDrillGallery = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;

    return (
        <ImageSizeContext.Provider
            value={imageSize}
        >
            <h1>Context gallery</h1>
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <List/>
        </ImageSizeContext.Provider>
    );
}
export const List = () => {
    const listItems = places.map(p =>
        <li key={p.id}>
            <PlaceData place ={p}/>
        </li>
    )
    return (
        <ul>
            {listItems.map((listItem) => (
                <div key={listItem.key}>
                    {listItem}
                </div>
            ))}
        </ul>
    )
}
export const PlaceData = ({place}) => {
    return (
        <div className="flex-row mg-t-10">
            <PlaceImg imageId={place.imageId}/>
            <div className="mg-l-10 d-block">
            <b>{place.name}</b>
            <p>{place.description}</p>
            </div>
        </div>
    )
}
export const PlaceImg = ({imageId}) => {
    const imageSize = useContext(ImageSizeContext)
    return (
       <img
       src={getImageUrl(imageId)}
       alt = {getImageUrl(imageId)}
       height={imageSize}
       width={imageSize}
       />
    )
}