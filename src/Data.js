
import { useEffect,useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import ItemCard from './ItemCard'
// import { Grid } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';


export default function Data(){
    const[display,setDisplay] = useState([]);
    useEffect(()=>{
        fetch('https://api.gyanibooks.com/library/get_dummy_notes')
        .then(response=>response.json())
        .then(data=>setDisplay(data))
        .catch(error=>console.log(error))
    },[])
    return(
        <>
        <div className="content">
          <Grid container rowSpacing={3} columnSpacing={{xs:3,sm:3}} columns={{ xs: 4, sm: 8, md: 12 }}>
          {display.map((item)=>(
            <Grid xs={2} sm={4} md={4} key={item.id}>
               
              <ItemCard item={item}/>
            </Grid>
          ))}
          </Grid>
        </div>
        </>
    )
}