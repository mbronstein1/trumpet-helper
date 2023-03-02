import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Divider } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';

const drawerWidth = 240;
const navItems = ['About', 'Contact'];

function NavBar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  // Mobile NavBar
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' component='h1' sx={{ my: 2, '&:hover': { cursor: 'pointer' } }}>
        <ScrollLink to='home' smooth={true} spy={true} duration={400} onClick={handleDrawerToggle}>
          Trumpet Helper
        </ScrollLink>
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ScrollLink to={item.toLowerCase()} onClick={handleDrawerToggle} key={item} smooth={true} spy={true} activeClass='' duration={400}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </ScrollLink>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary='Portal' />
          </ListItemButton>
        </ListItem>
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
    <Box id='home' sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav' sx={{ backgroundColor: 'rgba(0, 0, 0, .3)', boxShadow: 0 }}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' component='h1' sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' }, '&:hover': { cursor: 'pointer' } }}>
            <ScrollLink to='home' smooth={true} spy={true} duration={400}>
              Trumpet Helper
            </ScrollLink>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button key={item} sx={{ color: '#fff' }}>
                <ScrollLink to={item.toLowerCase()} smooth={true} spy={true} duration={400}>
                  {item}
                </ScrollLink>
              </Button>
            ))}
            <Button sx={{ color: '#fff' }}>Portal</Button>
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
