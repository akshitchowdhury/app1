import React, { useState } from 'react'

export default function Textarea(props) {
  
  const [text, setText] = useState("Enter text")
  
  // const UpCase= ()=>{

  //     let ntext = text.toUpperCase()
  //     setText(ntext)
  //       }

  const handleUpclick = function(){
    setText("upclick fired")
    let newText = text.toUpperCase()
    setText(newText)
     }
    


  const handleChange = (event)=>{

    setText(event.target.text)
  }

    return (
        <div className='container'>
    <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">{props.head}</label>
    <br>
    </br>
    <br></br>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} onChange={handleChange}></textarea>
  </div>
  <br>
  </br>
  <button type="button" className="btn btn-dark mx-2" onClick={handleUpclick} >Caps on</button>
  
  <button type="button" className="btn btn-dark mx-2 ">Button2</button>
  </div>
  )
}
