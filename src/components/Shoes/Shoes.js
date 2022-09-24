import React from 'react';
import { multiply } from '../utilities/calculate';

const Shoes = () => {
  const first = 13;
  const second = 11;
  const result = multiply(first, second);
  return (
    <div>
      <h3>this is shoes compo</h3>
      <p>result: { result }</p>
    </div>
  );
};

export default Shoes;