import styled from '@emotion/styled';
import { Color, colors, Shade, shades } from '../../theme/types';
import { Container } from '../ui/Container';
import { FC, Fragment } from 'react';
import { Typography } from '../ui/Typography';

const title = 'Color Palette';

export const Palette: FC = () => (
  <Module>
    <Layout>
      <Title>{title}</Title>
      <ContrastTable>
        {colors.map((color) => (
          <Fragment key={color}>
            {shades.map((shade) => (
              <Card key={`${shade}`} color={color} shade={shade}>
                <CardText color={color} shade={shade}>
                  {color}
                  <br />[{shade}]
                </CardText>
              </Card>
            ))}
          </Fragment>
        ))}
      </ContrastTable>
    </Layout>
  </Module>
);

const Module = styled.section(({ theme }) => ({
  backgroundColor: theme.palette.primary[50],
  padding: '6rem 1.25rem',
}));

const Layout = styled(Container)({ display: 'grid', gap: '2rem' });

const Title = styled(Typography)();
Title.defaultProps = { as: 'h1', variant: 'h4' };

const ContrastTable = styled.div(({ theme }) => ({
  display: 'grid',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  },
  [theme.breakpoints.up('2xl')]: {
    gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
  },
}));

const Card = styled.div<{ color: Color; shade: Shade }>(
  ({ color, shade, theme }) => ({
    backgroundColor: theme.palette[color][shade],
    padding: '35px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  })
);

const CardText = styled(Typography)<{ color: Color; shade: Shade }>(
  ({ color, shade, theme }) => ({
    color: theme.palette[color].contrast[shade],
  })
);
CardText.defaultProps = { as: 'p', variant: 'subtitle1' };
