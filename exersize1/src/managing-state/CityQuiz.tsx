import {Card} from "../avatar/Card";
import {useState} from "react";

export const CityQuiz = () => {
    const [answer, setAnswer] = useState<string>('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState<string>('typing'); // 'typing', 'submitting', or 'success'
    if (status === 'success') {
        return <Card>
            <h1>That's right!</h1>
            </Card>
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }
    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }
    function submitForm(answer) {
        // Pretend it's hitting the network.
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if (shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'));
                } else {
                    resolve();
                }
            }, 1500);
        });
    }
    return (
        <>
            <Card>
                <h1>City quiz</h1>
                <p>In which city is there a billboard that turns air into drinkable water?</p>
                <form onSubmit={handleSubmit}>
                    <textarea value={answer}
                              onChange={handleTextareaChange}
                              disabled={status === 'submitting'}/>
                    <br/>
                    <button type="submit" disabled={
                        status === 'submitting'
                        || answer.length === 0
                    }>
                        Submit
                    </button>
                    {error !== null && <p style={{color:"red"}}>{error.message}</p>}
                </form>
            </Card>
        </>
    );
}