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
  Analytics,
  Storage,
  SupportAgent,
  Security,
  Speed,
  Assessment,
} from '@mui/icons-material';

const ServicesSection: React.FC = () => {
  const t = useTranslations('services');
  
  const services = [
    {
      icon: <Analytics sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('items.processOptimization.title'),
      description: t('items.processOptimization.description'),
    },
    {
      icon: <Storage sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('items.cloudServices.title'),
      description: t('items.cloudServices.description'),
    },
    {
      icon: <SupportAgent sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('items.aiIntegration.title'),
      description: t('items.aiIntegration.description'),
    },
    {
      icon: <Security sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('items.blockchainSolutions.title'),
      description: t('items.blockchainSolutions.description'),
    },
    {
      icon: <Speed sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('items.monitoringTools.title'),
      description: t('items.monitoringTools.description'),
    },
    {
      icon: <Assessment sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: t('items.systemManagement.title'),
      description: t('items.systemManagement.description'),
    },
  ];

  return (
    <Box id="services" sx={{ py: 16, backgroundColor: 'background.default' }}>
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
              maxWidth: '800px', 
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'rgba(0,0,0,0.06)',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(37, 99, 235, 0.08)',
                  },
                }}
              >
                <Box sx={{ 
                  mb: 3,
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  {service.icon}
                </Box>
                
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ 
                    fontWeight: 600, 
                    color: 'text.primary',
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{ 
                    color: 'text.secondary', 
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
