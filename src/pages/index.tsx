import { Features } from '../components/marketing/Features';
import { Hero } from '../components/marketing/Hero';
import { Layout } from '../components/layout/Layout';
import { NextPage } from 'next';
import { Overview } from '../components/marketing/Overview';

const Home: NextPage = () => (
  <Layout lean title='Home'>
    <Hero />
    <Features />
    <Overview />
  </Layout>
);

export default Home;
