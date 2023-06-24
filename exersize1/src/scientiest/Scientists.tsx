import {people} from "./data";
import {getImageUrl} from "../avatar/image";
import {Card} from "../avatar/Card";
import {Fragment} from "react";

export const Scientists = () => {
    const list = people.filter(person=> person.profession === 'chemist').map(person =>
        <Fragment key={person.id}>
            <h1>{person.id}</h1>
        <li>
            <img
             src={getImageUrl(person)}
             alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        </Fragment>
    );
    return (
        <>
            <div className="gallery">
                <Card>
                        <h1>Scientists</h1>
                        <ul>{list}</ul>
                </Card>
            </div>
        </>
    );
}