import React, { useState } from 'react'
import "./Main.css"
import Markdown from 'react-markdown'

const Main = ({activeNote,onUpdateNote}) => {
  if(!activeNote){
    return (<div className='no-active-note'>ノートが選択されていません</div>)
  }

  // const [title,setTitle]=useState(activeNote.title);
  // const [content,setContent]=useState(activeNote.content);

  const onEditNote=(key,value)=>{
    const editedNote={
      ...activeNote,
      // id:activeNote.id,
      // title:type==='title' ? value : activeNote.title,
      // content:type==='content' ? value : activeNote.content,
      [key]:value,
      modDate:Date.now(),
    }
    onUpdateNote(editedNote);
  }

  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input id="title" type='text' onChange={(e)=>onEditNote("title",e.target.value)} value={activeNote.title} />
        <textarea id="content" onChange={(e)=>onEditNote("content",e.target.value)} value={activeNote.content} placeholder='ノートの内容を記入'></textarea>
      </div>
      <div className='app-main-note-preview'>
        <h1 className='preview-title'>{activeNote.title}</h1>
        <Markdown className='markdown-preview'>{activeNote.content}</Markdown>
      </div>
    </div>
  )
}

export default Main