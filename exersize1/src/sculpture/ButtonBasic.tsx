export const ButtonBasic = ({onClick,children}) => {
    return (
            <button onClick={onClick} className="button-basic">
                {children}
            </button>
    );
}