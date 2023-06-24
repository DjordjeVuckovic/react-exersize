import {useRef} from "react";

export const KittenCarousel = () => {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);
    function scroll(ref) {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    function handleFirstClick() {
        scroll(firstCatRef)
    }

    function handleSecondClick() {
        scroll(secondCatRef)
    }
    function handleThirdClick() {
        scroll(thirdCatRef)
    }

    return (
        <div>
            <h1>Kittens</h1>
            <div className="gallery">
            <button onClick={handleFirstClick}>First</button>
            <button onClick={handleSecondClick}>Second</button>
            <button onClick={handleThirdClick}>Third</button>
            </div>
            <ul className="flex-row mg-t-10 carousel-container">
                <li>
                    <img
                        src="https://placekitten.com/g/200/200"
                        alt="Tom"
                        ref={firstCatRef}
                    />
                </li>
                <li>
                    <img
                        src="https://placekitten.com/g/300/200"
                        alt="Maru"
                        ref={secondCatRef}
                    />
                </li>
                <li>
                    <img
                        src="https://placekitten.com/g/250/200"
                        alt="Jellylorum"
                        ref={thirdCatRef}
                    />
                </li>
            </ul>
        </div>
    );
}