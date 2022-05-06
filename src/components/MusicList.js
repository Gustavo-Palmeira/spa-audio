import { PlayArrow, QueueMusic } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const MusicList = () => {
  const mock = {
    title: 'Título da música',
    artist: 'Artista da música',
    image: 'https://www.vilage.com.br/blog/wp-content/uploads/2021/04/como-registrar-uma-musica.png',
  }

  return (
    <Box sx={{ p: 1 }}>
      {Array.from({ length: 10 }, () => mock).map((music, index) => (
        <Card key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2, height: '80px' }}>
          <CardMedia image={music.image} style={{ objectFit: 'cover', width: 120, height: 120 }}/>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography variant="h6" component="h2">{music.title}</Typography>
              <Typography variant="subtitle1" component="h3">{music.artist}</Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <PlayArrow color="secondary" />
              </IconButton>
              <IconButton>
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