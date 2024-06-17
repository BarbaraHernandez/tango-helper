

interface props{
    finishEdit: () => void;
    title: string | undefined;
    saveInput: (input:string) => void;
}

function TitlePrompt({finishEdit, saveInput, title}:props) {
    //to avoid updating the title state until the user is finished entering the full title, we do not use a controlled input with a state value
    const handleSubmit = (e:any) => {
        e.preventDefault();
        saveInput(e.target[0].value);
        finishEdit();
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            id='title-prompt'
            autoFocus={true}
            className="form-control form-control-lg" 
            key={'title'}
            type="text"
            name="title-input"
            placeholder="What are we studying today?" 
            aria-label=".form-control-lg title"
            defaultValue={title}
        />
    </form>
    
  )
}

export default TitlePrompt