import { useQuery } from '@apollo/client'
import { PlayArrow, QueueMusic } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { GET_SONGS } from '../graphql/query'

const MusicList = () => {
  const { data, loading, error } = useQuery(GET_SONGS)

  if (loading) {
    return <div><LinearProgress /></div>
  }

  if (error) {
    console.log(error)
    return <div>Erro</div>
  }

  const mock = {
    title: 'Título da música',
    artist: 'Artista da música',
    image: 'https://www.vilage.com.br/blog/wp-content/uploads/2021/04/como-registrar-uma-musica.png',
  }

  return (
    <Box sx={{ p: 1 }}>
      {data.songs.map((music, index) => (
        <Card key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2, height: '80px' }}>
          <CardMedia image={music.thumbnail} style={{ objectFit: 'cover', width: 120, height: 120 }}/>
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
