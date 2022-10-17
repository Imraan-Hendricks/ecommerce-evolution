import Link from 'next/link';
import { Box } from '../ui/Box';
import { Container } from '../ui/Container';
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '../ui/Typography';

export const Footer: FC = () => (
  <Box
    as='footer'
    css={{
      padding: '6rem 1.25rem',
      backgroundImage:
        'radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%)',
    }}>
    <Container css={{ display: 'grid', gap: '1.5rem' }}>
      <Box
        as='ul'
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {[
          { name: 'About', href: '/about' },
          { name: 'Blog', href: '/blog' },
          { name: 'Team', href: '/team' },
          { name: 'Pricing', href: '/pricing' },
          { name: 'Contact', href: '/contact' },
          { name: 'Terms', href: '/terms' },
        ].map(({ name, href }) => (
          <Box as='li' key={name}>
            <Link href={href}>
              <a
                css={(theme) => ({
                  display: 'block',
                  padding: '0 .35rem',
                  color: theme.palette.gray[300],
                  cursor: 'pointer',
                  [theme.breakpoints.up('sm')]: {
                    padding: '0 0.75rem',
                  },
                  [theme.breakpoints.up('md')]: {
                    padding: '0 1rem',
                  },
                  '&:hover': {
                    color: theme.palette.white[500],
                  },
                })}>
                {name}
              </a>
            </Link>
          </Box>
        ))}
      </Box>
      <Box
        as='ul'
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {[
          { icon: faFacebook, href: 'https://www.facebook.com' },
          { icon: faInstagram, href: 'https://www.instagram.com' },
          { icon: faTwitch, href: 'https://www.twitch.tv' },
          { icon: faTwitter, href: 'https://twitter.com' },
          { icon: faYoutube, href: 'https://www.youtube.com' },
        ].map(({ icon, href }) => (
          <Box as='li' key={href}>
            <a
              href={href}
              css={(theme) => ({
                display: 'block',
                padding: '0 .75rem',
                cursor: 'pointer',
                svg: {
                  color: theme.palette.primary[600],
                },
                '&:hover': {
                  svg: {
                    color: theme.palette.gray[50],
                  },
                },
              })}>
              <FontAwesomeIcon
                icon={icon}
                css={(theme) => ({
                  height: '1.5rem',
                  width: '1.5rem',
                  color: theme.palette.gray[400],
                })}
              />
            </a>
          </Box>
        ))}
      </Box>
      <Typography
        as='p'
        variant='caption'
        css={(theme) => ({
          textAlign: 'center',
          color: theme.palette.gray[400],
        })}>
        &copy;2022 Digital Company. Inc. All rights reserved
      </Typography>
    </Container>
  </Box>
);
