import {getImageUrl} from "./image";

export function AvatarProfile(props) {
    //console.log(person)
    return (
        <>
            <img
                className="avatar"
                src={getImageUrl(props.person)}
                alt={props.person.name}
                width={props.size}
                height={props.size}
            />
        </>
    );
}