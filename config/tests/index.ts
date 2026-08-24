import { TestConfig } from '@/types/test';
import { careerPowerTest } from './career-power';

export const testRegistry: Record<string, TestConfig> = {
  'career-power': careerPowerTest,
};
