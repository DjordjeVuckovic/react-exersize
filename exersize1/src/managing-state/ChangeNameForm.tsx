import {useState} from "react";

export const ChangeNameForm = () => {
    const [status, setStatus] = useState<boolean>(false);
    const [name, setName] = useState<string>("Ivi");
    const [lastName, setLastName] = useState<string>("Ljubica");
    function changeName(e) {
        setName(e.target.value)
    }
    function changeLastName(e) {
        setLastName(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        setStatus(prevState => !prevState)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                First name:{' '}
                {status ? <input value={name} onChange={changeName}/> : <b>{name}</b>}
            </label>
            <label>
                Last name:{' '}
                {status ? <input  value={lastName} onChange={changeLastName}/> : <b>{lastName}</b>}
            </label>
            <button type="submit">
                {!status ? "Edit " : "Save "} Profile
            </button>
            <p><i>Hello, {name} {lastName}!</i></p>
        </form>
    );
}