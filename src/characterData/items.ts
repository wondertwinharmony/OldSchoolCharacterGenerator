import { poisons } from "./classes/assassin";
import { burrowingMammals } from "./classes/gnome";

export interface Items {
  [key: string]: { description: string; slots: string };
}

export const gear: Items = {
  chain: {
    description: "10' Chain",
    slots: "1"
  },
  pole: {
    description: "10' Pole",
    slots: "1"
  },
  twine: {
    description: "300' Twine",
    slots: "1"
  },
  rope: {
    description: "50' Rope",
    slots: "1"
  },
  silkRope: {
    description: "50' Silk Rope",
    slots: "1"
  },
  airBladder: {
    description: "Air Bladder",
    slots: "1"
  },
  bearTrap: {
    description: "Bear Trap",
    slots: "1"
  },
  belladonna: {
    description: "Belladonna (d4 usage die)",
    slots: "1"
  },
  bellows: {
    description: "Bellows",
    slots: "1"
  },
  blankBook: {
    description: "Blank Book",
    slots: "1"
  },
  bottle: {
    description: "Bottle",
    slots: "1"
  },
  brokenBlade: {
    description: "Broken Blade",
    slots: "1"
  },
  bucket: {
    description: "Bucket",
    slots: "1"
  },
  caltrops: {
    description: "Caltrops",
    slots: "1"
  },
  candles: {
    description: "Candles (d4 usage die)",
    slots: "1"
  },
  cardDeck: {
    description: "Card Deck",
    slots: "1"
  },
  chalk: {
    description: "Chalk (d4 usage die)",
    slots: "1"
  },
  chisel: {
    description: "Chisel",
    slots: "1"
  },
  cosmeticKit: {
    description: "Cosmetic Kit",
    slots: "1"
  },
  cookPots: {
    description: "Cook Pots",
    slots: "1"
  },
  crowbar: {
    description: "Crowbar",
    slots: "1"
  },
  diceSet: {
    description: "Dice Set",
    slots: "1"
  },
  disguiseKit: {
    description: "Disguise Kit",
    slots: "1"
  },
  drill: {
    description: "Drill",
    slots: "1"
  },
  facePaint: {
    description: "Face Paint",
    slots: "1"
  },
  fakeJewels: {
    description: "Fake Jewels",
    slots: "1"
  },
  fishingRod: {
    description: "Fishing Rod",
    slots: "1"
  },
  garlic: {
    description: "Garlic (d4 usage die)",
    slots: "1"
  },
  glue: {
    description: "Glue",
    slots: "1"
  },
  grapplingHook: {
    description: "Grappling Hook",
    slots: "1"
  },
  grease: {
    description: "Grease",
    slots: "1"
  },
  hammer: {
    description: "Hammer",
    slots: "1"
  },
  hourglass: {
    description: "Hourglass",
    slots: "1"
  },
  incense: {
    description: "Incense",
    slots: "1"
  },
  jar: {
    description: "Jar",
    slots: "1"
  },
  lens: {
    description: "Lens",
    slots: "1"
  },
  lockpicks: {
    description: "Lockpicks",
    slots: "1"
  },
  makeupKit: {
    description: "Makeup Kit",
    slots: "1"
  },
  malletAndStakes: {
    description: "Mallet and Stakes (d4 usage die)",
    slots: "1"
  },
  manacles: {
    description: "Manacles",
    slots: "1"
  },
  marbles: {
    description: "Marbles",
    slots: "1"
  },
  metalFile: {
    description: "Metal File",
    slots: "1"
  },
  militaryRankInsignia: {
    description: "Military Rank Insignia",
    slots: "1"
  },
  mirror: {
    description: "Mirror",
    slots: "1"
  },
  mouse: {
    description: "Mouse (pet)",
    slots: "1"
  },
  nails: {
    description: "Nails (d12 usage die)",
    slots: "1"
  },
  net: {
    description: "Net",
    slots: "1"
  },
  padlock: {
    description: "Padlock",
    slots: "1"
  },
  perfume: {
    description: "Perfume",
    slots: "1"
  },
  pickaxe: {
    description: "Pickaxe",
    slots: "1"
  },
  pulleys: {
    description: "Pulleys",
    slots: "1"
  },
  quillAndInk: {
    description: "Quill and Ink (d4 usage die)",
    slots: "1"
  },
  saw: {
    description: "Saw",
    slots: "1"
  },
  shinyStone: {
    description: "Shiny Stone",
    slots: "1"
  },
  shovel: {
    description: "Shovel",
    slots: "1"
  },
  shrunkenHead: {
    description: "Shrunken Head",
    slots: "1"
  },
  signetRing: {
    description: "Signet Ring",
    slots: "1"
  },
  smallAnimalSkull: {
    description: "Small Animal Skull",
    slots: "1"
  },
  smallBell: {
    description: "Small Bell",
    slots: "1"
  },
  smallKnife: {
    description: "Small Knife",
    slots: "1"
  },
  smallSack: {
    description: "Small Sack (holds 1 slot)",
    slots: "1"
  },
  smallSackOfRats: {
    description: "Small Sack of Rats",
    slots: "1"
  },
  smokingPipe: {
    description: "Smoking Pipe",
    slots: "1"
  },
  soap: {
    description: "Soap",
    slots: "1"
  },
  sponge: {
    description: "Sponge",
    slots: "1"
  },
  spyglass: {
    description: "Spyglass",
    slots: "1"
  },
  tarPot: {
    description: "Tar Pot (d4 usage die)",
    slots: "1"
  },
  tent: {
    description: "Tent",
    slots: "1"
  },
  thievesTools: {
    description: "Thieves' Tools",
    slots: "1"
  },
  tinderBoxFlintAndSteel: {
    description: "Tinder Box, Flint and Steel (d4 usage die)",
    slots: "1"
  },
  tongs: {
    description: "Tongs",
    slots: "1"
  },
  torch: {
    description: "Torch 1d4 (d4 usage die, Melee, Burning)",
    slots: "1"
  },
  waterskin: {
    description: "Waterskin",
    slots: "1"
  },
  whistle: {
    description: "Whistle",
    slots: "1"
  },
  wine: {
    description: "Wine (d4 usage die)",
    slots: "1"
  },
  wolfsbane: {
    description: "Wolfsbane (d4 usage die)",
    slots: "1"
  }
};

