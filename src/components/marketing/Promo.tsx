import { Box } from '../ui/Box';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { fadeIn, fadeOut, intersectionOptions } from '@/utils/animation-utils';
import { FC } from 'react';
import { Typography } from '../ui/Typography';
import { useInView } from 'react-intersection-observer';

export const Promo: FC = () => {
  const { ref, inView } = useInView({
    ...intersectionOptions,
    initialInView: true,
  });

  return (
    <Box
      as={'section'}
      css={(theme) => ({
        backgroundColor: theme.palette.primary[100],
        padding: '2.5rem 0',
        [theme.breakpoints.up('md')]: { padding: '1.25rem 0' },
      })}>
      <Container
        ref={ref}
        css={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          animation: '1s ease-in-out forwards',
          animationName: inView ? fadeIn : fadeOut,
          [theme.breakpoints.up('md')]: { flexDirection: 'row' },
        })}>
        <Typography
          as='h1'
          css={{ textAlign: 'center' }}
          variant='subtitle1'
          bold>
          <strong>Limited Time Offer:</strong>{' '}
          <Typography as='span' variant='subtitle1'>
            Save 50% on All Website Design and Development services!
          </Typography>
        </Typography>
        <Button
          css={(theme) => ({
            margin: '0.5rem 0 0 1rem',
            [theme.breakpoints.up('md')]: { margin: '0 0 0 1rem' },
          })}>
          Learn more
        </Button>
      </Container>
    </Box>
  );
};
