import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function FormFields({ control, errors }) {
  return (
    <div>
      <Controller
        name="firstname"
        control={control}
        defaultValue=""
        rules={{ required: "Primeiro nome é obrigatório" }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            label="Primeiro Nome"
            type="text"
            fullWidth
            variant="standard"
            error={!!errors?.firstname}
            helperText={errors?.firstname ? errors.firstname.message : null}
          />
        )}
      />

      <Controller
        name="lastname"
        control={control}
        defaultValue=""
        rules={{ required: "Sobrenome é obrigatório" }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            label="Sobrenome"
            type="text"
            fullWidth
            variant="standard"
            error={!!errors?.lastname}
            helperText={errors?.lastname ? errors.lastname.message : null}
          />
        )}
      />

      <Controller
        name="link"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            label="Link"
            type="text"
            fullWidth
            variant="standard"
            error={!!errors?.link}
            helperText={errors?.link ? errors.link.message : null}
          />
        )}
      />
    </div>
  );
}
