import styled from '@emotion/styled';
import { FC } from 'react';

export const Divider = styled.hr(({ theme }) => ({
  borderColor: theme.palette.gray[300],
}));
