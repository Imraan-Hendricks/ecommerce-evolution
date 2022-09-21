import styled from '@emotion/styled';
import { Color, colors, Shade, shades } from '../../theme/types';
import { Container } from '../ui/Container';
import { FC, Fragment } from 'react';
import { Typography } from '../ui/Typography';

const title = 'Colors';

export const Palette: FC = () => (
  <Module>
    <Layout>
      <Title>{title}</Title>
      <Gallery>
        {colors.map((color) => (
          <GalleryItem key={color}>
            <ItemHeading>{color}</ItemHeading>
            <ItemDisplay key={color}>
              {shades.map((shade) => (
                <Card key={`${shade}`} color={color} shade={shade} />
              ))}
            </ItemDisplay>
          </GalleryItem>
        ))}
      </Gallery>
    </Layout>
  </Module>
);

const Module = styled.section({ padding: '6rem 1.25rem' });

const Layout = styled(Container)({ display: 'grid', gap: '2rem' });

const Title = styled(Typography)();
Title.defaultProps = { as: 'h1', variant: 'h4' };

const Gallery = styled.div({ display: 'grid', gap: '1.75rem' });

const GalleryItem = Fragment;

const ItemHeading = styled(Typography)();
ItemHeading.defaultProps = { as: 'h2', variant: 'body2' };

const ItemDisplay = styled.div(({ theme }) => ({
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
