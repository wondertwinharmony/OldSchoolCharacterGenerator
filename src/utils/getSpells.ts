import { sample } from "lodash";
import { newAllSpells } from "../characterData/spells";

/**
 * Utility function that returns a single spell for spellcasting classes.
 * Takes a paremeter that specifies T/F on whether to include spells from Knave.
 * Returns a string with spell name and description. Also takes class selection
 * into account.
 * @param nonTraditionalSpells
 * @parama classSelection
 */
export const getSpells = (
  nonTraditionalSpells: boolean,
  classSelection: string
) => {
  let spells = {};

  /**
   * NEED different handling for divine casters. They have access to
   * everything, and drow are special.
   *
   * This util should give arcane users random starting spells,
   * And THEN give divine casters their entire spell lists...probably for
   * EVERY class (e.g half-elf, ranger, paladin, etc.). Then the Spell segment
   * will reveal more spells by level as the saved character levels up and
   * unlocks ACCESS to more spells. Every class will get this unlocking feature,
   * but divine casters will just automatically have a full suite of spells to
   * select from.
   */

  /**
   * Drow normally have all cleric spells, but also start
   * with Light (Darkness).
   */
  if (classSelection === "drow") return newAllSpells.drow;

  if (!nonTraditionalSpells) {
    if (
      classSelection === "magicUser" ||
      classSelection === "citizenLich" ||
      classSelection === "wildMagicUser" ||
      classSelection === "elf"
    ) {
      let randomMagicUserSpell = sample(magicUserStartOptions);
      if (randomMagicUserSpell)
        return {
          ...spells,
          [randomMagicUserSpell]: newAllSpells.magicUser[randomMagicUserSpell],
          readMagic: newAllSpells.magicUser.readMagic
        };
    }
  }

  /**
   * Illusionists and gnomes get a random spell from the
   * illusionist spell list and the read magic spell. They
   * do NOT get a chance for a knave spell.
   */
  if (classSelection === "illusionist" || classSelection === "gnome") {
    /**
     * Need array of level one illusionist spells, array of strings
     * containing level one keys. e.g. chromaticOrb, colorSpray, etc.
     * This will be our randome determination array using sampleSize.
     *
     * THEN use these to look up object on full spell list and spread
     * onto starting spell list!!!
     */
    let randomIllusionistSpell = sample(illusionistStartOptions);
    if (randomIllusionistSpell)
      return {
        ...spells,
        [randomIllusionistSpell]:
          newAllSpells.illusionist[randomIllusionistSpell],
        readMagic: newAllSpells.magicUser.readMagic
      };
  }

  /**
   * Only arcane casters have opportunity to receive a knave spell at level one.
   * Give them the Read Magic spell at level one as well.
   */
  if (nonTraditionalSpells) {
    if (
      classSelection === "magicUser" ||
      classSelection === "citizenLich" ||
      classSelection === "wildMagicUser" ||
      classSelection === "elf" ||
      classSelection === "illusionist" ||
      classSelection === "gnome"
    ) {
      let randomNonTraditionalSpell = sample(nonTraditionalStartOptions);
      if (randomNonTraditionalSpell)
        return {
          ...spells,
          lightDarkness: newAllSpells.magicUser.lightDarkness,
          readMagic: newAllSpells.magicUser.readMagic
        };
    }
  }

  if (classSelection === "cleric" || classSelection === "paladin") {
    return newAllSpells.cleric;
  }

  if (
    classSelection === "druid" ||
    classSelection === "bard" ||
    classSelection === "ranger"
  ) {
    return newAllSpells.druid;
  }

  /**
   * Defaulting to undefined here for the classes that don't
   * need spells.
   */
  return undefined;
};

const magicUserStartOptions: string[] = [
  "detectMagic",
  "holdPortal",
  "readLanguages",
  "protectionFromEvil",
  "lightDarkness",
  "charmPerson",
  "sleep",
  "floatingDisc",
  "magicMissile",
  "shield",
  "ventriloquism"
];

const illusionistStartOptions: string[] = [
  "auditoryIllusion",
  "chromaticOrb",
  "colorSpray",
  "dancingLights",
  "detectIllusion",
  "glamour",
  "hypnotism",
  "lightDarkness",
  "phantasmalForce",
  "spook",
  "wallOfFog"
];

const nonTraditionalStartOptions: string[] = ["adhere"];
