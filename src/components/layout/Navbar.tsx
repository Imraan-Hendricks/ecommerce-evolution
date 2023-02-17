import {
  Bars3Icon,
  CubeTransparentIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { Box } from '../ui/Box';
import { Container } from '../ui/Container';
import { FC, PropsWithChildren, useState } from 'react';
import { MobileMenu } from './NavbarMobileMenu';
import { scrollToElement, scrollToTop } from '../../utils/scroll-utils';
import { Typography } from '../ui/Typography';
import { useScroll } from '../../hooks/useScroll';
import { useNavbar } from './NavbarContext';

export const Navbar: FC = () => {
  const { isTop, scrollDirection, scrollY } = useScroll();
  const {
    isActive,
    homeRef,
    featuresRef,
    overviewRef,
    pricingRef,
    faqRef,
    contactRef,
  } = useNavbar();

  const [isOpen, setIsOpen] = useState(false);

  function closeMobileMenu() {
    setIsOpen(false);
  }

  function toggleMobileMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <Module isTop={isTop} scrollDirection={scrollDirection} scrollY={scrollY}>
      <Container>
        <Nav isTop={isTop}>
          <NavBrand isTop={isTop} closeMobileMenu={closeMobileMenu} />
          <MenuButton isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
          <NavItems>
            {[
              {
                name: 'Home',
                onClick: () => scrollToElement({ ref: homeRef, yOffset: 300 }),
                active: isActive(homeRef, -300) && !isActive(featuresRef),
              },
              {
                name: 'Features',
                onClick: () => scrollToElement({ ref: featuresRef }),
                active: isActive(featuresRef) && !isActive(overviewRef),
              },
              {
                name: 'Overview',
                onClick: () => scrollToElement({ ref: overviewRef }),
                active: isActive(overviewRef) && !isActive(pricingRef),
              },
              {
                name: 'Pricing',
                onClick: () => scrollToElement({ ref: pricingRef }),
                active: isActive(pricingRef) && !isActive(faqRef),
              },
              {
                name: 'FAQ',
                onClick: () => scrollToElement({ ref: faqRef }),
                active: isActive(faqRef) && !isActive(contactRef),
              },
              {
                name: 'Contact',
                onClick: () => scrollToElement({ ref: contactRef }),
                active: isActive(contactRef),
              },
            ].map(({ active, name, onClick }) => (
              <NavItem
                key={name}
                active={active}
                name={name}
                onClick={onClick}
                isTop={isTop}
              />
            ))}
          </NavItems>
        </Nav>
      </Container>
      <MobileMenu isOpen={isOpen} close={closeMobileMenu} />
    </Module>
  );
};

interface NavbarProps {
  isTop: boolean;
  scrollDirection: 'up' | 'down';
  scrollY: number;
}

function Module({
  children,
  isTop,
  scrollDirection,
  scrollY,
}: PropsWithChildren<NavbarProps>) {
  return (
    <div
      css={(theme) => ({
        position: 'fixed',
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: theme.palette.white[500],
        [theme.breakpoints.up('lg')]: {
          backgroundColor: isTop ? 'transparent' : theme.palette.white[500],
        },
        top: scrollDirection === 'up' ? 0 : scrollY < 650 ? 0 : -65,
        transition: theme.transition.all,
        transitionDuration: '300ms',
      })}>
      {children}
    </div>
  );
}

interface NavProps {
  isTop: boolean;
}

function Nav({ children, isTop }: PropsWithChildren<NavProps>) {
  return (
    <nav
      css={(theme) => ({
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '0',
        [theme.breakpoints.up('lg')]: {
          padding: isTop ? '0 10%' : '0',
        },
        transition: theme.transition.all,
        transitionDuration: '300ms',
      })}>
      {children}
    </nav>
  );
}

interface NavBrandProps {
  isTop: boolean;
  closeMobileMenu: () => void;
}

function NavBrand({ isTop, closeMobileMenu }: NavBrandProps) {
  return (
    <div
      css={(theme) => ({
        flexGrow: 1,
        marginLeft: '1.25rem',
        [theme.breakpoints.up('2xl')]: { marginLeft: 0 },
      })}>
      <div
        onClick={() => {
          scrollToTop();
          closeMobileMenu();
        }}
        css={{
          width: 'max-content',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <div>
          <CubeTransparentIcon
            css={(theme) => ({
              height: '2.25rem',
              width: '2.25rem',
              color: theme.palette.primary[500],
              [theme.breakpoints.up('lg')]: {
                color: isTop
                  ? theme.palette.gray[50]
                  : theme.palette.primary[500],
              },
              marginRight: '1rem',
            })}
          />
        </div>
        <Typography
          as='h1'
          variant='h6'
          css={(theme) => ({
            color: theme.palette.gray[900],
            [theme.breakpoints.up('lg')]: {
              color: isTop ? theme.palette.gray[200] : theme.palette.gray[900],
            },
          })}>
          Evolution
        </Typography>
      </div>
    </div>
  );
}

interface MenuButtonProps {
  isOpen?: boolean;
  toggleMobileMenu: () => void;
}

function MenuButton({ isOpen, toggleMobileMenu }: MenuButtonProps) {
  return (
    <Box
      onClick={toggleMobileMenu}
      css={(theme) => ({
        display: 'block',
        margin: '1.02rem 0',
        padding: '.25rem .25rem',
        borderWidth: '1px',
        borderRadius: '.375rem',
        borderColor: theme.palette.gray[300],
        backgroundColor: theme.palette.gray[100],
        marginRight: '1.25rem',
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        },
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: theme.palette.gray[200],
          borderColor: theme.palette.gray[400],
        },
        '&:active': {
          backgroundColor: theme.palette.gray[100],
          borderColor: theme.palette.gray[200],
        },
      })}>
      {!isOpen && (
        <Bars3Icon
          css={(theme) => ({
            color: theme.palette.primary[500],
            width: '1.5rem',
            height: '1.5rem',
          })}
        />
      )}
      {isOpen && (
        <XMarkIcon
          css={(theme) => ({
            color: theme.palette.primary[500],
            width: '1.5rem',
            height: '1.5rem',
          })}
        />
      )}
    </Box>
  );
}

function NavItems({ children }: PropsWithChildren<unknown>) {
  return (
    <ul
      css={(theme) => ({
        paddingTop: '0.3rem',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: {
          display: 'flex',
        },
      })}>
      {children}
    </ul>
  );
}

interface NavItemProps {
  active: boolean;
  name: string;
  onClick: () => void;
  isTop: boolean;
}

function NavItem({ active, isTop, name, onClick }: NavItemProps) {
  return (
    <Typography
      onClick={onClick}
      key={name}
      as='li'
      css={(theme) => ({
        padding: '1.25rem 1.75rem',
        borderBottom: '2px solid',
        cursor: 'pointer',
        color: active
          ? isTop
            ? theme.palette.gray[50]
            : theme.palette.gray[900]
          : isTop
          ? theme.palette.gray[400]
          : theme.palette.gray[400],
        borderBottomColor: active
          ? isTop
            ? 'transparent'
            : theme.palette.primary[500]
          : 'transparent',
        '&:hover': {
          borderBottom: '2px solid',
          borderBottomColor: theme.palette.primary[500],
          color: isTop ? theme.palette.gray[50] : theme.palette.gray[900],
          transition: theme.transition.colors,
        },
      })}>
      {name}
    </Typography>
  );
}
