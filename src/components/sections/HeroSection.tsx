'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { useTranslations } from 'next-intl';

const HeroSection: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 12, md: 16 },
        minHeight: { xs: 'auto', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 4,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.1,
              }}
            >
              {t('title')}
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>
                {t('titleHighlight')}
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                color: 'text.secondary',
                lineHeight: 1.6,
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              {t('subtitle')}
            </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 2, md: 3 }, 
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            mb: 8,
          }}>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                px: { xs: 6, md: 8 },
                py: 3,
                fontSize: { xs: '1rem', md: '1.1rem' },
                borderRadius: 30,
                minWidth: { xs: '100%', sm: '200px' },
                width: { xs: '100%', sm: 'auto' },
                fontWeight: 600,
                background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 35px rgba(37, 99, 235, 0.4)',
                },
              }}
            >
              🚀 {t('freeConsultation')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#services"
              sx={{
                px: { xs: 6, md: 8 },
                py: 3,
                fontSize: { xs: '1rem', md: '1.1rem' },
                borderRadius: 30,
                borderWidth: 2,
                minWidth: { xs: '100%', sm: '200px' },
                width: { xs: '100%', sm: 'auto' },
                fontWeight: 600,
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: 'primary.light',
                  color: 'white',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('learnMore')}
            </Button>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;