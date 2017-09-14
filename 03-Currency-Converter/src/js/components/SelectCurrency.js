// stateless React Component
import React from 'react';
import PropTypes from 'prop-types';

const SelectCurrency = props => {
  let { currencies, onSelectCurrency } = props;

  // get AUD out
  const filteredCurrencies = currencies.filter(
    currency => currency.code !== 'CAD'
  );

  return (
    <select onChange={e => onSelectCurrency(e.target.value)}>
      {filteredCurrencies.map(currency => {
        const { code, name } = currency;

        return (
          <option
            key={code}
            value={code}
            defaultValue={onSelectCurrency == code ? true : false}
          >
            {name}
          </option>
        );
      })}
    </select>
  );
};

SelectCurrency.propTypes = {
  currencies: PropTypes.array.isRequired,
  onSelectCurrency: PropTypes.func.isRequired
};

export default SelectCurrency;
