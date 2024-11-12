import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export function useFormValues(form) {
  const [values, setValues] = useState({});

  useEffect(() => {
    const subscription = form.watch((newValues) => {
      setValues(newValues); // Update the state with the new form values
      console.log('All form values:', newValues);
    });

    return () => subscription.unsubscribe(); // Cleanup subscription
  }, [form]);

  return values; // Return the form values
}
