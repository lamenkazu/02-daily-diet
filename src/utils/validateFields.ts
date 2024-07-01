export const validateFields = ([...fields]: string[]): boolean => {
  const validateFields = [...fields];

  const isEmptyOrUndefined = (field: string | undefined) =>
    field === undefined || field.length === 0;

  if (validateFields.some(isEmptyOrUndefined)) {
    return false;
  }

  return true;
};
