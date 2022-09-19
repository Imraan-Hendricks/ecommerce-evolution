import { Example } from '../modules/demo/Example';
import { NextPage } from 'next';
import { Palette } from '../modules/demo/Palette';
import { TextFields } from '../modules/demo/TextFields';
import { TypographyDemo } from '../modules/demo/TypographyDemo';

const Demo: NextPage = () => (
  <main>
    <Palette />
    <TypographyDemo />
    <TextFields />
    <Example />
  </main>
);

export default Demo;
