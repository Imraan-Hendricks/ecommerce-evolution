import { CustomHead, CustomHeadProps } from './CustomHead';
import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { SocialDial } from './SocialDial';

interface LayoutProps extends CustomHeadProps {
  children: ReactNode;
  lean?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, lean, ...headProps }) => (
  <div css={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <CustomHead {...headProps} />
    {!lean && <Header />}
    <main css={{ flexGrow: 1 }}>{children}</main>
    {!lean && <SocialDial />}
    {!lean && <Footer />}
  </div>
);
