//import { useState } from 'react'

import './App.css'
import UserContent from './components/UserContent'
import { useState, useEffect } from "react";
import { LightDarkToggle } from './utilities/toggles';

function App() {
  
  //setting state at the top level to keep components stateless as much as possible (my preference)
  const[title, setTitle]= useState('')
  const[items, setItems]= useState(['time to study!'])
  const[isNew, setIsNew]= useState(true);
  const[darkMode, setDarkMode]= useState(false);

  //at this level, I prefer a verbose title as part of documentation. A verbose title is not necessary for children where the function is simply being passed.
  //wrapping set function for cleanliness
  const wrapSetTitle = (newTitle:string) => {
    setTitle(newTitle)
  }

  //we do not expose a pure setState, instead we control the behavior and generally add to the array
  const addNewListItem = (newItem: string) => {
    if (isNew){
      setIsNew(false);
      setItems([newItem]);
    } else {
      setItems([...items, newItem]);
    }
  }

  // setting data-bs-theme aonn the app left the background unchanged. This is a little hacky, but this applies the dark theme uniformly
  useEffect(() => {
      darkMode ? document.body.setAttribute('data-bs-theme','dark') : document.body.setAttribute('data-bs-theme', 'light');
  }, [darkMode]);

  //wow, it looks so neat with just user content. Future state would include menu bars, auth, other views
  return (
    <div id="app" >
      <LightDarkToggle isDark={darkMode} setDark={setDarkMode}/>
      <UserContent 
        listTitle={title} 
        listItems={items} 
        saveTitle={wrapSetTitle} 
        updateList={addNewListItem}
      />
    </div>
  )
}

export default App
