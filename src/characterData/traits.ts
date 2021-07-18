// ("Traits\n"
// "--------------------------------------------------\n"
// "A {background}. Wears {clothing} clothes, and has {speech} speech.\n"
// "Has a {physique} physique, a {face} face, {skin} skin and {hair} hair.\n"
// "Is {virtue}, but {vice}. Has been {misfortune} in the past.\n"
// "Favors {alignment}.")

export const traits = {
  physique: [
    "athletic",
    "brawny",
    "corpulent",
    "delicate",
    "gaunt",
    "hulking",
    "lanky",
    "ripped",
    "rugged",
    "scrawny",
    "short",
    "sinewy",
    "slender",
    "flabby",
    "statuesque",
    "stout",
    "tiny",
    "towering",
    "willowy",
    "wiry"
  ],

  face: [
    "bloated",
    "blunt",
    "bony",
    "chiseled",
    "delicate",
    "elongated",
    "patrician",
    "pinched",
    "hawkish",
    "broken",
    "impish",
    "narrow",
    "ratlike",
    "round",
    "sunken",
    "sharp",
    "soft",
    "square",
    "wide",
    "wolfish"
  ],

  skin: [
    "battle scar",
    "birthmark",
    "burn scar",
    "dark",
    "makeup",
    "oily",
    "pale",
    "perfect",
    "pierced",
    "pockmarked",
    "reeking",
    "tattooed",
    "rosy",
    "rough",
    "sallow",
    "sunburned",
    "tanned",
    "war paint",
    "weathered",
    "whip scar"
  ],

  hair: [
    "bald",
    "braided",
    "bristly",
    "cropped",
    "curly",
    "disheveled",
    "dreadlocks",
    "filthy",
    "frizzy",
    "greased",
    "limp",
    "long",
    "luxurious",
    "mohawk",
    "oily",
    "ponytail",
    "silky",
    "topknot",
    "wavy",
    "wispy"
  ],

  clothing: [
    "antique",
    "bloody",
    "ceremonial",
    "decorated",
    "eccentric",
    "elegant",
    "fashionable",
    "filthy",
    "flamboyant",
    "stained",
    "foreign",
    "frayed",
    "frumpy",
    "livery",
    "oversized",
    "patched",
    "perfumed",
    "rancid",
    "torn",
    "undersized"
  ],

  virtues: [
    "ambitious",
    "cautious",
    "courageous",
    "courteous",
    "curious",
    "disciplined",
    "focused",
    "generous",
    "gregarious",
    "honest",
    "honorable",
    "humble",
    "idealistic",
    "just",
    "loyal",
    "merciful",
    "righteous",
    "serene",
    "stoic",
    "tolerant"
  ],

  vices: [
    "aggressive",
    "arrogant",
    "bitter",
    "cowardly",
    "cruel",
    "deceitful",
    "flippant",
    "gluttonous",
    "greedy",
    "irascible",
    "lazy",
    "nervous",
    "prejudiced",
    "reckless",
    "rude",
    "suspicious",
    "vain",
    "vengeful",
    "wasteful",
    "whiny"
  ],

  speech: [
    "blunt",
    "booming",
    "breathy",
    "cryptic",
    "drawling",
    "droning",
    "flowery",
    "formal",
    "gravelly",
    "hoarse",
    "mumbling",
    "precise",
    "quaint",
    "rambling",
    "rapid-fire",
    "dialect",
    "slow",
    "squeaky",
    "stuttering",
    "whispery"
  ],

  barbarianBackground: [
    "hunter",
    "gladiator",
    "freed slave",
    "mercenary",
    "cannibal",
    "outlander",
    "hermit",
    "champion"
  ],

  underworldRangerBackground: [
    "orphaned as a young child",
    "a waif",
    "a foundling",
    "a young stray",
    "a street urchin",
    "a ragamuffin",
    "child of a wizard's illicit affair",
    "child of a priest's illicit affair",
    "child of a noble's scandalous affair",
    "a noble's eldest child",
    "a noble's youngest child",
    "a noble's only child",
    "a merchant's eldest child",
    "a merchant's youngest child",
    "a merchant's only child",
    "a courtesan's eldest child",
    "a courtesan's youngest child",
    "a courtesan's only child",
    "a beggar's eldest child",
    "a beggar's youngest child",
    "a beggar's only child",
    "a tavern keeper's eldest child",
    "a tavern keeper's youngest child",
    "a tavern keeper's only child",
    "a farmer's eldest child",
    "a farmer's youngest child",
    "a farmer's only child"
  ],

  background: [
    "alchemist",
    "animal trainer",
    "armorer",
    "baker",
    "beggar",
    "blacksmith",
    "bookbinder",
    "bowyer",
    "brewer",
    "butcher",
    "burglar",
    "carpenter",
    "chandler",
    "charlatan",
    "cook",
    "cooper",
    "coppersmith",
    "cultist",
    "farmer",
    "fisher",
    "furrier",
    "gambler",
    "glassblower",
    "herbalist",
    "huntsman",
    "lapidary",
    "lorimer",
    "magician",
    "mapmaker",
    "mariner",
    "mason",
    "mercenary",
    "merchant",
    "miner",
    "outlaw",
    "performer",
    "pickpocket",
    "potter",
    "roper",
    "smuggler",
    "student",
    "tailor",
    "tanner",
    "thatcher",
    "taxidermist",
    "tracker",
    "woodcutter",
    "vintner"
  ],

  misfortunes: [
    "abandoned",
    "addicted",
    "blackmailed",
    "condemned",
    "cursed",
    "defrauded",
    "demoted",
    "discredited",
    "disowned",
    "exiled",
    "framed",
    "haunted",
    "kidnapped",
    "mutilated",
    "poor",
    "pursued",
    "rejected",
    "replaced",
    "robbed",
    "suspected"
  ],

  alignment: [
    "law",
    "law",
    "law",
    "law",
    "law",
    "neutrality",
    "neutrality",
    "neutrality",
    "neutrality",
    "neutrality",
    "neutrality",
    "neutrality",
    "neutrality",
    "neutrality",
    "neutrality",
    "chaos",
    "chaos",
    "chaos",
    "chaos",
    "chaos"
  ]
};

