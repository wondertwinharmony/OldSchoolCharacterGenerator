/* Info needed would be:
* - abilityScores (number[])✅
* - classSelection (string)✅
* - spell (string)
* - equipment (object => characterEquipmentString (string))
* - traits (string)✅
* - name (string)✅
* - languages (string)✅
*/

 const replaceSpaces = (stringToProcess: string) => {
    let processedString = stringToProcess.trimStart().replace(/[\s]+/g, '-');
    return processedString;
}

export const saveCharacterData = (name: string, classSelection: string, traits: string, abilityScores: number[], hitPoints: number, languages: string, characterSpells: string[], equipment: string, equipmentSlots: number) => {
    let baseURL = window.location.href;
    let spells = '0';

    if(classSelection === 'magicUser' || classSelection === 'elf') {
        spells = characterSpells.join('#');
    }

    let permalink = baseURL.concat('&',
        replaceSpaces(name),'$',
        replaceSpaces(classSelection),'$',
        replaceSpaces(traits), '$',
        replaceSpaces(abilityScores.toString()),'$',
        hitPoints.toString(),'$',
        replaceSpaces(languages),'$',
        replaceSpaces(spells), '$',
        replaceSpaces(equipment), '$',
        equipmentSlots.toString(), '&'
        );

    window.location.href = encodeURI(permalink);
}
