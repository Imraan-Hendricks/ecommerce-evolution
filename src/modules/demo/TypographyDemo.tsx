import { FC } from 'react';
import { Box } from '../../components/Box';
import { Container } from '../../components/Container';
import { Typography } from '../../components/Typography';

export const TypographyDemo: FC = () => (
  <Box
    as='section'
    css={(theme) => ({
      backgroundColor: theme.palette.gray[50],
      padding: '5rem 1.25rem',
    })}>
    <Container css={{ display: 'grid', gap: '2rem' }}>
      <Typography as='h1' variant='h4'>
        Typography
      </Typography>
      <Typography as='h1' variant='h1'>
        H1. Heading One
      </Typography>
      <Typography as='h2' variant='h2'>
        H2. Heading Two
      </Typography>
      <Typography as='h3' variant='h3'>
        H3. Heading Three
      </Typography>
      <Typography as='h4' variant='h4'>
        H4. Heading Four
      </Typography>
      <Typography as='h5' variant='h5'>
        H5. Heading Five
      </Typography>
      <Typography as='h6' variant='h6'>
        H6. Heading Six
      </Typography>

      <Typography as='p' variant='subtitle1' css={{ maxWidth: '48rem' }}>
        Subtitle1.{' '}
        <Typography
          as='span'
          variant='subtitle1'
          css={(theme) => ({ color: theme.palette.gray[500] })}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Typography>
      <Typography as='p' variant='subtitle2' css={{ maxWidth: '48rem' }}>
        Subtitle2.{' '}
        <Typography
          as='span'
          variant='subtitle2'
          css={(theme) => ({ color: theme.palette.gray[500] })}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Typography>
      <Typography as='p' variant='body1' css={{ maxWidth: '48rem' }}>
        Body1.{' '}
        <Typography
          as='span'
          variant='body1'
          css={(theme) => ({ color: theme.palette.gray[500] })}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Typography>
      <Typography as='p' variant='body2' css={{ maxWidth: '48rem' }}>
        Body2.{' '}
        <Typography
          as='span'
          variant='body2'
          css={(theme) => ({ color: theme.palette.gray[500] })}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Typography>

      <Typography as='p' variant='button'>
        Button Text
      </Typography>
      <Typography as='p' variant='caption'>
        caption text
      </Typography>
      <Typography as='p' variant='overline'>
        OVERLINE TEXT
      </Typography>
    </Container>
  </Box>
);
