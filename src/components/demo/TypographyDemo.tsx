import styled from '@emotion/styled';
import { Container } from '../ui/Container';
import { FC, PropsWithChildren } from 'react';
import { Typography } from '../ui/Typography';

const paragaph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore
                  consectetur, neque doloribus, cupiditate numquam dignissimos laborum
                  fugiat deleniti? Eum quasi quidem quibusdam.`;

export const TypographyDemo: FC = () => (
  <Module>
    <Layout>
      <Title>Typography</Title>
      <TwoColumn>
        <Layout>
          <H1>H1. Heading One</H1>
          <H2>H2. Heading Two</H2>
          <H3>H3. Heading Three</H3>
          <H4>H4. Heading Four</H4>
          <H5>H5. Heading Five</H5>
          <H6>H6. Heading Six</H6>
        </Layout>
        <Layout>
          <Paragaph variant='subtitle1'>{paragaph}</Paragaph>
          <Paragaph variant='subtitle2'>{paragaph}</Paragaph>
          <Paragaph variant='body1'>{paragaph}</Paragaph>
          <Paragaph variant='body2'>{paragaph}</Paragaph>
          <Button>Button Text</Button>
          <Caption>caption text</Caption>
          <Overline>OVERLINE TEXT</Overline>
        </Layout>
      </TwoColumn>
    </Layout>
  </Module>
);

const Module = styled.section({ padding: '6rem 1.25rem' });

const Layout = styled(Container)({ display: 'grid', gap: '2rem' });

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('2xl')]: {
    textAlign: 'start',
  },
}));
Title.defaultProps = { as: 'h1', variant: 'h4' };

const TwoColumn = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: '2rem',
  textAlign: 'center',
  margin: 'auto auto',
  [theme.breakpoints.up('2xl')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    textAlign: 'start',
  },
}));

const H1 = styled(Typography)();
H1.defaultProps = { as: 'h1', variant: 'h1' };

const H2 = styled(Typography)();
H2.defaultProps = { as: 'h2', variant: 'h2' };

const H3 = styled(Typography)();
H3.defaultProps = { as: 'h3', variant: 'h3' };

const H4 = styled(Typography)();
H4.defaultProps = { as: 'h4', variant: 'h4' };

const H5 = styled(Typography)();
H5.defaultProps = { as: 'h5', variant: 'h5' };

const H6 = styled(Typography)();
H6.defaultProps = { as: 'h6', variant: 'h6' };

const Paragaph: FC<
  PropsWithChildren<{
    variant: 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
  }>
> = ({ children, variant }) => (
  <Typography as='p' css={{ maxWidth: '48rem' }} variant={variant}>
    {variant}.{' '}
    <Typography as='span' color='gray' variant={variant}>
      {children}
    </Typography>
  </Typography>
);

const Button = styled(Typography)({ display: 'block' });
Button.defaultProps = { as: 'span', variant: 'button' };

const Caption = styled(Typography)();
Caption.defaultProps = { as: 'p', variant: 'caption' };

const Overline = styled(Typography)();
Overline.defaultProps = { as: 'p', variant: 'overline' };
