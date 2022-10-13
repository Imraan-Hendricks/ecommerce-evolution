import { FC } from 'react';
import { Box } from '../ui/Box';
import { Button } from '../ui/Button';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Container } from '../ui/Container';
import { Typography } from '../ui/Typography';

const pricing = [
  {
    name: 'Startup',
    description: 'All the basics for starting a new business',
    price: '$9',
    features: [
      'Individual configuration',
      'No setup, or hidden fees',
      'Team size: 1 developer',
      'Premium support: 6 months',
      'Free updates: 6 months',
    ],
  },
  {
    name: 'Business',
    description: 'Recommended package for flourishing businesses',
    price: '$29',
    features: [
      'Individual configuration',
      'No setup, or hidden fees',
      'Team size: 5 developer',
      'Premium support: 12 months',
      'Free updates: 12 months',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Best option for businesses at scale',
    price: '$59',
    features: [
      'Individual configuration',
      'No setup, or hidden fees',
      'Team size: 10 developer',
      'Premium support: 24 months',
      'Free updates: 24 months',
    ],
  },
];

export const Pricing: FC = () => (
  <section
    css={(theme) => ({
      padding: '6rem 1.25rem',
      backgroundColor: theme.palette.gray[50],
    })}>
    <Container css={{ display: 'grid', gap: '4rem' }}>
      <Box css={{ display: 'grid', gap: '1rem', textAlign: 'center' }}>
        <Typography as='h2' variant='subtitle2' color='primary'>
          Trusted Worldwide
        </Typography>
        <Typography as='h1' variant='h4'>
          Designed for business teams like yours
        </Typography>
        <Typography as='p' variant='subtitle1' color='gray'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
      <Box
        css={(theme) => ({
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gap: '1.25rem',
          margin: '0 0rem',
          justifyItems: 'center',
          [theme.breakpoints.up('sm')]: {
            margin: '0 2rem',
          },
          [theme.breakpoints.up('md')]: {
            margin: '0 6rem',
          },
          [theme.breakpoints.up('lg')]: {
            margin: '0 10rem',
          },
          [theme.breakpoints.up('xl')]: {
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            justifyItems: 'normal',
            margin: '0 0rem',
          },
          [theme.breakpoints.up('2xl')]: {
            margin: '0 4rem',
          },
        })}>
        {pricing.map(({ name, description, price, features }) => (
          <Box
            css={(theme) => ({
              borderWidth: '1px',
              borderColor: theme.palette.gray[200],
              backgroundColor: theme.palette.white[500],
              padding: '2rem 2rem',
              display: 'grid',
              gap: '2rem',
              textAlign: 'center',
              width: '100%',
            })}
            key={name}>
            <Box css={{ display: 'grid', gap: '.75rem' }}>
              <Typography as='h3' variant='h6'>
                {name}
              </Typography>
              <Typography as='p' variant='body2' color='gray'>
                {description}
              </Typography>
            </Box>
            <Box
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Typography as='p' variant='h1'>
                {price}
              </Typography>
              <Typography
                as='span'
                css={{ padding: '3rem 0 0 0.25rem' }}
                variant='body2'
                color='gray'>
                /month
              </Typography>
            </Box>
            <Box
              as='ul'
              css={(theme) => ({
                display: 'grid',
                justifyItems: 'center',
                gap: '1.5rem',
                [theme.breakpoints.up('xl')]: { justifyItems: 'start' },
              })}>
              {features.map((feature) => (
                <Box
                  as='li'
                  key={feature}
                  css={{ display: 'flex', alignItems: 'center' }}>
                  <CheckIcon
                    css={(theme) => ({
                      height: '1.5rem',
                      width: '1.5rem',
                      marginRight: '0.75rem',
                      color: theme.palette.primary[500],
                    })}
                  />
                  <Typography as='span' variant='body2' color='gray'>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Button color='primary'>Buy {name}</Button>
          </Box>
        ))}
      </Box>
    </Container>
  </section>
);
