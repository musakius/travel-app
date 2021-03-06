import React, {useState} from 'react';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState('russian');

  const updateLanguage = (e) => setLanguage(e.target.value);

  return (
    <LanguageContext.Provider
      value={{
        language,
        updateLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export {LanguageProvider, LanguageConsumer};
