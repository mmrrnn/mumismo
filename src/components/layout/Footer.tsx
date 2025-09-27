'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import {
  Email,
  LocationOn,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'text.primary',
        color: 'white',
        py: 8,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  letterSpacing: '-0.5px',
                  mb: 3,
                }}
              >
                Mumismo
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: '500px',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                {t('description')}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box 
                component="a"
                href="mailto:hi@mumismo.com"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    '& .MuiTypography-root': {
                      color: 'primary.light',
                    }
                  }
                }}
              >
                <Box sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}>
                  <Email sx={{ color: 'white', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 0.5 }}>
                    {t('contact.email')}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, transition: 'color 0.2s ease' }}>
                    hi@mumismo.com
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <LocationOn sx={{ color: 'white', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 0.5 }}>
                    {t('contact.location')}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Kraków, Poland
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            mt: 6,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.8,
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} Mumismo. {t('copyright')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
