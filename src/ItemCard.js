import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';

// const useStyle = makeStyles(
//   {
//     card:{
//       borderRadius:10,
//       background:'rgba(255,255,255,2.175)',
//       backdropFilter:'blur(80px)',
//       boxShadow:'0px 0px 15px -8px white',
//       color:'white',
//       '&:hover':{
//         background:'rgba(255, 255, 255, 0.388)',
//         backdropFilter: 'blur(80px)',
//         box-shadow: rgba(42, 42, 45, 0.67) 0px 7px 29px 0px;
//   transition: 0.9s;
//   cursor: pointer;
//       }
//     }
//   }
// )
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function ItemCard(props){
    return(
        <>
         <Card sx={{ maxWidth: 255 }} style={{background:'rgba(255, 255, 255, 0.175)',backdropFilter:' blur(80px)',boxShadow:'0px 0px 15px -8px white',color:'white',}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.item.id}
        </Typography>
        <Typography variant="h5" component="div">
          {props.item.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.item.user}
        </Typography>
        <Typography variant="body2">
          {props.item.category}
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

        </>
    )
}