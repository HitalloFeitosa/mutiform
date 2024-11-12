import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormFields from "../FormFields/FormFields";
import { useFormValues } from '../../hooks/useFormValues';

const MultiFormContainer = () => {
  const [forms, setForms] = useState([{ id: Date.now() }]);
  const [allFormData, setAllFormData] = useState([]);
  const form = useForm();

  // Get form values using the custom hook
  const formValues = useFormValues(form);

  const handleAddForm = () => {
    setForms([...forms, { id: Date.now() }]);
  };

  const handleSubmitForm = (formId, data) => {
    console.log(`Form data for form ${formId}:`, data);
    setAllFormData((prevData) => [...prevData, { formId, data }]);
  };

  const handleSubmitAll = () => {
    console.log("All form data:", allFormData);
  };

  return (
    <div>
      <button onClick={handleAddForm}>Add New Form</button>
      {forms.map((form) => (
        <SingleForm
          key={form.id}
          formId={form.id}
          onSubmitForm={handleSubmitForm}
        />
      ))}
      <button onClick={handleSubmitAll}>Submit All</button>
    </div>
  );
};

// Single form component
const SingleForm = ({ formId, onSubmitForm }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onSubmitForm(formId, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Form {formId}</h3>
      <FormFields control={control} errors={errors} />
      <button type="submit">Submit Form {formId}</button>
    </form>
  );
};

export default MultiFormContainer;
