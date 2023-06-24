import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');
    function handleChange(e) {
        setText(e.target.value);
    }
    return (
        <>
            <Input label="First input" onInput={handleChange} text = {text}/>
            <Input label="Second input" onInput={handleChange} text = {text}/>
        </>
    );
}

function Input({ label,onInput,text}) {

    return (
        <label>
            {label}
            {' '}
            <input
                value={text}
                onChange={onInput}
            />
        </label>
    );
}
