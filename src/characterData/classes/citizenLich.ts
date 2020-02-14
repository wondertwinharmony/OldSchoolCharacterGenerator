import { sampleSize } from "lodash";
import React from "react";
import { GiDeathNote } from "react-icons/gi";
import { CastingMethod, SpellList } from "../classes";
import { citizenLichInventory } from "../equipmentKits/citizenLichInventory";
import { Items } from "../items";

export const citizenLich = {
  name: "Citizen Lich",
  icon: React.createElement(GiDeathNote, {}),
  castingMethod: "arcane" as CastingMethod,
  spellList: "magicUser" as SpellList,
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
  requirements: "Minimum INT 13",
  primeRequisite: "INT",
  hitDice: "1d4-1",
  hitDiceCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  experienceLevel: [
    "2,500",
    "5,000",
    "10,000",
    "20,000",
    "40,000",
    "80,000",
    "150,000",
    "300,000",
    "450,000",
    "600,000",
    "750,000",
    "900,000"
  ],
  maximumLevel: "13",
  attackBonus: ["0", "+2", "+5"],
  allowedArmor: "None",
  allowedWeapons: "Daggers and staves only",
  languages: ["Alignment", "Common", "Undead"],
  saves: {
    poison: [13, 11, 8],
    wands: [14, 12, 9],
    stone: [13, 11, 8],
    breath: [16, 14, 11],
    magic: [13, 10, 6]
  },
  inventory: citizenLichInventory,
  abilities: [
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Magical Research:</strong> A citizen lich of any level may spend time and money to research new spells to add to his or her spell book. When a citizen lich reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell Casting:</strong> Citizen liches carry spell books containing the formulae for arcane spells. A 1st level citizen lich has one spell in his or her spell book. The list of spells available to citizen liches is found on <i>Magic-User and Cleric Spells</i> and <i>Operation Unfathomable Player's Guide</i>.\n\n<strong>Using Magic Items:</strong> As spell casters, citizen liches are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by arcane spell casters (including citizen liches).</div>",
    "<strong>Combat:</strong> Citizen liches may only use daggers and staves, and are unable to use shields or wear any kind of armor. This makes them very vulnerable in combat.",
    "<strong>Undead (Quasi-living):</strong> Many will not hesitate to express their disdain for liches. The wise citizen lich disguises their features when abroad.\n\n<div style='padding: 0 1.5rem'><strong>∙</strong> Citizen liches are treated as undead.\n\n<strong>∙</strong> A citizen lich may also converse with undead due to their studies of undeath.</div>",
    "<strong>Hard to Kill (permanently):</strong> Citizen liches lack phylacteries, but the entirety of their physical bodies serve a similar purpose.\n\n<div style='padding: 0 1.5rem'><strong>∙</strong> When reduced to 0 hp the citizen lich collapses into a lifeless heap.\n\n<strong>∙</strong> Citizen liches can only be permanently destroyed by fire, acid, disintegration, “D” results on the Cleric Turning Table, and holy water or weapons.\n\n<strong>∙</strong> Citizen liches take damage from magical healing and do not recover hit points through rest.\n\n<strong>∙</strong> If any part of the lich body remains, it slowly regenerates back to full form and strength at a rate of 1 hp/hour. The citizen lich may resume normal activities when returned to 1 hp. This increases to 2 hp/hour at level 6 and 3 hp/hour at level 12.\n\n</div>",
    "<strong>Lich's Dungeon:</strong> At level 12, the citizen lich earns the title “Lich” (it remains only nominally similar to a true lich) and can build a dungeon. The “Lich” automatically attracts an assortment of lesser undead to its service, with a total cumulative HD of 12. The Lich may choose to overtake and occupy a previously existing dungeon.",
    "<strong>Attaining True Lichdom:</strong> At level 13, ensconsed in its lair, the citizen lich may attempt to attain true lichdom. The candidate must research and cast the spell Contact Outer Lich. Successful contact will trigger either the caster’s instant destruction(1-4 on 1d6) or instant ascension to the desired status (5-6 on 1d6)."
  ],
  abilitiesSummary:
    "Arcane Magic, Undead (Quasi-living), Hard to Kill (permanently)",
  spells: "see MagicUser spells"
};

export const disguiseItems: Items = {
  disguiseKit: {
    description: "Disguise Kit",
    slots: "1"
  },
  makeupKit: {
    description: "Makeup Kit",
    slots: "1"
  },
  cosmeticKit: {
    description: "Cosmetic Kit",
    slots: "1"
  },
  featurelessFaceMask: {
    description: `Featureless ${sampleSize([
      "Gold",
      "Silver",
      "Iron",
      "Copper"
    ])} Face Mask`,
    slots: "1"
  },
  headScarf: {
    description: "Headscarf",
    slots: "1"
  }
};
