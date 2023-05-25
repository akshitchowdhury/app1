
import './App.css';
import Nav from './components/Nav';
import Textarea from './components/Textarea';
import React, {useState} from 'react'
function App() {

const [mode, setmode] = useState('light')

let display = ()=>{

  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor = 'black'
  }

  else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
  } 
  }

  
//  let display = ()=> 
// {document.body.style.backgroundColor = 'black'
//  }
 
  return (

    <>
    

<Nav head = {"MY NAV"} display={display}></Nav>




<Textarea head ="Text space"/>
</>
    
  );
}

export default App;
