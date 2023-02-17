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
import { useNavbar } from './NavbarContext';
import { scrollToElement } from '../../utils/scroll-utils';

export const Footer: FC = () => {
  const { homeRef, featuresRef, overviewRef, pricingRef, faqRef, contactRef } =
    useNavbar();

  return (
    <Box
      as='footer'
      css={{
        padding: '6rem 1.25rem',
        backgroundImage:
          'radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%)',
      }}>
      <Container css={{ display: 'grid', gap: '2rem' }}>
        <Box
          as='ul'
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {[
            {
              name: 'Home',
              onClick: () => scrollToElement({ ref: homeRef, yOffset: 300 }),
            },
            {
              name: 'Features',
              onClick: () => scrollToElement({ ref: featuresRef }),
            },
            {
              name: 'Overview',
              onClick: () => scrollToElement({ ref: overviewRef }),
            },
            {
              name: 'Pricing',
              onClick: () => scrollToElement({ ref: pricingRef }),
            },
            {
              name: 'FAQ',
              onClick: () => scrollToElement({ ref: faqRef }),
            },
            {
              name: 'Contact',
              onClick: () => scrollToElement({ ref: contactRef }),
            },
          ].map(({ name, onClick }) => (
            <Box as='li' key={name} onClick={onClick}>
              <Typography
                variant='body2'
                css={(theme) => ({
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
              </Typography>
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
          &copy;2023 Ecommerce Evolution. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};
