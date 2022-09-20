import { Box } from '../ui/Box';
import { Container } from '../ui/Container';
import { FC } from 'react';
import { Typography } from '../ui/Typography';

export const Hero: FC = () => (
  <Box as='section'>
    <Container>
      <Typography as='h1' variant='h1'>
        Hero Section
      </Typography>
    </Container>
  </Box>
);
