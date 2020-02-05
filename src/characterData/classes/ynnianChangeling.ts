import React from "react";
import { GiDaggerRose } from "react-icons/gi";
import { fighterInventory } from "../equipmentKits/fighterInventory";

export const ynnianChangeling = {
  name: "Ynnian Changeling",
  icon: React.createElement(GiDaggerRose, {}),
  requirements: "None",
  primeRequisite: "WIS",
  hitDice: "1d6",
  xpToSecondLevel: "1,500 XP",
  maximumLevel: "14",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 11,
    wands: 12,
    stone: 14,
    breath: 16,
    magic: 15
  },
  inventory: fighterInventory,
  abilities: [
    "<strong>Combat:</strong> Ynnian changelings can use all forms of weapons and armor.",
    "<strong>Hide in Plants:</strong> Where there are plants at least up to their knees, a Ynnian changeling can attempt to blend into the vegetation. Ynnian changelings have a 5-in-6 chance to do so, and if successful become supernaturally well-hidden and impossible to detect by mundane means. This concealment lasts for as long as they remain perfectly still.",
    "<strong>Forage:</strong> In outdoors environments, Ynnian changelings can find enough food to feed themselves just by going about day-to-day life, without needing to dedicate any time specifically to foraging. This food is likely composed of bugs, odd plants and so on, and not particularly palatable to others.",
    "<strong>Ynnian Recovery:</strong> If reduced to 0 HP, instead of dying a Ynnian changeling is transformed into a patch of flowers or mushrooms growing where their body falls. They regain 1 HP twice per day (sunrise and sunset) until fully healed. An Ynnian changeling returns to flesh from this state when at full HP or blood soaks into the ground they are growing in.\n\nA stake in the heart prevents this and freezes a Ynnian changeling at 0 HP until the stake is removed. Churning up the soil a Ynning changling is recovering in destroys them forever.",
    "<strong>Ynnian Alterations:</strong> Ynnian changeling physiology is adapted to the Gardens of Ynn. At first level, and each level thereafter, pick one or both:\n\n  <div style='padding: 0 1.5rem'>• Roll a cosmetic alteration.\n\n• Roll an Ynnian alteration, adding a garden depth to the roll (default 0). For new PCs, this is the garden depth you’re encountered on if joining the party while exploring the Gardens of Ynn.</div>"
  ],
  abilitiesSummary:
    "Hide in Plants, Forage, Ynnian Recovery, Ynnian Alterations"
};
