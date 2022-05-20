import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material'
import { useMediaQuery, Card, CardContent, CardActions, IconButton, Typography, Slider, Box } from '@mui/material'
import React, { useContext } from 'react'
import { SongContext } from '../App'
import MusicQueue from './MusicQueue'

const MusicPlayer = ({ queue }) => {
  const largeScreen = useMediaQuery('(min-width: 900px)')
  const { currentSong, songDispatch } = useContext(SongContext)

  const handlePlayButton = () => {
    songDispatch({ type: currentSong.isPlaying ? "PAUSE_SONG" : "PLAY_SONG" })
  }

  return (
    <div>
      <Card sx={{ display: 'flex', flexDirection: 'column', m: 1, width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
          <CardContent>
            <Typography variant="h6" component="h2">{currentSong?.song.title}</Typography>
            <Typography variant="subtitle1" component="h3">{currentSong?.song.artist}</Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 2 }}>10:20:10</Typography>
            <img src={currentSong?.song.thumbnail} alt='music' width='80px' height='80px' style={{ objectFit: 'cover', borderRadius: '4px', marginRight: '12px' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CardActions>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={handlePlayButton}>
              { currentSong?.isPlaying ? <Pause fontSize='large' /> : <PlayArrow fontSize='large' /> }
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
          </CardActions>
        </Box>
        <Box sx={{ mx: 3 }}>
          <Slider type="div" min={0} max={1} step={0.01} />
        </Box>
      </Card>
      {largeScreen && <MusicQueue queue={queue} />}
    </div>
  )
}

export default MusicPlayer