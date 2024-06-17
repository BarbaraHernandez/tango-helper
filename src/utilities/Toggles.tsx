//sometimes I find it concise to work from one file

export function LightDarkToggle(
    {isDark, setDark}:{isDark:boolean, setDark:(mode:boolean)=>void},
) {
  
    const handleClick = () => {
        setDark(!isDark);
        console.log('vibe check');
    }

    return (
        <>
        {isDark ? 
            <div className="form-check form-switch form-check-reverse ld-toggle" data-bs-theme="dark">
                <input className="form-check-input" type="checkbox" role="switch" id="light-mode-toggle" checked onClick={handleClick}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to Light Mode</label>
            </div>
        :
        <div className="form-check form-switch form-check-reverse ld-toggle" >
            <input className="form-check-input" type="checkbox" role="switch" id="dark-mode-toggle" onClick={handleClick}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to Dark Mode</label>
        </div>
        }
        </>
    )
}
