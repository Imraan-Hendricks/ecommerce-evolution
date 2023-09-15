import HeroImage from '../../../public/images/marketing/hero-781.webp';
import { Button } from '../ui/Button';
import { FC } from 'react';
import { fadeIn } from '@/utils/animation-utils';
import { scrollToElement } from '../../utils/scroll-utils';
import { Typography } from '../ui/Typography';
import { useNavbar } from '../layout/NavbarContext';
import Image from 'next/image';

export const Hero: FC = () => {
  const { homeRef, contactRef, pricingRef } = useNavbar();

  return (
    <section
      css={(theme) => ({
        backgroundImage:
          'radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        rowGap: '10rem',
        columnGap: '4rem',
        alignItems: 'center',
        justifyItems: 'center',
        padding: '10rem 1.25rem',
        [theme.breakpoints.up('xl')]: {
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
      })}>
      <div
        ref={homeRef}
        css={(theme) => ({
          display: 'grid',
          gap: '1rem',
          textAlign: 'center',
          animation: '1s ease-in-out forwards',
          animationName: fadeIn,
          [theme.breakpoints.up('xl')]: { textAlign: 'start' },
        })}>
        <Typography as='h2' variant='subtitle2' color='primary'>
          ECOMMERCE EVOLUTION
        </Typography>
        <Typography as='h1' variant='h2' color='gray'>
          Delivering Premium <br />{' '}
          <Typography as='span' variant='h2' bold color='white'>
            Digital Solutions
          </Typography>
        </Typography>
        <Typography
          as='p'
          variant='subtitle1'
          css={(theme) => ({
            maxWidth: '36rem',
            color: theme.palette.gray[400],
            margin: '0 auto',
            [theme.breakpoints.up('xl')]: { margin: '0' },
          })}>
          Transform Your Business and Thrive Online with Ecommerce Evolution -
          Personalized Ecommerce Solutions for Your Unique Needs
        </Typography>
        <div
          css={(theme) => ({
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '.5rem',
            width: 'max-content',
            margin: '0 auto',
            [theme.breakpoints.up('xl')]: { margin: '0' },
          })}>
          <Button onClick={() => scrollToElement({ ref: contactRef })}>
            Get Started
          </Button>
          <Button
            color='white'
            onClick={() => scrollToElement({ ref: pricingRef })}>
            See Our Pricing
          </Button>
        </div>
      </div>
      <div
        css={{
          animation: '1s ease-in-out forwards',
          animationName: fadeIn,
        }}>
        <Image src={HeroImage} alt='hero' unoptimized />
      </div>
    </section>
  );
};
