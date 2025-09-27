'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { theme } from '@/theme/theme';
import createEmotionCache from '@/lib/emotion-cache';
import { useMemo } from 'react';

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create cache only once per component instance
  const emotionCache = useMemo(() => createEmotionCache(), []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
