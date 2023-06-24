import {useState} from "react";
import {useImmer} from "use-immer";

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];
export const ArtBucket = () => {
    const[list,updateList] = useState(initialList)
    const [list1, updateList1] = useImmer(initialList);
    function handleToggle(artworkId, nextSeen) {
        updateList(list.map(item => item.id === artworkId ? {...item, seen: nextSeen} : item
        ))
    }
    function handleToggle1(artworkId, nextSeen) {
        updateList1(draft => {
            const a = draft.find(d => d.id === artworkId)
            a.seen = nextSeen
        })
    }
    return (
        <div>
            <h1>Art Bucket</h1>
            <h2>List: </h2>
            <ItemList artworks={list1} onToggle={handleToggle1}/>
        </div>
    );
}
function ItemList({ artworks, onToggle }) {
    return (
        <div>
            <ul>
                {artworks.map(artwork =>
                    <li key={artwork.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={artwork.seen}
                                onChange={e =>{
                                    onToggle(
                                        artwork.id,e.target.checked
                                    )
                                }
                                }
                            />
                            {artwork.title}
                        </label>
                    </li>
                )}
            </ul>
        </div>
    );
}