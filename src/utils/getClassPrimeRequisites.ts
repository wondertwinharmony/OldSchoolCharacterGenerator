import { characterClasses } from "../characterData/classes";

/**
 * Utility for getting a class' prime requisites.
 * @param classOptionKey
 */
export const getClassPrimeRequisites = (classOptionKey: string) => {
  const primeRequisites = characterClasses[classOptionKey].primeRequisite;

  return primeRequisites;
};
