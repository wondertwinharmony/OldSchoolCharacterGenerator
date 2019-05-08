import { traits } from "../characterData/traits";
import { sampleSize } from "lodash";

/**
 * Utility function that produces a string describing a generated character's traits.
 * Returns a string.
 */
export const getTraits = () => {
    const traitsString = `A ${sampleSize(traits.background, 1)}. Wears ${sampleSize(traits.clothing, 1)} clothes, and has ${sampleSize(traits.speech, 1)} speech.\n Has a ${sampleSize(traits.physique, 1)} physique, a ${sampleSize(traits.face, 1)} face, ${sampleSize(traits.skin, 1)} skin, and ${sampleSize(traits.hair, 1)} hair.\n Is ${sampleSize(traits.virtues, 1)}, but ${sampleSize(traits.vices, 1)}. Has been ${sampleSize(traits.misfortunes, 1)} in the past.\n Favours ${sampleSize(traits.alignment, 1)}.`;

    return traitsString;
}
