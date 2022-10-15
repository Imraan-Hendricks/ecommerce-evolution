import styled from '@emotion/styled';
import { Box } from '../ui/Box';
import { Container } from '../ui/Container';
import { FC, PropsWithChildren, useState } from 'react';
import { Typography } from '../ui/Typography';

const paragaph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore
                  consectetur, neque doloribus, cupiditate numquam dignissimos laborum
                  fugiat deleniti? Eum quasi quidem quibusdam.`;

export const TypographyDemo: FC = () => {
  const [isBold, setIsBold] = useState(false);
  return (
    <Module>
      <Layout>
        <Title>Typography</Title>
        <Box>
          <BoldSelector bold={!isBold} onClick={() => setIsBold(false)}>
            Normal
          </BoldSelector>
          <VerticalTextDivider />
          <BoldSelector bold={isBold} onClick={() => setIsBold(true)}>
            Bold
          </BoldSelector>
        </Box>
        <Layout>
          <H1 bold={isBold}>H1. Heading One</H1>
          <H2 bold={isBold}>H2. Heading Two</H2>
          <H3 bold={isBold}>H3. Heading Three</H3>
          <H4 bold={isBold}>H4. Heading Four</H4>
          <H5 bold={isBold}>H5. Heading Five</H5>
          <H6 bold={isBold}>H6. Heading Six</H6>
          <Paragaph bold={isBold} variant='subtitle1'>
            {paragaph}
          </Paragaph>
          <Paragaph bold={isBold} variant='subtitle2'>
            {paragaph}
          </Paragaph>
          <Paragaph bold={isBold} variant='body1'>
            {paragaph}
          </Paragaph>
          <Paragaph bold={isBold} variant='body2'>
            {paragaph}
          </Paragaph>
          <Button bold={isBold}>Button Text</Button>
          <Caption bold={isBold}>caption text</Caption>
          <Overline bold={isBold}>OVERLINE TEXT</Overline>
        </Layout>
      </Layout>
    </Module>
  );
};

const Module = styled.section({ padding: '6rem 1.25rem' });

const Layout = styled(Container)({
  display: 'grid',
  gap: '2rem',
  textAlign: 'center',
});

const Title = styled(Typography)({
  textAlign: 'center',
});
Title.defaultProps = { as: 'h1', variant: 'h4' };

const BoldSelector = styled(Typography)<{ bold?: boolean }>(
  ({ theme, bold }) => ({
    color: bold ? theme.palette.black[500] : theme.palette.gray[500],
    '&:hover': {
      color: bold ? theme.palette.black[500] : theme.palette.gray[700],
    },
  })
);
BoldSelector.defaultProps = { as: 'button', variant: 'button' };

const VerticalTextDivider = styled(Typography)({ margin: '0 1rem' });
VerticalTextDivider.defaultProps = {
  as: 'span',
  children: '|',
  variant: 'button',
};

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
    bold?: boolean;
    variant: 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
  }>
> = ({ bold, children, variant }) => (
  <Typography
    as='p'
    css={{ maxWidth: '48rem', margin: '0 auto' }}
    bold={bold}
    variant={variant}>
    {variant}.{' '}
    <Typography as='span' color='gray' bold={bold} variant={variant}>
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
