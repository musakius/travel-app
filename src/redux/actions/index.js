const filterCountries = (value) => {
  return {
    type: 'FILTER_COUNTRIES',
    payload: value
  };
};

export {filterCountries};
