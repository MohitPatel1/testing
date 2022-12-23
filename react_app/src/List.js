import React, {useState} from "react";

function List() {
    const getItems = () => {
        return Array(5).fill(0);
    }

    const [items , setItems] = useState(getItems);
    console.log(items)

    return(
        <div>
            <ul>
                {items.map((item , index) => <li key={index}>{index + 1}</li>)}
            </ul>
            <button onClick={() => setItems([...items, 0])}> add item </button>
        </div>
    )
}

export default List;