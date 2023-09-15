import Head from 'next/head';

export interface CustomHeadProps {
  author?: string;
  description?: string;
  keywords?: string;
  title?: string;
}

export function CustomHead({
  author = 'Imraan-Hendricks',
  description = 'Welcome to Ecommerce Evolution, the ultimate ecommerce solution for businesses of all sizes',
  keywords,
  title,
}: CustomHeadProps) {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='author' content={author} />
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      <title>{`Ecommerce Evolution${title ? ` | ${title}` : ''}`}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
