import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'pl'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as 'en' | 'pl')) {
    locale = 'en'; // fallback to default locale instead of notFound
  }

  return {
    locale: locale as 'en' | 'pl',
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

