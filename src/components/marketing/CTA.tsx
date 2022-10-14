import Link from 'next/link';
import { Box } from '../ui/Box';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { FC } from 'react';
import { Input } from '../ui/TextFieldInput';
import { TextField } from '../ui/TextField';
import { Typography } from '../ui/Typography';

export const CTA: FC = () => (
  <section
    css={(theme) => ({
      padding: '6rem 1.25rem',
      backgroundColor: theme.palette.primary[100],
    })}>
    <Container
      css={{
        display: 'grid',
        justifyContent: 'center',
        gap: '2rem',
        textAlign: 'center',
      }}>
      <Typography as='h1' variant='h4'>
        Get started with your digital solution
      </Typography>
      <Typography
        as='p'
        variant='body2'
        css={(theme) => ({
          color: theme.palette.gray[600],
          maxWidth: '42rem',
        })}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor
        odio quis sapien dignissim. Sed ut risus et diam iaculis et at orci.
      </Typography>
      <Box
        css={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 0%',
          [theme.breakpoints.up('sm')]: {
            padding: '0 7.5%',
          },
        })}>
        <TextField css={{ flexGrow: '1' }}>
          {() => (
            <>
              <Input
                css={(theme) => ({
                  backgroundColor: theme.palette.white[300],
                  borderColor: theme.palette.primary[500],
                  '&:focus': {
                    borderColor: theme.palette.primary[400],
                  },
                })}
                color='primary'
                id='ctaEmail'
                isError={false}
                name='email'
                placeholder={`Enter email`}
              />
            </>
          )}
        </TextField>
        <Button css={{ marginLeft: '0.75rem' }}>Subscribe</Button>
      </Box>
      <Typography
        as='p'
        variant='body2'
        css={(theme) => ({ color: theme.palette.gray[600] })}>
        Instant signup. No credit card required.{' '}
        <Link href='/'>
          <Typography
            as='a'
            css={(theme) => ({
              color: theme.palette.primary[600],
              cursor: 'pointer',
              '&:hover': {
                color: theme.palette.primary[400],
              },
            })}
            color='primary'
            variant='body2'>
            Terms of Service
          </Typography>
        </Link>{' '}
        and{' '}
        <Link href='/'>
          <Typography
            as='a'
            css={(theme) => ({
              color: theme.palette.primary[600],
              cursor: 'pointer',
              '&:hover': {
                color: theme.palette.primary[400],
              },
            })}
            color='primary'
            variant='body2'>
            Privacy Policy.
          </Typography>
        </Link>
      </Typography>
    </Container>
  </section>
);
