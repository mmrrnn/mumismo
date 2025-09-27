'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button, Container } from '@mui/material';

export default function NotFound() {
  const router = useRouter();

  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
          404
        </Typography>
        <Typography variant="h4" component="h2" sx={{ mb: 2, color: 'text.primary' }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: '500px', mx: 'auto' }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page you requested might have been moved, deleted, or doesn&apos;t exist.
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button 
          variant="contained" 
          component={Link} 
          href="/en"
          sx={{ px: 4, py: 1.5 }}
        >
          Go Home
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => router.back()}
          sx={{ px: 4, py: 1.5 }}
        >
          Go Back
        </Button>
      </Box>
    </Container>
  );
}
