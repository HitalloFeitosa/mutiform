import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormFields from "../FormFields/FormFields";
import { useFormValues } from '../../hooks/useFormValues';

const MultiFormContainer = () => {
  const [forms, setForms] = useState([{ id: Date.now() }]);
  const [allFormData, setAllFormData] = useState([]);
  const form = useForm();

  useEffect(() => {
    const valuesFromCustomHook = useFormValues(form);
    const valuesFromFormInstance = form.watch();
    
    console.log('All form values:', valuesFromCustomHook);
    console.log('Form instance watch values:', valuesFromFormInstance);
  }, [form.watch]);

  const handleAddForm = () => {
    setForms([...forms, { id: Date.now() }]);
  };

  const handleSubmitForm = (formId, data) => {
    console.log(`Dados do formulário ${formId}:`, data);
    setAllFormData((prevData) => [...prevData, { formId, data }]);
  };

  const handleSubmitAll = () => {
    console.log("Todos os dados dos formulários:", allFormData);
  };

  return (
    <div>
      <button onClick={handleAddForm}>Adicionar Novo Formulário</button>
      {forms.map((form) => (
        <SingleForm
          key={form.id}
          formId={form.id}
          onSubmitForm={handleSubmitForm}
        />
      ))}
      <button onClick={handleSubmitAll}>Submeter Todos</button>
    </div>
  );
};

// Componente para cada formulário individual
const SingleForm = ({ formId, onSubmitForm }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onSubmitForm(formId, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formulário {formId}</h3>
      <FormFields control={control} errors={errors} />
      <button type="submit">Submeter Formulário {formId}</button>
    </form>
  );
};

export default MultiFormContainer;
