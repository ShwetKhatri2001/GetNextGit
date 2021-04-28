import React from 'react';
import styles from './basic.module.scss';

const Select = ({ label, value, onChange, options}) => {

  options = [{name:'Any'},...options];
  
  return (
    <div className={`field ${styles.languageSelect}`}>
      <div className="control">
        <label className="label">{label}</label>
        <div className="select">
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option,i) => (
              <option key={i} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;