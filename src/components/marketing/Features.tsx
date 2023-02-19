import styled from '@emotion/styled';
import { Color } from '../../theme/types';
import { Container } from '../ui/Container';
import {
  faCartShopping,
  faChartSimple,
  faCreditCard,
  faGaugeSimpleHigh,
  faGlobe,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { fadeIn, fadeOut, intersectionOptions } from '@/utils/animation-utils';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Typography } from '../ui/Typography';
import { useNavbar } from '../layout/NavbarContext';
import { useInView } from 'react-intersection-observer';

const subtitle = 'Our Ecommerce Solutions';

const title = 'Comprehensive Services to Help You Succeed Online';

const description = `At Ecommerce Evolution, we offer a comprehensive range of ecommerce solutions to help businesses succeed online. Whether you're just starting out or looking to grow your existing ecommerce business, we have the expertise and experience to help you achieve your goals. `;

const features = [
  {
    color: 'primary',
    icon: faGlobe,
    name: 'Website design and development',
    description:
      'Our team of experienced web developers can create a custom ecommerce website that matches your brand and your unique business needs.',
  },
  {
    color: 'secondary',
    icon: faCartShopping,
    name: 'Shopping cart and checkout optimization',
    description:
      'We can optimize your shopping cart and checkout process to improve the user experience, reduce cart abandonment rates, and increase conversion rates.',
  },
  {
    color: 'primary',
    icon: faCreditCard,
    name: 'Payment gateway integration',
    description:
      'We can integrate a variety of payment gateways, including PayPal, Stripe, and Square, to provide a secure and seamless checkout experience.',
  },
  {
    color: 'secondary',
    icon: faGaugeSimpleHigh,
    name: 'Search engine optimization',
    description: `We can help improve your website's search engine rankings and increase traffic by optimizing your website's content, meta tags, and backlinks.`,
  },
  {
    color: 'primary',
    icon: faChartSimple,
    name: 'Analytics and reporting',
    description: `We provide detailed analytics and reporting to help you understand your website's performance, including traffic, sales, and customer behavior.`,
  },
  {
    color: 'secondary',
    icon: faScrewdriverWrench,
    name: 'Website maintenance and support',
    description:
      'We offer ongoing website maintenance and support to ensure that your website is always up-to-date and functioning properly. ',
  },
] as const;

export const Features: FC = () => {
  const { featuresRef } = useNavbar();
  const { ref, inView } = useInView({
    ...intersectionOptions,
    initialInView: true,
  });

  return (
    <Module ref={featuresRef}>
      <Layout ref={ref} inView={inView}>
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
};

const Module = styled.section(({ theme }) => ({
  backgroundColor: theme.palette.gray[50],
  padding: '6rem 1.25rem',
}));

const Layout = styled(Container)<{ inView: boolean }>(({ inView }) => ({
  display: 'grid',
  gap: '2rem',
  animation: '1s ease-in-out forwards',
  animationName: inView ? fadeIn : fadeOut,
}));

const Header = styled.div({ display: 'grid', gap: '2rem' });

const Title = styled(Typography)();
Title.defaultProps = { as: 'h1', variant: 'h4' };

const TitleDivider = styled.hr(({ theme }) => ({
  borderColor: theme.palette.secondary[500],
  borderWidth: '0.125rem',
  width: '4rem',
}));

const Subtitle = styled(Typography)();
Subtitle.defaultProps = { as: 'h2', color: 'primary', variant: 'subtitle1' };

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

const Feature = styled.div({
  display: 'grid',
  gap: '1.25rem',
  height: 'max-content',
});

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
