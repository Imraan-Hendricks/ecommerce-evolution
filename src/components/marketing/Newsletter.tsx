import { Box } from '../ui/Box';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import {
  fadeInBottom,
  fadeOutBottom,
  intersectionOptions,
} from '@/utils/animation-utils';
import { FC } from 'react';
import { HelperText } from '../ui/TextFieldHelperText';
import { Input } from '../ui/TextFieldInput';
import { TextField } from '../ui/TextField';
import { Typography } from '../ui/Typography';
import { useNavbar } from '../layout/NavbarContext';
import { useSignupNewsletter } from '../../hooks/useSignupNewsletter';
import { useInView } from 'react-intersection-observer';

export const Newsletter: FC = () => {
  const { newsletterRef } = useNavbar();
  const { ref, inView } = useInView(intersectionOptions);

  const { data, errors, handleOnChange, handleOnSubmit, isLoading, isSuccess } =
    useSignupNewsletter();

  return (
    <section
      ref={newsletterRef}
      css={(theme) => ({
        padding: '6rem 1.25rem',
        backgroundColor: theme.palette.primary[100],
      })}>
      <Container
        ref={ref}
        css={{
          display: 'grid',
          justifyContent: 'center',
          gap: '2rem',
          textAlign: 'center',
          animation: '1s ease-in-out forwards',
          animationName: inView ? fadeInBottom : fadeOutBottom,
        }}>
        <Typography as='h1' variant='h4'>
          Subscribe to our newsletter and get the latest updates
        </Typography>
        <Typography
          as='p'
          variant='body2'
          css={(theme) => ({
            color: theme.palette.gray[600],
            maxWidth: '42rem',
            margin: '0 auto',
          })}>
          Join our mailing list to stay up-to-date on the latest ecommerce
          trends, news, and insights. Our newsletter is packed with valuable
          information and exclusive offers.
        </Typography>
        <Box
          as='form'
          onSubmit={handleOnSubmit}
          css={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 0%',
            [theme.breakpoints.up('sm')]: {
              padding: '0 7.5%',
            },
          })}>
          <TextField css={{ flexGrow: '1', position: 'relative' }}>
            {({ isFocused, setIsFocused }) => (
              <>
                <Input
                  css={(theme) => ({
                    backgroundColor: theme.palette.white[300],
                    borderColor: theme.palette.primary[500],
                    '&:focus': {
                      borderColor: theme.palette.primary[400],
                    },
                  })}
                  color='primary'
                  id='newsletterEmail'
                  isError={!!errors.email}
                  name='email'
                  placeholder={`Enter email`}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  value={data.email}
                  onChange={handleOnChange}
                />
                {errors.email && (
                  <HelperText
                    css={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      right: '1rem',
                    }}
                    color='primary'
                    isError={!!errors.email}
                    isFocused={isFocused}>
                    {errors.email}
                  </HelperText>
                )}
              </>
            )}
          </TextField>
          <Button
            css={{ marginLeft: '0.75rem' }}
            disabled={isLoading || isSuccess}
            color={isSuccess ? 'success' : 'primary'}>
            {isLoading ? 'Loading...' : isSuccess ? 'Success!' : 'Subscribe'}
          </Button>
        </Box>
        <Typography
          as='p'
          variant='h6'
          css={(theme) => ({ color: theme.palette.gray[800] })}>
          Sign up today and never miss a beat in the world of ecommerce
        </Typography>
      </Container>
    </section>
  );
};
