export const getAbilityString = (ability: number) => {
  switch (ability) {
    case 0:
      return 'STR';
    case 1:
      return 'DEX';
    case 2:
      return 'CON';
    case 3:
      return 'INT';
    case 4:
      return 'WIS';
    case 5:
      return 'CHA';

    default:
      console.error('There was an error in getAbilityString');
      return 'STR';
  }
};
