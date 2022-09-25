import styled from '@emotion/styled';
import { Color } from '../../theme/types';
import { Container } from '../ui/Container';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Typography } from '../ui/Typography';

const subtitle = 'Deploy faster';

const title = 'Everything you need to deploy your app';

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.`;

const features = [
  {
    color: 'secondary',
    icon: faGlobe,
    name: 'Competitve exchange rates',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    color: 'primary',
    icon: faScaleBalanced,
    name: 'No hidden fees',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    color: 'secondary',
    icon: faStar,
    name: 'Transfers are instant',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
] as const;

export const Features: FC = () => (
  <Module>
    <Layout>
      <Header>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <TitleDivider />
        <Description>{description}</Description>
      </Header>
      <FeatureList>
        {features.map(({ color, icon, name, description }) => (
          <Feature key={name}>
            <FeatureIcon color={color} icon={icon} />
            <FeatureName>{name}</FeatureName>
            <FeatureDesc>{description}</FeatureDesc>
          </Feature>
        ))}
      </FeatureList>
    </Layout>
  </Module>
);

const Module = styled.section({ padding: '6rem 1.25rem' });

const Layout = styled(Container)({ display: 'grid', gap: '2rem' });

const Header = styled.div({ display: 'grid', gap: '2rem' });

const Title = styled(Typography)();
Title.defaultProps = { as: 'h1', variant: 'h4' };

const TitleDivider = styled.hr(({ theme }) => ({
  borderColor: theme.palette.primary[500],
  borderWidth: '0.125rem',
  width: '4rem',
}));

const Subtitle = styled(Typography)();
Subtitle.defaultProps = { as: 'h2', color: 'secondary', variant: 'subtitle1' };

const Description = styled(Typography)({ maxWidth: '48rem' });
Description.defaultProps = { as: 'p', color: 'gray', variant: 'subtitle1' };

const FeatureList = styled.div(({ theme }) => ({
  display: 'grid',
  gap: '5rem',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    gap: '2.5rem',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    textAlign: 'start',
  },
  [theme.breakpoints.up('lg')]: {
    gap: '5rem',
  },
}));

const Feature = styled.div({ display: 'grid', gap: '1.25rem' });

const FeatureName = styled(Typography)();
FeatureName.defaultProps = { as: 'h3', variant: 'subtitle1' };

const FeatureDesc = styled(Typography)(({ theme }) => ({
  maxWidth: '20rem',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: { maxWidth: 'none', margin: '0 0' },
}));
FeatureDesc.defaultProps = { as: 'p', color: 'gray', variant: 'body2' };

const FeatureIcon: FC<{ color?: Color; icon: IconDefinition }> = ({
  color = 'primary',
  icon,
}) => (
  <div
    css={(theme) => ({
      backgroundColor: theme.palette[color][300],
      padding: '.75rem',
      borderRadius: '.375rem',
      width: 'max-content',
      margin: '0 auto',
      [theme.breakpoints.up('md')]: { margin: '0 0' },
    })}>
    <FontAwesomeIcon icon={icon} css={{ width: '1.5rem', height: '1.5rem' }} />
  </div>
);
