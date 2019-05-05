const demihumans = ["dwarf", "elf", "halfling"];
/**
 * Check if classes to display contain any demihumans.
 * Used to display conditional message about how dorky
 * b/x treats races as classes.
 * @param classDisplayOptions
 */
export const checkContainsDemihumans = (classOptions: {
  [key: string]: string;
}) => {
  const classes = Object.keys(classOptions);
  const containsDemihumans = demihumans.some(demihuman =>
    classes.includes(demihuman)
  );
  return containsDemihumans;
};
