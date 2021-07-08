import { Card, CardContent } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { FormikStepper } from '../FormUtils';
import { Flavor } from './Flavor';
import { Attack } from './Attack';
import { Skill } from './Skills';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

// validationSchema={object({
//   appearance: require('Required'),
// })}
// money: mixed().when('millionaire', {
//   is: true,
//   then: number()
//     .required()
//     .min(
//       1_000_000,
//       'Because you said you are a millionaire you need to have 1 million'
//     ),
//   otherwise: number().required(),
// }),
// })}

export default function Stepper(): ReactElement {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            name: '',
            summary: '',
            description: '',
            attack: '',
            actions: '',
            health: '',
            armor: '',
            speed: '',
            dice: '',
            str: '',
            dex: '',
            int: '',
            wis: '',
            cha: '',
            notes: '',
          }}
          onSubmit={async (values) => {
            console.log('values', values);
          }}
        >
          <Flavor label="Flavor"/>
          <Attack label="Attack"/>
          <Skill label="Skills"/>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}
