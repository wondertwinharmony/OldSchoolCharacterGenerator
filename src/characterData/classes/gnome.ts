import React from "react";
import { GiWizardFace } from "react-icons/gi";
import { CastingMethod, SpellList } from "../classes";
import { gnomeInventory } from "../equipmentKits/gnomeInventory";
import { Items } from "../items";

export const gnome = {
  name: "Gnome",
  icon: React.createElement(GiWizardFace, {}),
  castingMethod: "arcane" as CastingMethod,
  spellList: "illusionist" as SpellList,
  spellMatrix: [
    [1, 0, 0, 0],
    [2, 0, 0, 0],
    [2, 1, 0, 0],
    [2, 2, 0, 0],
    [2, 2, 1, 0],
    [2, 2, 2, 0],
    [3, 2, 2, 1],
    [3, 3, 2, 2]
  ],
  requirements: "Minimum CON 9",
  primeRequisite: "DEX and INT",
  hitDice: "1d4",
  xpToSecondLevel: "3,000 XP",
  maximumLevel: "8",
  allowedArmor: "Leather armor, shields",
  allowedWeapons: "Appropriate to size (no long bows or two-handed swords)",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 8,
    wands: 9,
    stone: 10,
    breath: 14,
    magic: 11
  },
  inventory: gnomeInventory,
  abilities: [
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Magical Research:</strong> A gnome of any level may spend time and money on magical research. This allows them to add new spells to their spell book and to research other magical effects. When a gnome reaches 8th level, they are also able to create magic items.\n\n<strong>Spell Casting:</strong> Gnomes carry spell books containing the formulae for arcane spells. A 1st level gnome has one spell in his or her spell book. The list of spells available to gnomes is provided in <i>Druid and Illusionist Spells</i> (gnomes have the same spell selection as illusionists.\n\n<strong>Using Magic Items:</strong> As spell casters, gnomes are able to use magic scrolls of spells on their spell list. They can also use items that may only be used by arcane spell casters (e.g. magic wands).</div>",
    "<strong>Combat:</strong> Gnomes can use leather armor and shields. Armor must be tailored to a gnomes’ small size. Similarly, they can use any weapon appropriate to their stature (as determined by the referee). They cannot use longbows or two-handed swords.",
    "<strong>Defensive Bonus:</strong> Due to their small size, gnomes gain a +2 bonus to Armor Class when attacked by large opponents (greater than human- sized).",
    "<strong>Detect Construction Tricks:</strong> As expert tunnellers, gnomes have a 2-in-6 chance of being able to detect new construction, sliding walls, or sloping passages when searching.",
    "<strong>Hiding:</strong> Gnomes have an uncanny ability to disappear from sight:\n\n<div style='padding: 0 1.5rem'><div style='padding: 0 1.5rem'>• In woodland cover a gnome can hide with a 90% chance of success.\n\n• In dungeons a gnome can hide in shadows or behind other forms of cover. The chance of success is 2-in-6.</div>\n\nHiding requires the gnome to be motionless.</div>",
    "<strong>Infravision:</strong> Gnomes have infravision to 90’ (see <i><strong>Hazards and Challenges</strong> in Core Rules</i>).",
    "<strong>Listening at Doors:</strong> Gnomes have a 2-in-6 chance of hearing noises (see <i>Dungeon Adventuring in Core Rules</i>).",
    "<strong>Speak with Burrowing Mammals:</strong> Gnomes often keep burrowing animals such as badgers and moles as pets. They know the secret language of such creatures."
  ],
  abilitiesSummary:
    "Arcane Magic, Defensive Bonus, Detect Construction Tricks, Hiding, Infravision, Listening at Doors, Speak with Burrowing Mammals",
  spells: "see Illusionist spells"
};

export const burrowingMammals: Items = {
  praireDog: {
    description: "Prairie Dog (pet)",
    slots: "1"
  },
  gopher: {
    description: "Gopher (pet)",
    slots: "1"
  },
  badger: {
    description: "Badger (pet)",
    slots: "1"
  },
  skunk: {
    description: "Skunk (pet)",
    slots: "1"
  },
  armadillo: {
    description: "Armadillo (pet)",
    slots: "1"
  },
  wombat: {
    description: "Wombat (pet)",
    slots: "1"
  },
  aardvark: {
    description: "Aardvark (pet)",
    slots: "1"
  },
  mongoose: {
    description: "Mongoose (pet)",
    slots: "1"
  },
  groundhog: {
    description: "Groundhog (pet)",
    slots: "1"
  },
  mole: {
    description: "Mole (pet)",
    slots: "1"
  },
  ferret: {
    description: "Ferret (pet)",
    slots: "1"
  }
};
