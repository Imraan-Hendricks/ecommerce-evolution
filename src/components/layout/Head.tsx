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
  description = 'Experimenting with styled components using Emotion in react',
  icon = '/favicon.ico',
  keywords = 'MongoDB, Next.js, React, Emotion, Styled Components',
  title = 'Site',
}) => (
  <NextHead>
    <title>{`Next Emotion Mongo | ${title}`}</title>
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
