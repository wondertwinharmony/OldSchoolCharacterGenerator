import { DEX, INT, STR, WIS } from "../constants/abilityScoreConstants";

/**
 * Helper for getting standard experience adjustments
 * for a single ability score using following old school
 * rules:
 *
 * 3-5 XP Adjustment: -20%
 * 6-8 XP Adjustment: -10%
 * 9-12 XP Adjustment: None
 * 13-15 XP Adjustment: +5%
 * 16-18 XP Adjustment: +10%
 */
const getStandardExperienceAdjustment = (abilityScore: number) => {
  if (abilityScore >= 16) return "+10% XP";
  if (abilityScore >= 13 && abilityScore <= 15) return "+5% XP";
  if (abilityScore >= 6 && abilityScore <= 8) return "-10% XP";
  if (abilityScore >= 3 && abilityScore <= 5) return "-20% XP";
  return "None";
};

/**
 * Utility for getting experience reward adjustments.
 * @param abilityScores
 * @param classPrimeRequisites
 */
export const getExperienceAdjustment = (
  abilityScores: number[],
  classPrimeRequisites: string
) => {
  let experienceAdjustment = "None";

  if (classPrimeRequisites === "STR") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[STR]);
  }
  if (classPrimeRequisites === "DEX") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[DEX]);
  }
  if (classPrimeRequisites === "INT") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[INT]);
  }
  if (classPrimeRequisites === "WIS") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[WIS]);
  }

  /**
   * For now we do not need to check race (or class), but in future
   * we may need to if we add more races/classes. For now assume that
   * checking classPrimeRequisite string is enough, but if we
   * need to check race (or class) in future we'll have to pass
   * classOptionKey to this util as well to lookup the new race/class'
   * experience adjustment.
   */

  // If class prime requisites match that of a elf...
  // Prime Requisites: An elf must have at least 13 in both prime requisites in order to get
  // the +5% bonus to experience. An elf with an INT of at least 16 and a STR of at least 13
  // receives a +10% XP bonus.
  if (classPrimeRequisites === "INT and STR") {
    if (abilityScores[INT] >= 13 && abilityScores[STR] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[INT] >= 16 && abilityScores[STR] >= 13)
      experienceAdjustment = "+10% XP";
  }
  // If class prime requisites match that of a halfling...
  // Prime Requisites: A halfling must have at least 13 in one or the other prime requisite
  // in order to get a +5% to experience. The character must have a STR and DEX of 13 or higher
  // to get a +10% bonus.
  if (classPrimeRequisites === "DEX and STR") {
    if (abilityScores[DEX] >= 13 || abilityScores[STR] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[DEX] >= 13 && abilityScores[STR] >= 13)
      experienceAdjustment = "+10% XP";
  }

  return experienceAdjustment;
};
