import { MutableRefObject } from 'react';

type Behavior = 'auto' | 'smooth';

export const scrollToTop = (behavior: Behavior = 'smooth') =>
  window.scroll({ top: 0, left: 0, behavior });

export const scrollToElement = ({
  behavior = 'smooth',
  yOffset = 75,
  ref,
}: {
  behavior?: Behavior;
  yOffset?: number;
  ref: MutableRefObject<HTMLElement | null>;
}) => {
  if (!ref || !ref.current || !ref.current.offsetTop) return;
  window.scroll({ top: ref.current.offsetTop - yOffset, behavior });
};

export const scrollToId = ({
  behavior = 'smooth',
  id,
  yOffset = 75,
}: {
  behavior?: Behavior;
  id: string;
  yOffset?: number;
}) => {
  const element = document.getElementById(id);
  if (!element) return;
  window.scroll({ top: element.offsetTop - yOffset, behavior });
};

export const scrollToLocation = ({
  behavior = 'smooth',
  top = 0,
  left = 0,
}: {
  behavior?: Behavior;
  top?: number;
  left?: number;
} = {}) => {
  window.scroll({ top, left, behavior });
};
