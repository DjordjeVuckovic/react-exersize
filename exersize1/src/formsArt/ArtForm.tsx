import {useState} from "react";

export const ArtForm = () => {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })
    function handleNameChange(e){
        setPerson({
            ...person,name: e.target.value
        });
        // const newPerson = {...person,...{date: new Date()
        //     }}
        // console.log("New",newPerson)
        console.log(person)
    }
    const handleTitleChange = (e)=>{
        setPerson({
            ...person,artwork: {
                ...person.artwork,
                title:e.target.value
            }
        })
    }
    const handleCityChange = (e)=>{
        setPerson({
            ...person,artwork: {
                ...person.artwork,
                city:e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(person)
    }

    return (
        <div className="form-art" onSubmit={handleSubmit}>
            <form>
            <label>
                Name:
                <input value={person.name} onChange={handleNameChange}/>
            </label>
            <label>
                Title:
                <input value={person.artwork.title} onChange={handleTitleChange}/>
            </label>
            <label>
                City:
                <input value={person.artwork.city} onChange={handleCityChange}/>
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