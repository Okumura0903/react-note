import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'


function App() {
  const [notes,setNotes]=useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote,setActiveNote]=useState(false);
  
  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes]);

  useEffect(()=>{
    setActiveNote(notes[0].id);
  },[])

  const onAddNote=()=>{
    const newNote={
      id:uuid(),
      title:"",
      content:"",
      modDate:Date.now(),
    }
    setNotes([...notes,newNote]);
  }

  const onDeleteNote=(id)=>{
    const newNotes=notes.filter((note)=>note.id!==id);
    setNotes(sortNotes(newNotes));
  }

  const getActiveNote=()=>{
    return notes.find((note)=>note.id===activeNote);
  }

  const onUpdateNote=(updateNote)=>{
    const updatedNotesArray=notes.map((note)=>{
      if(note.id===updateNote.id){
        return updateNote;
      }
      else{
        return note;
      }
    });
    setNotes(sortNotes(updatedNotesArray));
  };

  const sortNotes=(notes)=>{
    return notes.sort((a,b)=>b.modDate - a.modDate);
  }
  return (
    <div className='App'>
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App
