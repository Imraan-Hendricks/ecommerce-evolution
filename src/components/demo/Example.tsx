import styled from '@emotion/styled';
import { Box } from '../ui/Box';
import { Color } from '../../theme/types';
import { Container } from '../ui/Container';
import { FC } from 'react';
import { Typography } from '../ui/Typography';

const cards = [
  {
    color: 'primary',
    title: 'Primary Section',
    body: 'Lorem ipsum dolor sit amet',
  },
  {
    color: 'secondary',
    title: 'Secondary Section',
    body: 'Lorem ipsum dolor sit amet',
  },
  {
    color: 'info',
    title: 'Info Section',
    body: 'Lorem ipsum dolor sit amet',
  },
] as const;

export const Example: FC = () => (
  <Box
    as='section'
    css={(theme) => ({
      backgroundColor: theme.palette.gray[50],
      padding: '5rem 1.25rem',
    })}>
    <Container css={{ display: 'grid', gap: '2rem' }}>
      <Typography as='h1' variant='h4'>
        Styling Example
      </Typography>
      <CardList>
        {cards.map(({ color, title, body }) => (
          <Card key={title} color={color} css={{ marginTop: '2rem' }}>
            <Typography as='h1' variant='h4'>
              {title}
            </Typography>
            <Typography
              as='p'
              variant='body2'
              css={(theme) => ({ color: theme.palette.gray[500] })}>
              {body}
            </Typography>
            <Divider color={color} />
          </Card>
        ))}
      </CardList>
    </Container>
  </Box>
);

const CardList = styled.div();

const Card = styled.div<{ color?: Color }>(({ theme, color = 'primary' }) => ({
  marginTop: '1rem',
  padding: '2rem 4rem',
  width: '100%',
  display: 'grid',
  gap: '.5rem',
  boxShadow: theme.shadows[10],
  backgroundColor: 'white',
  borderRadius: '0.375rem',
  '&:hover': {
    backgroundColor: theme.palette[color][500],
    cursor: 'pointer',
    paddingLeft: '5rem',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '500ms',
    h1: { ...theme.typography.body2, color: theme.palette.gray[200] },
    p: { ...theme.typography.h4, color: theme.palette.black },
    [`${Divider}`]: {
      borderColor: theme.palette.gray[200],
    },
    '&:active': {
      backgroundColor: theme.palette.success[500],
      boxShadow: 'none',
      paddingLeft: '4.5rem',
      p: { ...theme.typography.h4, color: theme.palette.gray[200] },
    },
  },
}));

const Divider = styled.hr<{ color?: Color }>(({ theme, color = 'gray' }) => ({
  borderColor: theme.palette[color][500],
  borderWidth: '2px',
  width: '4rem',
}));
