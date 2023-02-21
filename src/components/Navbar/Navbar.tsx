import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true; 
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable/>
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React App
          </Typography> 
          <Button variant="contained" onClick={handleClick}>Open Favorites</Button>
        </Toolbar>
      </AppBar> 
    </>
  );
}

export default Navbar;
