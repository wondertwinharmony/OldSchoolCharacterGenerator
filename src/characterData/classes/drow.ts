import { clericEquipment } from "../equipmentKits";

export const drow = {
  name: "Drow",
  requirements: "Minimum INT 9",
  primeRequisite: "STR and WIS",
  hitDice: "1d6",
  maximumLevel: "10",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: [
    "Alignment",
    "Common",
    "Deepcommon",
    "Elvish",
    "Gnomish",
    "Secret Language of Spiders"
  ],
  saves: {
    poison: 12,
    wands: 13,
    stone: 13,
    breath: 15,
    magic: 12
  },
  equipment: clericEquipment,
  abilities: [
    "<strong>Combat:</strong> Drow are able to use all forms of weapon and armor",
    "<strong>Detect Secret Doors:</strong> Drow have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance (see <i><strong>Dungeon Adventuring</strong> in Core Rules</i>).",
    "<strong>Divine Magic:</strong> See <i>Magic, p42</i> for full details on divine magic.\n\n<div style='padding: 0 1.5rem'><strong>Holy symbol:</strong> A drow must carry a holy symbol (see <i>Equipment, p24</i>).\n\n<strong>Deity disfavor:</strong> Drow must be faithful to the tenets of their alignment, clergy, and religion. Drow who fall from favor with their deity may incur penalties.\n\n<strong>Magical research:</strong> A drow of any level may spend time and money to research new spells associated with his or her deity. When a drow reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell casting:</strong> A drow may pray to receive spells from his or her deity. Drow cast spells from the standard cleric spell list (see <i> Cleric and Magic-User Spells</i>). At 1st level, a drow may only pray for the <i>light (darkness)</i> spell, but from 2nd level the character may pray for any spell on the spell list. Drow are also able to pray for the magic-user <i>web</i> spell from 3rd level.\n\n<strong>Using magic items:</strong> As spell casters, drow can use magic scrolls of spells on their spell list. There are also items (e.g. some staves) that may only be used by divine spell casters (including drow).</div>",
    "<strong>Immunity to Ghoul Paralysis:</strong> Drow are completely unaffected by the paralysis ghouls can inflict.",
    "<strong>Infravision:</strong> Drow have infravision to 90’ (see <i><strong>Hazards and Challenges</strong> in Core Rules</i>).",
    "<strong>Light Sensitivity:</strong> When in bright light (daylight, <i>continual light</i>), drow suffer a -2 penalty to attack rolls and a -1 penalty to Armor Class.",
    "<strong>Listening at Doors:</strong> Drow have a 2-in-6 chance of hearing noises (see <i><strong>Dungeon Adventuring</strong> in Core Rules</i>).",
    "<strong>Spider Affinity:</strong> Drow live alongside many different species of spiders, including giant spiders. They can speak the secret language of spiders and gain a +1 bonus to reaction rolls when encountering spiders (see <i><strong>Encounters</strong> in Core Rules</i>)."
  ],
  spells: "see MagicUser spells"
};
