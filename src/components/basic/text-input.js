import React from 'react';
import styles from './basic.module.scss';

const TextInput = ({ label, value, onChange, placeholder}) => {

  return (
    <div className={`${styles.searchInput}`}>
      <div className="control">
        <label className="label">{label}</label>
        <input
          className="input is-primary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
