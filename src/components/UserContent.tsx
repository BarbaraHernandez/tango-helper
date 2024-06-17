import { useState } from "react";
import TitlePrompt from "./TitlePrompt";
import List from "./List";
import ListPrompt from "./ListPrompt";

//using an interface to document and enforce props -- can be exported if needed
interface props {
    listTitle: string | undefined;
    listItems: string[];
    saveTitle: (title:string) => void;
    updateList: (item:string) => void;
}

function UserContent({listTitle, listItems, saveTitle, updateList}: props) {

    const [editingTitle, setEditingTitle] = useState(false);

    const handleHeaderClick = () => {
        !editingTitle ? setEditingTitle(true) : setEditingTitle(false);
    }

    const closeEditHeader = () => {
        setEditingTitle(false);
    }

    return(
        <div id="user-content" className="card">
            <div className="card-header" onClick={handleHeaderClick}>
                {listTitle  && !editingTitle ? <h1>{listTitle}</h1> : <TitlePrompt saveInput={saveTitle} title={listTitle} finishEdit={closeEditHeader}/>}
            </div>
        
            <List items={listItems}  />
            <div className="card-footer">
                <ListPrompt updateList={updateList} />
            </div>
        
        </div>
    )
}

export default UserContent;