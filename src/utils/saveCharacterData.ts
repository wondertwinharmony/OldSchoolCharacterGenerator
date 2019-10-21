/* Info needed would be:
* - abilityScores (number[])✅
* - classSelection (string)✅
* - spell (string)
* - equipment (object => characterEquipmentString (string))
* - traits (string)✅
* - name (string)✅
* - languages (string)✅
*/


 /**
  * Helper function that takes a string, then removes white spaces and replaces them with '_'
  * @param  {string} stringToProcess
  */
 const replaceSpaces = (stringToProcess: string) => {
    let processedString = stringToProcess.trimStart().replace(/[\s]+/g, '_');
    return processedString;
}


/**
 * Utility function that takes various pieces of information and places it in the URL, creating a permalink. 
 * Returns a string.
 * @param  {string} name
 * @param  {string} classSelection
 * @param  {string} traits
 * @param  {number[]} abilityScores
 * @param  {number} hitPoints
 * @param  {string} languages
 * @param  {string[]} characterSpells
 * @param  {string} equipment
 * @param  {number} equipmentSlots
 * @param  {boolean} knave
 */
export const saveCharacterData = (name: string, 
                                  classSelection: string, 
                                  traits: string, 
                                  abilityScores: number[], 
                                  hitPoints: number, 
                                  languages: string, 
                                  characterSpells: string[], 
                                  equipment: string, 
                                  equipmentSlots: number, 
                                  knave: boolean) => {

    const characterData ='';
    const usersOfMagic = ['elf', 'magicUser', 'drow', 'gnome', 'wildMagicUser','illusionist'];
    let spells = '';

    if(usersOfMagic.includes(classSelection)) {
        spells = characterSpells.join('#');
    }

    let permalink = characterData.concat(
        replaceSpaces(name),'&',
        replaceSpaces(classSelection),'&',
        replaceSpaces(traits), '&',
        replaceSpaces(abilityScores.toString()),'&',
        hitPoints.toString(),'&',
        replaceSpaces(languages),'&',
        replaceSpaces(spells), '&',
        replaceSpaces(equipment), '&',
        equipmentSlots.toString(), '&',
        knave.toString()
        );

        return permalink;
}
