import React from "react";
import { GiLyre } from "react-icons/gi";
import { bardInventory } from "../equipmentKits/bardInventory";

export const bard = {
  name: "Bard",
  icon: React.createElement(GiLyre, {}),
  requirements: "Minimum DEX 9 and INT 9",
  primeRequisite: "CHA",
  hitDice: "1d6",
  xpToSecondLevel: "2,000 XP",
  maximumLevel: "14",
  allowedArmor: "Leather, chainmail, no shields",
  allowedWeapons: "Missile weapons, one-handed melee weapons",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  inventory: bardInventory,
  abilities: [
    "<strong>Combat:</strong> Bards can use leather armor or chainmail, but do not have the training required to use plate mail. They cannot use shields. They may use all missile weapons and any one-handed melee weapon.",
    "<strong>Divine Magic:</strong> See <i>Magic in Core Rules, p42</i> for full details on divine magic.\n\n<div style='padding: 0 1.5rem'><strong>Deity disfavor:</strong> Bards must be faithful to the tenets of their alignment and religion. Bards who fall from favor with their deity may incur penalties.\n\n<strong>Spell casting:</strong> Once a bard has proven his or her faith (from 2nd level), the character may pray to receive spells. The power and number of spells available to a bard are determined by the character’s experience level. The list of spells available to bards is found in <i>Druid and Illusionist Spells</i> (bards have the same spell selection as druids).\n\n<strong>Using magic items:</strong> As spell casters, bards can use magic scrolls of spells on their spell list. They may also use any items that only druids can use.</div>",
    "<strong>Enchantment:</strong> By playing music and singing, a bard's magical influence may be extended to affect subjects in a 40' radius. the following uses are possible.\n\n<div style='padding: 0 1.5rem'><strong>Anti-Charm:</strong> While the bard plays, allies within range are immune to song-based magical effects and the beguiling powers of sylvan creatures or fairies. Allies already under the effect of such magic may make another saving throw with a +4 bonus.\n\n<strong>Fascinate:</strong> Affects up to 2HD of creatures per level of the bard. At 1st level, the bard can fascinate persons. At 4th level, animals are also affected, and at 7th level monsters. The bard may choose to target a specific indvidual or a group (in which case, the affected individuals are determined randomly). Each subject must save versus spells or be fascinated as follows:\n\n<div style='padding: 0 1.5rem'>• Fascinated subjects' attention is fully bent on the bard's performance, as long as it continues.\n\n• The bard may walk while playing. Fascinated subjects will follow.\n\n• If the performance is interrupted (e.g. by loud noise or voilence), the fascination ends immediately.</div>\n\n<strong>Beguile:</strong> If the bard performs for at least one turn and the performance ends without interruption, fascinated subjects may be placed under a deeper beguilement. Each subject must make another <strong>save versus spells</strong> (with a +2 bonus) or become beguiled for one turn per level of the bard:\n\n<div style='padding: 0 1.5rem'>• Beguiled subjects regard the bard as a trusted friend and ally and will come to the bard's defense.\n\n• If they share a language, beguiled subjects will obey the bard's commands.\n\n• Actions that beguiled subjects wouldn't ordinarily do, based on their nature or alignment, may be abstained from.\n\n• Beguiled subjects never obey suicidal or obviously harmful orders.</div></div>",
    "<strong>Languages:</strong> Bards learn languages as they advance in level. At every even numbered level above 3rd (i.e. 4th, 6th, 8th, etc.), the player may choose an additional language. Bards may learn the secret languages of druids in this way (see <i>Advanced Fantasy, p18</i>).",
    "<strong>Lore:</strong> Bards are storehouses of lore based on their study of folktale and legend. From 2nd level a bard has a 2-in-6 chance of knowing something pertaining to these areas of study - including monsters, magic items, and heroes of legend. This ability may be used to identify the nature and powers of magic items."
  ],
  abilitiesSummary: "Divine Magic (2nd level), Enchantment, Languages, Lore"
};
