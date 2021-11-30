import { Calculation } from '@components/calculator/useCalculator';

export const toCalculationAsString = (calculation: Calculation) => [...calculation].join('');
