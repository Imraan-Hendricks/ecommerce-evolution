import { Hero } from '../modules/marketing/Hero';
import { Layout } from '../modules/layout/Layout';
import { NextPage } from 'next';

const Home: NextPage = () => (
  <Layout title='Home'>
    <Hero />
  </Layout>
);

export default Home;
