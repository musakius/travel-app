import React from 'react';

import classes from './Select.module.scss';

const Select = ({updateLanguage, language}) => {
  return (
    <select
      className={`${classes.select} form-control ml-5`}
      value={language}
      onChange={updateLanguage}
    >
      <option value="russian">Rus</option>
      <option value="belarusian">Bel</option>
      <option value="english">Eng</option>
    </select>
  );
};

export default Select;
