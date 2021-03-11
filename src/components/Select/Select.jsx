import React from 'react';

import classes from './Select.module.scss';

const Select = ({ func, selected, options }) => {
  return (
    <select
      className={`${classes.select} form-control ml-5`}
      value={selected}
      onChange={(e) => func(e)}
    >
      {
        options.map((option, index) => <option key={index} value={option.OptValue}>{option.value}</option>)
      }
    </select>
  );
};

export default Select;
