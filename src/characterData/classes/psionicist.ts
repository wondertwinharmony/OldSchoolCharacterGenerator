import React from 'react';
import { GiBrain, GiPsychicWaves } from 'react-icons/gi';
import psionicistSkillsTable from '../../static/psionicistSkillsTable.png';
import { psionicistInventory } from '../equipmentKits/psionicistInventory';

export const psionicist = {
  name: 'Psionicist',
  icon: React.createElement(GiPsychicWaves, {}),
  skillsIcon: React.createElement(GiBrain, {}),
  skillsTable: React.createElement('img', {
    src: psionicistSkillsTable,
    style: { width: '13rem', height: '33rem' }
  }),
  requirements: 'Minimum CON 9',
  primeRequisite: 'CON',
  hitDice: '1d6',
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    '2,000',
    '4,000',
    '8,000',
    '16,000',
    '32,000',
    '64,000',
    '120,000',
    '240,000',
    '360,000',
    '480,000',
    '600,000',
    '720,000',
    '840,000',
    'Max Level'
  ],
  maximumLevel: '14',
  allowedArmor: 'Any armor, no shields',
  allowedWeapons: 'No two-handed weapons',
  languages: ['Alignment', 'Common'],
  attackBonus: [
    '0',
    '0',
    '0',
    '0',
    '+2',
    '+2',
    '+2',
    '+2',
    '+5',
    '+5',
    '+5',
    '+5',
    '+7',
    '+7'
  ],
  saves: {
    poison: [11, 11, 11, 11, 9, 9, 9, 9, 6, 6, 6, 6, 3, 3],
    wands: [12, 12, 12, 12, 10, 10, 10, 10, 7, 7, 7, 7, 5, 5],
    stone: [14, 14, 14, 14, 12, 12, 12, 12, 9, 9, 9, 9, 7, 7],
    breath: [16, 16, 16, 16, 14, 14, 14, 14, 11, 11, 11, 11, 8, 8],
    magic: [15, 15, 15, 15, 12, 12, 12, 12, 9, 9, 9, 9, 7, 7]
  },
  inventory: psionicistInventory,
  abilities: [
    '<strong>Combat:</strong> Psionicists must always keep one hand free in order to use their powers. They can use any armour, but no shields or two-handed weapons.',
    '<strong>Biofeedback:</strong> At 5th level, the psionicist gains the power of biofeedback. This allows the psionicist to either purge their body of any natural poisons or diseases once per day (unnatural diseases such as lycanthropy are not affected) or to heal themself of 1d6 HP for every three levels they possess.',
    '<strong>Mind Over Matter:</strong> At 12th level, the psionicist unlocks complete, albeit temporary, control over their body. When using this power the psionicist must make a Constitution check. If successful, the psionicist may apply +10 to all saving throws for the next hour. This power can only be used once per day.',
    "<strong>Psionicist Skills:</strong> Psionicists can use the following skills, which improve as the character gains levels. Note that dice rolls for extra-sensory perception are made by the referee, because a psionicist is not always aware that he or she has failed to detect danger!\n\n<div style='padding: 0 1.5rem'><strong>Extra-Sensory Perception:</strong> Constantly active danger sense that alerts the psionicist when trouble is near.\n\n<strong>Telepathy:</strong> Reading minds at a distance and communicating with others via thought.\n\n<strong>Telekinesis:</strong> Manipulation and moving of objects by thought alone. Examples could include moving a coin across a table, moving a key under a door, throwing a rock across a room, or drawing a sword from its sheath into a hand.</div>"
  ],
  abilitiesSummary:
    'Psionicist Skills (extra-sensory perception, telepathy, telekinesis), Biofeedback (5th level), Mind Over Matter (12th level)',
  /**
   * @see for "Using a Thief Skill" homebrew rule
   * http://doomslakers.blogspot.com/2019/01/once-again-with-thieves.html
   */
  psionicistSkills: [
    '<strong>Extra-Sensory Perception (ESP), Telepathy (TP), Telekinesis (TK)</strong>\n',
    '<strong>Using a Psionicist Skill:</strong> The DM will roll for extra-sensory perception on the player’s behalf, as the psioncist always believes the attempt to be successful. If the roll fails,the DM knows that the psionicist has failed to notice danger, and should determine outcomes appropriately.\n\nFor telekinesis the DM will judge each case based on the size of the object to be moved, the distance it is to be moved, and the speed at which it is to be moved, and apply a percentile modifier accordingly.'
  ]
};
