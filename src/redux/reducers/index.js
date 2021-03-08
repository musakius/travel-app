import dataCountries from '../../JSON/dataCountries.json';

const initialState = {
  countries: dataCountries
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_COUNTRIES':
      const value = action.payload.value;
      const code = action.payload.language.slice(0, 2);

      if (value.length === 0) return {...state, countries: dataCountries};

      const newCountries = dataCountries.filter((elem) => {
        return elem.name[code].toLowerCase().startsWith(value) || elem.name[code].startsWith(value);
      });

      return {...state, countries: newCountries};
    default:
      return state;
  }
};

export default reducer;
