import React, { useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'
import YouTubePlayer from 'react-player/youtube'
import ReactPlayer from 'react-player'
import { useMutation } from '@apollo/client'
import { ADD_SONG } from '../graphql/mutation'

const defaultSong = {
  id: '',
  duration: 0,
  title: '',
  artist: '',
  thumbnail: '',
  url: ''
}

const MusicAdd = () => {
  const [dialog, setDialog] = useState(false)
  const [addSong] = useMutation(ADD_SONG)
  const [url, setUrl] = useState({
    value: '',
    canPlay: false
  })
  const [song, setSong] = useState(defaultSong)

  const handleEditSong = ({ player }) => {
    if (url.canPlay) {
      const realPlayer = player.player.player
      const { author, video_id, title } = realPlayer.getVideoData()

      setSong({
        url: url.value,
        id: video_id,
        duration: realPlayer.getDuration(),
        title,
        artist: author,
        thumbnail: `http://img.youtube.com/vi/${video_id}/0.jpg`
      })
    }
  }

  const handleEditDataSong = ({ target }) => {
    const { name, value } = target
    setSong(prevSong => ({ ...prevSong, [name]: value }))
  }

  const handleAddSong = async () => {
    try {
      const { duration, title, artist, thumbnail, url } = song
      await addSong({
        variables: {
          duration: duration || null,
          title: title || null,
          artist: artist || null,
          thumbnail: thumbnail || null,
          url: url || null,
        }
      })
      setDialog(false)
      setSong(defaultSong)
      setUrl(prevSong => ({ ...prevSong, value: '' }))
    } catch (error) {
      alert(`Não foi possível adicinar a música ${error}`)
    }
  }

  useEffect(() => {
    setUrl(prevValue => ({ ...prevValue, canPlay: YouTubePlayer.canPlay(prevValue.value) }))
  }, [])

  return (
    <Box sx={{ p: 1 }}>
      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <Box>
          <DialogTitle>Editar Música</DialogTitle>
          <DialogContent>
            <img src={song.thumbnail} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="capa" />
            <TextField
              value={song.title}
              onChange={handleEditDataSong}
              name="title"
              variant="outlined"
              fullWidth
              label="Nome da múscia"
              sx={{ mt: 1 }}
            />
            <TextField
              value={song.artist}
              onChange={handleEditDataSong}
              name="artist"
              variant="outlined"
              fullWidth
              label="Nome do artista"
              sx={{ mt: 1 }}
            />
            <TextField
              value={song.thumbnail}
              onChange={handleEditDataSong}
              name="thumbnail"
              variant="outlined"
              fullWidth
              label="Imagem"
              sx={{ mt: 1 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialog(false)} variant="outlined" color="error">Cancelar</Button>
            <Button onClick={handleAddSong} variant="contained" color="success">Salvar</Button>
          </DialogActions>
        </Box>

      </Dialog>
      <Box sx={{ display: 'flex', alignContent: 'center' }}>
        <TextField
          variant="outlined"
          fullWidth
          type="url"
          label="Url da música"
          value={url.value}
          onChange={({ target }) => setUrl({ ...url, value: target.value })}
        />
        <Button onClick={() => setDialog(true)} startIcon={<Add />} disabled={!url.canPlay} variant="contained" color="secondary" sx={{ ml: 2 }}>Adicionar</Button>
      </Box>

      <ReactPlayer url={url.value} hidden onReady={handleEditSong} />
    </Box>
  )
}

export default MusicAdd