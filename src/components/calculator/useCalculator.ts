import { useState } from 'react';
import { evaluate } from 'mathjs';
import { toCalculationAsString } from '@utils/helpers/array.helpers';

export type Calculation = string[];

export interface UseCalculator {
  calculation: Calculation,
  addToCalculation: (value: string) => void;
  onClear: () => void;
  onSum: () => void;
  onRemoveLastCharacter: () => void;
}

export const useCalculator = (): UseCalculator => {
  const [calculation, setCalculation] = useState<string[]>([]);

  const addToCalculation = (value: string) => {
    setCalculation([...calculation, value]);
  };

  const onClear = () => {
    setCalculation([]);
  };

  const onSum = () => {
    const evaluateCalculation = evaluate(toCalculationAsString(calculation));
    setCalculation([evaluateCalculation]);
  };

  const onRemoveLastCharacter = () => {
    const newCalculation = [...calculation];
    newCalculation.pop();
    setCalculation(newCalculation);
  };

  return {
    calculation,
    addToCalculation,
    onClear,
    onSum,
    onRemoveLastCharacter,
  };
};
