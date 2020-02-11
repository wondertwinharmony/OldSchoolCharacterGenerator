import { getDruidScrollSpell } from "../../utils/getRandomSpellScroll";
/**
 * Druid equipment kits cannot be higher than 9 slots.
 * They also have a holy symbol.
 * 9 + starting gold = 10
 */
export const druidInventory = [
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    woodenShield: {
      description: "Wooden Shield +1 AC",
      slots: "1"
    },
    cudgel: {
      description: "Cudgel 1d4 (Blunt, Melee)",
      slots: "1"
    },
    sling: {
      description: "Sling 1d4 (Blunt, Missile 5’–40’ / 41’–80’ / 81’–160’)",
      slots: "1"
    },
    slingStones: {
      description: "Sling Stones (usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    woodenShield: {
      description: "Wooden Shield +1 AC",
      slots: "1"
    },
    cudgel: {
      description: "Cudgel 1d4 (Blunt, Melee)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    spear: {
      description:
        "Spear 1d6 (Brace, Melee, Missile 5’–20’ / 21’–40’ / 41’–60’)",
      slots: "2"
    },
    sling: {
      description: "Sling 1d4 (Blunt, Missile 5’–40’ / 41’–80’ / 81’–160’)",
      slots: "1"
    },
    slingStones: {
      description: "Sling Stones (usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    woodenShield: {
      description: "Wooden Shield +1 AC",
      slots: "1"
    },
    cudgel: {
      description: "Cudgel 1d4 (Blunt, Melee)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    druidScroll: {
      description: `${getDruidScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    quarterstaff: {
      description: "Quarterstaff 1d4 (Blunt, Melee, Slow, Two-Handed)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    druidScroll: {
      description: `${getDruidScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    sling: {
      description: "Sling 1d4 (Blunt, Missile 5’–40’ / 41’–80’ / 81’–160’)",
      slots: "1"
    },
    slingStones: {
      description: "Sling Stones (usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    druidScroll: {
      description: `${getDruidScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    cudgel: {
      description: "Cudgel 1d4 (Blunt, Melee)",
      slots: "1"
    },
    sling: {
      description: "Sling 1d4 (Blunt, Missile 5’–40’ / 41’–80’ / 81’–160’)",
      slots: "1"
    },
    slingStones: {
      description: "Sling Stones (usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    druidScroll: {
      description: `${getDruidScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    woodenShield: {
      description: "Wooden Shield +1 AC",
      slots: "1"
    },
    quarterstaff: {
      description: "Quarterstaff 1d4 (Blunt, Melee, Slow, Two-Handed)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    druidScroll: {
      description: `${getDruidScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    quarterstaff: {
      description: "Quarterstaff 1d4 (Blunt, Melee, Slow, Two-Handed)",
      slots: "1"
    },
    sling: {
      description: "Sling 1d4 (Blunt, Missile 5’–40’ / 41’–80’ / 81’–160’)",
      slots: "1"
    },
    slingStones: {
      description: "Sling Stones (usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    druidScroll: {
      description: `${getDruidScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    spear: {
      description:
        "Spear 1d6 (Brace, Melee, Missile 5’–20’ / 21’–40’ / 41’–60’)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    druidScroll: {
      description: `${getDruidScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    sling: {
      description: "Sling 1d4 (Blunt, Missile 5’–40’ / 41’–80’ / 81’–160’)",
      slots: "1"
    },
    slingStones: {
      description: "Sling Stones (usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    druidScroll: {
      description: `${getDruidScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    woodenShield: {
      description: "Wooden Shield +1 AC",
      slots: "1"
    },
    spear: {
      description:
        "Spear 1d6 (Brace, Melee, Missile 5’–20’ / 21’–40’ / 41’–60’)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    woodenShield: {
      description: "Wooden Shield +1 AC",
      slots: "1"
    },
    spear: {
      description:
        "Spear 1d6 (Brace, Melee, Missile 5’–20’ / 21’–40’ / 41’–60’)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    quarterstaff: {
      description: "Quarterstaff 1d4 (Blunt, Melee, Slow, Two-Handed)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    spear: {
      description:
        "Spear 1d6 (Brace, Melee, Missile 5’–20’ / 21’–40’ / 41’–60’)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    quarterstaff: {
      description: "Quarterstaff 1d4 (Blunt, Melee, Slow, Two-Handed)",
      slots: "1"
    },
    sling: {
      description: "Sling 1d4 (Blunt, Missile 5’–40’ / 41’–80’ / 81’–160’)",
      slots: "1"
    },
    slingStones: {
      description: "Sling Stones (usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  }
];
