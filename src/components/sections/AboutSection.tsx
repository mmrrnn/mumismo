'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import ResponsiveImage from '../ResponsiveImage';

const AboutSection: React.FC = () => {
  const t = useTranslations('about');
  

  return (
    <Box id="about" sx={{ py: 16, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 700, 
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 4,
            }}
          >
            {t('title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              color: 'text.secondary', 
              maxWidth: '700px', 
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>            
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{
                width: '100%',
                maxWidth: 300,
                height: 220,
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <ResponsiveImage
                  src="/schedule.jpg"
                  alt={t('imageAlt')}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{ 
                  fontWeight: 600, 
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                {t('mission.title')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.6,
                }}
              >
                {t('mission.description')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;