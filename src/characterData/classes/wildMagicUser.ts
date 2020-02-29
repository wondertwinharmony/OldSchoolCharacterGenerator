import React from 'react';
import { GiLaserSparks, GiRadialBalance } from 'react-icons/gi';
import wildMagicUserWildSurgesTable from '../../static/wildMagicUserWildSurgesTable.png';
import { CastingMethod, SpellList } from '../classes';
import { magicUserInventory } from '../equipmentKits/magicUserInventory';

export const wildMagicUser = {
  name: 'Wild Magic-User',
  icon: React.createElement(GiRadialBalance, {}),
  castingMethod: 'arcane' as CastingMethod,
  spellList: 'magicUser' as SpellList,
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
  skillsIcon: React.createElement(GiLaserSparks, {}),
  skillsTable: React.createElement('img', {
    src: wildMagicUserWildSurgesTable,
    style: { width: '13rem', height: '33rem' }
  }),
  requirements: 'Minimum INT 9',
  primeRequisite: 'INT',
  hitDice: '1d4',
  hitDiceCount: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
  ],
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
  inventory: magicUserInventory,
  abilities: [
    '<strong>Combat:</strong> Wild magic-users may only use daggers and staves, and are unable to use shields or wear any kind of armor. This makes them very vulnerable in combat.',
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules, p42</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Magical Research:</strong> A wild magic-user of any level may spend time and money to research new spells to add to their spell book. When a wild magic-user reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell Casting:</strong> Wild magic-users carry spell books containing the formulae for arcane spells. A 1st level wild magic-user has one spell in their spell book. The list of spells available to wild magic-users is found on <i>p45</i>.\n\n<strong>Using Magic Items:</strong> As spell casters, wild magic-users are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by arcane spell casters (including wild magic-users).</div>",
    "<strong>Spell Level Variability:</strong> The wild magic-user's work with the principles of uncertainty affects all spells that have a level variable for range, duration, area of effect, or damage. Each time a wild magic-user casts or activates a spell with a level variable, they randomly determine the resulting spell level. The player must roll 1d3 at the moment the spell is cast. A result of 1 the spell level is lower, 2 unaffected, and 3 higher. Subtract 1d6 from the spell level (to a minimum of 1) if the result was lower. Add 1d6 to the spell level if higher. A spell level can be higher than 14.",
    '<strong>Wild Surges:</strong> Wild magic-user spells sometimes unfold in spectacular wild surges that could prove catastrophic to the wild magic-user and their companions. Each time a wild magic-user casts or activates a spell, roll 1d6 to see if a random magical effect is unleashed. If a wild surge is unleashed, the referee determines the result from an exhaustive table of possible side-effects. At 5th level, a wild magic-user gains the ability to roll twice for every wild surge and choose the result.'
  ],
  abilitiesSummary: 'Arcane Magic, Spell Level Variability, Wild Surges',
  spells: 'see MagicUser spells',
  wildMagicUserMagicSurges: [
    '<strong>Handling Wild Surges:</strong> Wild surge occurrence is determined by rolling 1d6 on the above table. The DM will roll to determine the consequences of a wild surge. It is possible to not know the immediate consequences of a wild surge.'
  ]
};
