import { AppProps } from 'next/app';
import { Theme } from '../theme/Theme';

const App = ({ Component, pageProps }: AppProps) => (
  <Theme>
    <Component {...pageProps} />
  </Theme>
);

export default App;
