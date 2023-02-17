import styled from '@emotion/styled';
import { Color } from '../../theme/types';
import { Container } from '../ui/Container';
import {
  faNodeJs,
  faReact,
  faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Typography } from '../ui/Typography';
import { useNavbar } from '../layout/NavbarContext';

const subtitle = 'Transform Your Business';

const title = 'Empowering Your Business to Thrive in the Digital World';

const body = {
  one: `At Ecommerce Evolution, we're committed to delivering 
        exceptional value and results to our clients. We take pride 
        in providing the highest quality of service, and we're 
        dedicated to building long-term partnerships with our clients.`,

  two: `With Ecommerce Evolution by your side, you can be confident 
        that you're in good hands, and that your ecommerce business 
        is in the best possible position to succeed. Whether you're 
        just starting out or looking to grow your existing ecommerce 
        business, we have the expertise and experience to help you 
        achieve your goals. `,
} as const;

const icons = [
  { key: 'react', color: 'primary', icon: faReact },
  { key: 'css', color: 'secondary', icon: faCss3Alt },
  { key: 'node', color: 'primary', icon: faNodeJs },
] as const;

export const Overview: FC = () => {
  const { overviewRef } = useNavbar();
  return (
    <Module ref={overviewRef}>
      <Layout>
        <ContentBlock>
          <Subtitle>{subtitle}</Subtitle>
          <Title>{title}</Title>
          <TitleDivider />
          <Body>{body.one}</Body>
          <Body>{body.two}</Body>
          <IconList>
            {icons.map((props) => (
              <Icon {...props} />
            ))}
          </IconList>
        </ContentBlock>
        <div
          css={{
            position: 'relative',
            borderRadius: '0.25rem',
            overflow: 'hidden',
          }}>
          <img
            css={{ position: 'relative' }}
            src='/images/marketing/overview.jpg'
            alt='overview'
          />
          <div
            css={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.40), rgb(59, 130, 246, 0.60))',
              top: 0,
              left: 0,
            }}></div>
        </div>
      </Layout>
    </Module>
  );
};

const Module = styled.section({
  padding: '6rem 1.25rem',
});

const Layout = styled(Container)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  rowGap: '2rem',
  columnGap: '8rem',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}));

const ContentBlock = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: '2rem',
  justifyItems: 'start',
  alignItems: 'center',
  height: 'max-content',
});

const Subtitle = styled(Typography)();
Subtitle.defaultProps = { as: 'h2', color: 'primary', variant: 'subtitle1' };

const Title = styled(Typography)({ maxWidth: '32rem' });
Title.defaultProps = { as: 'h1', variant: 'h4' };

const TitleDivider = styled.hr(({ theme }) => ({
  borderColor: theme.palette.secondary[500],
  borderWidth: '0.125rem',
  width: '4rem',
}));

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.gray[600],
  width: '100%',
}));
Body.defaultProps = { as: 'p', variant: 'body2' };

const IconList = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.up('xl')]: {
    justifyContent: 'space-between',
  },
}));

const Icon: FC<{ color?: Color; icon: IconDefinition }> = ({
  color = 'primary',
  icon,
}) => (
  <FontAwesomeIcon
    icon={icon}
    css={(theme) => ({
      color: theme.palette[color][400],
      width: '4rem',
      height: '4rem',
    })}
  />
);
