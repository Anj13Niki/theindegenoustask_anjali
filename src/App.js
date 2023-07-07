import Data from './Data'
import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const[show,setShow] = useState(false);
  const showText = ()=>{
    setShow(true)
  }
  return (
   <>
   
     <div className='app'>
     <h1>Display Data</h1>
    <div className='show'>
    <Button variant="contained" className='btn' onClick={showText}>Show Data</Button>
      {show && <Data/>}
    </div>
    </div>
   </>
  );
}

export default App;
