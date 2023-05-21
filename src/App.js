
import './App.css';
import Nav from './components/Nav';
import Textarea from './components/Textarea';

function App() {
  return (

    <>
    

<Nav head = {"MY NAV"}></Nav>



   <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<Textarea head ="Text space"/>
</>
    
  );
}

export default App;
