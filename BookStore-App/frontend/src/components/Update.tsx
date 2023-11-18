import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Bookdetails } from './Home';
import { useParams } from 'react-router-dom';
const defaultTheme = createTheme();

export function Update() {
    const [title, setTitle] = React.useState<string | null>(null);
    const [description, setDescription] = React.useState<string | null>(null);
    const [link, setLink] = React.useState<string | null>(null);

    let {id} = useParams();
  
    const handleSubmit = async(): Promise<void> => {
      try {
        const response = await axios.patch(
          `http://localhost:3000/update/${id}`,
          {
            title: title,
            description: description,
            link: link,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
            <Typography component="h1" variant="h5">
              Update Book
            </Typography>
            <Box sx={{ mt: 1 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Title"
                  label="Title"
                  name="Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  autoComplete="Title"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="description"
                  id="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  autoComplete="current-description"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="link"
                  label="Link"
                  type="link"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  id="link"
                  autoComplete="current-link"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  