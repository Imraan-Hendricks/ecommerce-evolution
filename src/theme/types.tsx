export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export const breakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  '2xl': 1400,
} as const;

export type Color =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'gray'
  | 'white'
  | 'black';
export const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'gray',
  'white',
  'black',
] as const;

export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export const shades = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const;
