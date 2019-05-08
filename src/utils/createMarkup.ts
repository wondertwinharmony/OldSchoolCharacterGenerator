import dompurify from "dompurify";

/**
 * Utility function that takes a string with formatting elements in it, sanitizes it with dompurify
 * then returns an object with __html property.
 * @param formattedString [a string with html elements in it like <strong></strong>]
 */
export const createMarkup = (formattedString: string) => {
    const sanitizer = dompurify.sanitize;
    return {__html: sanitizer(formattedString)};
}
