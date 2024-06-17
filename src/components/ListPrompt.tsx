interface props{
    updateList: (item:string) => void;
}

function ListPrompt({updateList}:props) {

    // rather than introduce state to this component, we handle the value directly
    const handleSubmit = (e:any) => {
        e.preventDefault();
        updateList(e.target[0].value);
        e.target[0].value ='';
    }

  return (
    <form onSubmit={handleSubmit}>
       <input 
            id='list-prompt' 
            className="form-control" 
            key={'new-item'}
            type="text"
            name="new-item-input"
            placeholder="add an item to study" 
            aria-label=".form-control new-item"
        />
    </form>
  )
}

export default ListPrompt