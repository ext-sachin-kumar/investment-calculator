import { useState } from 'react';
import Returns from './Returns';
import { calculateInvestmentResults } from '../util/investment';

export default function InputFields({}) {

  const [value, setValue] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 10,
    duration: 10
  });
  const [results, setResults] = useState(calculateInvestmentResults(value));
  function onChangeValue(key, newValue) {
    setValue((prevValues) => {
      const updatedValue = {
        ...prevValues,
        [key]: newValue
      }
      
      setResults((prevResults) => {
        return calculateInvestmentResults({...prevResults ,...updatedValue});
      });
      return updatedValue;
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input required type="number" value={value.initialInvestment}
            onChange={(e) => onChangeValue('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input required type="number" value={value.annualInvestment}
            onChange={(e) => onChangeValue('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return in %</label>
          <input required type="number" value={value.expectedReturn}
            min={1}
            onChange={(e) => onChangeValue('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input required type="number" value={value.duration}
            min={1}
            onChange={(e) => onChangeValue('duration', e.target.value)}
          />
        </p>
      </div>
      {
        value.duration <= 0 && <p className="center">Duration should be greater than 0</p>
      }
      { value.duration > 0 && <Returns results={results} />}
    </section>
  )
}