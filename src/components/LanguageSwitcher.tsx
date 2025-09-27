'use client';

import React from 'react';
import {
  Menu,
  MenuItem,
  Box,
  Typography,
  Chip,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LanguageSwitcher: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const locale = useLocale();

  const handleClick = (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale: string) => {
    // Simple approach: just navigate to the new locale root
    // Next.js middleware will handle the rest
    try {
      router.push(`/${newLocale}`);
    } catch {
      // Fallback for mobile devices
      if (typeof window !== 'undefined') {
        window.location.href = `/${newLocale}`;
      }
    }
    handleClose();
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <Box>
      <Chip
        onClick={handleClick}
        onTouchStart={handleClick}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ fontSize: '1rem' }}>
              {currentLanguage?.flag}
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>
              {currentLanguage?.code.toUpperCase()}
            </Typography>
            <ExpandMore sx={{ fontSize: '0.9rem' }} />
          </Box>
        }
        variant="outlined"
        size="small"
        sx={{
          height: 32,
          borderRadius: 16,
          borderColor: 'rgba(0, 0, 0, 0.12)',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          touchAction: 'manipulation',
          '&:hover': {
            backgroundColor: 'rgba(37, 99, 235, 0.04)',
            borderColor: 'primary.main',
          },
          '&:active': {
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            transform: 'scale(0.98)',
          },
          '& .MuiChip-label': {
            px: 1.5,
            py: 0,
            pointerEvents: 'none',
          },
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 120,
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            '& .MuiMenuItem-root': {
              minHeight: 44, // Better touch target
            },
          }
        }}
        MenuListProps={{
          sx: {
            py: 0.5,
          }
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === locale}
            sx={{
              py: 1.5,
              px: 2,
              minHeight: 44,
              cursor: 'pointer',
              touchAction: 'manipulation',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
              },
              '&:active': {
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                transform: 'scale(0.98)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.16)',
                },
                '&:active': {
                  backgroundColor: 'rgba(37, 99, 235, 0.20)',
                },
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography sx={{ fontSize: '1rem' }}>
                {language.flag}
              </Typography>
              <Typography sx={{ 
                fontSize: '0.8rem', 
                fontWeight: language.code === locale ? 600 : 400,
                color: language.code === locale ? 'primary.main' : 'text.primary',
              }}>
                {language.code.toUpperCase()}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
