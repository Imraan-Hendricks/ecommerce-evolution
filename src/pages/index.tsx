import { About } from '../components/marketing/About';
import { Contact } from '../components/marketing/Contact';
import { FAQ } from '../components/marketing/FAQ';
import { Features } from '../components/marketing/Features';
import { Hero } from '../components/marketing/Hero';
import { Layout } from '../components/layout/Layout';
import { Overview } from '../components/marketing/Overview';
import { Newsletter } from '../components/marketing/Newsletter';
import { NextPage } from 'next';
import { Pricing } from '../components/marketing/Pricing';
import { Promo } from '../components/marketing/Promo';

const keywords =
  'Ecommerce Evolution, ecommerce solutions, web design and development, shopping cart, payment gateway, succeed online, online store, checkout experience, checkout process, startup business';

const Home: NextPage = () => (
  <Layout keywords={keywords}>
    <Hero />
    <Promo />
    <Features />
    <About />
    <Overview />
    <Pricing />
    <FAQ />
    <Contact />
    <Newsletter />
  </Layout>
);

export default Home;
