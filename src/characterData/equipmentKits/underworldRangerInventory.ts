/**
 * Underworld Ranger equipment kits cannot be higher than 9 slots.
 * Emphasis on mundane underworld adventuring equipment as part of
 * randomization.
 * 9 + starting gold = 10
 */
export const underworldRangerInventory = [
  {
    ursBadgeOfService: {
      description: "URS Badge of Service",
      slots: "1"
    },
    liGoggles: {
      description: "URS Light-Intensifying Goggles",
      slots: "1"
    },
    leatherArmor: {
      description: "Leather Armor AC 12",
      slots: "2"
    },
    shortSword: {
      description: "Short Sword 1d6 (Melee)",
      slots: "2"
    },
    travelRation: {
      description: "Travel Ration (1/day)",
      slots: "1"
    }
  }
];
