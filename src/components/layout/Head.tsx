import NextHead from 'next/head';
import { FC } from 'react';

export interface HeadProps {
  author?: string;
  description?: string;
  icon?: string;
  keywords?: string;
  title?: string;
}

export const Head: FC<HeadProps> = ({
  author = 'Imraan-Hendricks',
  description = 'Welcome to Ecommerce Evolution, the ultimate ecommerce solution for businesses of all sizes.',
  icon = '/favicon.ico',
  keywords = 'Ecommerce Evolution, ecommerce solutions, web design and development, shopping cart, payment gateway, succeed online, online store, checkout experience, checkout process, startup business',
  title = 'Site',
}) => (
  <NextHead>
    <title>{`Ecommerce Evolution | ${title}`}</title>
    <link rel='icon' href={icon} />

    <meta charSet='utf-8' />
    <meta name='author' content={author} />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />

    <meta property='og:title' content={title} key='title' />
    <meta property='og:description' content={description} key='description' />
    <meta property='og:keywords' content={keywords} key='keywords' />
  </NextHead>
);
