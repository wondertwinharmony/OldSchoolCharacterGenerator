import React from 'react';
import { GiMaskedSpider } from 'react-icons/gi';
import { CastingMethod, SpellList } from '../classes';
import { drowInventory } from '../equipmentKits/drowInventory';

export const drow = {
  name: 'Drow',
  icon: React.createElement(GiMaskedSpider, {}),
  castingMethod: 'divine' as CastingMethod,
  spellList: 'cleric' as SpellList,
  spellMatrix: [
    [1, 0, 0, 0, 0],
    [2, 0, 0, 0, 0],
    [2, 1, 0, 0, 0],
    [2, 2, 0, 0, 0],
    [2, 2, 1, 0, 0],
    [2, 2, 2, 1, 0],
    [3, 3, 2, 2, 1],
    [3, 3, 3, 2, 2],
    [4, 4, 3, 3, 2],
    [4, 4, 4, 3, 3]
  ],
  requirements: 'Minimum INT 9',
  primeRequisite: 'STR and WIS',
  hitDice: '1d6',
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    '4,000',
    '8,000',
    '16,000',
    '32,000',
    '64,000',
    '120,000',
    '250,000',
    '400,000',
    '600,000',
    'Max Level'
  ],
  maximumLevel: '10',
  allowedArmor: 'Any, including shields',
  allowedWeapons: 'Any',
  languages: [
    'Alignment',
    'Common',
    'Deepcommon',
    'Elvish',
    'Gnomish',
    'Secret Language of Spiders'
  ],
  attackBonus: ['0', '0', '0', '+2', '+2', '+2', '+5', '+5', '+5', '+7'],
  saves: {
    poison: [12, 12, 12, 10, 10, 10, 8, 8, 8, 6],
    wands: [13, 13, 13, 11, 11, 11, 9, 9, 9, 7],
    stone: [13, 13, 13, 11, 11, 11, 9, 9, 9, 8],
    breath: [15, 15, 15, 13, 13, 13, 10, 10, 10, 8],
    magic: [12, 12, 12, 10, 10, 10, 8, 8, 8, 6]
  },
  inventory: drowInventory,
  abilities: [
    '<strong>Combat:</strong> Drow are able to use all forms of weapon and armor.',
    '<strong>Detect Secret Doors:</strong> Drow have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance (see <i><strong>Dungeon Adventuring</strong> in Core Rules</i>).',
    "<strong>Divine Magic:</strong> See <i>Magic in Core Rules</i> for full details on divine magic.\n\n<div style='padding: 0 1.5rem'><strong>Holy Symbol:</strong> A drow must carry a holy symbol (see the equipment list.\n\n<strong>Deity Disfavor:</strong> Drow must be faithful to the tenets of their alignment, clergy, and religion. Drow who fall from favor with their deity may incur penalties.\n\n<strong>Magical Research:</strong> A drow of any level may spend time and money to research new spells associated with his or her deity. When a drow reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell Casting:</strong> A drow may pray to receive spells from his or her deity. Drow cast spells from the standard cleric spell list (see <i> Cleric and Magic-User Spells</i>). At 1st level, a drow may only pray for the <i>light (darkness)</i> spell, but from 2nd level the character may pray for any spell on the spell list. Drow are also able to pray for the magic-user <i>web</i> spell from 3rd level.\n\n<strong>Using Magic Items:</strong> As spell casters, drow can use magic scrolls of spells on their spell list. There are also items (e.g. some staves) that may only be used by divine spell casters (including drow).</div>",
    '<strong>Immunity to Ghoul Paralysis:</strong> Drow are completely unaffected by the paralysis ghouls can inflict.',
    '<strong>Infravision:</strong> Drow have infravision to 90’ (see <i><strong>Hazards and Challenges</strong> in Core Rules</i>).',
    '<strong>Light Sensitivity:</strong> When in bright light (daylight, <i>continual light</i>), drow suffer a -2 penalty to attack rolls and a -1 penalty to Armor Class.',
    '<strong>Listening at Doors:</strong> Drow have a 2-in-6 chance of hearing noises (see <i><strong>Dungeon Adventuring</strong> in Core Rules</i>).',
    '<strong>Spider Affinity:</strong> Drow live alongside many different species of spiders, including giant spiders. They can speak the secret language of spiders and gain a +1 bonus to reaction rolls when encountering spiders (see <i><strong>Encounters</strong> in Core Rules</i>).'
  ],
  abilitiesSummary:
    'Detect Secret Doors, Divine Magic (1st level Light spell), Immunity to Ghoul Paralysis, Infravision, Light Sensitivity, Listening at Doors, Spider Affinity',
  spells: 'see MagicUser spells'
};