// Citizen Lich Traits are different from other classes since they are
// so radically different from other classes in appearance and social
// status.
// ("Traits\n"
// "--------------------------------------------------\n"
// "A {background}. Wears {clothing} clothing.\n"
// "Has a {physique} physique, {flesh} flesh, {face} face, and a {speech} voice.\n"
// "Is {virtue}, but {vice}. Has been {misfortune} in the past.\n"
// "Favors {alignment}.")
export const citizenLichTraits = {
  background: [
    "shamed professor",
    "expelled academic",
    "librarian",
    "ousted cultist",
    "jilted researcher",
    "failed necromancer",
    '"scientist"',
    "disgraced archmage",
    "radical scholar",
    "philosopher",
    "astrologer",
    "expelled advisor"
  ],

  physique: [
    "gaunt",
    "lanky",
    "short",
    "tiny",
    "towering",
    "sickly",
    "sinewy",
    "misshapen",
    "mangled",
    "lithe",
    "crooked",
    "crippled",
    "ossified"
  ],

  flesh: [
    "dangling",
    "crusted",
    "reeking",
    "cracked",
    "green",
    "gray",
    "stretched",
    "repulsive",
    "revolting",
    "bloated",
    "disintegrating",
    "decaying",
    "swollen",
    "tattered",
    "moldy",
    "moist",
    "translucent",
    "noxious",
    "fetid",
    "flaky"
  ],

  face: [
    "melted",
    "drooping",
    "burnt",
    "skeletal",
    "oozing",
    "wretched",
    "slender",
    "eyeless",
    "mutilated",
    "maimed",
    "leathery",
    "macabre",
    "tormented",
    "morose",
    "twisted",
    "pallid",
    "ghoulish"
  ],

  misfortunes: [
    "abandoned",
    "addicted",
    "blackmailed",
    "condemned",
    "cursed",
    "defrauded",
    "demoted",
    "discredited",
    "disowned",
    "exiled",
    "framed",
    "haunted",
    "kidnapped",
    "pursued",
    "rejected",
    "replaced",
    "robbed",
    "suspected"
  ]
};

