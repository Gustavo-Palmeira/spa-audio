import { Grid } from '@mui/material'
import React from 'react'
import Header from './components/Header'
import MusicAdd from './components/MusicAdd'
import MusicList from './components/MusicList'
import MusicPlayer from './components/MusicPlayer'

const App = () => {
  return (
    <div>
      <Header />
      <Grid container sx={{ p: 2, mt: 10 }}>
        <Grid item xs={12} md={8}>
          <MusicAdd />
          <MusicList />
        </Grid>
        <Grid item xs={12} md={4}>
          <MusicPlayer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App
