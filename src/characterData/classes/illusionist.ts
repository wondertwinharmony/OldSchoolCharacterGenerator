import React from 'react';
import { GiPointyHat } from 'react-icons/gi';
import { CastingMethod, SpellList } from '../classes';
import { illusionistInventory } from '../equipmentKits/illusionistInventory';

export const illusionist = {
  name: 'Illusionist',
  icon: React.createElement(GiPointyHat, {}),
  castingMethod: 'arcane' as CastingMethod,
  spellList: 'illusionist' as SpellList,
  spellMatrix: [
    [1, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [2, 1, 0, 0, 0, 0],
    [2, 2, 0, 0, 0, 0],
    [2, 2, 1, 0, 0, 0],
    [2, 2, 2, 0, 0, 0],
    [3, 2, 2, 1, 0, 0],
    [3, 3, 2, 2, 0, 0],
    [3, 3, 3, 2, 1, 0],
    [3, 3, 3, 3, 2, 0],
    [4, 3, 3, 3, 2, 1],
    [4, 4, 3, 3, 3, 2],
    [4, 4, 4, 3, 3, 3],
    [4, 4, 4, 4, 3, 3]
  ],
  /**
   * Homebrew, minimum DEX 9 for illusionist seems
   * kind of silly - so ignoring! Same for prime
   * requisites of DEX AND INT.
   */
  requirements: 'None',
  primeRequisite: 'INT',
  hitDice: '1d4',
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    '2,500',
    '5,000',
    '10,000',
    '20,000',
    '40,000',
    '80,000',
    '150,000',
    '300,000',
    '450,000',
    '600,000',
    '750,000',
    '900,000',
    '1,050,000',
    'Max Level'
  ],
  maximumLevel: '14',
  allowedArmor: 'None',
  allowedWeapons: 'Daggers and staves only',
  languages: ['Alignment', 'Common'],
  attackBonus: [
    '0',
    '0',
    '0',
    '0',
    '0',
    '+2',
    '+2',
    '+2',
    '+2',
    '+2',
    '+5',
    '+5',
    '+5',
    '+5'
  ],
  saves: {
    poison: [13, 13, 13, 13, 13, 11, 11, 11, 11, 11, 8, 8, 8, 8],
    wands: [14, 14, 14, 14, 14, 12, 12, 12, 12, 12, 9, 9, 9, 9],
    stone: [13, 13, 13, 13, 13, 11, 11, 11, 11, 11, 8, 8, 8, 8],
    breath: [16, 16, 16, 16, 16, 14, 14, 14, 14, 14, 11, 11, 11, 11],
    magic: [15, 15, 15, 15, 15, 12, 12, 12, 12, 12, 8, 8, 8, 8]
  },
  inventory: illusionistInventory,
  abilities: [
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Magical Research:</strong> An illusionist of any level may spend time and money on magical research. This allows them to add new spells to their spell book and to research other magical effects. When an illusionist reaches 9th level, they are also able to create magic items. Researched spells, effects, and magic items must be within the scope of the illusionist class, as judged by the referee.\n\n<strong>Spell Casting:</strong> Illusionists carry spell books containing the formulae for arcane spells. A 1st level illusionist has one spell in his or her spell book. The list of spells available to illusionists is provided in <i>Druid and Illusionist Spells</i>.\n\n<strong>Using Magic Items:</strong> As spell casters, illusionists are able to use magic scrolls of spells on their spell list. They can also use items that may only be used by arcane spell casters (e.g. magic wands). They are, however, not able to use magic items with effects that cause direct damage (e.g. a wand that shoots fireballs.</div>",
    '<strong>Combat:</strong> Illusionists may only use daggers and staves, and are unable to use shields or wear any kind of armor. This makes them very vulnerable in combat.'
  ],
  abilitiesSummary: 'Arcane Magic',
  spells: 'see Illusionist spells'
};
