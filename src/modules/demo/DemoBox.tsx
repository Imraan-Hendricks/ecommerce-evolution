import styled from '@emotion/styled';

interface DemoBoxProps {
  color?: string;
}

export const DemoBox = styled.div<DemoBoxProps>(
  ({ theme, color = '#38bdf8' }) => ({
    marginTop: '1rem',
    padding: '2rem 4rem',
    width: '100%',
    display: 'grid',
    gap: '.5rem',
    boxShadow: theme.shadows[10],
    backgroundColor: 'white',
    borderRadius: '0.375rem',
    '&:hover': {
      backgroundColor: color,
      cursor: 'pointer',
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '500ms',
      h1: { ...theme.typography.body },
      p: { ...theme.typography.h1 },
      '&:active': {
        backgroundColor: '#34d399',
        boxShadow: 'none',
      },
    },
  })
);
