import { Delete } from '@mui/icons-material'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import React from 'react'

const MusicQueue = () => {
  const mock = {
    title: 'Título da música',
    artist: 'Artista da música',
    image: 'https://www.vilage.com.br/blog/wp-content/uploads/2021/04/como-registrar-uma-musica.png',
  }

  return (
    <Box sx={{ p: 1, mt: 4 }}>
      <Typography variant="h5" component="h2">{`Fila (${Array.from({ length: 10 }, () => mock).length})`}</Typography>
      {Array.from({ length: 10 }, () => mock).map((music, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Avatar src={music.image} alt="Capa do CD" sx={{ width: 40, height: 40, mr: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2" component="h2">{music.title}</Typography>
              <Typography variant="body2" component="h2">{music.artist}</Typography>
            </Box>
          </Box>
          <IconButton>
            <Delete color="error" />
          </IconButton>
        </Box>
      ))}
    </Box>
  )
}

export default MusicQueue