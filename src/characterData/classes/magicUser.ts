import React from "react";
import { GiSpellBook } from "react-icons/gi";
import { magicUserEquipment } from "../equipmentKits";

export const magicUser = {
  name: "Magic-User",
  icon: React.createElement(GiSpellBook, {}),
  requirements: "None",
  primeRequisite: "INT",
  hitDice: "1d4",
  xpToSecondLevel: "2,500 XP",
  maximumLevel: "14",
  allowedArmor: "None",
  allowedWeapons: "Daggers and staves only",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  equipment: magicUserEquipment,
  abilities: [
    "<strong>Combat:</strong> Magic-users may only use daggers and staves, and are unable to use shields or wear any kind of armor. This makes them very vulnerable in combat.",
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules, p42</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Magical Research:</strong> A magic-user of any level may spend time and money to research new spells to add to his or her spell book. When a magic-user reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell Casting:</strong> Magic-users carry spell books containing the formulae for arcane spells. A 1st level magic-user has one spell in his or her spell book. The list of spells available to magic-users is found on <i>p45</i>.\n\n<strong>Using Magic Items:</strong> As spell casters, magic-users are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by arcane spell casters (including magic-users).</div>"
  ],
  abilitiesSummary: "Arcane Magic",
  spells: "see MagicUser spells"
};
