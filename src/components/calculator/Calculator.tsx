import Display from '@components/display/Display';
import React from 'react';
import { useCalculator } from './useCalculator';

const Calculator: React.FC = () => {
  const {
    calculation,
    addToCalculation,
    onClear,
    onSum,
    onRemoveLastCharacter,
  } = useCalculator();

  return (
    <div className="Calculator">
      <Display calculation={calculation} />
      {/* <Controls /> */}
      <button type="button" onClick={() => addToCalculation('1')}>1</button>
      <button type="button" onClick={() => addToCalculation('2')}>2</button>
      <button type="button" onClick={() => addToCalculation('3')}>3</button>
      <button type="button" onClick={() => addToCalculation('4')}>4</button>
      <button type="button" onClick={() => addToCalculation('5')}>5</button>
      <button type="button" onClick={() => addToCalculation('6')}>6</button>
      <button type="button" onClick={() => addToCalculation('7')}>7</button>
      <button type="button" onClick={() => addToCalculation('8')}>8</button>
      <button type="button" onClick={() => addToCalculation('9')}>9</button>
      <button type="button" onClick={() => addToCalculation('+')}>+</button>
      <button type="button" onClick={() => addToCalculation('-')}>-</button>
      <button type="button" onClick={onSum}>=</button>
      <button type="button" onClick={onClear}>C</button>
      <button type="button" onClick={onRemoveLastCharacter}>←</button>
    </div>
  );
};

export default Calculator;
