import { Box } from '../../components/Box';
import { Container } from '../../components/Container';
import { FC } from 'react';
import { Typography } from '../../components/Typography';

export const Hero: FC = () => (
  <Box as='section'>
    <Container>
      <Typography as='h1' variant='h1'>
        Hero Section
      </Typography>
    </Container>
  </Box>
);
