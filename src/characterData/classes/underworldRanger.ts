import React from "react";
import { GiReticule } from "react-icons/gi";
import { underworldRangerInventory } from "../equipmentKits/underworldRangerInventory";
import { Items } from "../items";

export const underworldRanger = {
  name: "Underworld Ranger",
  icon: React.createElement(GiReticule, {}),
  requirements: "Minimum STR 12 and CON 12",
  primeRequisite: "CON",
  hitDice: "1d6",
  xpToSecondLevel: "4,000 XP",
  maximumLevel: "1",
  allowedArmor: "Any",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 11,
    wands: 12,
    stone: 14,
    breath: 16,
    magic: 13
  },
  inventory: underworldRangerInventory,
  abilities: [
    "<strong>Combat:</strong> In basic training Underworld Rangers are taught how to use all weapons and armor. They are also instructed in the use of Underworld Ranger-only equipment they are awarded or can requisition as they progress in rank and experience.",
    "<strong>Monetary Policies:</strong> Underground Rangers earn XP through the acquisition of treasure, but must attempt to return acquired wealth to the URS, keeping only what they need in the performance of their duties. Paperwork must be filed for such allocations at the nearest URS station.",
    "<strong>Retirement Options:</strong> Members of the URS do not attract retainers or establish strongholds of any kind. While it is possible for high- ranking Rangers to apply for positions with High Command (referee’s discretion), more commonly Rangers facing retirement will instead outfit themselves for a final descent into the Underworld to smash Chaos in its stinking nest until strength and life fail at last.",
    "<strong>Requisition Item:</strong> At level 4, Underworld Rangers receive authority to requisition a number of items equal to their level from the nearest ranger station. They must complete a pain-in-the-ass bit of paperwork specifying the items and describing the need for each, then wait for approval for 2–8 days of idleness. Lost or damaged items provoke a formal investigation, additional pain- in-the-ass paperwork, and possible disciplinary action up to and including dismissal from the URS. Unique equipment available is listed in the <i>Operation Unfathomable Player's Guide</i>.",
    "<strong>Special Equipment:</strong> Upon completion of basic training, the Underworld Ranger is entrusted with special items of equipment. Items lost or destroyed may only be replaced by visiting a URS station and filling out the requisite paperwork.\n\n<div style='padding: 0 1.5rem'><strong><u>Issued at 1st Level</u></strong>\n<strong>Badge of Service:</strong> Most Underworld sentients (science fungoids, white and gray humanoids, etc.) recognize the URS and will avoid hostilities. Exceptions abound, specifically the cults and other forces of most known godlings. Alien beings such as the blind antler men do not recognize any human/humanoid authority.\n\n<strong>Light-Intensifying Goggles:</strong> Grant the user infravision to 60'.\n\n<strong><u>Issued at 2nd Level</u></strong>\n<strong>Service Blade:</strong> Short sword +1 against creatures of Chaos (magical, beasts, constructs, demons, referee's discretion) due to permanent anti-Chaos ward.\n\n<strong><u>Issued at 3rd Level</u></strong>\n<strong>ZR1 \"Dissuader\":</strong> Standard field sidearm (also called a “bug zapper”) delivers a ball of electricity up to 60' with 3 damage settings: 1, 1d3, or 1d6 (to-hit roll required). The weapon recharges every other round with vigorous winding of a key mechanism. Discharging more than twice before a ten-minute cooling period can result in damage to the weapon and operator; subsequent use provokes 1-in-6 chance of an electrical eruption that destroys the gun and does 1d6 damage to the user.</div>",
    "<strong>Standard Items:</strong> Underworld Rangers begin with any number of mundane dungeoneering items approved by the referee.",
    "<strong>Underworld Survival:</strong> Rangers may forage for food and water sources with a 4-in-6 chance of success per day (or for a two-hour period of uninterrupted foraging).",
    "<strong>Underworld Tracking:</strong> In the Underworld, the basic chance for successful tracking is 90%, modified by -10% for each day since the tracks were made and modified by -10% for circumstances such as Underworld weather or any other phenomena that could obscure the trail."
  ],
  abilitiesSummary:
    "Monetary Policies, Requisition Item, Special Equipment (LI goggles, service blade, ZR1), Standard Items, Underworld Survival & Tracking"
};

export const dungeoneeringEquipment: Items = {
  bearTrap: {
    description: "Bear Trap",
    slots: "1"
  },
  rope: {
    description: "50' Rope",
    slots: "1"
  },
  pole: {
    description: "10' Pole",
    slots: "1"
  },
  chain: {
    description: "10' Chain",
    slots: "1"
  },
  chalk: {
    description: "Chalk (d4 usage die)",
    slots: "1"
  },
  crowbar: {
    description: "Crowbar",
    slots: "1"
  },
  pulleys: {
    description: "Pulleys",
    slots: "1"
  },
  pickaxe: {
    description: "Pickaxe",
    slots: "1"
  },
  shovel: {
    description: "Shovel",
    slots: "1"
  },
  grapplingHook: {
    description: "Grappling Hook",
    slots: "1"
  },
  hammer: {
    description: "Hammer",
    slots: "1"
  },
  smallSack: {
    description: "Small Sack (holds 1 slot)",
    slots: "1"
  },
  oilFlask: {
    description:
      "Oil Flask 1d8 (Missile 5’–10’ / 11’–30’ / 31’–50’, Burning, Splash weapon)",
    slots: "1"
  },
  net: {
    description: "Net",
    slots: "1"
  },
  chisel: {
    description: "Chisel",
    slots: "1"
  },
  drill: {
    description: "Drill",
    slots: "1"
  }
};
