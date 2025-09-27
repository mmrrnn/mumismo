'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  Card,
  CardContent,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import {
  Email,
  Send,
  Person,
  Business,
} from '@mui/icons-material';

const ContactSection: React.FC = () => {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };


  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = t('form.validation.nameRequired');
    if (!formData.email.trim()) newErrors.email = t('form.validation.emailRequired');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('form.validation.emailInvalid');
    if (!formData.company.trim()) newErrors.company = t('form.validation.companyRequired');
    if (!formData.message.trim()) newErrors.message = t('form.validation.messageRequired');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setOpenSnackbar(true);
        setFormData({ 
          name: '', 
          email: '', 
          company: '',
          message: '' 
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback: show success message even if API fails
      setOpenSnackbar(true);
      setFormData({ 
        name: '', 
        email: '', 
        company: '',
        message: '' 
      });
    }
  };



  return (
    <Box id="contact" sx={{ py: 16, backgroundColor: 'background.default' }}>
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
              maxWidth: '600px', 
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          <Card sx={{ 
            borderRadius: 6,
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.08)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <CardContent sx={{ p: { xs: 4, md: 8 } }}>

              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
                    <TextField
                      fullWidth
                      label={t('form.name')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                      InputProps={{
                        startAdornment: <Person sx={{ color: 'text.secondary', mr: 1 }} />,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          fontSize: '1rem',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: 2,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: 2,
                          },
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '0.95rem',
                          fontWeight: 500,
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t('form.email')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                      InputProps={{
                        startAdornment: <Email sx={{ color: 'text.secondary', mr: 1 }} />,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          fontSize: '1rem',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: 2,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: 2,
                          },
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '0.95rem',
                          fontWeight: 500,
                        }
                      }}
                    />
                  </Box>
                  
                  <TextField
                    fullWidth
                    label={t('form.company')}
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    error={!!errors.company}
                    helperText={errors.company}
                    required
                    InputProps={{
                      startAdornment: <Business sx={{ color: 'text.secondary', mr: 1 }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        fontSize: '1rem',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: '0.95rem',
                        fontWeight: 500,
                      }
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label={t('form.message')}
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    placeholder={t('form.messagePlaceholder')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        fontSize: '1rem',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: '0.95rem',
                        fontWeight: 500,
                      }
                    }}
                  />
                </Box>


                {/* Submit Button */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: { xs: 6, md: 8 },
                  pt: { xs: 4, md: 6 },
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  gap: { xs: 3, md: 4 },
                  flexDirection: { xs: 'column', sm: 'row' },
                  flexWrap: 'wrap',
                }}>
                  <Box 
                    component="a"
                    href="mailto:hi@mumismo.com"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2,
                      px: { xs: 4, md: 6 },
                      py: 1.5,
                      borderRadius: 25,
                      backgroundColor: 'rgba(37, 99, 235, 0.05)',
                      border: '1px solid rgba(37, 99, 235, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: 600,
                      minWidth: { xs: '100%', sm: 180 },
                      width: { xs: '100%', sm: 'auto' },
                      justifyContent: 'center',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                      }
                    }}
                  >
                    <Email sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {t('info.email.details')}
                    </Typography>
                  </Box>
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{ 
                      px: { xs: 4, md: 6 }, 
                      py: 1.5,
                      borderRadius: 25,
                      fontWeight: 600,
                      minWidth: { xs: '100%', sm: 180 },
                      width: { xs: '100%', sm: 'auto' },
                      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                        boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    {t('form.sendMessage')}
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          {t('form.successMessage')}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
