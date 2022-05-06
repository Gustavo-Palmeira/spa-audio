import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'

const MusicAdd = () => {
  const [dialog, setDialog] = useState(false)

  return (
    <Box sx={{ p: 1 }}>
      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <Box>
          <DialogTitle>Editar Música</DialogTitle>
          <DialogContent>
            <img src="https://www.vilage.com.br/blog/wp-content/uploads/2021/04/como-registrar-uma-musica.png" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <TextField
              variant="outlined"
              fullWidth
              label="Nome da múscia"
              sx={{ mt: 1 }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Nome do artista"
              sx={{ mt: 1 }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Imagem"
              sx={{ mt: 1 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialog(false)} variant="outlined" color="error">Cancelar</Button>
            <Button variant="contained" color="success">Salvar</Button>
          </DialogActions>
        </Box>

      </Dialog>
      <Box sx={{ display: 'flex', alignContent: 'center' }}>
        <TextField
          variant="outlined"
          fullWidth
          type="url"
          label="Url da música"
        />
        <Button onClick={() => setDialog(true)} startIcon={<Add />} variant="contained" color="secondary" sx={{ ml: 2 }}>Adicionar</Button>
      </Box>
    </Box>
  )
}

export default MusicAdd