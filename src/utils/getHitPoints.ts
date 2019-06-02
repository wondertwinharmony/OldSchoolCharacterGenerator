import Roll from "roll";
import { getAbilityScoreModifier } from "./getAbilityScoreModifier";

/**
 * Utility for determining HP.
 *
 * HP = class hit dice + CON modifier
 *
 * Using optional rule which states that if a
 * 1 or 2 is rolled, before applying CON
 * modifier, re-roll.
 */
export const getHitPoints = (
  hitDice: string,
  conScore: number,
  classOptionKey: string
) => {
  const roller = new Roll();
  const hitPointsRoll = roller.roll(hitDice).result;

  if (hitPointsRoll <= 2) getHitPoints(hitDice, conScore, classOptionKey);

  /**
   * Since getAbilityScoreModifier returns a string for display,
   * we need to do a little work here to make sure that "None"
   * and other strings are converted to numbers for calculating
   * hit points.
   */
  const hitPoints =
    hitPointsRoll +
    Number(
      getAbilityScoreModifier(conScore) === "None"
        ? "0"
        : getAbilityScoreModifier(conScore)
    );

  /**
   * Note: It is possible HP can still be 0, in which
   * case make sure we always return at least 1 HP.
   */
  if (hitPoints < 1) return 1;

  /**
   * Crab-People have an extra hit point.
   */
  if (classOptionKey === "crabPerson") {
    return hitPoints + 1;
  }
  return hitPoints;
};
