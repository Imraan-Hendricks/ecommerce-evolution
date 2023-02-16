export function validateName(
  name: any,
  required?: true
): [string, string | undefined];

export function validateName(
  name: any,
  required?: false
): [string | undefined, string | undefined];

export function validateName(name: any, required = true) {
  let data = name;
  if (data === '') data = undefined;
  if (!required && data === undefined) return [data, undefined];
  if (required && data === undefined) return [data, 'Name is required'];
  if (typeof data !== 'string') return [data, 'Name must be a string'];
  if (data.length < 2) return [data, 'Name is too short'];
  if (data.length > 50) return [data, 'Name is too long'];
  return [data, undefined];
}

export function validateEmail(
  name: any,
  required?: true
): [string, string | undefined];

export function validateEmail(
  name: any,
  required?: false
): [string | undefined, string | undefined];

export function validateEmail(email: any, required = true) {
  let data = email;
  const regxp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (data === '') data = undefined;
  if (!required && data === undefined) return [data, undefined];
  if (required && data === undefined) return [data, 'Email is required'];
  if (typeof email !== 'string') return [data, 'Email must be a string'];
  data = data.toLowerCase();
  if (!regxp.test(email)) return [data, 'Invalid email'];
  return [data, undefined];
}

export function validateMessage(
  name: any,
  required?: true
): [string, string | undefined];

export function validateMessage(
  name: any,
  required?: false
): [string | undefined, string | undefined];

export function validateMessage(message: any, required = true) {
  let data = message;
  if (data === '') data = undefined;
  if (!required && data === undefined) return [data, undefined];
  if (required && data === undefined) return [data, 'Message is required'];
  if (typeof data !== 'string') return [data, 'Message must be a string'];
  if (data.length < 2) return [data, 'Message is too short'];
  if (data.length > 1000) return [data, 'Message is too long'];
  return [data, undefined];
}
