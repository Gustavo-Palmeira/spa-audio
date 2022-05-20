import { Delete } from '@mui/icons-material'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import React from 'react'

const MusicQueue = ({ queue }) => {
  const handleRemoveQueue = (music) => {
    queue.queueDispatch({ type: 'REMOVE_QUEUE', payload: { music } })
  }

  return (
    <Box sx={{ p: 1, mt: 4 }}>
      <Typography variant="h5" component="h2">{`Fila (${queue.length || 0})`}</Typography>
      {queue.currentQueue.map((music, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Avatar src={music.thumbnail} alt="Capa do CD" sx={{ width: 40, height: 40, mr: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2" component="h2">{music.title}</Typography>
              <Typography variant="body2" component="h2">{music.artist}</Typography>
            </Box>
          </Box>
          <IconButton onClick={() => handleRemoveQueue(music)}>
            <Delete color="error" />
          </IconButton>
        </Box>
      ))}
    </Box>
  )
}

export default MusicQueue