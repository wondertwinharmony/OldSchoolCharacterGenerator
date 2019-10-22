export interface SavedCharacterData {
    name: string,
    class: string,
    traits: string,
    abilityScores: number[],
    hitPoints: number,
    languages: string,
    spells: string[],
    equipment: { characterEquipmentString: string, slotsToFill: number }
};
/**
 * Utility function that extract data from a URL.
 * Returns an object with character data needed to rehydrate a page.
 * @param  {string} url
 * @param  {string} home
 * @param  {string} router
 */
export const getSavedCharacterData = (url: string, home: string, route: string) => {
    let decodedURI = '';
    let rawCharacterData = [];

    if(route){
        decodedURI = decodeURI(url).replace(home, '').replace(route, '');
        rawCharacterData = decodedURI.split('&');
    } else {
        decodedURI = decodeURI(url).replace(home, '');
        rawCharacterData = decodedURI.replace(/-/gm, ' ').split('$');
    }
    
    let savedCharacterData = {
        name: '',
        class: '',
        traits: '',
        abilityScores: [] as number[],
        hitPoints: 0,
        languages: '',
        spells: [] as string[],
        equipment: { characterEquipmentString: '', slotsToFill: 0 },
        knave: false
    };

    let abilityScores = rawCharacterData[3].split(',');

    savedCharacterData.name = rawCharacterData[0].replace(/_/gm, ' ');
    savedCharacterData.class = rawCharacterData[1];
    savedCharacterData.traits = rawCharacterData[2].replace(/_/gm, ' ');
    savedCharacterData.abilityScores = abilityScores.map(item => parseInt(item));
    savedCharacterData.hitPoints = parseInt(rawCharacterData[4]);
    savedCharacterData.languages = rawCharacterData[5].replace(/_/gm, ' ');
    savedCharacterData.spells = rawCharacterData[6].replace(/_/gm, ' ').split('#');
    savedCharacterData.equipment.characterEquipmentString = rawCharacterData[7].replace(/_/gm, ' ');
    savedCharacterData.equipment.slotsToFill = parseInt(rawCharacterData[8]);
    savedCharacterData.knave = rawCharacterData[9] === 'true';

    return savedCharacterData;
}
