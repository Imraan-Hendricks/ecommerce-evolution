import { AppProps } from 'next/app';
import { NavbarProvider } from '../components/layout/NavbarContext';
import { Theme } from '../theme/Theme';

const App = ({ Component, pageProps }: AppProps) => (
  <Theme>
    <NavbarProvider>
      <Component {...pageProps} />
    </NavbarProvider>
  </Theme>
);

export default App;
