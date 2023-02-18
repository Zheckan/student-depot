import { ValueTransformer } from 'typeorm';

class NumericTransformer implements ValueTransformer {
  to(numeric: number | undefined): string {
    return (numeric || '0').toString();
  }
  from(numeric: string): number {
    return parseFloat(numeric);
  }
}

export const INT_1_M = {
  type: 'numeric',
  default: 0,
  precision: 10,
  scale: 0,
  max: 1_000_000_000,
  min: 0,
  transformer: new NumericTransformer(),
  nullable: false,
} as const;

export const INT_999 = {
  type: 'numeric',
  default: 0,
  precision: 10,
  scale: 0,
  max: 999,
  min: 0,
  transformer: new NumericTransformer(),
  nullable: false,
} as const;

export const VARCHAR_50 = {
    type: 'varchar',
    default: '',
    max: 50,
    min: 0,
    nullable: false,
  } as const;

  export const VARCHAR_6 = {
    type: 'varchar',
    default: '',
    max: 6,
    min: 0,
    nullable: false,
  } as const;