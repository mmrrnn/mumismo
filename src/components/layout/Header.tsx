'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';
import MobileLanguageSwitcher from '../MobileLanguageSwitcher';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const t = useTranslations('navigation');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (href: string) => {
    if (typeof window === 'undefined') return;
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    handleMenuClose();
  };

  const menuItems = [
    { label: t('home'), href: '#hero' },
    { label: t('services'), href: '#services' },
    { label: t('about'), href: '#about' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'white', color: 'text.primary' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}>
              <Box sx={{
                width: 40,
                height: 40,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
              }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    letterSpacing: '-0.5px',
                  }}
                >
                  m
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  top: -3,
                  right: -3,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3)',
                }} />
              </Box>
              <Typography
                variant="h4"
                component="a"
                href="/"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  textDecoration: 'none',
                  letterSpacing: '-0.5px',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                mumismo
              </Typography>
            </Box>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.label} onClick={() => handleNavClick(item.href)}>
                    <Button
                      sx={{ textTransform: 'none', color: 'text.primary' }}
                    >
                      {item.label}
                    </Button>
                  </MenuItem>
                ))}
                <MenuItem sx={{ borderTop: '1px solid rgba(0,0,0,0.1)', mt: 1, pt: 2 }}>
                  <MobileLanguageSwitcher onClose={handleMenuClose} />
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 500,
                    px: 3,
                    py: 1.5,
                    borderRadius: 20,
                    fontSize: '0.95rem',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'white',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <LanguageSwitcher />
              {/* <Button
                variant="contained"
                href="#contact"
                sx={{
                  ml: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 25,
                  fontSize: '0.95rem',
                  background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
                  },
                }}
              >
                Get Free Quote
              </Button> */}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
