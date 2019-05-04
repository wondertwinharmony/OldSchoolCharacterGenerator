import {
  cleric,
  dwarf,
  elf,
  fighter,
  halfling,
  magicUser,
  thief
} from "../characterData/classes";

const classPrimeRequisites: {
  [key: string]: string;
} = {
  cleric: cleric.primeRequisite,
  fighter: fighter.primeRequisite,
  magicUser: magicUser.primeRequisite,
  thief: thief.primeRequisite,
  dwarf: dwarf.primeRequisite,
  elf: elf.primeRequisite,
  halfling: halfling.primeRequisite
};

export const getClassPrimeRequisites = (classOption: string) => {
  const primeRequisites = classPrimeRequisites[classOption];

  return primeRequisites;
};
