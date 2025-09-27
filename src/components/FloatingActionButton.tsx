'use client';

import React, { useState } from 'react';
import {
  Fab,
  Box,
  Typography,
  Slide,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Chat,
  Close,
  Email,
  Schedule,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('contact.floatingAction');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleContact = (type: string) => {
    // Handle different contact methods
    switch (type) {
      case 'email':
        if (typeof window !== 'undefined') {
          window.location.href = 'mailto:hi@mumismo.com';
        }
        break;
      case 'schedule':
        // Scroll to contact form
        if (typeof window !== 'undefined') {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
        break;
    }
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 2,
      }}
    >
      {/* Contact Options Panel */}
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            p: 4,
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            minWidth: 220,
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
              {t('title')}
            </Typography>
            <IconButton size="small" onClick={handleToggle}>
              <Close />
            </IconButton>
          </Box>
          
          <Divider sx={{ mb: 3 }} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              onClick={() => handleContact('email')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2.5,
                p: 3,
                borderRadius: 4,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Email sx={{ fontSize: 22 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {t('email.title')}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  {t('email.details')}
                </Typography>
              </Box>
            </Box>

            <Box
              onClick={() => handleContact('schedule')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2.5,
                p: 3,
                borderRadius: 4,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Schedule sx={{ fontSize: 22 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {t('schedule.title')}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  {t('schedule.description')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Slide>

      {/* Main FAB */}
      <Fab
        color="primary"
        onClick={handleToggle}
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
          boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
            transform: 'scale(1.05)',
            boxShadow: '0 12px 35px rgba(37, 99, 235, 0.4)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <Chat sx={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }} />
      </Fab>
    </Box>
  );
};

export default FloatingActionButton;
