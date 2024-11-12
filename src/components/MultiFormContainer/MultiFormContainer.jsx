import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormFields from "../FormFields/FormFields";

const MultiFormContainer = () => {
  const [forms, setForms] = useState([{ id: Date.now() }]);
  const [allFormData, setAllFormData] = useState([]);

  const handleAddForm = () => {
    setForms([...forms, { id: Date.now() }]);
  };

  const handleSubmitAll = () => {
    console.log("All form data:", allFormData);
  };

  return (
    <div>
      {forms.map((form) => (
        <SingleForm
          key={form.id}
          formId={form.id}
          onFormDataChange={(data) => {
            setAllFormData((prevData) => {
              const updatedData = prevData.filter(item => item.formId !== form.id);
              return [...updatedData, { formId: form.id, data }];
            });
          }}
        />
      ))}
      <div>
        <button onClick={handleAddForm}>Add New Form</button>
        <button onClick={handleSubmitAll}>Submit All</button>
      </div>
    </div>
  );
};

const SingleForm = ({ formId, onFormDataChange }) => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const formValues = watch();

  useEffect(() => {
    onFormDataChange(formValues);
  }, [formValues, onFormDataChange]);

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
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
