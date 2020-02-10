import { sample } from "lodash";
import { allNonTraditionalSpells, newAllSpells } from "../characterData/spells";

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
          [randomNonTraditionalSpell]:
            allNonTraditionalSpells[randomNonTraditionalSpell],
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
   * Defaulting to empty spells object here for classes
   * that get spells at later levels.
   */
  return {};
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

const nonTraditionalStartOptions: string[] = [
  // Knave spells
  "adhere",
  "animateObject",
  "anthropomorphize",
  "astralPrison",
  "attract",
  "babble",
  "beastForm",
  "befuddle",
  "bendFate",
  "birdPerson",
  "bodySwap",
  "catherine",
  "command",
  "counterspell",
  "deafen",
  "disassemble",
  "disguise",
  "displace",
  "earthquake",
  "elasticity",
  "filch",
  "gate",
  "gravityShift",
  "greed",
  "hatred",
  "hearWhispers",
  "icyTouch",
  "increaseGravity",
  "invisibleTether",
  "leap",
  "liquidAir",
  "magicDampener",
  "manse",
  "marbleMadness",
  "masquerade",
  "miniaturize",
  "mirrorwalk",
  "multiarm",
  "nightSphere",
  "objectify",
  "oozeForm",
  "pacify",
  "phantomCoach",
  "phobia",
  "pit",
  "primevalSurge",
  "psychometry",
  "raiseSpirit",
  "repel",
  "scry",
  "shroud",
  "shuffle",
  "snailKnight",
  "sniff",
  "sort",
  "spellseize",
  "spiderClimb",
  "summonIdol",
  "swarm",
  "thaumaturgicAnchor",
  "timeJump",
  "timeRush",
  "timeSlow",
  "upwell",
  "ward",
  "wizardMark",
  "xrayVision",
  // Operation Unfathomable spells
  "magicMissive"
];
