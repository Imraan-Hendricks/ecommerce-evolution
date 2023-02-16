import {
  validateEmail,
  validateMessage,
  validateName,
} from '../utils/validation-utils';

export interface EnquiryMail {
  name: string;
  email: string;
  message: string;
}

export const validateEnquiryMail = (input: { [key: string]: any }) => {
  const [name, nameError] = validateName(input.name);
  const [email, emailError] = validateEmail(input.email);
  const [message, messageError] = validateMessage(input.message);

  const data = { name, email, message };
  const errors = { name: nameError, email: emailError, message: messageError };

  return { data, errors };
};

export const sendEnquiry = async (data: EnquiryMail) => {
  const res = await fetch('/api/mail', {
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
