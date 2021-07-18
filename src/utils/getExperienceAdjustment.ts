import {
  CHA,
  CON,
  DEX,
  INT,
  STR,
  WIS
} from "../constants/abilityScoreConstants";

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
  return "+0% XP";
};

/**
 * Utility for getting experience reward adjustments.
 * @param abilityScores
 * @param classPrimeRequisites
 * @param classSelection
 */
export const getExperienceAdjustment = (
  abilityScores: number[],
  classPrimeRequisites: string,
  classSelection: string
) => {
  let experienceAdjustment = "+0% XP";

  if (classPrimeRequisites === "STR") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[STR]);
  }
  if (classPrimeRequisites === "DEX") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[DEX]);
  }
  if (classPrimeRequisites === "CON") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[CON]);
  }
  if (classPrimeRequisites === "INT") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[INT]);
  }
  if (classPrimeRequisites === "WIS") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[WIS]);
  }
  if (classPrimeRequisites === "CHA") {
    experienceAdjustment = getStandardExperienceAdjustment(abilityScores[CHA]);
  }

  // Prime Requisites Example: An elf must have at
  // least 13 in both prime requisites in order to get the +5%
  // bonus to experience. An elf with an INT of at least 16 and a
  // STR of at least 13 receives a +10% XP bonus.
  //
  // The following classes have unique prime requisite rules and
  // unique experience adjustments and need special handling.

  // Arcane Bard
  if (
    classSelection === "arcaneBard" &&
    classPrimeRequisites === "CHA and DEX"
  ) {
    if (abilityScores[CHA] >= 13 && abilityScores[DEX] >= 13)
      experienceAdjustment = "+5% XP";
    if ((abilityScores[CHA] >= 13 && abilityScores[DEX] >= 16)
    || (abilityScores[CHA] >= 16 && abilityScores[DEX] >= 13))
      experienceAdjustment = "+10% XP";
  }

  // Barbarian
  if (
    classSelection === "barbarian" &&
    classPrimeRequisites === "CON and STR"
  ) {
    if (abilityScores[CON] >= 13 || abilityScores[STR] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[CON] >= 16 && abilityScores[STR] >= 16)
      experienceAdjustment = "+10% XP";
  }

  // Citizen Lich
  if (classSelection === "citizenLich" && classPrimeRequisites === "INT") {
    if (abilityScores[INT] >= 13) experienceAdjustment = "+5% XP";
  }

  // Drow
  if (classSelection === "drow" && classPrimeRequisites === "STR and WIS") {
    if (abilityScores[STR] >= 13 && abilityScores[WIS] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[STR] >= 13 && abilityScores[WIS] >= 16)
      experienceAdjustment = "+10% XP";
  }

  // Elf
  if (classSelection === "elf" && classPrimeRequisites === "INT and STR") {
    if (abilityScores[INT] >= 13 && abilityScores[STR] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[INT] >= 16 && abilityScores[STR] >= 13)
      experienceAdjustment = "+10% XP";
  }

  // Gnome
  if (classSelection === "gnome" && classPrimeRequisites === "DEX and INT") {
    if (abilityScores[DEX] >= 13 && abilityScores[INT] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[DEX] >= 13 && abilityScores[INT] >= 16)
      experienceAdjustment = "+10% XP";
  }

  // Half-Elf
  if (classSelection === "halfElf" && classPrimeRequisites === "INT and STR") {
    if (abilityScores[INT] >= 13 && abilityScores[STR] >= 13)
      experienceAdjustment = "+5% XP";
    if (
      (abilityScores[INT] >= 16 && abilityScores[STR] >= 13) ||
      (abilityScores[INT] >= 13 && abilityScores[STR] >= 16)
    )
      experienceAdjustment = "+10% XP";
  }

  // Halfling
  if (classSelection === "halfling" && classPrimeRequisites === "DEX and STR") {
    if (abilityScores[DEX] >= 13 || abilityScores[STR] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[DEX] >= 13 && abilityScores[STR] >= 13)
      experienceAdjustment = "+10% XP";
  }

  // Half-Orc
  if (classSelection === "halfOrc" && classPrimeRequisites === "DEX and STR") {
    if (abilityScores[DEX] >= 13 && abilityScores[STR] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[DEX] >= 16 && abilityScores[STR] >= 16)
      experienceAdjustment = "+10% XP";
  }

  // Paladin
  if (classSelection === "paladin" && classPrimeRequisites === "STR and WIS") {
    if (abilityScores[STR] >= 13 || abilityScores[WIS] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[STR] >= 16 && abilityScores[WIS] >= 16)
      experienceAdjustment = "+10% XP";
  }

  // Svirfneblin
  if (
    classSelection === "svirfneblin" &&
    classPrimeRequisites === "DEX and INT"
  ) {
    if (abilityScores[DEX] >= 13 && abilityScores[INT] >= 13)
      experienceAdjustment = "+5% XP";
    if (abilityScores[DEX] >= 13 && abilityScores[INT] >= 16)
      experienceAdjustment = "+10% XP";
  }

  // Underworld Ranger
  if (classSelection === "underworldRanger" && classPrimeRequisites === "CON") {
    if (abilityScores[CON] >= 13) experienceAdjustment = "+5% XP";
  }

  return experienceAdjustment;
};
