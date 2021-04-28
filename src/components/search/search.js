import React from 'react';
import TextInput from '../basic/text-input';
import Select from '../basic/select';
import styles from './search.module.scss';

const Search = (props) => {
  const { language, options, searchText, onSearchTextChange, onLanguageChange } = props;

 
  return (
    <div className={styles.search}>
      <TextInput
        label="Search Repo By Topic"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        label="Select Language"
        value={language}
        options={options}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  );
};

export default Search;