import styled from '@emotion/styled';
import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';

interface TextFieldBaseProps {
  className?: string;
  children: ({
    isFocused,
    setIsFocused,
  }: {
    isFocused: boolean;
    setIsFocused: Dispatch<SetStateAction<boolean>>;
  }) => ReactNode;
}

const TextFieldBase: FC<TextFieldBaseProps> = ({ children, className }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={className}>{children({ isFocused, setIsFocused })}</div>
  );
};

export const TextField = styled(TextFieldBase)({
  display: 'grid',
  gridTemplateColumns: 'grid-template-columns: repeat(1, minmax(0, 1fr))',
  gap: '1.25rem',
});