// Crab-People Traits are different from other classes since they are
// so radically different from other classes in appearance and social
// status.
// ("Traits\n"
// "--------------------------------------------------\n"
// "A {background}. Wears {clothing -> rags} rags.\n"
// "Has a {physique} physique, a {face} face, and a {skin -> shell} shell.\n"
// "Is {virtue}, but {vice}. Has been {misfortune} in the past.\n"
// "Favors {alignment}.")
export const crabPersonTraits = {
  physique: [
    "athletic",
    "brawny",
    "gaunt",
    "hulking",
    "lanky",
    "ripped",
    "rugged",
    "short",
    "stout",
    "tiny",
    "towering"
  ],

  face: [
    "blunt",
    "elongated",
    "broken",
    "impish",
    "narrow",
    "round",
    "sunken",
    "sharp",
    "square",
    "wide"
  ],

  shell: [
    "barnacled",
    "crusted",
    "battle scarred",
    "dark",
    "blue",
    "pale",
    "perfect",
    "pierced",
    "reeking",
    "rough",
    "smooth",
    "war painted",
    "weathered",
    "bumpy",
    "jagged",
    "cleft",
    "cracked"
  ],

  rags: [
    "bloody",
    "filthy",
    "stained",
    "frayed",
    "oversized",
    "patched",
    "rancid",
    "torn",
    "undersized"
  ],

  background: [
    "gladiator",
    "servant",
    "laborer",
    "ditcher",
    "beggar",
    "scullion",
    "gravedigger",
    "bodyguard",
    "fisher",
    "pearl diver"
  ]
};

// Caimen Traits are different from other classes since they are
// so radically different from other classes in appearance.
// ("Traits\n"
// "--------------------------------------------------\n"
// "A {background}. Wears {clothing} clothing.\n"
// "Has a {physique} physique, a {snout} snout, and {scales} scales.\n"
// "Is {virtue}, but {vice}. Has been {misfortune} in the past.\n"
// "Favors {alignment}.")
export const caimenTraits = {
  physique: [
    "athletic",
    "brawny",
    "gaunt",
    "hulking",
    "lanky",
    "ripped",
    "rugged",
    "short",
    "stout",
    "towering"
  ],

  snout: [
    "blunt",
    "elongated",
    "broken",
    "impish",
    "narrow",
    "round",
    "sharp",
    "square",
    "wide"
  ],

  scales: [
    "crusted",
    "battle scarred",
    "dark green",
    "olive green",
    "vibrant green",
    "emerald green",
    "seafoam green",
    "perfect",
    "pierced",
    "rough",
    "smooth",
    "painted",
    "weathered",
    "jagged",
    "cracked"
  ],

  background: [
    "gladiator",
    "laborer",
    "ditcher",
    "beggar",
    "scullion",
    "gravedigger",
    "bodyguard",
    "butcher",
    "miner",
    "bandit",
    "fisher",
    "pearl diver",
    "farmer",
    "mariner",
    "mercenary",
    "mason",
    "herbalist",
    "cook",
    "potter",
    "smuggler"
  ]
};

// Cat Person Traits
export const catPersonTraits = {
  fur: [
    "silky",
    "fluffy",
    "shaggy",
    "coarse",
    "stiff",
    "matted",
    "glossy",
    "spotted",
    "calico",
    "tortoiseshell",
    "short",
    "long",
    "solid color",
    "striped",
    "hairless"
  ],
  ears: [
    "bent",
    "crooked",
    "asymmetrical",
    "pierced",
    "delicate",
    "pointed",
    "oval",
    "punctured",
    "scarred",
    "floppy",
    "rigid",
    "folded",
    "curled",
    "flared"
  ]
}

// Giant Woman Traits
export const giantWomanTraits = {
  background: [
    "hunter",
    "gladiator",
    "bodyguard",
    "mercenary",
    "soldier",
    "outlander",
    "hermit",
    "champion",
    "mason",
    "mariner",
    "farmer",
    "cook",
    "fisher",
    "potter",
    "miner",
    "ditcher",
    "laborer",
    "gravedigger",
    "ex-town guard",
    "herbalist",
    "carpenter",
    "tracker",
    "blacksmith"
  ],
  physique: [
    "athletic",
    "brawny",
    "delicate",
    "hulking",
    "ripped",
    "rugged",
    "sinewy",
    "statuesque",
    "towering"
  ],
  face: [
    "blunt",
    "bony",
    "chiseled",
    "delicate",
    "elongated",
    "hawkish",
    "broken",
    "impish",
    "narrow",
    "round",
    "sunken",
    "sharp",
    "soft",
    "square",
    "wide",
    "wolfish"
  ]
}
