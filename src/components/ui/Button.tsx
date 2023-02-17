import styled from '@emotion/styled';
import { Color } from '../../theme/types';

export const Button = styled.button<{ color?: Color }>(
  ({ theme, color = 'primary' }) => ({
    ...theme.typography.button,
    color: theme.palette[color].contrast[600],
    backgroundColor: theme.palette[color][600],
    borderRadius: '.375rem',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '.75rem 1.75rem',
    textAlign: 'center',
    transition: theme.transition.all,
    transitionDuration: '300ms',

    '&:hover': {
      color: theme.palette[color].contrast[700],
      backgroundColor: theme.palette[color][700],
      boxShadow: theme.shadows[2],
    },

    '&:active': {
      color: theme.palette[color].contrast[500],
      backgroundColor: theme.palette[color][500],
      boxShadow: theme.shadows[0],
    },

    '&:disabled': {
      opacity: '75%',
      cursor: 'default',

      '&:hover': {
        color: theme.palette[color].contrast[600],
        backgroundColor: theme.palette[color][600],
        boxShadow: theme.shadows[0],
      },

      '&:active': {
        color: theme.palette[color].contrast[600],
        backgroundColor: theme.palette[color][600],
        boxShadow: theme.shadows[0],
      },
    },
  })
);
