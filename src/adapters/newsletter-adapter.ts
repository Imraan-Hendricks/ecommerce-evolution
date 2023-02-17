import { validateEmail } from '../utils/validation-utils';

export interface NewsletterData {
  email: string;
}

export const validateSignupNewsletterData = (input: { [key: string]: any }) => {
  const [email, emailError] = validateEmail(input.email);

  const data = { email };
  const errors = { email: emailError };

  return { data, errors };
};

export const signupNewsletter = async (data: NewsletterData) => {
  const res = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw await res.json();
  const user: { success: true } = await res.json();
  return user;
};
