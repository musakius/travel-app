import React from 'react';

import classes from './Select.module.scss';

const Select = ({ func, selected, options, type }) => {
  let style = classes.select;
  if (type === "rate") {
    style = classes.selectRate;
  }
  return (
    <select
      className={`${style} form-control ml-5`}
      value={selected}
      onChange={(e) => func(e)}
    >
      {
        options.map((option, index) => 
        <option key={index} value={option.OptValue}>
          {
            `${option.value} ${option.name}`
          }
        </option>)
      }
    </select>
  );
};

export default Select;
