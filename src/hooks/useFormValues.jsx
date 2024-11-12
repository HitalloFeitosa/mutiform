// src/hooks/useFormValues.jsx

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export function useFormValues(form) {
  useEffect(() => {
    const values = form.watch();
    console.log('All form values:', values);
  }, [form.watch]);

  return null;
}
