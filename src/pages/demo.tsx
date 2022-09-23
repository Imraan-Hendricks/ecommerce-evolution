import { Contrast } from '../components/demo/Contrast';
import { Example } from '../components/demo/Example';
import { Layout } from '../components/layout/Layout';
import { NextPage } from 'next';
import { Palette } from '../components/demo/Palette';
import { TextFields } from '../components/demo/TextFields';
import { TypographyDemo } from '../components/demo/TypographyDemo';

const Demo: NextPage = () => (
  <Layout title='Demo'>
    <Palette />
    <Contrast />
    <TypographyDemo />
    <TextFields />
    <Example />
  </Layout>
);

export default Demo;
