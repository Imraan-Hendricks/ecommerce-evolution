import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  signupNewsletter,
  validateSignupNewsletterData,
} from '../adapters/newsletter-adapter';

export const useSignupNewsletter = () => {
  const [data, setData] = useState({
    email: '',
  });

  const [errors, setErrors] = useState<{
    email?: string;
  }>({});

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) return;
    setTimeout(() => {
      setData({
        email: '',
      });
      setIsSuccess(false);
    }, 3000);
  }, [isSuccess]);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setData((data) => ({ ...data, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: undefined }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const { data: validData, errors } = validateSignupNewsletterData(data);

    if (errors.email) {
      setErrors(errors);
      return setIsLoading(false);
    }

    setErrors({});

    try {
      await signupNewsletter(validData);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return { data, errors, isLoading, isSuccess, handleOnChange, handleOnSubmit };
};
