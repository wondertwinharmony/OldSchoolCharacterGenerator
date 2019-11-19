import React from "react";
import { GiVisoredHelm } from "react-icons/gi";
import { knightEquipment } from "../equipmentKits/knightEquipment";

export const knight = {
  name: "Knight",
  icon: React.createElement(GiVisoredHelm, {}),
  requirements: "Minimum CON 9 and DEX 9",
  primeRequisite: "DEX and STR",
  hitDice: "1d8",
  xpToSecondLevel: "2,500 XP",
  maximumLevel: "14",
  allowedArmor: "Chainmail and plate mail armor, shields",
  allowedWeapons: "Melee weapons",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 12,
    wands: 13,
    stone: 14,
    breath: 15,
    magic: 16
  },
  equipment: knightEquipment,
  abilities: [
    "<strong>Alignment:</strong> A knight must have the same alignment as their liege.",
    "<strong>Chivalric Code:</strong> Knights are bound by a stringent code of honour, which they strive to uphold in all their deeds. A knight does not earn any experience points for deeds performed at odds with this code. The fundamentals of this code are: preference of death over dishonour; service of the knight’s liege as the greatest honour; glory in single combat; defence to the death of any in the knight’s charge; honouring of superiors; respect of equals; demanding obedience from inferiors; scorning the ignoble.\n\n<div style='padding: 0 1.5rem'><strong>Hospitality:</strong> A knight of 3rd level or higher can expect hospitality and aid from nobles and other knights of the same alignment or social affiliation (e.g. order, religion, noble house, etc). A knight is expected to extend such hospitality in kind.\n\n<strong>Single Combat:</strong> In a battle, a knight must attack the most powerful or worthy foe in single combat.\n\n<strong>Dishonor:</strong> A knight who dishonors their liege (this may include changing alignment) may have their knighthood revoked. In this case, the character becomes a fighter of equivalent level. It may be possible to regain the status of knighthood by performing a special quest.</div>",
    "<strong>Combat:</strong> Knights can use all melee weapons but cannot use missile weapons (they regard these as dishonorable). They can wear any metal armor, which they regard as a symbol of prowess and status, always favoring the most impressive and impervious-looking armor available. Knights scorn non-metal armor as only suitable for peasants and villains.",
    "<strong>Flying Mounts:</strong> A knight of 5th level or higher can train fantastic, flying monsters as mounts. This takes one month. In general, a knight may train flying monsters of Hit Dice at most equal to the knight’s level. The use and training of flying monsters as mounts is at the referee’s discretion.",
    "<strong>Horsemanship:</strong> Knights are expert riders and can assess the worth of any steed (determining whether an animal has low, average, or high hit points for its type). From 5th level, a knight can urge their steed to great speed, increasing its movement rate by 30’ (10’) for up to 6 turns, once per day.",
    "<strong>Knighthood:</strong> Knights of 1st and 2nd level are known as “squires” and are not yet regarded as true knights. Upon reaching 3rd level, the character is knighted by their liege and gains the right to bear a coat of arms (typically emblazoned upon the knight’s shield).",
    "<strong>Mounted Combat:</strong> Knights gain a +1 bonus to attack rolls when mounted.",
    "<strong>Strength of Will:</strong>\n\n<div style='padding: 0 1.5rem'><strong>Fear:</strong> Knights are immune to all supernatural fear effects. From 3rd level, companions within 10’ of the knight gain a +2 bonus on saving throws against fear effects, and retainers and mercenaries under the knight’s command within 10’ gain a +2 bonus to loyalty or morale.\n\n<strong>Beguilement:</strong> Knights gain a +4 bonus to saving throws against <i>hold</i> spells, charms, mind control, hypnotism, suggestion, etc. They gain a +2 bonus to saving throws against illusion, and gain a saving throw (one is not normally allowed) against <i>sleep</i> spells.</div>"
  ],
  abilitiesSummary:
    "Chivalric Code, Flying Mounts (5th level), Horsemanship, Knighthood, Mounted Combat, Strength of Will (fear and beguilement bonuses)"
};