export const clothing: Items = {
  furs: {
    description: "Furs",
    slots: "1"
  },
  nobleClothing: {
    description: "Noble Clothing",
    slots: "1"
  },
  poorClothing: {
    description: "Poor Clothing",
    slots: "1"
  },
  standardClothing: {
    description: "Sponge",
    slots: "1"
  },
  winterclothing: {
    description: "Winter Clothing",
    slots: "1"
  }
};

/**
 * include illusionist gemstones
 */
export const adventurerEquipment: Items = {
  agate: {
    description: "Agate Gemstone (100gp value)",
    slots: "1"
  },
  battleAxe: {
    description: "Battle Axe 1d8 (Melee, Slow, Two-Handed)",
    slots: "3"
  },
  buckler: {
    description:
      "Buckler (+1 AC melee only. May be used when wielding two weapons, if doing so may either attack with off-hand or gain benefit of shield.)",
    slots: "1"
  },
  caseCrossbowBolts: {
    description: "Case of Crossbow Bolts (d20 usage die)",
    slots: "1"
  },
  caseSilverTippedBolts: {
    description: "Case of Silver Tipped Bolts (d4 usage die)",
    slots: "1"
  },
  chainmail: {
    description: "Chainmail 14 AC",
    slots: "2"
  },
  chaosDampener: {
    description: "Chaos Dampener (Man-Portable)",
    slots: "1"
  },
  chaosometer: {
    description: "Chaosometer",
    slots: "1"
  },
  club: {
    description: "Club 1d4 (Blunt, Melee)",
    slots: "1"
  },
  coinPurse: {
    description: "Coin Purse (holds 1 slot)",
    slots: "1"
  },
  crossbow: {
    description:
      "Crossbow 1d6 (Missile 5’–80’ / 81’–160’ / 161’–240’, Reload, Slow, Two-Handed)",
    slots: "3"
  },
  cudgel: {
    description: "Cudgel 1d4 (Blunt, Melee)",
    slots: "1"
  },
  dagger: {
    description: "Dagger 1d4 (Melee, Missile 5’–10’ / 11’–20’ / 21’–30’)",
    slots: "1"
  },
  emerald: {
    description: "Emerald Gemstone (500gp value)",
    slots: "1"
  },
  flail: {
    description: "Flail 1d6 (Blunt, Melee)",
    slots: "2"
  },
  halberd: {
    description: "Halberd 1d10 (Brace, Melee, Slow, Two-Handed)",
    slots: "3"
  },
  handAxe: {
    description: "Hand Axe 1d6 (Melee, Missile 5’–10’ / 11’–20’ / 21’–30’)",
    slots: "2"
  },
  healingPotion: {
    description: "Potion of Healing (Restores 1d6+1 hp and cures paralysis)",
    slots: "1"
  },
  healingPotionGreater: {
    description:
      "Potion of Greater Healing (Restores 2d6+2 hp and cures paralysis)",
    slots: "1"
  },
  holySymbol: {
    description: "Holy Symbol",
    slots: "1"
  },
  holyWater: {
    description:
      "Holy Water Vial 1d8 (Missile 5’–10’ / 11’–30’ / 31’–50’, Splash weapon)",
    slots: "1"
  },
  javelin: {
    description: "Javelin 1d4 (Missile 5’–30’ / 31’–60’ / 61’–90’)",
    slots: "1"
  },
  lance: {
    description: "Lance 1d6 (Charge, Melee)",
    slots: "3"
  },
  lantern: {
    description: "Lantern",
    slots: "1"
  },
  leatherArmor: {
    description: "Leather Armor AC 12",
    slots: "2"
  },
  liGoggles: {
    description: "URS Light-Intensifying Goggles",
    slots: "1"
  },
  longBow: {
    description:
      "Long Bow 1d6 (Missile 5’–70’ / 71’–140’ / 141’–210’, Two-Handed)",
    slots: "3"
  },
  mace: {
    description: "Mace 1d6 (Blunt, Melee)",
    slots: "2"
  },
  magnetite: {
    description: "Magnetite Gemstone (500gp)",
    slots: "1"
  },
  moonBeetleOrb: {
    description: "Moon Beetle Orb",
    slots: "1"
  },
  morningStar: {
    description: "Morning Star 1d6 (Blunt, Melee)",
    slots: "2"
  },
  oilFlask: {
    description:
      "Oil Flask 1d8 (Missile 5’–10’ / 11’–30’ / 31’–50’, Burning, Splash weapon)",
    slots: "1"
  },
  onyx: {
    description: "Onyx Gemstone (250gp value)",
    slots: "1"
  },
  plateMail: {
    description: "Plate Mail AC 16",
    slots: "3"
  },
  polearm: {
    description: "Polearm 1d10 (Brace, Melee, Slow, Two-Handed)",
    slots: "3"
  },
  quarterstaff: {
    description: "Quarterstaff 1d4 (Blunt, Melee, Slow, Two-Handed)",
    slots: "1"
  },
  quartz: {
    description: "Quartz Gemstone (10gp value)",
    slots: "1"
  },
  quiverArrows: {
    description: "Quiver of Arrows (d20 usage die)",
    slots: "1"
  },
  quiverSilverTippedArrows: {
    description: "Quiver of Silver Tipped Arrows (d4 usage die)",
    slots: "1"
  },
  ruby: {
    description: "Ruby Gemstone (50gp value)",
    slots: "1"
  },
  sapphire: {
    description: "Sapphire Gemstone (1,000gp value)",
    slots: "1"
  },
  scroll: {
    description: "Scroll",
    slots: "1"
  },
  scrollTownPortal: {
    description: "Scroll of Town Portal",
    slots: "1"
  },
  shield: {
    description: "Shield +1 AC",
    slots: "1"
  },
  shortBow: {
    description:
      "Short Bow 1d6 (Missile 5’–50’ / 51’–100’ / 101’–150’, Two-Handed)",
    slots: "2"
  },
  shortSword: {
    description: "Short Sword 1d6 (Melee)",
    slots: "2"
  },
  silverDagger: {
    description:
      "Silver Dagger 1d4 (Melee, Missile 5’–10’ / 11’–20’ / 21’–30’)",
    slots: "1"
  },
  sling: {
    description: "Sling 1d4 (Blunt, Missile 5’–40’ / 41’–80’ / 81’–160’)",
    slots: "1"
  },
  slingStones: {
    description: "Sling Stones (usage die)",
    slots: "1"
  },
  spear: {
    description: "Spear 1d6 (Brace, Melee, Missile 5’–20’ / 21’–40’ / 41’–60’)",
    slots: "2"
  },
  spellbook: {
    description: "Spellbook",
    slots: "1"
  },
  staff: {
    description: "Staff 1d4 (Blunt, Melee, Slow, Two-Handed)",
    slots: "1"
  },
  sword: {
    description: "Sword 1d8 (Melee)",
    slots: "2"
  },
  towerShield: {
    description:
      "Tower Shield (+1 AC against melee/+3 AC against missile, Slow)",
    slots: "1"
  },
  travelRation: {
    description: "Travel Ration (1/day)",
    slots: "1"
  },
  twoHandedSword: {
    description: "Two-Handed Sword 1d10 (Melee, Slow, Two-Handed)",
    slots: "3"
  },
  ursBadgeOfService: {
    description: "URS Badge of Service",
    slots: "1"
  },
  ursServiceBlade: {
    description:
      "URS Service Blade 1d6 (+1 versus creatures of Chaos: magical, beasts, constructs, demons, referee's discretion)",
    slots: "2"
  },
  warhammer: {
    description: "Warhammer 1d6 (Blunt, Melee)",
    slots: "2"
  },
  woodenShield: {
    description: "Wooden Shield +1 AC",
    slots: "1"
  },
  zr1Dissuader: {
    description:
      "Zaracanth Industries ZR-1 'Dissuader' 1, 1d3, or 1d6 (Missile 5’–70’ / 71’–140’ / 141’–210’, Electric, Reload)",
    slots: "1"
  }
};

