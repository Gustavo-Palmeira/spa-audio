import React, { useContext } from 'react'
import { useSubscription } from '@apollo/client'
import { Pause, PlayArrow, QueueMusic } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton, LinearProgress, Typography } from '@mui/material'
import { GET_SONGS } from '../graphql/subscription'
import { SongContext } from '../App'

const MusicList = ({ queue }) => {
  const { data, loading, error } = useSubscription(GET_SONGS)
  const { currentSong, songDispatch } = useContext(SongContext)

  console.log(currentSong.isPlaying)

  const handleChangeMusic = (music) => {
    songDispatch({ type: 'CHANGE_SONG', payload: { music } })
    songDispatch({ type: music.isPlaying ? "PAUSE_SONG" : "PLAY_SONG" })
  }

  const handleAddQueue = (music) => {
    queue.queueDispatch({ type: 'ADD_QUEUE', payload: { music } })
  }

  if (loading) {
    return <div><LinearProgress /></div>
  }

  if (error) {
    console.log(error)
    return <div>Erro</div>
  }

  return (
    <Box sx={{ p: 1 }}>
      {data.songs.map((music, index) => (
        <Card key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2, height: '80px' }}>
          <CardMedia image={music.thumbnail} style={{ objectFit: 'cover', width: 120, height: 120 }} />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography variant="h6" component="h2">{music.title}</Typography>
              <Typography variant="subtitle1" component="h3">{music.artist}</Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleChangeMusic(music)}>
                {currentSong.isPlaying && currentSong.song.title === music.title ? <Pause color='secondary' /> : <PlayArrow color='secondary' />}
              </IconButton>
              <IconButton onClick={() => handleAddQueue(music)}>
                <QueueMusic color="secondary" />
              </IconButton>
            </CardActions>
          </Box>
        </Card>
      ))}
    </Box>
  )
}

export default MusicList
