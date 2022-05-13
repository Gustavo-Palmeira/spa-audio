import { Pause, PlayArrow, SkipPrevious } from '@mui/icons-material'
import { useMediaQuery, Card, CardContent, CardActions, IconButton, Typography, Slider, Box } from '@mui/material'
import React from 'react'
import MusicQueue from './MusicQueue'

const MusicPlayer = () => {
  const largeScreen = useMediaQuery('(min-width: 900px)')

  return (
    <div>
      <Card sx={{ display: 'flex', flexDirection: 'column', m: 1, width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
          <CardContent>
            <Typography variant="h6" component="h2">Título da Música</Typography>
            <Typography variant="subtitle1" component="h3">Nome do Artista</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <Pause />
            </IconButton>
            <IconButton>
              <PlayArrow />
            </IconButton>
            <Typography sx={{ mr: 1 }}>10:20:10</Typography>
          </CardActions>
        </Box>
        <Slider type="div" min={0} max={1} step={0.01} />
      </Card>
      {largeScreen && <MusicQueue />}
    </div>
  )
}

export default MusicPlayer