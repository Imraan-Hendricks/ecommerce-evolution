import { NextPage } from 'next';
import { Palette } from '../modules/demo/Palette';
import { TypographyDemo } from '../modules/demo/TypographyDemo';

const Demo: NextPage = () => (
  <main>
    <Palette />
    <TypographyDemo />
  </main>
);

export default Demo;
