import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Pricing', 'Contact'];

function NavBar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button variant='contained' sx={{ marginX: 'auto' }}>
            Signup
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav' sx={{ backgroundColor: 'rgba(0, 0, 0, .3)', boxShadow: 0 }}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' component='div' sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
            Trumpet Helper
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
            <Button variant='outlined' sx={{ backgroundColor: '#fff', marginLeft: '10px' }}>
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;
