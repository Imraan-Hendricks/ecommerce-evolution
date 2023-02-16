import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { sendEnquiry, validateEnquiryMail } from '../adapters/mail-adapter';

export const useSendEnquiry = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) return;
    setTimeout(() => {
      setData({
        name: '',
        email: '',
        message: '',
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

    const { data: validData, errors } = validateEnquiryMail(data);

    if (errors.name || errors.email || errors.message) {
      setErrors(errors);
      return setIsLoading(false);
    }

    setErrors({});

    try {
      await sendEnquiry(validData);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return { data, errors, isLoading, isSuccess, handleOnChange, handleOnSubmit };
};
