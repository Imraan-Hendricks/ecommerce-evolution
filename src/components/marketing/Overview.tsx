import styled from '@emotion/styled';
import { Box } from '../ui/Box';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Container } from '../ui/Container';
import {
  fadeInBottom,
  fadeOutBottom,
  intersectionOptions,
} from '@/utils/animation-utils';
import { FC, PropsWithChildren } from 'react';
import { scrollToElement } from '../../utils/scroll-utils';
import { Typography } from '../ui/Typography';
import { useNavbar } from '../layout/NavbarContext';
import { useInView } from 'react-intersection-observer';

export const Overview: FC = () => {
  const { contactRef } = useNavbar();
  const { ref, inView } = useInView(intersectionOptions);

  return (
    <Module>
      <Layout ref={ref} inView={inView}>
        <Title>Powering innovation to a diverse range of businesses</Title>
        <Body>
          Our team has experience working with clients in a variety of
          industries, including fashion, beauty, home goods, and more. We take
          pride in helping our clients succeed and {`we're`} always thrilled to
          see them thrive in the competitive world of ecommerce. Contact us
          today to learn how we can help your business become the next success
          story.
        </Body>
        <Body2>
          From startups to established businesses, {`we've`} helped a diverse
          range of clients achieve their ecommerce goals and unlock the full
          potential of their online presence. Contact us today to learn more
          about how we can help your business thrive.
        </Body2>
        <ActionLink onClick={() => scrollToElement({ ref: contactRef })}>
          Contact Us
        </ActionLink>
      </Layout>
    </Module>
  );
};

const Module = styled.section({
  padding: '0rem 1.25rem 6rem 1.25rem',
});

const Layout = styled(Container)<{ inView: boolean }>(({ theme, inView }) => ({
  display: 'grid',
  alignItems: 'center',
  rowGap: '2rem',
  columnGap: '8rem',
  animation: '1s ease-in-out forwards',
  animationName: inView ? fadeInBottom : fadeOutBottom,
}));

const Title = styled(Typography)();
Title.defaultProps = { as: 'h1', variant: 'h4' };

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.gray[600],
  width: '100%',
}));
Body.defaultProps = { as: 'p', variant: 'body1' };

const Body2 = styled(Typography)(({ theme }) => ({
  color: theme.palette.gray[600],
  width: '100%',
  fontWeight: theme.typography.body2.fontWeight + 100,
}));
Body2.defaultProps = { as: 'p', variant: 'body1' };

const ActionLink: FC<PropsWithChildren<{ onClick: () => void }>> = ({
  children,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      css={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          'p, svg': {
            color: theme.palette.primary[700],
          },
        },
        '&:active': {
          'p, svg': {
            color: theme.palette.primary[400],
          },
        },
      })}>
      <Typography as={'p'} variant='h6' color='primary'>
        {children}
      </Typography>
      <ChevronRightIcon
        css={(theme) => ({
          marginLeft: '.5rem',
          width: '1.25rem',
          height: '1.25rem',
          color: theme.palette.primary[500],
        })}
      />
    </Box>
  );
};
