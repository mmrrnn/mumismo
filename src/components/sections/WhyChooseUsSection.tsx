'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle,
  Speed,
  Person,
  AttachMoney,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

const WhyChooseUsSection: React.FC = () => {
  const t = useTranslations('whyChooseUs');
  
  const reasons = [
    {
      icon: <Speed sx={{ fontSize: { xs: 30, md: 40 }, color: 'primary.main' }} />,
      title: t('reasons.fastImplementation.title'),
      description: t('reasons.fastImplementation.description'),
      features: t.raw('reasons.fastImplementation.features'),
    },
    {
      icon: <Person sx={{ fontSize: { xs: 30, md: 40 }, color: 'primary.main' }} />,
      title: t('reasons.personalApproach.title'),
      description: t('reasons.personalApproach.description'),
      features: t.raw('reasons.personalApproach.features'),
    },
    {
      icon: <AttachMoney sx={{ fontSize: { xs: 30, md: 40 }, color: 'primary.main' }} />,
      title: t('reasons.costEffective.title'),
      description: t('reasons.costEffective.description'),
      features: t.raw('reasons.costEffective.features'),
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 16 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: 700, 
              color: 'text.primary',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
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
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              fontWeight: 400,
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {reasons.map((reason, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: "center",
                    textAlign: { xs: 'left', sm: 'left' },
                    gap: { xs: 2, md: 3 },
                    mb: 3,
                  }}>
                    <Box sx={{
                      width: { xs: 50, md: 60 },
                      height: { xs: 50, md: 60 },
                      borderRadius: 3,
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)',
                    }}>
                      {reason.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ 
                        fontWeight: 600, 
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        color: 'text.primary',
                        lineHeight: 1.3,
                        flex: 1,
                      }}
                    >
                      {reason.title}
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{ 
                      color: 'text.secondary', 
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      mb: 3,
                    }}
                  >
                    {reason.description}
                  </Typography>

                  <List dense>
                    {reason.features.map((feature: string, featureIndex: number) => (
                      <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle sx={{ 
                            fontSize: 20, 
                            color: 'primary.main' 
                          }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ 
          mt: { xs: 8, md: 12 }, 
          p: { xs: 4, md: 6 }, 
          backgroundColor: 'primary.main', 
          borderRadius: 4,
          textAlign: 'center',
          color: 'white',
        }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.5rem', md: '2rem' } }}>
            {t('cta.title')}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4, opacity: 0.9, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            {t('cta.subtitle')}
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 2, md: 3 },
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            maxWidth: '600px',
            mx: 'auto',
          }}>
            <Box sx={{ 
              textAlign: 'center',
              width: '100%',
              flex: '1',
            }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                7+
              </Typography>
               <Typography variant="body1" sx={{ opacity: 0.9, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                {t('cta.stats.yearsExperience')}
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center',
              width: '100%',
              flex: '1',
            }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                20+
              </Typography>
               <Typography variant="body1" sx={{ opacity: 0.9, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                {t('cta.stats.projectsCompleted')}
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center',
              width: '100%',
              flex: '1',
            }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                100%
              </Typography>
               <Typography variant="body1" sx={{ opacity: 0.9, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                {t('cta.stats.clientSatisfaction')}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;
