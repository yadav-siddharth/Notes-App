import { BsToggle2On } from "react-icons/bs";


function Header({handleToggleDarkMode}){
          return(
                    <div className="header">
                              <h1>Notein.AI</h1>
                              <BsToggle2On  color="#6A00FF" onClick={()=>handleToggleDarkMode((previousDarkMode )=>!previousDarkMode)} size='2.3em'/>
                    </div>
          )
}

export default Header;