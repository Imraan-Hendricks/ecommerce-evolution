import { Hero } from '../components/marketing/Hero';
import { Layout } from '../components/layout/Layout';
import { NextPage } from 'next';

const Home: NextPage = () => (
  <Layout title='Home'>
    <Hero />
  </Layout>
);

export default Home;
