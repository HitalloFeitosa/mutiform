import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormFields from "../FormFields/FormFields";

const SingleForm = ({ formId, setFormData }) => {
  const { control, handleSubmit, formState: { errors }, trigger, getValues } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setFormData(trigger, getValues);
  }, [setFormData, trigger, getValues]);

  const onSubmit = (data) => {
    console.log(`Form ${formId} submitted with data:`, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Form {formId}</h3>
      <FormFields control={control} errors={errors} />
    </form>
  );
};

export default SingleForm;
