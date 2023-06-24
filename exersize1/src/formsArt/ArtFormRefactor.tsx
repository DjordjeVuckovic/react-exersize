import {useState} from "react";
import {useImmer} from "use-immer";

export const ArtFormRefactor = () => {
    const [person, setPerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(person)
    }

    function handle(e) {
        let nameInput:string = e.target.name
        console.log(nameInput)
        //setPerson(draft=> { draft[nameInput] = e.target.value })
    }

    return (
            <div className="form-art" onSubmit={handleSubmit}>
                <form>
                    <label>
                        Name:
                        <input name="name" value={person.name} onChange={handle}/>
                    </label>
                    <label>
                        Title:
                        <input name="title" value={person.artwork.title} onChange={handle}/>
                    </label>
                    <label>
                        City:
                        <input name="artwork.city" value={person.artwork.city} onChange={handle}/>
                    </label>
                    <h1>{person.artwork.title}</h1>
                    <img src={person.artwork.image} alt={person.name}/>
                    <button type="submit" className="button-basic">
                        Submit
                    </button>
                </form>
            </div>
    );
}