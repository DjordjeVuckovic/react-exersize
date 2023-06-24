import React from "react";
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    },
    srcPhoto: "https://i.imgur.com/MK3eW3As.jpg"
};
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US'
    ).format(date);
}
const today = new Date();
export function Profile(){
    return(
            <div style={person.theme} className="card-s">
            <h1>{person.name}</h1>
            <img src={person.srcPhoto}
               alt={person.name}
            />
            <h2>{formatDate(today)}</h2>
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
            </div>
    );
}