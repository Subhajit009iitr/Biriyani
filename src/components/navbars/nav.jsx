import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/logo.svg';
import SignUpLogin from '../../dynamic/singuplogin';

const pages = [
  { label: 'Manga', path: '/' },
  { label: 'Anime', path: '/' },
  { label: 'Community', path: '/community' },
  { label: 'Marketplace', path: '/marketplace' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation(); // Get the current URL path
  const navigate = useNavigate(); // Hook to programmatically navigate between pages

  // Check if we are on the community page
  const isCommunityPage = location.pathname === '/community';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Function to handle navigation when a page is clicked
  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar 
      position={!isCommunityPage ? 'fixed' : 'relative'} // Make the navbar fixed except on community page
      sx={{
        margin: 'auto',
        backgroundColor: 'rgba(0,0,0,0)',
        mt: '1rem',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="xl" sx={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
      }}>
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={Logo} alt="Logo" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            MangaVerse
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => handleNavigate(page.path)}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={Logo} alt="Logo" />
          </Box>

          {/* Mobile Title */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            MangaVerse
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleNavigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Signup/Login Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login or Signup">
              <IconButton sx={{ p: 0 }}>
                <SignUpLogin />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
