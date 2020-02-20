import React from 'react';
import { GiZeusSword } from 'react-icons/gi';
import { CastingMethod, SpellList } from '../classes';
import { fighterInventory } from '../equipmentKits/fighterInventory';

export const halfElf = {
  name: 'Half-Elf',
  icon: React.createElement(GiZeusSword, {}),
  castingMethod: 'arcane' as CastingMethod,
  spellList: 'magicUser' as SpellList,
  spellMatrix: [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [2, 0, 0, 0],
    [2, 0, 0, 0],
    [2, 1, 0, 0],
    [2, 2, 0, 0],
    [2, 2, 0, 0],
    [2, 2, 1, 0],
    [3, 2, 1, 0],
    [3, 2, 2, 0],
    [3, 2, 2, 1],
    [3, 3, 2, 1]
  ],
  requirements: 'Minimum CHA and CON 9',
  primeRequisite: 'INT and STR',
  hitDice: '1d6',
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
    '750,000'
  ],
  maximumLevel: '10',
  allowedArmor: 'Any, including shields',
  allowedWeapons: 'Any',
  languages: ['Alignment', 'Common', 'Elvish', 'Hobgoblin'],
  attackBonus: [
    '0',
    '0',
    '0',
    '+2',
    '+2',
    '+2',
    '+5',
    '+5',
    '+5',
    '+7',
    '+7',
    '+7'
  ],
  saves: {
    poison: [12, 12, 12, 10, 10, 10, 8, 8, 8, 6, 6, 6],
    wands: [13, 13, 13, 11, 11, 11, 9, 9, 9, 7, 7, 7],
    stone: [13, 13, 13, 11, 11, 11, 9, 9, 9, 8, 8, 8],
    breath: [15, 15, 15, 13, 13, 13, 10, 10, 10, 8, 8, 8],
    magic: [15, 15, 15, 12, 12, 12, 10, 10, 10, 8, 8, 8]
  },
  inventory: fighterInventory,
  abilities: [
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules, p42</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Spell Casting:</strong> From 2nd level, half-elves gain the ability to cast arcane spells, owning a spell book in which the magical formulae for the spells they know are recorded. A 2nd level half-elf has one spell in his or her spellbook. The list of spells available to half-elves is provided in <i>Cleric and Magic-User Spells</i> (half-elves have the same spell seletion as magic-users).\n\n<strong>Using Magic Items:</strong> As spell casters, half-elves are able to use magic scrolls of spells on their spell list. They can also use items that may only be used by arcane spell casters (e.g. magic wands).</div>",
    '<strong>Combat:</strong> Half-elves are able to use all forms of weapon and armor.',
    '<strong>Detect Secret Doors:</strong> When searching for secret doors, half-elves have a 2-in-6 chance of success (see <i>Dungeon Adventuring in Core Rules</i>).',
    '<strong>Infravision:</strong> Elves have infravision to 60’ (see <i>Hazards and Challenges: Darkness in Core Rules</i>).'
  ],
  abilitiesSummary: 'Arcane Magic (2nd level), Detect Secret Doors, Infravision'
};
