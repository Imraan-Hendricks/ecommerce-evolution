import { CTA } from '../components/marketing/CTA';
import { Features } from '../components/marketing/Features';
import { Hero } from '../components/marketing/Hero';
import { Layout } from '../components/layout/Layout';
import { NextPage } from 'next';
import { Overview } from '../components/marketing/Overview';
import { Pricing } from '../components/marketing/Pricing';
import { Promo } from '../components/marketing/Promo';

const Home: NextPage = () => (
  <Layout title='Home'>
    <Hero />
    <Promo />
    <Features />
    <Overview />
    <Pricing />
    <CTA />
  </Layout>
);

export default Home;
