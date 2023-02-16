import { Contact } from '../components/marketing/Contact';
import { FAQ } from '../components/marketing/FAQ';
import { Features } from '../components/marketing/Features';
import { Hero } from '../components/marketing/Hero';
import { Layout } from '../components/layout/Layout';
import { Newsletter } from '../components/marketing/Newsletter';
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
    <FAQ />
    <Contact />
    <Newsletter />
  </Layout>
);

export default Home;
