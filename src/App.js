import { Grid, useMediaQuery } from '@mui/material'
import React, { createContext, useContext, useReducer } from 'react'
import Header from './components/Header'
import MusicAdd from './components/MusicAdd'
import MusicList from './components/MusicList'
import MusicPlayer from './components/MusicPlayer'
import { QueueReducer, SongReducer } from './redux'

export const SongContext = createContext({
  song: {
    id: '9f460d8e-9d56-4326-9d54-2c8aa04add47',
    title: 'Stairway to Heaven Live',
    artist: 'Led Zeppelin',
    thumbnail: 'https://i.ytimg.com/vi/W9pEC-Bo2Cw/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=xbhCPt6PZIU',
    duration: '2',
  },
  isPlaying: false
})

const App = () => {
  const largeScreen = useMediaQuery('(min-width: 900px)')
  const initialSong = useContext(SongContext)
  const [currentQueue, queueDispatch] = useReducer(QueueReducer, [])
  const [currentSong, songDispatch] = useReducer(SongReducer, initialSong)

  return (
    <SongContext.Provider value={{ currentSong, songDispatch }}>
      <Header />
      <Grid container sx={{ p: 2, mt: 10 }}>
        <Grid item xs={12} md={8}>
          <MusicAdd />
          <MusicList queue={{ queueDispatch }} />
        </Grid>
        <Grid item xs={12} md={4} style={
          largeScreen
            ? { width: '100%', right: 10, top: 96 }
            : { position: 'fixed', width: '100%', left: 0, bottom: 10 }
        }
        >
          <MusicPlayer queue={{ currentQueue, queueDispatch }} />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App
