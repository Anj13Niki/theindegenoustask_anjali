 const[display,setDisplay] = useState([]);
    useEffect(()=>{
        fetch('https://api.gyanibooks.com/library/get_dummy_notes')
        .then(response=>response.json())
        .then(data=>setDisplay(data))
        .catch(error=>console.log(error))
    },[])
    return(
        <>
            {display.map((item)=>(
                <Card key={item.id} sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.category}
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            ))}
        </>
    )
}