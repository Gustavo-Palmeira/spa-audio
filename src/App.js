import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import Header from './components/Header'
import MusicAdd from './components/MusicAdd'
import MusicList from './components/MusicList'
import MusicPlayer from './components/MusicPlayer'

const App = () => {
  const largeScreen = useMediaQuery('(min-width: 900px)')

  return (
    <div>
      <Header />
      <Grid container sx={{ p: 2, mt: 10 }}>
        <Grid item xs={12} md={8}>
          <MusicAdd />
          <MusicList />
        </Grid>
        <Grid item xs={12} md={4} style={
          largeScreen
            ? { position: 'fixed', width: '100%', right: 10, top: 96 }
            : { position: 'fixed', width: '100%', left: 0, bottom: 10 }
        }
        >
          <MusicPlayer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App
