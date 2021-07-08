import * as React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

const Label = styled.p`
  text-align: center;
  font-family: belmont;
`;

interface SliderFieldProps {
  name: string;
  min: number;
  max: number;
  label: string;
}

export function SliderField(props: SliderFieldProps) {
  return <div>
    <Label>{props.label}</Label>
  <Field
        id={props.name}
        name={props.name}
        component={Slider}
        min={props.min}
        max={props.max}
        marks
	      valueLabelDisplay="on"
  ></Field>

  </div>
}

// Helper functions to get Slider Field working

//test for mui slider
import MuiSlider, {
  SliderProps as MuiSliderProps,
} from '@material-ui/core/Slider';
import {FieldProps} from 'formik';
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export interface SliderProps
  extends FieldProps,
    Omit<MuiSliderProps, 'name' | 'onChange' | 'value' | 'defaultValue'> {}

function fieldToSlider({
  field,
  form: {isSubmitting},
  disabled = false,
  ...props
}: SliderProps): MuiSliderProps {
  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    name: field.name,
    value: field.value,
  };
}

const Slider: React.ComponentType<SliderProps> = (
  props: SliderProps
) => (
  <MuiSlider
    {...fieldToSlider(props)}
    onChange={(e, value) => {
      console.log('onchange fired', value);
      props.form.setFieldValue(props.field.name, value);
    }}
  />
);



