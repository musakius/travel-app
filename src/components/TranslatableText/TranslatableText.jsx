import {LanguageConsumer} from '../../context';

const TranslatableText = ({dictionary}) => (
  <LanguageConsumer>{({language}) => dictionary[language]}</LanguageConsumer>
);

export default TranslatableText;
