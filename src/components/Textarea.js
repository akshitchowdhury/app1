import React, { useState } from 'react'

export default function Textarea(props) {
  
  const [text, setText] = useState("Enter text")
  
  // const UpCase= ()=>{

  //     let ntext = text.toUpperCase()
  //     setText(ntext)
  //       }

  const handleUpclick = ()=>{
    
    let newText = text.toUpperCase()
    setText(newText)
     }
    

     const erase = ()=>{
    
      let newText = ""
      setText(newText)
       }

  const handleChange = function(event){

    setText(event.target.value)
  }

    return (
        <div className='container' >
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.head}</label>
    <br>
    </br>
    <br></br>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} onChange={handleChange}></textarea>
  </div>
  <br>
  </br>
  <button type="button" className={`btn btn-${props.mode} mx-2`} onClick={handleUpclick} >Caps on</button>
  
  <button type="button" className={`btn btn-${props.mode} mx-2`}onClick={erase}>Clear all</button>
  </div>
  )
}
