import React from "react";
import { GiWizardStaff } from "react-icons/gi";
import { druidEquipment } from "../equipmentKits";

export const druid = {
  name: "Druid",
  icon: React.createElement(GiWizardStaff, {}),
  requirements: "None",
  primeRequisite: "WIS",
  hitDice: "1d6",
  xpToSecondLevel: "2,000 XP",
  maximumLevel: "14",
  allowedArmor: "Leather armor, wooden shields",
  allowedWeapons: "Club, dagger, sling, spear, staff",
  languages: ["Alignment", "Common", "Secret Druidic Tongue"],
  saves: {
    poison: 11,
    wands: 12,
    stone: 14,
    breath: 16,
    magic: 15
  },
  equipment: druidEquipment,
  abilities: [
    "<strong>Charm Immunity:</strong> Druids of 7th level and above are immune to the charms of fairies and Sylvan creatures (e.g. dryads, nixies).",
    "<strong>Combat:</strong> The holy doctrine of the druids stipulates that they may not use metal armour or shields (wooden shields may be purchased at the normal price). Their choice of weapons is limited to clubs, daggers, slings, spears, and staves.",
    "<strong>Divine Magic:</strong> See <i>Magic in Core Rules, p42</i> for full details on divine magic.\n\n<div style='padding: 0 1.5rem'><strong>Holy symbol:</strong> A druid must carry a holy symbol: e.g. a sprig of mistletoe which the character must harvest.\n\n<strong>Deity disfavor:</strong> A druid must be faithful to the tenets of their alignment and religion. A druid who falls from favor with their deity may incur penalties.\n\n<strong>Magical research:</strong> A druid of any level may spend time and money on magical research. This allows them to create new spells or other magical effects associated with their deity. When a druid reaches 9th level, they are also able to create magic items.\n\n<strong>Spell casting:</strong> A druid may pray to receive spells from nature. The power and number of spells available to a druid are determined by the character’s experience level. The list of spells available to druids is found in <i>Druid and Illusionist Spells</i>.\n\n<strong>Using magic items:</strong> As spell casters, dru- ids can use magic scrolls of spells on their spell list. They can also use items that may only be used by divine spell casters (e.g. some staves). Druids may not use magical books or tomes.</div>",
    "<strong>Energy Resistance:</strong> Druids gain a +2 bonus to saving throws against electricity (lightning) and fire.",
    "<strong>Identification:</strong> Druids can identify all plants and animals, and can discern pure water.",
    "<strong>Pass Without Trace:</strong> At 3rd level, a druid gains the ability to pass through natural environments without leaving any tracks. The character is also able to move through overgrown areas at normal speed and without im- pediment.",
    "<strong>Path-Finding:</strong> A party with a druid has only a 1-in-6 chance of getting lost in woodlands.",
    "<strong>Shape Change:</strong> At 7th level, a druid gains the power to change into the form of a reptile, bird, and mammal (once per day each). The animal may be of any size, up to around twice the bulk of the druid’s normal form. If a druid has lost hit points, they regain 1d4 hit points per level upon changing into an animal. All equipment carried by the druid is absorbed into the animal form, and reappears when the druid changes back.",
    "<strong>Sylvan Languages:</strong> At each level above 2nd, a druid learns to speak a language used by creatures of Sylvan forests (e.g. dryads, green dragons, pixies, treants)."
  ],
  abilitiesSummary:
    "Charm Immunity, Divine Magic, Energy Resistance, Plant and Animal Identification, Pass Without Trace, Path-Finding, Shape Change, Sylvan Languages"
};
