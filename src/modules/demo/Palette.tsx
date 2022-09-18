import styled from '@emotion/styled';
import { Box } from '../../components/Box';
import { Color, colors, Shade, shades } from '../../theme/types';
import { Container } from '../../components/Container';
import { FC } from 'react';
import { Typography } from '../../components/Typography';

export const Palette: FC = () => (
  <Box as='section' css={{ padding: '5rem 1.25rem' }}>
    <Container>
      <Typography as='h1' variant='h4' css={{ marginBottom: '1.75rem' }}>
        Colors
      </Typography>
      <Gallery>
        {colors.map((color) => (
          <Display key={color}>
            <Typography
              as='h2'
              variant='body2'
              css={(theme) => ({
                gridColumn: 'span 5 / span 5',
                [theme.breakpoints.up('md')]: {
                  gridColumn: 'span 10 / span 10',
                },
              })}>
              {color}
            </Typography>
            {shades.map((shade) => (
              <Card key={`${shade}`} color={color} shade={shade} />
            ))}
          </Display>
        ))}
      </Gallery>
    </Container>
  </Box>
);

const Gallery = styled.div({ display: 'grid', gap: '1.75rem' });

const Display = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  gap: '1.75rem',
  width: 'max-content',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
  },
}));

const Card = styled.div<{ color: Color; shade: Shade }>(
  ({ color, shade, theme }) => ({
    backgroundColor: theme.palette[color][shade],
    boxShadow: theme.shadows[3],
    borderRadius: '0.375rem',
    padding: '1.5rem 1.5rem',
    width: 'max-content',
  })
);
