import React, { ReactElement } from 'react';
import { generatePdf } from '../utils';
import { MonsterView } from '../components/Views/Monster';
import Layout from '../layouts/layout';

const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestias laborum error molestiae voluptates nisi aut eveniet natus nesciunt, deserunt quae obcaecati quas illo quam aliquam facilis consectetur, saepe unde?';
const guide =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum repellendus sunt magni nemo obcaecati, minima impedit beatae, distinctio, culpa cum ex temporibus ipsam fuga aliquid facilis et maiores accusantium commodi.loremispum';

export default function PDF(): ReactElement {
  return (
    <Layout>
      <button onClick={generatePdf}></button>
      <MonsterView
        name="Dragon"
        motivation="Eat people"
        str={10}
        dex={8}
        int={10}
        wis={8}
        cha={10}
        health={200}
        armor={18}
        speed={40}
        attack="10d10"
        actions={4}
        description={description}
        guide={guide}
      />
    </Layout>
  );
}
