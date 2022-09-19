import { Example } from '../modules/demo/Example';
import { NextPage } from 'next';
import { Palette } from '../modules/demo/Palette';
import { TypographyDemo } from '../modules/demo/TypographyDemo';

const Demo: NextPage = () => (
  <main>
    <Palette />
    <TypographyDemo />
    <Example />
  </main>
);

export default Demo;
