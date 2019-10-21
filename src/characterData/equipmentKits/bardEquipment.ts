import { getDruidScrollSpell } from "../../utils/getRandomSpellScroll";

/**
 * Bards equipment kits cannot be higher than 8 slots.
 * 8 + starting gold + instrument = 10
 */
export const bardEquipment = [
  [
    "<strong>Chainmail Armor</strong> (2 slots)",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Sling</strong> (Damage: 1d4, Qualities: Blunt, Missile (5’-40’ / 41’-80’ / 81’-160’))",
    "<strong>Pouch With Sling Bullets</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDruidScrollSpell()}`
  ],
  [
    "<strong>Chainmail Armor</strong> (2 slots)",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDruidScrollSpell()}`
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Sling</strong> (Damage: 1d4, Qualities: Blunt, Missile (5’-40’ / 41’-80’ / 81’-160’))",
    "<strong>Pouch With Sling Bullets</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDruidScrollSpell()}`
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of Bolts</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDruidScrollSpell()}`
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of Bolts</strong> (d20 usage die)",
    "<strong>Silver Tipped Bolts</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Chainmail Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDruidScrollSpell()}`
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of Bolts</strong> (d20 usage die)",
    "<strong>Silver Tipped Bolts</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDruidScrollSpell()}`
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of Bolts</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Silver Tipped Arrows</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ]
];
