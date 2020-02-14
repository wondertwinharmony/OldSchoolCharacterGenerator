import { getDivineScrollSpell } from "../../utils/getRandomSpellScroll";

/**
 * Drow equipment kits cannot be higher than 9 slots.
 * 9 + starting gold = 10
 */
export const drowInventory = [
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    shortSword: {
      description: "Short Sword 1d6 (Melee)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    divineSpellScroll: {
      description: `${getDivineScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    shortSword1: {
      description: "Short Sword 1d6 (Melee)",
      slots: "2"
    },
    shortSword2: {
      description: "Short Sword 1d6 (Melee)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    divineSpellScroll: {
      description: `${getDivineScrollSpell()}`,
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
    mace: {
      description: "Mace 1d6 (Blunt, Melee)",
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
    twoHandedSword: {
      description: "Two-Handed Sword 1d10 (Melee, Slow, Two-Handed)",
      slots: "3"
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
    chainmail: {
      description: "Chainmail 14 AC",
      slots: "2"
    },
    twoHandedSword: {
      description: "Two-Handed Sword 1d10 (Melee, Slow, Two-Handed)",
      slots: "3"
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
    chainmail: {
      description: "Chainmail 14 AC",
      slots: "2"
    },
    shield: {
      description: "Shield +1 AC",
      slots: "1"
    },
    mace: {
      description: "Mace 1d6 (Blunt, Melee)",
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
    plateMail: {
      description: "Plate Mail AC 16",
      slots: "3"
    },
    shield: {
      description: "Shield +1 AC",
      slots: "1"
    },
    mace: {
      description: "Mace 1d6 (Blunt, Melee)",
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
    plateMail: {
      description: "Plate Mail AC 16",
      slots: "3"
    },
    shield: {
      description: "Shield +1 AC",
      slots: "1"
    },
    sword: {
      description: "Sword 1d8 (Melee)",
      slots: "2"
    },
    dagger: {
      description: "Dagger 1d4 (Melee, Missile 5’–10’ / 11’–20’ / 21’–30’)",
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
    plateMail: {
      description: "Plate Mail AC 16",
      slots: "3"
    },
    sword: {
      description: "Sword 1d8 (Melee)",
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
    dagger1: {
      description: "Dagger 1d4 (Melee, Missile 5’–10’ / 11’–20’ / 21’–30’)",
      slots: "1"
    },
    dagger2: {
      description: "Dagger 1d4 (Melee, Missile 5’–10’ / 11’–20’ / 21’–30’)",
      slots: "1"
    },
    crossbow: {
      description:
        "Crossbow 1d6 (Missile 5’–80’ / 81’–160’ / 161’–240’, Reload, Slow, Two-Handed)",
      slots: "3"
    },
    caseCrossbowBolts: {
      description: "Case of Crossbow Bolts (d20 usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    divineSpellScroll: {
      description: `${getDivineScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    plateMail: {
      description: "Plate Mail AC 16",
      slots: "3"
    },
    shield: {
      description: "Shield +1 AC",
      slots: "1"
    },
    mace: {
      description: "Mace 1d6 (Blunt, Melee)",
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
    crossbow: {
      description:
        "Crossbow 1d6 (Missile 5’–80’ / 81’–160’ / 161’–240’, Reload, Slow, Two-Handed)",
      slots: "3"
    },
    caseCrossbowBolts: {
      description: "Case of Crossbow Bolts (d20 usage die)",
      slots: "1"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    divineSpellScroll: {
      description: `${getDivineScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    plateMail: {
      description: "Plate Mail AC 16",
      slots: "3"
    },
    shield: {
      description: "Shield +1 AC",
      slots: "1"
    },
    sword: {
      description: "Sword 1d8 (Melee)",
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
    chainmail: {
      description: "Chainmail 14 AC",
      slots: "2"
    },
    sword: {
      description: "Sword 1d8 (Melee)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    },
    divineSpellScroll: {
      description: `${getDivineScrollSpell()}`,
      slots: "1"
    }
  },
  {
    holySymbol: {
      description: "Holy Symbol",
      slots: "1"
    },
    plateMail: {
      description: "Plate Mail AC 16",
      slots: "3"
    },
    shield: {
      description: "Shield +1 AC",
      slots: "1"
    },
    mace: {
      description: "Mace 1d6 (Blunt, Melee)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  }
];
