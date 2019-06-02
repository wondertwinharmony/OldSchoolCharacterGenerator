import { difference, sampleSize } from "lodash";
import { settingLanguages } from "../characterData/settingLanguages";
/**
 * Utility for determining all languages known by
 * a character. Uses int score to determine what
 * bonus languages to include.
 *
 * INT modifier - language ability - (bonus languages)
 * 3     unable to read or write, broken speech (0)
 * 4-5   unable to read or write                (0)
 * 6-8   can write simple words                 (0)
 * 9-12  can read and write native languages    (0)
 * 13-15 can read and write native languages    (1)
 * 16-17 can read and write native languages    (2)
 * 18    can read and write native languages    (3)
 *
 * @param classLanguages
 * @param intScore
 */

export const getLanguages = (
  classLanguages: string[],
  intScore: number,
  classOptionKey: string
) => {
  let bonusLanguageCount = 0;
  /**
   * Crab-Men do not get bonus languages.
   */
  if (classOptionKey === "crabMan") return classLanguages.join("");

  if (intScore >= 13 && intScore <= 15) bonusLanguageCount = 1;
  if (intScore >= 16 && intScore <= 17) bonusLanguageCount = 2;
  if (intScore === 18) bonusLanguageCount = 3;

  const availableLanguagesToLearn = difference(
    settingLanguages,
    classLanguages
  );

  const bonusLanguages = sampleSize(
    availableLanguagesToLearn,
    bonusLanguageCount
  );

  const languages = classLanguages.concat(bonusLanguages);

  return languages.join(", ");
};
