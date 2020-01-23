/**
 * Object containing the default toggle state of all Segment Components.
 * If a component has a collapsable state, please add them here.
 * Be sure to add the property [segmentName] to any component with
 * non-string type and/or non-matching [segmentDisplayName].
 */
export type CharacterSheetSegmentsKeys = keyof CharacterSheetSegments;

export interface CharacterSheetSegments {
  isTraitsVisible: boolean;
  isLanguagesVisible: boolean;
  isAbilitiesVisible: boolean;
  isTurnUndeadTableVisible: boolean;
  isSpellsVisible: boolean;
  isEquipmentVisible: boolean;
  isSkillsVisible: boolean;
  isCombatActionsVisible: boolean;
  isWeaponQualitiesVisible: boolean;
  isItemsForPurchaseVisible: boolean;
  isRetainersVisible: boolean;
  isGainingXPAndCarousingVisible: boolean;
  [key: string]: boolean;
}

export let characterSheetSegments = {
  isTraitsVisible: true,
  isLanguagesVisible: true,
  isAbilitiesVisible: true,
  isTurnUndeadTableVisible: true,
  isSpellsVisible: true,
  isEquipmentVisible: true,
  isSkillsVisible: true,
  isCombatActionsVisible: false,
  isWeaponQualitiesVisible: false,
  isItemsForPurchaseVisible: false,
  isRetainersVisible: false,
  isGainingXPAndCarousingVisible: false
};
