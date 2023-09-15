import Link from 'next/link';
import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';
import { fadeIn } from '@/utils/animation-utils';
import { Typography } from '@/components/ui/Typography';

export function NotFound() {
  return (
    <Box
      as='section'
      css={{
        backgroundImage:
          'radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '0 1.25rem',
      }}>
      <div
        css={(theme) => ({
          display: 'grid',
          gap: '1rem',
          textAlign: 'center',
          animation: '1s ease-in-out forwards',
          animationName: fadeIn,
          [theme.breakpoints.up('xl')]: { textAlign: 'start' },
        })}>
        <Typography as='h2' variant='subtitle2' color='primary'>
          ECOMMERCE EVOLUTION
        </Typography>
        <Typography as='h1' variant='h2' color='gray'>
          404 {' | '}
          <Typography as='span' variant='h2' bold color='white'>
            Page Not Found
          </Typography>
        </Typography>
        <Typography
          as='p'
          variant='subtitle1'
          css={(theme) => ({
            maxWidth: '36rem',
            color: theme.palette.gray[400],
            margin: '0 auto',
            [theme.breakpoints.up('xl')]: { margin: '0' },
          })}>
          We {`can't`} seem to find the page you were looking. Try going back to
          the previous page or follow one of the links below.
        </Typography>
        <div
          css={(theme) => ({
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '.5rem',
            width: 'max-content',
            margin: '0 auto',
            [theme.breakpoints.up('xl')]: { margin: '0' },
          })}>
          <Link href='/'>
            <Button> Go to Home Page</Button>
          </Link>
          <Link href='/'>
            <Button color='white'>Report error</Button>
          </Link>
        </div>
      </div>
    </Box>
  );
}
