import { BanknotesIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { Box } from '../ui/Box';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Divider } from '../ui/Divider';
import {
  fadeInBottom,
  fadeOutBottom,
  intersectionOptions,
} from '@/utils/animation-utils';
import { FC } from 'react';
import { HelperText } from '../ui/TextFieldHelperText';
import { TextField } from '../ui/TextField';
import { TextArea } from '../ui/TextFieldArea';
import { Input } from '../ui/TextFieldInput';
import { Label } from '../ui/TextFieldLabel';
import { Typography } from '../ui/Typography';
import { useNavbar } from '../layout/NavbarContext';
import { useSendEnquiry } from '../../hooks/useSendEnquiry';
import { useInView } from 'react-intersection-observer';

export const Contact: FC = () => {
  const { contactRef } = useNavbar();
  const { ref, inView } = useInView(intersectionOptions);

  const { data, errors, isLoading, isSuccess, handleOnChange, handleOnSubmit } =
    useSendEnquiry();

  return (
    <section
      ref={contactRef}
      css={(theme) => ({
        padding: '6rem 1.25rem',
        backgroundColor: theme.palette.gray[50],
      })}>
      <Container
        ref={ref}
        css={{
          display: 'grid',
          gap: '4rem',
          animation: '1s ease-in-out forwards',
          animationName: inView ? fadeInBottom : fadeOutBottom,
        }}>
        <Box css={{ display: 'grid', gap: '1rem', textAlign: 'center' }}>
          <Typography as='h2' variant='subtitle2' color='primary'>
            Contact Us
          </Typography>
          <Typography as='h1' variant='h4'>
            Let start a conversation
          </Typography>
        </Box>
        <Box
          css={(theme) => ({
            display: 'grid',
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            alignItems: 'center',
            justifyItems: 'center',
            [theme.breakpoints.up('2xl')]: {
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            },
          })}>
          <Box css={{ display: 'grid', gap: '4rem' }}>
            {[
              {
                Icon: EnvelopeIcon,
                title: 'How can we help you?',
                body: `Learn more about our ecommerce solutions and how we can help your business succeed online. We'll work with you every step of the way to ensure you get the results you need and the support you deserve.`,
              },
              {
                Icon: BanknotesIcon,
                title: 'Contact Us for Expert Solutions',
                body: `If you have any questions or concerns about our services, don't hesitate to reach out. Our team is always happy to help and will do everything we can to ensure your experience with us is a positive one.`,
              },
            ].map(({ Icon, title, body }) => (
              <Box key={title} css={{ display: 'flex', height: 'max-content' }}>
                <Box
                  css={(theme) => ({
                    backgroundColor: theme.palette.primary[200],
                    width: 'max-content',
                    height: 'max-content',
                    padding: '.75rem',
                    borderRadius: '100%',
                  })}>
                  <Icon
                    css={(theme) => ({
                      width: '2rem',
                      height: '2rem',
                      color: theme.palette.primary[500],
                    })}
                  />
                </Box>
                <Box
                  css={{ display: 'grid', gap: '1rem', marginLeft: '1.5rem' }}>
                  <Typography as='h3' variant='h6'>
                    {title}
                  </Typography>
                  <Divider />
                  <Typography css={{ maxWidth: '32rem' }}>{body}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            as='form'
            onSubmit={handleOnSubmit}
            css={(theme) => ({
              display: 'grid',
              gap: '2rem',
              width: '100%',
              marginTop: '2rem',
              [theme.breakpoints.up('lg')]: { width: '80%' },
              [theme.breakpoints.up('xl')]: { width: '70%' },
              [theme.breakpoints.up('2xl')]: { marginTop: '0', width: '100%' },
            })}>
            {[
              {
                id: 'name',
                isError: !!errors.name,
                helperText: errors.name,
                label: 'Name',
                name: 'name',
                placeholder: 'Enter name',
                value: data.name,
              },
              {
                id: 'email',
                isError: !!errors.email,
                helperText: errors.email,
                label: 'Email',
                name: 'email',
                placeholder: 'Enter email',
                value: data.email,
              },
              {
                id: 'message',
                isError: !!errors.message,
                helperText: errors.message,
                label: 'Message',
                name: 'message',
                placeholder: 'Enter message',
                rows: 5,
                value: data.message,
              },
            ].map(({ label, isError, helperText, ...props }) => (
              <TextField key={props.name}>
                {({ isFocused, setIsFocused }) => (
                  <>
                    <Label
                      isError={isError}
                      isFocused={isFocused}
                      color='primary'
                      htmlFor={props.id}>
                      {label}
                    </Label>
                    {props.rows ? (
                      <TextArea
                        {...props}
                        color='primary'
                        isError={isError}
                        onChange={handleOnChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                      />
                    ) : (
                      <Input
                        {...props}
                        color='primary'
                        isError={isError}
                        onChange={handleOnChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                      />
                    )}
                    <HelperText
                      color='primary'
                      isError={isError}
                      isFocused={isFocused}>
                      {helperText}
                    </HelperText>
                  </>
                )}
              </TextField>
            ))}
            <Button
              css={{ width: 'max-content' }}
              disabled={isLoading || isSuccess}
              color={isSuccess ? 'success' : 'primary'}>
              {isLoading
                ? 'Loading...'
                : isSuccess
                ? 'Message Sent!'
                : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
};
