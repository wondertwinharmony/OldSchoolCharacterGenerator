export const thief = {
  name: "Thief",
  requirements: "None",
  primeRequisite: "DEX",
  hitDice: "1d4",
  maximumLevel: "14",
  allowedArmor: "Leather armour, no shields",
  allowedWeapons: "Any",
  languages: ["Alignment language", "Common"],
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  equipment: "see Thief equipment",
  abilities: [
    "Back-stab: When attacking an unaware opponent from behind, a thief receives a +4 bonus to hit and doubles any damage dealt.",
    "Combat: Because of their need of stealth and free movement, thieves cannot wear armour heavier than leather and cannot use shields. They can use any weapon.",
    "Thief Skills: Thieves have the following skills, which improve as the character gains levels. Note that dice rolls for these abilities are usually made by the referee, because a thief is not always aware that he or she has failed!\n  Climb Sheer Surfaces: Thieves are adept at scaling sheer surfaces, including walls or steep cliffs. A skill roll is required for each 100 feet to be climbed. If the roll fails, the thief falls a distance equal to half the attempted distance, taking 1d6 points of damage per 10 feet.\n  Find or Remove Traps: A thief may only try one time to find or remove a trap in an area. Note that these are separate skills, for a thief must find a trap before he or she can remove it!\n  Hear Noise: Thieves can attempt to listen for noises in a cave or hallway, at a door, or in other locations, but the thief must be quiet and in a quiet environment. Unlike the other thief abilities, this ability is rolled using 1d6.\n  Hide in Shadows: A thief will always think he or she is successful in this skill and will not know otherwise until others react to his or her presence. A thief must remain motionless when hiding.\n  Move Silently: When successful, others will not hear the movements of a thief. However, the thief always thinks he or she is moving silently and will only know otherwise by others’ reaction.\n  Pick Locks: A thief is skilled in picking locks, but needs thieves’ tools to do so. He or she can only try to pick a lock one time and, if the roll fails, may not try the same lock again before gaining an experience level.\n  Pick Pockets: This skill is the bread and butter of non-adventuring thieves; it is a quick (if perilous) source of income. If the victim is above 5th level, the thief’s roll is penalised by 5% for every level above 5th. There is always at least a 1% chance of failure. A roll of more than twice the percentage required for success means the intended target notices the thieving attempt. The referee will then roll 2d6 on the reaction table (see Encounters in B/X Essentials: Core Rules) to determine the target’s reaction."
  ],
  skills: [
    "Open Locks: 15%",
    "Find Traps: 10%",
    "Remove Traps: 10%",
    "Climb Walls: 87%",
    "Move Silently: 20%",
    "Hide in Shadows: 10%",
    "Pick Pockets: 20%",
    "Hear Noise: 1-2"
  ]
};
