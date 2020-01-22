/**
 * Underworld Ranger equipment kits cannot be higher than 9 slots.
 * Emphasis on mundane underworld adventuring equipment as part of
 * randomization.
 * 9 + starting gold = 10
 */
export const underworldRangerEquipment = [
  //   [
  //     "<strong>Spear</strong> (Damage: 1d6, Qualities: Brace, Melee, Missile (5’-20’ / 21’-40’ / 41’-60’), 2 slots)",
  //     "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
  //     "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
  //     "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  [
    "<strong>Badge of Service</strong>",
    "<strong>Light-Intensifying Goggles</strong>",
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ]
  //   [
  //     "<strong>Leather Armor</strong> (2 slots)",
  //     "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
  //     "<strong>Case of Bolts</strong> (d20 usage die)",
  //     "<strong>Silver Tipped Bolts</strong> (d4 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Leather Armor</strong> (2 slots)",
  //     "<strong>Long Bow</strong> (Damage: 1d6, Qualities: Missile (5’–70’ / 71’–140’ / 141’–210’), Two-handed, 3 slots)",
  //     "<strong>Quiver of Arrows</strong> (d20 usage die)",
  //     "<strong>Silver Tipped Arrows</strong> (d4 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Leather Armor</strong> (2 slots)",
  //     "<strong>Spear</strong> (Damage: 1d6, Qualities: Brace, Melee, Missile (5’-20’ / 21’-40’ / 41’-60’), 2 slots)",
  //     "<strong>Sling</strong> (Damage: 1d4, Qualities: Blunt, Missile (5’-40’ / 41’-80’ / 81’-160’))",
  //     "<strong>Pouch With Sling Bullets</strong> (d20 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Shield</strong>",
  //     "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
  //     "<strong>Hand Axe</strong> (Damage: 1d6, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’), 2 slots)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Hand Axe</strong> (Damage: 1d6, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’), 2 slots)",
  //     "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
  //     "<strong>Case With Bolts</strong> (d20 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Shield</strong>",
  //     "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
  //     "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Two-Handed Sword</strong> (Damage: 1d10, Qualities: Melee, 3 slots)",
  //     "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
  //     "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
  //     "<strong>Quiver of Arrows</strong> (d20 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
  //     "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
  //     "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
  //     "<strong>Quiver of Arrows</strong> (d20 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
  //     "<strong>Case With Bolts</strong> (d20 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Battle Axe</strong> (Damage: 1d8, Qualities: Melee, Slow, Two-handed, 3 slots)",
  //     "<strong>Javelin</strong> (Damage: 1d4, Qualities: Missile (5’–30’ / 31’–60’ / 61’–90’))",
  //     "<strong>Javelin</strong> (Damage: 1d4, Qualities: Missile (5’–30’ / 31’–60’ / 61’–90’))",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Chainmail Armor</strong> (2 slots)",
  //     "<strong>Two-Handed Sword</strong> (Damage: 1d10, Qualities: Melee, 3 slots)",
  //     "<strong>Hand Axe</strong> (Damage: 1d6, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’), 2 slots)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Leather Armor</strong> (2 slots)",
  //     "<strong>Long Bow</strong> (Damage: 1d6, Qualities: Missile (5’–70’ / 71’–140’ / 141’–210’), Two-handed, 3 slots)",
  //     "<strong>Quiver of Arrows</strong> (d20 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ],
  //   [
  //     "<strong>Leather Armor</strong> (2 slots)",
  //     "<strong>Shield</strong>",
  //     "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
  //     "<strong>Long Bow</strong> (Damage: 1d6, Qualities: Missile (5’–70’ / 71’–140’ / 141’–210’), Two-handed, 3 slots)",
  //     "<strong>Quiver of Arrows</strong> (d20 usage die)",
  //     "<strong>2 Travel rations</strong> (1/day)"
  //   ]
];
