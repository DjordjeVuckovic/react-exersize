function Item({name, isPacked}) {
    return(
        <li>
            {isPacked ? name + ' ✔' : name + ' X'}
        </li>
    )
}
export const Items = () => {
    return (
        <>
            <section>
                <h1>Sally Ride's Packing List</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="Space suit"
                    />
                    <Item
                        isPacked={true}
                        name="Helmet with a golden leaf"
                    />
                    <Item
                        isPacked={false}
                        name="Photo of Tam"
                    />
                </ul>
            </section>
        </>
    );
}