export const instruments: Items = {
  airHorn: {
    description: "Air Horn (instrument)",
    slots: "1"
  },
  bagpipe: {
    description: "Bagpipe (instrument)",
    slots: "1"
  },
  bladderPipe: {
    description: "Bladder Pipe (instrument)",
    slots: "1"
  },
  castanets: {
    description: "Castanets (instrument)",
    slots: "1"
  },
  crumhorn: {
    description: "Crumhorn (instruments)",
    slots: "1"
  },
  dulcimer: {
    description: "Dulcimer (instrument)",
    slots: "1"
  },
  gemshorn: {
    description: "Gemshorn (instrument)",
    slots: "1"
  },
  harmonica: {
    description: "Harmonica (instrument)",
    slots: "1"
  },
  harp: {
    description: "Harp (instrument)",
    slots: "1"
  },
  horn: {
    description: "Horn (instrument)",
    slots: "1"
  },
  hurdyGurdy: {
    description: "Hurdy-gurdy (instrument)",
    slots: "1"
  },
  kazoo: {
    description: "Kazoo (instrument)",
    slots: "1"
  },
  lizard: {
    description: "Lizard (instrument)",
    slots: "1"
  },
  lute: {
    description: "Lute (instrument)",
    slots: "1"
  },
  lyre: {
    description: "Lyre (instrument)",
    slots: "1"
  },
  mandolin: {
    description: "Mandolin (instrument)",
    slots: "1"
  },
  maracas: {
    description: "Maracas (instrument)",
    slots: "1"
  },
  ocarina: {
    description: "Ocarina (instrument)",
    slots: "1"
  },
  panFlute: {
    description: "Pan Flute (instrument)",
    slots: "1"
  },
  psaltery: {
    description: "Psaltery (instrument)",
    slots: "1"
  },
  sacbut: {
    description: "Sacbut (instrument)",
    slots: "1"
  },
  serpent: {
    description: "Serpent (instrument)",
    slots: "1"
  },
  shofar: {
    description: "Shofar (instrument)",
    slots: "1"
  },
  sitar: {
    description: "Sitar (instrument)",
    slots: "1"
  },
  viol: {
    description: "Viol (instrument)",
    slots: "1"
  },
  vuvuzela: {
    description: "Vuvuzela (instrument)",
    slots: "1"
  },
  zink: {
    description: "Zink (instrument)",
    slots: "1"
  }
};

export const items: Items = {
  ...gear,
  ...clothing,
  ...adventurerEquipment,
  ...instruments,
  ...poisons,
  ...burrowingMammals
};
