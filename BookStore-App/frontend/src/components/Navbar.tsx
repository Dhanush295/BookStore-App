import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';



export function Navbar(){
    const navigate = useNavigate();

    return(
        <div style={{display: 'flex',backgroundColor:"#eaeded", color:"white" ,justifyContent: 'space-between'}}> 
                <div style={{padding: 10, color:"black", fontWeight: 'bolder'}}>
                <Typography variant="h4" component="h2" onClick={() => navigate('/')}>Book Store</Typography>
                </div>
                <div style={{padding: 10}}>
                    <Button variant="contained" 
                    onClick={()=>{navigate("/createbook")}}> 
                    Create Book </Button>
                </div>
            </div>
    );
}