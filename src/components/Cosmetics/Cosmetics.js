import React from 'react';
import { add } from '../utilities/calculate';

const Cosmetics = () => {
  const first = 55;
  const second = 66;
  const total = add(first, second);

  return (
    <div>
      <h1>welcome to my cosmetics store</h1>
      <p>total: { total }</p>
    </div>
  );
};

export default Cosmetics;