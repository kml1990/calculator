import React from 'react';
import { Calculation } from '@components/calculator/useCalculator';
import { toCalculationAsString } from '@utils/helpers/array.helpers';

export interface DisplayProps {
  calculation: Calculation,
}

const Display: React.FC<DisplayProps> = ({ calculation }) => {
  const calculationOnDisplay = toCalculationAsString(calculation) || 0;

  return (
    <div className="Display">
      {calculationOnDisplay}
    </div>
  );
};

export default Display;
