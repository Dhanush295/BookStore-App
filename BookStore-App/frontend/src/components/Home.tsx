import axios from 'axios';
import React from 'react';
import backgroundimage from '../components/images/img1.jpg';
import { Card, Typography, Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

export interface Bookdetails {
    id : number,
    title: string,
    description: string,
    link: string
}


export function Home() {

    const [bookList, setBooks ] = React.useState<Bookdetails[]>([]);
    
    React.useEffect(()=>{
        async function fetchbooks() :Promise <void>{
            try{
                const response = await axios.get("http://localhost:3000/");
                console.log(response.data)
                setBooks(response.data.allbooks)
            } catch(err){
                console.log(err)
            }
        }; fetchbooks();
    }, []);



  return (
    <div>
      <img src={backgroundimage} style={{ width: '98vw', height: '80vh' }} alt="Background" />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <form action="/search" method="get">
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: '10px',
              width: '300px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="submit"
            value="Search"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #007bff',
              color: '#fff',
              backgroundColor: '#007bff',
              cursor: 'pointer',
            }}
          />
        </form>
      </div>

      <div>
        {bookList.length > 0 ? (
          <div style={{display:"flex", margin:50, justifyContent:"center", flexWrap: "wrap"}}>
            {bookList.map((book, index) => (
              <BookDetails key={index} {...book} />
            ))}
          </div>
        ) : (
          <div>No books available</div>
        )}
      </div>
    </div>
  );
}

function BookDetails(props: Bookdetails){
    const navigate = useNavigate();
    return(
        <div >
        <Card variant="outlined"style={{margin: 10, marginTop: 25,
          width: 300,
          minHeight: 200,
          maxHeight: 600
          }}>
            
            <img src={props.link} style={{width: 280, margin: 10}}/>
            <Typography style={{textAlign: "center", marginTop: 10}} variant='h4'>{props.title}</Typography>
            <Typography style={{textAlign: "center", }} variant='h5'>{props.description}</Typography>
            <div style={{display: "flex", justifyContent: "center", margin: 10}}>
                <Button variant="contained" onClick={() => navigate(`/update/${props.id}`)} >Update</Button>                     
            </div>
         </Card>
       </div>

    );
}