
interface props{
    items: string[];
}


function List({items}:props){
    return(
        <>
        {items.length === 0 && <p>time to make a list</p>}
        <ul id="vocab-list" className="list-group">
            {items.map((item) => (
                <li key={item} className="list-group-item">
                    {item}
                </li>
            ))}
        </ul>
        </>
    )
}

export default List;