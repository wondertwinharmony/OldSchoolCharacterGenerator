/**
 * Utility for determining an ability score's
 * modifiers.
 *
 * Score    -> Standard Adjustment
 * 3        ->      -3
 * 4-5      ->      -2
 * 6-8      ->      -1
 * 9-12     ->      None
 * 13-15    ->      +1
 * 16-17    ->      +2
 * 18       ->      +3
 */
export const getAbilityScoreModifier = (abilityScore: number) => {
  if (abilityScore === 3) return "-3";
  if (abilityScore >= 4 && abilityScore <= 5) return "-2";
  if (abilityScore >= 6 && abilityScore <= 8) return "-1";
  if (abilityScore >= 13 && abilityScore <= 15) return "+1";
  if (abilityScore >= 16 && abilityScore <= 17) return "+2";
  if (abilityScore === 18) return "+3";
  // abilityScore must be between 9-12, so return 'None'
  return "None";
};
