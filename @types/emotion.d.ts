import { GlobalProps } from '@emotion/react';
import { ReactElement } from 'react';
import { theme } from '../src/theme/Theme';

type MyTheme = typeof theme;

declare module '@emotion/react' {
  export type Global = (props: GlobalProps) => ReactElement;

  export interface Theme extends MyTheme {}
}
