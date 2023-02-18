import { Box } from '../ui/Box';
import { Container } from '../ui/Container';
import { PropsWithChildren } from 'react';
import { scrollToElement } from '../../utils/scroll-utils';
import { Typography } from '../ui/Typography';
import { useNavbar } from './NavbarContext';

interface MobileMenuProps {
  isOpen?: boolean;
  close: () => void;
}

export function MobileMenu({ isOpen, close }: MobileMenuProps) {
  const {
    isActive,
    homeRef,
    featuresRef,
    aboutRef,
    pricingRef,
    faqRef,
    contactRef,
  } = useNavbar();

  return (
    <Module isOpen={isOpen}>
      <Container>
        <Box as='ul'>
          {[
            {
              name: 'Home',
              onClick: () => scrollToElement({ ref: homeRef, yOffset: 300 }),
              active: isActive(homeRef, -300) && !isActive(featuresRef),
            },
            {
              name: 'Features',
              onClick: () => scrollToElement({ ref: featuresRef }),
              active: isActive(featuresRef) && !isActive(aboutRef),
            },
            {
              name: 'Overview',
              onClick: () => scrollToElement({ ref: aboutRef }),
              active: isActive(aboutRef) && !isActive(pricingRef),
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
            <MenuItem
              key={name}
              active={active}
              name={name}
              onClick={() => {
                onClick();
                close();
              }}
            />
          ))}
        </Box>
      </Container>
    </Module>
  );
}

interface ModuleProps {
  isOpen?: boolean;
}

function Module({ children, isOpen }: PropsWithChildren<ModuleProps>) {
  return (
    <Box
      css={(theme) => ({
        position: 'fixed',
        left: 0,
        zIndex: 1000,
        height: isOpen ? '100%' : '0',
        width: '100%',
        backgroundColor: 'white',
        overflow: 'hidden',
        transition: theme.transition.all,
        transitionDuration: '300ms',
      })}>
      {children}
    </Box>
  );
}

interface MenuItemProps {
  active: boolean;
  name: string;
  onClick: () => void;
}

function MenuItem({ active, name, onClick }: MenuItemProps) {
  return (
    <Typography
      key={name}
      as='li'
      onClick={onClick}
      css={(theme) => ({
        padding: '1rem 1rem',
        cursor: 'pointer',
        color: active ? theme.palette.primary[500] : theme.palette.black[500],
        backgroundColor: active ? theme.palette.gray[100] : 'transparent',
        ':hover': { backgroundColor: theme.palette.gray[100] },
      })}>
      {name}
    </Typography>
  );
}
