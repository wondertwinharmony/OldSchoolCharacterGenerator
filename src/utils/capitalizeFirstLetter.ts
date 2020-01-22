
/**
 * Utility function that takes a string and capitalizes the first letter
 * @param stringToConvert [string]
 * Returns a string
 */
export const capitalizeFirstLetter = (stringToConvert: string) => {
    return stringToConvert.charAt(0).toUpperCase() + stringToConvert.slice(1);
};
