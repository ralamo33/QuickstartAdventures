import { FieldProps, getIn } from 'formik';
import React from 'react';
import { TextField } from '@material-ui/core';

export const TextAreaFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <TextField
      fullWidth
      margin="normal"
      multiline
      rows={3}
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};
