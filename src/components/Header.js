import React from 'react'

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { HeadsetTwoTone } from '@mui/icons-material'

const Header = () => {
  return (
    <div>
      <AppBar position='fixed' color="secondary">
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
          >
            <HeadsetTwoTone fontSize='medium' />
          </IconButton>
          <Typography variant="h6" component="h1">
            App Music
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header