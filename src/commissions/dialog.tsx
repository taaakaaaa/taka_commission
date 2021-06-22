import { Button, DialogContent, DialogTitle, IconButton, TextField } from '@material-ui/core'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { CommissionsDialogContainer } from './styles'
import CloseIcon from '@material-ui/icons/Close';
import { DialogActions } from '@material-ui/core';

export default function DialogCommissions({ handleClickOpen, handleClose, open }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && <CommissionsDialogContainer initial={{y: -100}} animate={{y: 0}}>
        <div className="content">
          <IconButton onClick={handleClose} className="close">
            <CloseIcon />
          </IconButton>
          <DialogTitle>
            Description
          </DialogTitle>
          <DialogContent>
            <TextField InputProps={{
              rows: 6,
              multiline: true
            }} style={{color: "white", height: "100%" }}  fullWidth variant="outlined"  />
          </DialogContent>
          <br />
          <DialogActions>
            <Button color="primary" variant="outlined" onClick={handleClose}>Close</Button>
            <Button color="primary" variant="contained" onClick={handleClickOpen}>Continue</Button>
          </DialogActions>
        </div>
      </CommissionsDialogContainer>}
    </AnimatePresence>
  )
}
