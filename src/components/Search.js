import { MdSearch } from "react-icons/md";


function Search({handleSearchNote}){
          return(
                    <div className="search">
                              <MdSearch className="search-icons" size='2.3em'/>
                              <input type='text' onChange={(event)=>
                                        handleSearchNote(event.target.value)} 
                                        placeholder='Search for your note....'/>
                    </div>

          )
}

export default Search;