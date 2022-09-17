import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '640px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '768px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1024px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1280px',
  },
  [theme.breakpoints.up('2xl')]: {
    maxWidth: '1536px',
  },
}));
