import styled from '@emotion/styled';
import { Box } from '../ui/Box';
import { Container } from '../ui/Container';
import { FC, PropsWithChildren } from 'react';
import { HelperText } from '../ui/TextFieldHelperText';
import { Input } from '../ui/TextFieldInput';
import { Label } from '../ui/TextFieldLabel';
import { TextField } from '../ui/TextField';
import { Typography } from '../ui/Typography';

export const TextFields: FC = () => (
  <Box css={{ padding: '5rem 1.25rem' }}>
    <Container as='form' css={{ display: 'grid', gap: '2rem' }}>
      <Typography as='h1' variant='h4'>
        Text Field
      </Typography>

      <OneColumnLayout>
        <OneColumnTitle>Default</OneColumnTitle>
        <TextField>
          {({ isFocused, setIsFocused }) => (
            <>
              <Label htmlFor='base' isError={false} isFocused={isFocused}>
                Base
              </Label>
              <Input
                id='base'
                isError={false}
                name='base'
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                placeholder='Enter base'
              />
              <HelperText isError={false} isFocused={isFocused}>
                Text field with default properties
              </HelperText>
            </>
          )}
        </TextField>
      </OneColumnLayout>

      <TwoColumnLayout>
        <TwoColumnTitle>Types</TwoColumnTitle>
        {(['text', 'number', 'email', 'password'] as const).map((type) => (
          <TextField key={type}>
            {({ isFocused, setIsFocused }) => (
              <>
                <Label
                  color='primary'
                  htmlFor={type}
                  isError={false}
                  isFocused={isFocused}
                  css={{ textTransform: 'capitalize' }}>
                  {type}
                </Label>
                <Input
                  color='primary'
                  id={type}
                  isError={false}
                  name={type}
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                  placeholder={`Enter ${type}`}
                  type={type}
                />
              </>
            )}
          </TextField>
        ))}
      </TwoColumnLayout>

      <TwoColumnLayout>
        <TwoColumnTitle>Colors</TwoColumnTitle>
        {(
          [
            'primary',
            'secondary',
            'info',
            'success',
            'warning',
            'error',
          ] as const
        ).map((color) => (
          <TextField key={color}>
            {({ isFocused, setIsFocused }) => (
              <>
                <Label
                  color={color}
                  htmlFor={color}
                  isError={false}
                  isFocused={isFocused}
                  css={{ textTransform: 'capitalize' }}>
                  {color}
                </Label>
                <Input
                  color={color}
                  id={color}
                  isError={false}
                  name={color}
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                  placeholder={`Enter ${color}`}
                />
              </>
            )}
          </TextField>
        ))}
      </TwoColumnLayout>

      <OneColumnLayout>
        <OneColumnTitle>Required</OneColumnTitle>
        <TextField>
          {({ isFocused, setIsFocused }) => (
            <>
              <Label
                color='primary'
                htmlFor='required'
                isError={false}
                isFocused={isFocused}
                required>
                Required
              </Label>
              <Input
                color='primary'
                id='required'
                isError={false}
                name='required'
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                placeholder='Enter required'
              />
            </>
          )}
        </TextField>
      </OneColumnLayout>

      <OneColumnLayout>
        <OneColumnTitle>Helper Text</OneColumnTitle>
        {(
          [
            {
              label: 'Project Name',
              helperText: 'Pick something inspiring',
              color: 'success',
            },
            {
              label: 'Email',
              helperText: `We'll never share your email with anyone else.`,
              color: 'secondary',
            },
          ] as const
        ).map(({ label, helperText, color }) => (
          <TextField key={label}>
            {({ isFocused, setIsFocused }) => (
              <>
                <Label
                  color={color}
                  htmlFor={`helper${label}`}
                  isError={false}
                  isFocused={isFocused}>
                  {label}
                </Label>
                <Input
                  color={color}
                  id={`helper${label}`}
                  isError={false}
                  name={`helper${label}`}
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                  placeholder={`Enter ${label}`}
                />
                <HelperText color={color} isError={false} isFocused={isFocused}>
                  {helperText}
                </HelperText>
              </>
            )}
          </TextField>
        ))}
      </OneColumnLayout>

      <OneColumnLayout>
        <OneColumnTitle>Validation</OneColumnTitle>
        <TextField>
          {({ isFocused, setIsFocused }) => (
            <>
              <Label
                color='warning'
                htmlFor='helperWarning'
                isError={true}
                isFocused={isFocused}>
                Quantity
              </Label>
              <Input
                color='warning'
                id='helperWarning'
                isError={true}
                name='helperWarning'
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                placeholder='Enter quantity'
              />
              <HelperText color='warning' isError={true} isFocused={isFocused}>
                Please fill out this field
              </HelperText>
            </>
          )}
        </TextField>
      </OneColumnLayout>
    </Container>
  </Box>
);

const OneColumnLayout = styled.div({ display: 'grid', gap: '2rem' });

const OneColumnTitle = styled(
  ({ children, className }: PropsWithChildren<{ className?: string }>) => (
    <Typography
      as='h2'
      children={children}
      className={className}
      variant='h6'
    />
  )
)();

const TwoColumnLayout = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: '2rem',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}));

const TwoColumnTitle = styled(
  ({ children, className }: PropsWithChildren<{ className?: string }>) => (
    <Typography
      as='h2'
      children={children}
      className={className}
      variant='h6'
    />
  )
)(({ theme }) => ({
  gridColumn: 'span 1 / span 1',
  [theme.breakpoints.up('md')]: { gridColumn: 'span 2 / span 2' },
}));
