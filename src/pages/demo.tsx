import { Example } from '../modules/demo/Example';
import { Layout } from '../modules/layout/Layout';
import { NextPage } from 'next';
import { Palette } from '../modules/demo/Palette';
import { TextFields } from '../modules/demo/TextFields';
import { TypographyDemo } from '../modules/demo/TypographyDemo';

const Demo: NextPage = () => (
  <Layout title='Demo'>
    <Palette />
    <TypographyDemo />
    <TextFields />
    <Example />
  </Layout>
);

export default Demo;
