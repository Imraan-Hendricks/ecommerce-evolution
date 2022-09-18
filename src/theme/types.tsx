export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

export type Color =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'gray';
export const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'gray',
] as const;

export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export const shades = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const;
