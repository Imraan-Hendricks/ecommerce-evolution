import styled from '@emotion/styled';
import { Color } from '../../theme/types';
import { FC, PropsWithChildren } from 'react';

interface LabelBaseProps {
  className?: string;
  required?: boolean;
}

const LabelBase: FC<PropsWithChildren<LabelBaseProps>> = ({
  children,
  className,
  required,
}) => (
  <label className={className}>
    {children} {required && '*'}
  </label>
);

interface LabelProps {
  color?: Color;
  htmlFor: string;
  isError: boolean;
  isFocused: boolean;
}

export const Label = styled(LabelBase)<LabelProps>(
  ({ theme, isError, isFocused, color = 'gray' }) => ({
    ...theme.typography.body2,
    display: 'block',
    color: isFocused
      ? theme.palette[color][500]
      : isError
      ? theme.palette.error[500]
      : theme.palette.black[500],
  })
);
