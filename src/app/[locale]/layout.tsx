import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomThemeProvider from "@/components/ThemeProvider";
import { Box } from "@mui/material";

const locales = ['en', 'pl'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  
  return {
    title: messages.metadata?.title || 'Mumismo - Business Process Optimization',
    description: messages.metadata?.description || 'Transform your business with cutting-edge IT solutions',
    keywords: ['business optimization', 'IT solutions', 'process automation', 'cloud services', 'AI integration'],
    authors: [{ name: 'Mumismo Team' }],
    creator: 'Mumismo',
    publisher: 'Mumismo',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: locale,
      url: `https://${process.env.NEXT_PUBLIC_SITE_URL || 'yourusername.github.io'}/${locale}`,
      title: messages.metadata?.title || 'Mumismo - Business Process Optimization',
      description: messages.metadata?.description || 'Transform your business with cutting-edge IT solutions',
      siteName: 'Mumismo',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadata?.title || 'Mumismo - Business Process Optimization',
      description: messages.metadata?.description || 'Transform your business with cutting-edge IT solutions',
    },
    alternates: {
      canonical: `https://${process.env.NEXT_PUBLIC_SITE_URL || 'yourusername.github.io'}/${locale}`,
      languages: {
        'en': `https://${process.env.NEXT_PUBLIC_SITE_URL || 'yourusername.github.io'}/en`,
        'pl': `https://${process.env.NEXT_PUBLIC_SITE_URL || 'yourusername.github.io'}/pl`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <CustomThemeProvider>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} suppressHydrationWarning>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </NextIntlClientProvider>
    </CustomThemeProvider>
  );
}
