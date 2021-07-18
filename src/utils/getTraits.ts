import { sampleSize } from "lodash";
import {
  caimenTraits,
  citizenLichTraits,
  crabPersonTraits,
  traits
} from "../characterData/traits";

/**
 * Utility function that produces a string describing a generated character's traits.
 * Takes two parameters, the intelligence ability score and the string of langauges
 * the character knows.
 * Returns a string.
 * @param  {number} intScore
 * @param  {string} languages
 */
export const getTraits = (
  intScore: number,
  languages: string,
  classOptionKey: string
) => {
  /**
   * Crab-People Traits are different from other classes since they are
   * so radically different from other classes in appearance and social
   * status.
   */
  if (classOptionKey === "crabPerson") {
    let crabPersonTraitsString = `A ${sampleSize(
      crabPersonTraits.background,
      1
    )}. Wears ${sampleSize(
      crabPersonTraits.rags,
      1
    )} rags.\n Has a ${sampleSize(
      crabPersonTraits.physique,
      1
    )} physique, a ${sampleSize(
      crabPersonTraits.face,
      1
    )} face, and a ${sampleSize(
      crabPersonTraits.shell,
      1
    )} shell.\n Is ${sampleSize(traits.virtues, 1)}, but ${sampleSize(
      traits.vices,
      1
    )}. Has been ${sampleSize(
      traits.misfortunes,
      1
    )} in the past.\n Favors ${sampleSize(traits.alignment, 1)}.`;

    return crabPersonTraitsString;
  }

  let languageDescriptor = "";
  let languageCount = languages.split(",").length;

  /**
   *
   ** INT modifier - language ability - (bonus languages)
   * 3     unable to read or write, broken speech (0)
   * 4-5   unable to read or write                (0)
   * 6-8   can write simple words                 (0)
   * 9-12  can read and write native languages    (0)
   * 13-15 can read and write native languages    (1)
   * 16-17 can read and write native languages    (2)
   * 18    can read and write native languages    (3)
   *
   * The following checks the intScore, then references the table above
   * to determine level of compotency/fluency.
   */

  if (intScore <= 3) {
    languageDescriptor = "unable to read or write, and has broken, ";
  }
  if ((intScore > 3 && intScore <= 5) || classOptionKey === "barbarian") {
    languageDescriptor = "unable to read or write, and has ";
  }
  if (intScore > 5 && intScore <= 8 && classOptionKey !== "barbarian") {
    languageDescriptor = "only able to write simple words, and has ";
  }
  if (intScore > 8 && intScore <= 12 && classOptionKey !== "barbarian") {
    languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
  }
  if (intScore > 12 && intScore <= 15 && classOptionKey !== "barbarian") {
    languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
  }
  if (intScore > 15 && intScore <= 17 && classOptionKey !== "barbarian") {
    languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
  }
  if (intScore === 18 && classOptionKey !== "barbarian") {
    languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
  }

    /**
   * Caimen Traits are different from other classes since they are
   * so radically different from other classes in appearance.
   */
     if (classOptionKey === "caimen") {
      let caimenTraitsString = `A ${sampleSize(
        caimenTraits.background,
        1
      )}. Wears ${sampleSize(
        traits.clothing,
        1
      )} clothing.\n Has a ${sampleSize(
        caimenTraits.physique,
        1
      )} physique, a ${sampleSize(
        caimenTraits.snout,
        1
      )} snout, and ${sampleSize(
        caimenTraits.scales,
        1
      )} scales.\n Is ${sampleSize(traits.virtues, 1)}, but ${sampleSize(
        traits.vices,
        1
      )}. Has been ${sampleSize(
        traits.misfortunes,
        1
      )} in the past.\n Favors ${sampleSize(traits.alignment, 1)}.`;
  
      return caimenTraitsString;
    }

  /**
   * Citizen Lich Traits are different from other classes since they are
   * so radically different from other classes in appearance and social
   * status.
   */
  if (classOptionKey === "citizenLich") {
    let citizenLichString = `A ${sampleSize(
      citizenLichTraits.background,
      1
    )}. Wears ${sampleSize(traits.clothing, 1)} clothes.\n Has a ${sampleSize(
      citizenLichTraits.physique,
      1
    )} physique, ${sampleSize(
      citizenLichTraits.flesh,
      1
    )} flesh, and a ${sampleSize(
      citizenLichTraits.face,
      1
    )} face. Is ${languageDescriptor} ${sampleSize(
      traits.speech,
      1
    )} speech.\n Is ${sampleSize(traits.virtues, 1)}, but ${sampleSize(
      traits.vices,
      1
    )}. Has been ${sampleSize(
      citizenLichTraits.misfortunes,
      1
    )} in the past.\n Favors ${sampleSize(traits.alignment, 1)}.`;

    return citizenLichString;
  }

  /**
   * Underworld Ranger Traits are different from other classes because
   * of their background trait and alignment - could make the general
   * traits string handler more dynamic to handle this more elegantly.
   */
  if (classOptionKey === "underworldRanger") {
    let underworldRangerTraitsString = `Was ${sampleSize(
      traits.underworldRangerBackground
    )} before discovery and recruitment by Underworld Ranger Service (URS). Wears standard-issue URS field uniform, ${languageDescriptor} ${sampleSize(
      traits.speech,
      1
    )} speech.\n Has a ${sampleSize(
      traits.physique,
      1
    )} physique, a ${sampleSize(traits.face, 1)} face, ${sampleSize(
      traits.skin,
      1
    )} skin, and ${sampleSize(traits.hair, 1)} hair.\n Is ${sampleSize(
      traits.virtues,
      1
    )}, but ${sampleSize(traits.vices, 1)}. Has been ${sampleSize(
      traits.misfortunes,
      1
    )} in the past.\n Favors ${sampleSize(["law", "neutrality"], 1)}.`;

    return underworldRangerTraitsString;
  }

  /**
   * General Trait string formation with special handling for barbarian
   * backgrounds and some class alignments.
   */
  let traitsString = `A ${
    classOptionKey === "barbarian"
      ? sampleSize(traits.barbarianBackground, 1)
      : sampleSize(traits.background, 1)
  }. Wears ${sampleSize(
    traits.clothing,
    1
  )} clothes, ${languageDescriptor} ${sampleSize(
    traits.speech,
    1
  )} speech.\n Has a ${sampleSize(traits.physique, 1)} physique, a ${sampleSize(
    traits.face,
    1
  )} face, ${sampleSize(traits.skin, 1)} skin, and ${sampleSize(
    traits.hair,
    1
  )} hair.\n Is ${sampleSize(traits.virtues, 1)}, but ${sampleSize(
    traits.vices,
    1
  )}. Has been ${sampleSize(traits.misfortunes, 1)} in the past.\n Favors ${
    classOptionKey === "paladin"
      ? "law"
      : classOptionKey === "druid"
      ? "neutrality"
      : classOptionKey === "ranger"
      ? sampleSize(["law", "neutrality"], 1)
      : sampleSize(traits.alignment, 1)
  }.`;

  return traitsString;
};
