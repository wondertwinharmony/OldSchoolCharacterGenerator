import { traits } from "../characterData/traits";
import { sampleSize } from "lodash";

/**
 * Utility function that produces a string describing a generated character's traits.
 * Takes two parameters, the intelligence ability score and the string of langauges
 * the character knows.
 * Returns a string.
 * @param  {number} intScore
 * @param  {string} languages
 */
export const getTraits = (intScore: number, languages: string) => {
    let languageDescriptor = '';
    let languageCount = languages.split(',').length;

    if(intScore <= 3) {
        languageDescriptor = 'unable to read or write, and has broken, ';
    }
    if(intScore > 3 && intScore <= 5) {
        languageDescriptor = 'unable to read or write, and has ';
    }
    if(intScore > 5 && intScore <= 8){
        languageDescriptor = 'only able to write simple words, and has ';
    }
    if(intScore > 8 && intScore <= 12){
        languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
    }
    if(intScore > 12 && intScore <= 15){
        console.log(languageCount, " ", languages);
        languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
    }
    if(intScore > 15 && intScore <= 17){
        console.log(languageCount, " ", languages);
        languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
    }
    if(intScore === 18){
        console.log(languageCount, " ", languages);
        languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
    }
    
    let traitsString = `A ${sampleSize(traits.background, 1)}. Wears ${sampleSize(traits.clothing, 1)} clothes, ${languageDescriptor} ${sampleSize(traits.speech, 1)} speech.\n Has a ${sampleSize(traits.physique, 1)} physique, a ${sampleSize(traits.face, 1)} face, ${sampleSize(traits.skin, 1)} skin, and ${sampleSize(traits.hair, 1)} hair.\n Is ${sampleSize(traits.virtues, 1)}, but ${sampleSize(traits.vices, 1)}. Has been ${sampleSize(traits.misfortunes, 1)} in the past.\n Favours ${sampleSize(traits.alignment, 1)}.`;

    return traitsString;
}
