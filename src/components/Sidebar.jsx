import React from 'react'
import "./Sidebar.css"

const Sidebar = ({onAddNote,onDeleteNote,notes,activeNote,setActiveNote}) => {
  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-header'>
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className='app-sidebar-notes'>
        {notes.map((note)=>(
           <div onClick={()=>setActiveNote(note.id)} className={`app-sidebar-note ${activeNote===note.id && "active"}`} key={note.id}>
            <div className='sidebar-note-title'>
              <strong>{note.title}</strong>
              <button onClick={()=>onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>最後の修正日：{new Date(note.modDate).toLocaleDateString("ja-jp",{hour:"2-digit",minute:"2-digit"})}</small>
           </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar