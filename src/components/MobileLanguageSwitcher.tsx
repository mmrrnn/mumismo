'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

interface MobileLanguageSwitcherProps {
  onClose?: () => void;
}

const MobileLanguageSwitcher: React.FC<MobileLanguageSwitcherProps> = ({ onClose }) => {
  const router = useRouter();
  const locale = useLocale();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLanguageChange = (newLocale: string) => {
    try {
      router.push(`/${newLocale}`);
    } catch {
      // Fallback for mobile devices
      if (typeof window !== 'undefined') {
        window.location.href = `/${newLocale}`;
      }
    }
    if (onClose) {
      onClose();
    }
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  ];

  if (isMobile) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
          Language:
        </Typography>
        {languages.map((language) => (
          <Button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            variant={language.code === locale ? 'contained' : 'outlined'}
            size="small"
            startIcon={<Typography sx={{ fontSize: '1rem' }}>{language.flag}</Typography>}
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              borderRadius: 2,
              py: 1,
              px: 2,
              minHeight: 44,
              fontSize: '0.9rem',
              fontWeight: language.code === locale ? 600 : 400,
              backgroundColor: language.code === locale ? 'primary.main' : 'transparent',
              color: language.code === locale ? 'white' : 'text.primary',
              borderColor: language.code === locale ? 'primary.main' : 'rgba(0,0,0,0.12)',
              '&:hover': {
                backgroundColor: language.code === locale ? 'primary.dark' : 'rgba(37, 99, 235, 0.04)',
                borderColor: 'primary.main',
              },
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
          >
            {language.name}
          </Button>
        ))}
      </Box>
    );
  }

  return null;
};

export default MobileLanguageSwitcher;
