import Link from 'next/link';
import { Box } from '../ui/Box';
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useState } from 'react';
import { useScroll } from '../../hooks/useScroll';

export function SocialDial() {
  const [isVisible, setIsVisible] = useState(false);
  function toggleVisibility() {
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <Module>
      {[
        { icon: faFacebook, href: 'https://www.facebook.com' },
        { icon: faInstagram, href: 'https://www.instagram.com' },
        { icon: faTwitch, href: 'https://www.twitch.tv' },
        { icon: faTwitter, href: 'https://twitter.com' },
        { icon: faYoutube, href: 'https://www.youtube.com' },
      ].map(({ href, icon }) => (
        <Dial key={href} href={href} icon={icon} isVisible={isVisible} />
      ))}
      <DialController
        icon={faXmark}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
      />
    </Module>
  );
}

function Module({ children }: PropsWithChildren<unknown>) {
  const { scrollY } = useScroll();
  return (
    <Box
      as='aside'
      css={(theme) => ({
        display: scrollY > 500 ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        bottom: '5%',
        right: '5%',
        zIndex: 10001,
        borderRadius: '0.375rem',
        [theme.breakpoints.up('sm')]: {
          right: '3%',
        },
      })}>
      {children}
    </Box>
  );
}

interface DialControllerProps {
  icon: IconDefinition;
  isVisible: boolean;
  toggleVisibility: () => void;
}

function DialController({
  icon,
  isVisible,
  toggleVisibility,
}: DialControllerProps) {
  return (
    <Box
      onClick={toggleVisibility}
      css={(theme) => ({
        margin: '0.75rem 0',
        padding: '1rem',
        backgroundColor: theme.palette.primary[500],
        borderRadius: '100%',
        transform: isVisible ? 'rotate(0)' : 'rotate(45deg)',
        transition: theme.transition.all,
        transitionDuration: '300ms',
        ':hover': {
          backgroundColor: theme.palette.primary[600],
          cursor: 'pointer',
        },
        ':active': {
          backgroundColor: theme.palette.primary[400],
        },
      })}>
      <FontAwesomeIcon
        icon={icon}
        css={(theme) => ({
          width: '1.25rem',
          height: '1.25rem',
          color: theme.palette.white[500],
        })}
      />
    </Box>
  );
}

interface DialProps {
  href: string;
  icon: IconDefinition;
  isVisible: boolean;
}

function Dial({ href, icon, isVisible }: DialProps) {
  return (
    <Link
      href={href}
      css={(theme) => ({
        height: isVisible ? 'auto' : '0',
        opacity: isVisible ? '1' : '0',
        transition: theme.transition.all,
        transitionDuration: '500ms',
      })}>
      <Box
        css={(theme) => ({
          visibility: isVisible ? 'visible' : 'hidden',
          width: 'max-content',
          margin: '0.75rem 0',
          padding: '.75rem',
          backgroundColor: theme.palette.gray[200],
          borderRadius: '100%',
          boxShadow: theme.shadows[7],
          ':hover': {
            backgroundColor: theme.palette.gray[300],
            cursor: 'pointer',
            svg: {
              color: theme.palette.primary[500],
            },
          },
        })}>
        <FontAwesomeIcon
          icon={icon}
          css={(theme) => ({
            width: '1.25rem',
            height: '1.25rem',
            color: theme.palette.gray[700],
          })}
        />
      </Box>
    </Link>
  );
}
