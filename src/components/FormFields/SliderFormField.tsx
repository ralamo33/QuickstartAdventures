import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SlideField() {
  const [value, setValue] = React.useState(0);
  const onSliderChange = (value: number) => {
    setValue(value);
  };
  const onAfterChange = (value: number) => {
    console.log(value);
  };
  return (
    <div className="App">
      <Slider
        value={value}
        onChange={onSliderChange}
        onAfterChange={onAfterChange}
        min={-2}
        max={8}
      />
    </div>
  );
}

// import { FieldProps } from 'formik';
// import React from 'react';
// import { Slider, Typography } from '@material-ui/core';

// export const SliderFormField: React.FC<FieldProps & { label: string }> = ({
//   field,
//   form,
//   label,
//   ...props
// }) => {
//   return (
//     <>
//       <Typography>{label}</Typography>
//       <Slider
//         onChange={(_, v) => form.setFieldValue(field.name, v)}
//         value={field.value}
//         step={10}
//         marks
//         min={10}
//         max={110}
//         {...props}
//       />
//     </>
//   );
// };
