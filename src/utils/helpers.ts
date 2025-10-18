export const isEmpty = (value?: string | null): boolean => {
  return !value || value.length === 0;
};

export const isNotEmpty = (value?: string | null): boolean => {
  return !!value && value.length > 0;
};

export const isNull = (value: unknown): boolean => {
  return value === null || value === undefined;
};

export const isNotNull = (value: unknown): boolean => {
  return value !== null && value !== undefined;
};
