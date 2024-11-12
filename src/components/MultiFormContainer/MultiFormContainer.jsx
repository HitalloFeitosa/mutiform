import React, { useState } from "react";
import SingleForm from "../SingleForm/SingleForm";

const MultiFormContainer = () => {
  const [forms, setForms] = useState([{ id: Date.now() }]);
  const [allFormData, setAllFormData] = useState([]);

  const handleAddForm = () => {
    setForms([...forms, { id: Date.now() }]);
  };

  const handleSubmitAll = async () => {
    let isValid = true;
    const updatedFormData = [];

    for (let form of forms) {
      const { trigger, getValues } = form;

      const formValid = await trigger();

      if (formValid) {
        updatedFormData.push(getValues());
      } else {
        isValid = false;
      }
    }

    if (isValid) {
      console.log("All form data:", updatedFormData);
    } else {
      console.log("Validation failed. Some fields are incorrect.");
    }
  };

  return (
    <div>
      {forms.map((form) => (
        <SingleForm
          key={form.id}
          formId={form.id}
          setFormData={(trigger, getValues) => {
            setForms((prevForms) =>
              prevForms.map((item) =>
                item.id === form.id ? { ...item, trigger, getValues } : item
              )
            );
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

export default MultiFormContainer;
