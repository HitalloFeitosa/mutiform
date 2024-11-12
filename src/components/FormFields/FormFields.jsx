import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import ButtonUpload from "../ButtonUpload/ButtonUpload";

export default function FormFields({control, errors}) {
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
            rules={{ required: "Sobrenome nome é obrigatório" }}
            render={({ field }) => (
            <TextField
                {...field}
                margin="dense"
                label="Sobrenome"
                type="text"
                fullWidth
                variant="standard"
                error={!!errors?.lastname}  // Updated error reference
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
                error={!!errors?.link}  // Updated error reference
                helperText={errors?.link ? errors.link.message : null}
            />
            )}
        />

        <ButtonUpload />
    </div>
  )
}
