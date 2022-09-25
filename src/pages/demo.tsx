import { Features } from '../components/demo/Features';
import { Layout } from '../components/layout/Layout';
import { NextPage } from 'next';
import { Overview } from '../components/demo/Overview';
import { Palette } from '../components/demo/Palette';
import { TextFields } from '../components/demo/TextFields';
import { TypographyDemo } from '../components/demo/TypographyDemo';

const Demo: NextPage = () => (
  <Layout title='Demo'>
    <Overview />
    <Features />
    <Palette />
    <TypographyDemo />
    <TextFields />
  </Layout>
);

export default Demo;
