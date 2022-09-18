import styled from '@emotion/styled';
import { Box } from '../../components/Box';
import { Color, colors, Shade, shades } from '../../theme/types';
import { Container } from '../../components/Container';
import { FC } from 'react';

export const Palette: FC = () => (
  <Box as='section' css={{ padding: '5rem 1.25rem' }}>
    <Container>
      <Title css={{ fontSize: '3rem', marginBottom: '1.75rem' }}>Colors</Title>
      <Gallery>
        {colors.map((color) => (
          <Display key={color}>
            <SubHeading css={{ gridColumn: 'span 11 / span 11' }}>
              {color}
            </SubHeading>
            {shades.map((shade) => (
              <Card key={`${shade}`} color={color} shade={shade} />
            ))}
          </Display>
        ))}
      </Gallery>
    </Container>
  </Box>
);

const Title = styled.h1(({ theme }) => theme.typography.h1);

const SubHeading = styled.h2(({ theme }) => theme.typography.body);

const Gallery = styled.div({ display: 'grid', gap: '1.75rem' });

const Display = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
  gap: '1.75rem',
  width: 'max-content',
});

const Card = styled.div<{ color: Color; shade: Shade }>(
  ({ color, shade, theme }) => ({
    backgroundColor: theme.palette[color][shade],
    boxShadow: theme.shadows[3],
    borderRadius: '0.375rem',
    padding: '1.5rem 1.5rem',
    width: 'max-content',
  })
);
