import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material'
import { useMediaQuery, Card, CardContent, CardActions, IconButton, Typography, Slider, Box } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SongContext } from '../App'
import MusicQueue from './MusicQueue'
import ReactPlayer from 'react-player'

const MusicPlayer = ({ queue }) => {
  const largeScreen = useMediaQuery('(min-width: 900px)')
  const { currentSong, songDispatch } = useContext(SongContext)
  const [progress, setProgress] = useState(0)
  const [progressSeconds, setProgressSeconds] = useState(0)
  const [changing, setChanging] = useState(false)
  const [queuePosition, setQueuePosition] = useState(0)
  const songPlayer = useRef(null)

  const handlePlayButton = () => {
    songDispatch({ type: currentSong.isPlaying ? "PAUSE_SONG" : "PLAY_SONG" })
  }

  const handleSongProgress = ({ played, playedSeconds }) => {
    if (!changing) setProgress(played)
    setProgressSeconds(playedSeconds)
  }

  const handleSliderChange = (event, newValue) => {
    setProgress(newValue)
    songPlayer?.current.seekTo(progress)
  }

  const handleSliderMouseDown = () => {
    setChanging(true)
  }

  const handleSliderMouseUp = () => {
    setChanging(false)
  }

  const handleSongPrevios = () => {
    const nextSong = queue.currentQueue[queuePosition - 1]
    if (nextSong) songDispatch({ type: 'CHANGE_SONG', payload: { music: nextSong } })
  }

  const handleSongNext = () => {
    const nextSong = queue.currentQueue[queuePosition + 1]
    if (nextSong) songDispatch({ type: 'CHANGE_SONG', payload: { music: nextSong } })
  }

  useEffect(() => {
    const songIndex = queue.currentQueue.findIndex((song) => song.id === currentSong.song.id)
    setQueuePosition(songIndex)
  }, [queue, currentSong.song.id])

  useEffect(() => {
    if (progress > 0.99) handleSongNext()
  }, [progress])

  return (
    <div>
      <Card sx={{ display: 'flex', flexDirection: 'column', m: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
          <CardContent>
            <Typography variant="h6" component="h2">{currentSong?.song.title}</Typography>
            <Typography variant="subtitle1" component="h3">{currentSong?.song.artist}</Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 2 }}>
              {new Date(progressSeconds * 1000).toISOString().substr(11, 8)}
            </Typography>
            <img src={currentSong?.song.thumbnail} alt='music' width='80px' height='80px' style={{ objectFit: 'cover', borderRadius: '4px', marginRight: '12px' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CardActions>
            <IconButton onClick={handleSongPrevios}>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={handlePlayButton}>
              {currentSong?.isPlaying ? <Pause fontSize='large' /> : <PlayArrow fontSize='large' />}
            </IconButton>
            <IconButton onClick={handleSongNext}>
              <SkipNext />
            </IconButton>
          </CardActions>
        </Box>
        <Box sx={{ mx: 3 }}>
          <Slider
            key="slider"
            type="div"
            value={progress}
            min={0}
            max={1}
            step={0.01}
            onChange={handleSliderChange}
            onMouseDown={handleSliderMouseDown}
            onMouseUp={handleSliderMouseUp}
          />
          <ReactPlayer ref={songPlayer} hidden url={currentSong.song.url} playing={currentSong.isPlaying} onProgress={handleSongProgress} />
        </Box>
      </Card>
      {largeScreen && <MusicQueue queue={queue} />}
    </div>
  )
}

export default MusicPlayer
