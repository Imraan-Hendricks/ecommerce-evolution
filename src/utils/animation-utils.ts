import { IntersectionOptions } from 'react-intersection-observer';
import { keyframes } from '@emotion/react';

export const intersectionOptions: IntersectionOptions = {
  initialInView: false,
  triggerOnce: true,
  threshold: 0.2,
};

export const fadeIn = `${keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})}`;

export const fadeOut = `${keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})}`;

export const fadeInBottom = `${keyframes({
  '0%': { position: 'relative', opacity: 0, top: '2.5rem' },
  '100%': { position: 'relative', opacity: 1, top: 0 },
})}`;

export const fadeOutBottom = `${keyframes({
  '0%': { position: 'relative', opacity: 1, top: 0 },
  '100%': { position: 'relative', opacity: 0, top: '2.5rem' },
})}`;
