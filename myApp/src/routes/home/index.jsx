import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Navbar from '../common/navbar';
import ImageGallery from './imageGallery';
import Login from './login';


const Home = () => {

  const [username, setUsername] = useState("");


  if (username === "") {
    return (
      <Grid>
        <Box>
          <Navbar username={username} />
        </Box>

        <Box style={{ marginTop: 100 }}>
          <Login setUsername={setUsername} />
        </Box>
        

      </Grid>

    )
  }
  else {


    return (
      <Grid>
        <Box>
          <Navbar username="rehan" />
        </Box>
        <Box>
          
          <ImageGallery/>
        </Box>
       
      </Grid>

    );
  }

}

export default Home;