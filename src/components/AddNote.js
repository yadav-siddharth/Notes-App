import { useState } from "react";
import { BsFilePlusFill } from "react-icons/bs";

function AddNote({handleAddNote}){
          const [noteText, setNoteText]= useState([]);
          const charLimit = 200;

          const handleChange = (event)=>{
                    if(charLimit-event.target.value.length>=0){
                              setNoteText(event.target.value);
                    }
          }

          const handleSaveClick =()=>{
                    if (noteText.trim().length>0){
                              handleAddNote(noteText);
                              setNoteText('');
                    }
                    
          }

          return (
                    <div className="note new">
                              <textarea rows='8' cols='10'
                               placeholder="Type a note ..."
                               onChange={handleChange} 
                               value={noteText}>
                              </textarea>
                              <div className="note-footer">
                                        <strong>{charLimit-noteText.length} Remaining</strong>
                                        <BsFilePlusFill onClick={handleSaveClick} size='2.5em'/>
                              </div>

                    </div>
          )
}

export default AddNote;