import {
  createContext,
  FC,
  MutableRefObject,
  PropsWithChildren,
  useContext,
  useRef,
} from 'react';
import { useScroll } from '../../hooks/useScroll';

interface ContextProps {
  isActive: (
    ref: MutableRefObject<HTMLElement | null>,
    offset?: number
  ) => boolean;
  homeRef: MutableRefObject<HTMLDivElement | null>;
  featuresRef: MutableRefObject<HTMLDivElement | null>;
  overviewRef: MutableRefObject<HTMLDivElement | null>;
  pricingRef: MutableRefObject<HTMLDivElement | null>;
  faqRef: MutableRefObject<HTMLDivElement | null>;
  contactRef: MutableRefObject<HTMLDivElement | null>;
  newsletterRef: MutableRefObject<HTMLDivElement | null>;
}

const NavbarContext = createContext<ContextProps | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context)
    throw new Error('useNavbar must be inside a Provider with a value');
  return context;
};

export const NavbarProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const featuresRef = useRef<null | HTMLDivElement>(null);
  const overviewRef = useRef<null | HTMLDivElement>(null);
  const pricingRef = useRef<null | HTMLDivElement>(null);
  const faqRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  const newsletterRef = useRef<null | HTMLDivElement>(null);

  const { scrollY } = useScroll();

  function isActive(ref: MutableRefObject<HTMLElement | null>, offset = -75) {
    if (!ref.current) return false;

    const targetOffset = offset || -75;
    if (scrollY < ref.current.offsetTop + targetOffset) return false;

    return true;
  }

  return (
    <NavbarContext.Provider
      value={{
        isActive,
        homeRef,
        featuresRef,
        overviewRef,
        pricingRef,
        faqRef,
        contactRef,
        newsletterRef,
      }}>
      {children}
    </NavbarContext.Provider>
  );
};
