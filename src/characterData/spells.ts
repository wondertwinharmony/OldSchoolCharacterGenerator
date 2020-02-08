import { clericSpells } from "./clericSpells";
import { druidSpells } from "./druidSpells";
import { illusionistSpells } from "./illusionistSpells";
import { magicUserSpells } from "./magicUserSpells";

export interface Spells {
  [key: string]: { name: string; description: string; level: string };
}

export const newAllSpells = {
  magicUser: magicUserSpells,
  cleric: clericSpells,
  druid: druidSpells,
  illusionist: illusionistSpells
};

/**
 * Basic Magic-User Level One Spells
 */
export const spells = [
  "<strong>Detect Magic</strong><br><strong>Duration:</strong> 2 turns<br><strong>Range:</strong> 60’<br><br>Enchanted objects, areas, or creatures are caused to glow. Both permanent and temporary enchantments are revealed.",
  "<strong>Hold Portal</strong><br><strong>Duration:</strong> 2d6 turns<br><strong>Range:</strong> 10’<br><br>This spell magically holds shut a door, gate, window, or other kind of portal.<br><div style='padding: 0 1.5rem'><br>• <strong>Opening by magic:</strong> A <i>knock</i> spell opens the held portal instantly.<br><br>• <strong>Opening by force:</strong> Creatures with at least 3 Hit Dice more than the caster can open the held portal with one round of effort.</div>",
  "<strong>Read Languages</strong><br><strong>Duration:</strong> 2 turns<br><strong>Range:</strong> The caster<br><br>For the duration of this spell, the caster may read any language, coded message, map, or other set of written instructions. This spell does not grant any ability to speak unknown languages.",
  "<strong>Protection from Evil</strong><br><strong>Duration:</strong> 6 turns<br><strong>Range:</strong> The caster<br><br>This spell wards the caster from attacks by creatures of another alignment, as follows:<br><div style='padding: 0 1.5rem'><br>• <strong>Bonuses:</strong> The caster gains a +1 bonus to saving throws against attacks or special abilities of affected creatures.<br><br>• <strong>Affected creatures’ attacks:</strong> against the caster are penalised by -1.<br><br>• <strong>Enchanted, constructed, or summoned creatures:</strong> The spell additionally prevents such creatures from attacking the caster in melee, though they may still make ranged attacks. If the caster engages such a creature in melee, this protection is broken (the caster still gains the bonuses to saving throws and attack rolls mentioned above).</div>",
  "<strong>Light (Darkness)</strong><br><strong>Duration:</strong> 6 turns +1 per level<br><strong>Range:</strong> 120’<br><br>This spell has three usages:<br><br><div style='padding: 0 1.5rem'><strong>1. Conjuring light:</strong> In a 15’ radius. The magical light is sufficient for reading, but is not as bright as daylight. The spell may be cast upon an object, in which case, the light moves with the object.<br><br><strong>2. Blinding a creature:</strong> By casting the spell upon its eyes. If the target fails a <strong>saving throw versus spells</strong>, it is blinded for the duration. A blind creature cannot attack.<br><br><strong>3. Cancelling darkness:</strong> <i>Light</i> may cancel a <i>darkness</i> spell (see below).</div><br><strong>Reversed: Darkness</strong><br>Creates a 15’ radius area of magical blackness, preventing normal sight (but not infravision). Like <i>light</i>, it may alternatively be used to blind creatures or to dispel a <i>light</i> spell.",
  "<strong>Charm Person</strong><br><strong>Duration:</strong> One or more days (see below)<br><strong>Range:</strong> 120’<br><br>A single, humanoid creature must <strong>save versus spells</strong> or be charmed, as follows:<br><div style='padding: 0 1.5rem'><br>• <strong>Friendship:</strong> The subject regards the caster as its trusted friend and ally and will come to the caster’s defence.<br><br>• <strong>Commands:</strong> If they share a language, the caster may give the charmed creature commands, which it will obey.<br><br>• <strong>Alignment:</strong> Commands that contradict the charmed creature's nature or alignment may be ignored.<br><br>• <strong>Suicidal Commands:</strong> An affected creature never obeys suicidal or obviously harmful orders.</div><br><strong>Restrictions:</strong> Humanoids of greater than 4+1 HD and undead are not affected.<br><br><strong>Duration: </strong> The charm lasts indefinitely, but the subject is allowed to make further <strong>saves vs spells</strong> at intervals depending on it's INT score. If one of these saves succeeds, the spell ends.<br><br><div style='padding: 0 1.5rem'>• <strong>INT 3-8:</strong> The creature gains a new save once every month.<br>• <strong>INT 9-12:</strong> The creature gains a new save each week.<br>• <strong>INT 13-18:</strong>The creature gains a new save once every day.</div>",
  "<strong>Sleep</strong><br><strong>Duration:</strong> 4d4 turns<br><strong>Range:</strong> 240’<br><br>A <i>sleep</i> spell causes a magical slumber to come upon creatures, excluding the undead. The spell may target either:<br><div style='padding: 0 1.5rem'><strong><br>1.</strong> A single creature with 4+1 Hit Dice.<br><br> <strong>2.</strong> A total of 2d8 Hit Dice of creatures of 4 HD or lower each.</div><br>When targeting creatures of 4 HD or less, the following rules apply:<br><br><div style='padding: 0 1.5rem'>• <strong>Weakest first:</strong> Targets with the least HD are affected first.<br><br>• <strong>HD:</strong> Calculate monsters with less than 1 HD as having 1 HD and monsters with a bonus to HD as having the flat amount. (For example, a 3+2 HD monster would be calculated as having 3 HD.)<br><br>• <strong>Excess:</strong> Rolled Hit Dice that are not sufficient to affect a creature are wasted.</div><br><strong>Killing or awakening:</strong> Creatures enchanted by this spell are helpless and can be killed instantly with a bladed weapon. Slapping or wounding awakens an affected creature.",
  "<strong>Floating Disc</strong><br><strong>Duration:</strong> 6 turns<br><strong>Range:</strong> 6’<br><br>The caster conjures a slightly concave, circular disc of magical force that follows him or her about and carries loads.<br><br><div style='padding: 0 1.5rem'>• <strong>Dimensions:</strong> The disc is 3 feet in diameter and 1 inch deep at its centre.<br><br>• <strong>Load:</strong> It can hold a maximum load of 5,000 coins (500 pounds).<br><br>• <strong>Motion:</strong> The disc floats at waist height and remains level, floating along horizontally within spell range.<br><br>• <strong>End:</strong> When the disc winks out at the end of the spell’s duration, anything it was supporting is dropped.</div>",
  "<strong>Magic Missile</strong><br><strong>Duration:</strong> 1 turn<br><strong>Range:</strong> 150’<br><br>This spell conjures a glowing dart of energy that the caster may choose to shoot at a visible target within range.<br><div style='padding: 0 1.5rem'><br>• <strong>Hit:</strong> The missile hits unerringly (no attack roll or saving throw is required).<br><br>• <strong>Damage:</strong> The missile inflicts 1d6+1 damage.<br><br>• <strong>Higher level casters:</strong> May conjure more missiles: two additional missiles are conjured per five experience levels the caster has gained (i.e. three missiles at 6th-10th level, five missiles at 11th-15th level, etc). Multiple missiles may be directed at a single target.</div>",
  "<strong>Shield</strong><br><strong>Duration:</strong> 2 turns<br><strong>Range:</strong> The caster<br><br>Shield creates an invisible field of force that protects the caster:<br><div style='padding: 0 1.5rem'><br>• <strong>Against missile attacks:</strong> The caster's AC is 17.<br><br>• <strong>Against other attacks:</strong> The caster's AC is 15.</div>",
  "<strong>Ventriloquism</strong><br><strong>Duration:</strong> 2 turns<br><strong>Range:</strong> 60’<br><br>The caster may make his or her voice appear to come from any location or source (e.g. a statue or animal) within the spell’s range."
];

export const readMagicSpell =
  "<strong>Read Magic</strong><br><strong>Duration: 1 turn</strong><br><strong>Range: The caster</strong><br><br>By means of <i>read magic</i>, the caster can decipher magical inscriptions or runes, as follows:<br><br><div style='padding: 0 1.5rem'>• <strong>Scrolls:</strong> The magical script of a scroll of arcane spells can be understood. The caster is then able to activate the scroll at any time in the future.<br><br>• <strong>Spell books:</strong> A spell book written by another arcane spell caster can be deciphered.<br><br>• <strong>Inscriptions:</strong> Runes or magical words inscribed on an object or surface can be understood.<br><br>• <strong>Reading again:</strong> Once the caster has read a magical inscription using <i>read magic</i>, he or she is thereafter able to read that particular writing without recourse to the use of this spell.";

/**
 * Basic Illusionist Level One Spells
 */
export const oldIllusionistSpells = [
  "<strong>Auditory Illusion</strong><br><strong>Duration:</strong> 3 turns<br><strong>Range:</strong> 240'<br><br>A sound of the caster’s choosing is conjured, emanating from a point anywhere within range.<br><div style='padding: 0 1.5rem'><br>• <strong>Motion:</strong> The sound may move as long as it remains within range.<br><br>• <strong>Change:</strong> The sound may change and evolve over the course of the duration as the caster wishes.<br><br>• <strong>Maximum volume:</strong> The volume of the sound is limited by the caster’s level: a maximum of approximately four humans shouting per experience level. (For example, a horde of rats is equal to 8 humans, a lion roaring is equal to 16 humans, or a dragon roaring is equal to 24 or more humans.)</div>",
  "<strong>Chromatic Orb</strong><br><strong>Duration:</strong> instant<br><strong>Range:</strong> 60'<br><br>This spell conjures an orb of pure color that shoots towards a visible target within range.<br><div style='padding: 0 1.5rem'><br>• <strong>Color:</strong> The caster may conjure an orb of one of the colors listed on <i>p.17 of Advanced Fantasy, Druid and Illusionist Spells</i>, depending on their experience level and the gems available.<br><br>• <strong>Gemstone:</strong> The color orb is created by refracting and amplifying the pure hue and intrinsic properties of a gemstone, which must be in the caster’s possession. Casting <i>chromatic orb</i> does not cause the gemstone to be consumed.<br><br>• <strong>Value:</strong> The gem to be used must be of a certain minimum value (also indicated on <i>p.17 of Advanced Fantasy, Druid and Illusionist Spells</i>).<br><br>• <strong>Hit:</strong> The orb hits unerringly, inflicting damage on the target and another effect that depends on its color.</div>",
  "<strong>Color Spray</strong><br><strong>Duration:</strong> Instant<br><strong>Range:</strong> 20’ long cone, 20’ wide at end<br><br>A flurry of clashing, rainbow-hued colors erupts from the caster’s hand.<br><div style='padding: 0 1.5rem'><br>• <strong>Targets:</strong> 1d6 creatures in the area of effect.<br>• <strong>The effect:</strong> Depends on the HD of each target, relative to the caster:<div style='padding: 0 1.5rem'><br>• <strong>HD less than or equal to caster:</strong> Knocked unconscious for 2d4 rounds. (Creatures of 6HD or greater may <b>save versus spells</b>.)<br><br>• <strong>HD up to 2 greater than caster:</strong> <b>Save versus spells</b> or be blinded for 1d4 rounds.<br><br>• <strong>HD 3 or more greater than caster:</strong> <b>Save versus spells</b> or be unable to move, attack, or make other actions for one round.</div><br>• <strong>Creatures that cannot see:</strong> Are unaffected by this spell.</div>",
  "<strong>Dancing Lights</strong><br><strong>Duration:</strong> 1 turn<br><strong>Range:</strong> 40’ + 10’ per level<br><br>Lights under the caster’s control are conjured and may be directed to move anywhere within range. The caster may choose to conjure one of the following types of light:<br><div style='padding: 0 1.5rem'><br> <strong>1. Torches:</strong> 1–4 lights that resemble torches or lanterns, casting the appropriate volume of light.<br><br> <strong>2. Spheres:</strong> 1–4 glowing spheres, resembling will-o-the-wisps.<br><br> <strong>3. Humanoid:</strong> A single, glowing, humanoid form.</div>",
  "<strong>Detect Illusion</strong><br><strong>Duration:</strong> 3 turns<br><strong>Range:</strong> The caster or a creature touched<br><br>The subject can see through illusions within 10’ per level of the caster. Invisible creatures or objects in the same range are also revealed.",
  "<strong>Glamour</strong><br><strong>Duration:</strong> 2d6 rounds +2 per level<br><strong>Range:</strong> The caster<br><br>The caster is wrapped in an illusion, taking on the outward appearance of another humanoid. Two variants are possible, chosen as the spell is cast:<br><div style='padding: 0 1.5rem'><br> <strong>1. Imagined form:</strong> The caster takes on a form which they imagine.<br><br> <strong>2. Duplicate individual:</strong> The caster copies the form of a living individual whom they touch (an attack roll is required if the target is unwilling).</div><br><strong>Stipulations:</strong> The following apply:<br><div style='padding: 0 1.5rem'><br>• <strong>Height:</strong> The illusionary form may be at most 1’ taller or shorter than the caster’s normal form.<br><br>• <strong>Weight:</strong> Apparent weight may be altered in any way.<br><br>• <strong>Gear:</strong> Clothing or items may be altered in any way.<br><br>• <strong>Observers:</strong>  If the spell is used to copy another’s appearance, those familiar with the copied individual may <b>save versus spells</b> to detect the ruse.</div>",
  "<strong>Hypnotism</strong><br><strong>Duration:</strong> 1 round +1 per level<br><strong>Range:</strong> 30'<br><br>The caster’s gestures and droning syllables open the minds of one or more creatures within range to hypnotic suggestion that is spoken as part of the spell casting. The suggestion works as follows:<br><div style='padding: 0 1.5rem'><br>• <strong>Wording:</strong> The suggestion must take the form of a short phrase (at most one or two sentences) suggesting a course of action to the targeted creatures.<br><br>• <strong>Comprehension:</strong> A language that is understood by the targets must be used.<br><br>• <strong>Harmful suggestions:</strong> Suggested actions that are obviously harmful to the targets cause the spell to automatically fail.</div><br><strong>Affected targets:</strong><div style='padding: 0 1.5rem'><br>• <strong>Number of targets:</strong> Up to 1d6 creatures are affected. The number of creatures affected is determined after the suggestion is made.<br><br>• <strong>Saving throw:</strong> Each target may <b>save versus spells</b> to resist the hypnotic suggestion. If the save fails, the target will follow the caster’s suggestion for up to the duration of the spell.<br><br>• <strong>Reasonable suggestions:</strong> A suggestion that is worded in a way to make it sound very reasonable incurs a –2 penalty to the saving throw.<br><br>• <strong>Restrictions:</strong>  Undead are not affected by <i>hypnotism</i>.</div>",
  "<strong>Light (Darkness)</strong><br><strong>Duration:</strong> 6 turns +1 per level<br><strong>Range:</strong> 120’<br><br>This spell has three usages:<br><br><div style='padding: 0 1.5rem'><strong>1. Conjuring light:</strong> In a 15’ radius. The magical light is sufficient for reading, but is not as bright as daylight. The spell may be cast upon an object, in which case, the light moves with the object.<br><br><strong>2. Blinding a creature:</strong> By casting the spell upon its eyes. If the target fails a <strong>saving throw versus spells</strong>, it is blinded for the duration. A blind creature cannot attack.<br><br><strong>3. Cancelling darkness:</strong> <i>Light</i> may cancel a <i>darkness</i> spell (see below).</div><br><strong>Reversed: Darkness</strong><br>Creates a 15’ radius area of magical blackness, preventing normal sight (but not infravision). Like <i>light</i>, it may alternatively be used to blind creatures or to dispel a <i>light</i> spell.",
  "<strong>Phantasmal Force</strong><br><strong>Duration:</strong> Concentration<br><strong>Range:</strong> 240'<br><br>An illusion of the caster’s choosing manifests in a 20’ cube area. Three types of illusions may be created:<br><div style='padding: 0 1.5rem'><br> <strong>1. An illusionary monster:</strong> That can be directed to attack. The monster has AC 10 and vanishes if hit in combat.<br><br> <strong>2. An illusionary attack:</strong> Of some kind (an avalanche, a falling ceiling, a magic missile, etc.). Targets who <b>save versus spells</b> are unaffected.<br><br> <strong>3. A scene:</strong> Of some kind, either changing the appearance of the affected area or creating the appearance of something new. The scene disappears if touched.</div><br><strong>Stipulations:</strong> The following apply:<br><div style='padding: 0 1.5rem'><br>• <strong>Concentration:</strong> Is required to maintain the illusion: if the caster moves or is affected by an attack, the spell ends.<br><br>• <strong>Illusionary monsters or attacks:</strong> May appear to be harmful but never inflict real damage. A character who appears to die actually falls unconscious, a character turned to stone will actually be paralysed, and so on. Such effects last for 1d4 turns.<br><br>• <strong>Gear:</strong> Clothing or items may be altered in any way.<br><br>• <strong>Illusions from imagination:</strong>  If the illusion is of something the caster has not personally seen, the referee should grant targets a bonus to any applicable saving throws.</div>",
  "<strong>Spook</strong><br><strong>Duration:</strong> Until broken (see below)<br><strong>Range:</strong> 10'<br><br>The caster gestures threateningly at an intelligent target within range.<br><div style='padding: 0 1.5rem'><br>• <strong>Saving throw:</strong> The target may <b>save versus spells</b> to avoid coming under the spell’s effect.<br><br>• <strong>An afflicted target:</strong>  Perceives the caster as a monster from its worst nightmares and will flee from the caster at maximum speed.<br><br>• <strong>Breaking the spell:</strong> The target may make a new <b>save versus spells</b> each round with success indicating that the spell is broken. Until the spell is broken, the target believes it is being pursued by the imagined horror.<br><br>• <strong>Restrictions:</strong> Undead and creatures of less than animal intelligence are not affected.</div>",
  "<strong>Wall of Fog</strong><br><strong>Duration:</strong> 1 turn<br><strong>Range:</strong> 60'<br><br>A wall of roiling vapor is conjured at a location of the caster’s choosing within range.<br><div style='padding: 0 1.5rem'><br>• <strong>Area:</strong> The fog fills a 10’ cube area per level of the caster.<br><br>• <strong>Vision:</strong> The fog blocks normal vision and infravision.<br><br>• <strong>Strong winds:</strong> Can clear the fog before the spell’s duration has expired.</div>"
];

/**
 * Knave spells addendum and spells
 */
export const knaveSpellAddendum =
  "† <strong><i>Knave Spell Rules May Apply</strong></i><br>“L” is a number equal to the caster’s level, an item is an object able to be lifted with one hand, and an object is anything up to human size. Unless otherwise noted, all spells with ongoing effects last up to L×10 minutes, and have a range of up to 40'. If a spell directly affects another creature, the creature may make a save to avoid it (as described previously). Success reduces or negates the spell’s effects.";
export const knaveSpells = [
  "<strong>Adhere:</strong> Object is covered in extremely sticky slime.<sup>†</sup>",
  "<strong>Animate Object:</strong> Object obeys your commands as best it can. It can walk 15' per round.<sup>†</sup>",
  "<strong>Anthropomorphize:</strong> A touched animal either gains human intelligence or human appearance for L days.<sup>†</sup>",
  "<strong>Arcane Eye:</strong> You can see through a magical floating eyeball that flies around at your command.<sup>†</sup>",
  "<strong>Astral Prison:</strong> An object is frozen in time and space within an invulnerable crystal shell.<sup>†</sup>",
  "<strong>Attract:</strong> L+1 objects are strongly magnetically attracted to each other if they come within 10 feet.<sup>†</sup>",
  "<strong>Auditory Illusion:</strong> You create illusory sounds that seem to come from a direction of your choice.<sup>†</sup>",
  "<strong>Babble:</strong> A creature must loudly and clearly repeat everything you think. It is otherwise mute.<sup>†</sup>",
  "<strong>Beast Form:</strong> You and your possessions transform into a mundane animal.<sup>†</sup>",
  "<strong>Befuddle:</strong> L creatures of your choice are unable to form new short-term memories for the duration of the spell.<sup>†</sup>",
  "<strong>Bend Fate:</strong> Roll L+1 d20s. Whenever you must roll a d20 after casting the spell, you must choose and then discard one of the rolled results until they are all gone.<sup>†</sup>",
  "<strong>Bird Person:</strong> Your arms turn into huge bird wings.<sup>†</sup>",
  "<strong>Body Swap:</strong> You switch bodies with a creature you touch. If one body dies, the other dies as well.<sup>†</sup>",
  "<strong>Catherine:</strong> A woman wearing a blue dress appears until end of spell. She will obey polite, safe requests.<sup>†</sup>",
  "<strong>Charm:</strong> L creatures treat you like a friend.<sup>†</sup>",
  "<strong>Command:</strong> A creature obeys a single, three-word command that does not harm it.<sup>†</sup>",
  "<strong>Comprehend:</strong> You become fluent in all languages.<sup>†</sup>",
  "<strong>Control Plants:</strong> Nearby plants and trees obey you and gain the ability to move at 5 feet per round.<sup>†</sup>",
  "<strong>Control Weather:</strong> You may alter the type of weather at will, but you do not otherwise control it.<sup>†</sup>",
  "<strong>Counterspell:</strong> Make an opposed Intelligence save against the Intelligence of the caster of a nearby spell. You may do this out of turn as a reaction, or against an ongoing magical effect. On a success, you may cancel the spell.<sup>†</sup>",
  "<strong>Deafen:</strong> All nearby creatures are deafened.<sup>†</sup>",
  "<strong>Detect Magic:</strong> You hear nearby magical auras singing. Volume and harmony signify the aura’s power and refinement.<sup>†</sup>",
  "<strong>Disassemble:</strong> Any of your body parts may be detached and reattached at will, without causing pain or damage. You can still control them.<sup>†</sup>",
  "<strong>Disguise:</strong> You may alter the appearance of L characters at will as long as they remain humanoid. Attempts to duplicate other characters will seem uncanny.<sup>†</sup>",
  "<strong>Displace:</strong> An object appears to be up to L×10' from its actual position.<sup>†</sup>",
  "<strong>Earthquake:</strong> The ground begins shaking violently. Structures may be damaged or collapse.<sup>†</sup>",
  "<strong>Elasticity:</strong> Your body can stretch up to L×10'.<sup>†</sup>",
  "<strong>Elemental Wall:</strong> A straight wall of ice or fire L×40' long and 10' high rises from the ground.<sup>†</sup>",
  "<strong>Filch:</strong> L visible items teleport to your hands.<sup>†</sup>",
  "<strong>Fog Cloud:</strong> Dense fog spreads out from you.<sup>†</sup>",
  "<strong>Frenzy:</strong> L creatures erupt in a frenzy of violence.<sup>†</sup>",
  "<strong>Gate:</strong> A portal to a random plane opens.<sup>†</sup>",
  "<strong>Gravity Shift:</strong> You can change the direction of gravity (for yourself only) up to once per round.<sup>†</sup>",
  "<strong>Greed:</strong> L creatures develop an overwhelming urge to possess a visible item of your choice.<sup>†</sup>",
  "<strong>Haste:</strong> Your movement speed is tripled.<sup>†</sup>",
  "<strong>Hatred:</strong> L creatures develop a deep hatred of another creature or group of creatures and wish to destroy it.<sup>†</sup>",
  "<strong>Hear Whispers:</strong> You can hear faint sounds clearly.<sup>†</sup>",
  "<strong>Hover:</strong> An object hovers, frictionless, 2' above the ground. It can hold up to L humanoids.<sup>†</sup>",
  "<strong>Hypnotize:</strong> A creature enters a trance and will truthfully answer L yes or no questions you ask it.<sup>†</sup>",
  "<strong>Icy Touch:</strong> A thick ice layer spreads across a touched surface, up to L×10' in radius.<sup>†</sup>",
  "<strong>Illuminate:</strong> A floating light moves as you command.<sup>†</sup>",
  "<strong>Increase Gravity:</strong> The gravity in an area triples.<sup>†</sup>",
  "<strong>Invisible Tether:</strong> Two objects within 10' of each other cannot be moved more than 10' apart.<sup>†</sup>",
  "<strong>Knock:</strong> L nearby mundane or magical locks unlock.<sup>†</sup>",
  "<strong>Leap:</strong> You can jump up to L×10' in the air.<sup>†</sup>",
  "<strong>Liquid Air:</strong> The air around you becomes swimmable.<sup>†</sup>",
  "<strong>Magic Dampener:</strong> All nearby magical effects have their effectiveness halved.<sup>†</sup>",
  "<strong>Manse:</strong> A sturdy, furnished cottage appears for L×12 hours. You can permit and forbid entry to it at will.<sup>†</sup>",
  "<strong>Marble Madness:</strong> Your pockets are full of marbles, and will refill every round.<sup>†</sup>",
  "<strong>Masquerade:</strong> L characters’ appearances and voices become identical to a touched character.<sup>†</sup>",
  "<strong>Miniaturize:</strong> You and L other touched creatures are reduced to the size of a mouse.<sup>†</sup>",
  "<strong>Mirror Image:</strong> L illusory duplicates of yourself appear under your control.<sup>†</sup>",
  "<strong>Mirrorwalk:</strong> A mirror becomes a gateway to another mirror that you looked into today.<sup>†</sup>",
  "<strong>Multiarm:</strong> You gain L extra arms.<sup>†</sup>",
  "<strong>Night Sphere:</strong> An L×40' wide sphere of darkness displaying the night sky appears.<sup>†</sup>",
  "<strong>Objectify:</strong> You become any inanimate object between the size of a grand piano and an apple.<sup>†</sup>",
  "<strong>Ooze Form:</strong> You become a living jelly.<sup>†</sup>",
  "<strong>Pacify:</strong> L creatures have an aversion to violence.<sup>†</sup>",
  "<strong>Phantom Coach:</strong> A ghostly coach appears until end of spell. It moves unnaturally fast over any terrain, including water<sup> </sup>†",
  "<strong>Phobia:</strong> L creatures become terrified of an object of your choice.<sup>†</sup>",
  "<strong>Pit:</strong> A pit 10' wide and L×5' deep opens in the ground.<sup>†</sup>",
  "<strong>Primeval Surge:</strong> An object grows to the size of an elephant. If it is an animal, it is enraged.<sup>†</sup>",
  "<strong>Psychometry:</strong> The referee answers L yes or no questions about a touched object.<sup>†</sup>",
  "<strong>Pull:</strong> An object of any size is pulled directly towards you with the strength of L men for one round.<sup>†</sup>",
  "<strong>Push:</strong> An object of any size is pushed directly away from you with the strength of L men for one round.<sup>†</sup>",
  "<strong>Raise Dead:</strong> L skeletons rise from the ground to serve you. They are incredibly stupid and can only obey simple orders.<sup>†</sup>",
  "<strong>Raise Spirit:</strong> The spirit of a dead body manifests and will answer L questions.<sup>†</sup>",
  "<strong>Read Mind:</strong> You can hear the surface thoughts of nearby creatures.<sup>†</sup>",
  "<strong>Repel:</strong> L+1 objects are strongly magnetically repelled from each other if they come within 10 feet.<sup>†</sup>",
  "<strong>Scry:</strong> You can see through the eyes of a creature you touched earlier today.<sup>†</sup>",
  "<strong>Sculpt Elements:</strong> All inanimate material behaves like clay in your hands.<sup>†</sup>",
  "<strong>Shroud:</strong> L creatures are invisible until they move.<sup>†</sup>",
  "<strong>Shuffle:</strong> L creatures instantly switch places. Determine where they end up randomly.<sup>†</sup>",
  "<strong>Sleep:</strong> L creatures fall into a light sleep.<sup>†</sup>",
  "<strong>Smoke Form:</strong> Your body becomes living smoke.<sup>†</sup>",
  "<strong>Snail Knight:</strong> 10 minutes after casting, a knight sitting astride a giant snail rides into view. He is able to answer most questions related to quests and chivalry, and may aid you if he finds you worthy.<sup>†</sup>",
  "<strong>Sniff:</strong> You can smell even the faintest traces of scents.<sup>†</sup>",
  "<strong>Sort:</strong> Inanimate items sort themselves according to categories you set. The categories must be visually verifiable.<sup>†</sup>",
  "<strong>Spectacle:</strong> A clearly unreal but impressive illusion of your choice appears, under your control. It may be up to the size of a palace and has full motion and sound.<sup>†</sup>",
  "<strong>Spellseize:</strong> Cast this as a reaction to another spell going off to make a temporary copy of it that you can cast at any time before this spell ends.<sup>†</sup>",
  "<strong>Spider Climb:</strong> You can climb surfaces like a spider.<sup>†</sup>",
  "<strong>Summon Cube:</strong> Once per second, (6 times per round) you may summon or banish a 3-foot-wide cube of earth. New cubes must be affixed to the earth or to other cubes.<sup>†</sup>",
  "<strong>Swarm:</strong> You become a swarm of crows, rats, or piranhas. You only take damage from area effects.<sup>†</sup>",
  "<strong>Telekinesis:</strong> You may mentally move L items.<sup>†</sup>",
  "<strong>Telepathy:</strong> L+1 creatures can hear each other’s thoughts, no matter how far apart they move.<sup>†</sup>",
  "<strong>Teleport:</strong> An object disappears and reappears on the ground in a visible, clear area up to L×40' away.<sup>†</sup>",
  "<strong>Thaumaturgic Anchor:</strong> Object becomes the target of every spell cast near it.<sup>†</sup>",
  "<strong>Thicket:</strong> A thicket of trees and dense brush up to L×40' wide suddenly sprouts up.<sup>†</sup>",
  "<strong>Time Jump:</strong> An object disappears as it jumps L×10 minutes into the future. When it returns, it appears in the unoccupied area nearest to where it left.<sup>†</sup>",
  "<strong>Summon Idol:</strong> A carved stone statue the size of a four poster bed rises from the ground.<sup>†</sup>",
  "<strong>Time Rush:</strong> Time in a 40' bubble starts moving 10 times faster.<sup>†</sup>",
  "<strong>Time Slow:</strong> Time in a 40' bubble slows to 10 percent.<sup>†</sup>",
  "<strong>True Sight:</strong> You see through all nearby illusions.<sup>†</sup>",
  "<strong>Upwell:</strong> A spring of seawater appears.<sup>†</sup>",
  "<strong>Vision:</strong> You completely control what a creature sees.<sup>†</sup>",
  "<strong>Visual Illusion:</strong> A silent, immobile, illusion of your choice appears, up to the size of a bedroom.<sup>†</sup>",
  "<strong>Ward:</strong> A silver circle 40' across appears on the ground. Choose one thing that cannot cross it: Living creatures, dead creatures, projectiles or metal.<sup>†</sup>",
  "<strong>Web:</strong> Your wrists can shoot thick webbing.<sup>†</sup>",
  "<strong>Wizard Mark:</strong> Your finger can shoot a stream of ulfire-colored paint. This paint is only visible to you, and can be seen at any distance, even through solid objects.<sup>†</sup>",
  "<strong>X-Ray Vision:</strong> You gain X-Ray vision.<sup>†</sup>"
];

/**
 * NOTE: spell scrolls have a slightly different format, an
 * extra padded div to make them appear better with rest of
 * equipment list.
 */

/**
 * Cleric spell scrolls:
 * Light
 * Detect Magic
 * Protection from Evil
 * Detect Evil
 * Hold Person
 * Continual Light
 * Remove Curse
 * Cure Light Wounds
 */
export const divineScrollSpells = [
  "Spell Scroll of Light (Darkness) - OSE Cleric and Magic-User Spells p.10, OSE Classic Fantasy Tome p.66",
  "Spell Scroll of Detect Magic - OSE Cleric and Magic-User Spells p.10, OSE Classic Fantasy Tome p.66",
  "Spell Scroll of Protection from Evil - OSE Cleric and Magic-User Spells p.11, OSE Classic Fantasy Tome p.67",
  "Spell Scroll of Detect Evil - OSE Cleric and Magic-User Spells p.10, OSE Classic Fantasy Tome p.66",
  "Spell Scroll of Hold Person - OSE Cleric and Magic-User Spells p.12, OSE Classic Fantasy Tome p.68",
  "Spell Scroll of Locate Object - OSE Cleric and Magic-User Spells p.15, OSE Classic Fantasy Tome p.71",
  "Spell Scroll of Continual Light - OSE Cleric and Magic-User Spells p.14, OSE Classic Fantasy Tome p.70",
  "Spell Scroll of Remove Curse - OSE Cleric and Magic-User Spells p.15, OSE Classic Fantasy Tome p.71",
  "Spell Scroll of Cure Light Wounds - OSE Cleric and Magic-User Spells p.10, OSE Classic Fantasy Tome p.66"
];

/**
 * Magic-user spell scrolls:
 * Magic Missile
 * Detect Evil
 * Knock
 * Locate Object
 * Mirror Image
 * Wizard Lock
 * Dispel Magic
 * Fireball
 * Lightning Bolt
 * Wall of Ice
 * Cloudkill
 * Pass-Wall
 * Disintegrate
 */
export const magicUserScrollSpells = [
  "Spell Scroll of Magic Missile - OSE Cleric and Magic-User Spells p.23, OSE Classic Fantasy Tome p.79",
  "Spell Scroll of Detect Evil - OSE Cleric and Magic-User Spells p.25, OSE Classic Fantasy Tome p.78",
  "Spell Scroll of Knock - OSE Cleric and Magic-User Spells p.26, OSE Classic Fantasy Tome p.82",
  "Spell Scroll of Locate Object - OSE Cleric and Magic-User Spells p.26, OSE Classic Fantasy Tome p.82",
  "Spell Scroll of Mirror Image - OSE Cleric and Magic-User Spells p.26, OSE Classic Fantasy Tome p.82",
  "Spell Scroll of Dispel Magic - OSE Cleric and Magic-User Spells p.22, OSE Classic Fantasy Tome p.78",
  "Spell Scroll of Fire Ball - OSE Cleric and Magic-User Spells p.28, OSE Classic Fantasy Tome p.84",
  "Spell Scroll of Wall of Ice - OSE Cleric and Magic-User Spells p.32, OSE Classic Fantasy Tome p.88",
  "Spell Scroll of Cloudkill - OSE Cleric and Magic-User Spells p.33, OSE Classic Fantasy Tome p.89",
  "Spell Scroll of Pass-Wall - OSE Cleric and Magic-User Spells p.36, OSE Classic Fantasy Tome p.92",
  "Spell Scroll of Animate Dead - OSE Cleric and Magic-User Spells p.33, OSE Classic Fantasy Tome p.89",
  "Spell Scroll of Disintegrate - OSE Cleric and Magic-User Spells p.39, OSE Classic Fantasy Tome p.95"
];

/**
 * Illusionist spell scrolls:
 * Color Spray
 * Chromatic Orb
 * Detect Magic
 * Dispel Magic
 * Mirror Image
 * Massmorph
 * Looking Glass
 * Maze of Mirrors
 * True Seeing
 */
export const illusionistSpellScrolls = [
  "Spell Scroll of Color Spray - OSE Druid and Illusionist Spells p.18",
  "Spell Scroll of Chromatic Orb - OSE Druid and Illusionist Spells p.16",
  "Spell Scroll of Detect Magic - OSE Druid and Illusionist Spells p.22",
  "Spell Scroll of Dispel Magic - OSE Druid and Illusionist Spells p.29",
  "Spell Scroll of Mirror Image - OSE Druid and Illusionist Spells p.24",
  "Spell Scroll of Massmorph - OSE Druid and Illusionist Spells p.30",
  "Spell Scroll of Looking Glass - OSE Druid and Illusionist Spells p.34",
  "Spell Scroll of Maze of Mirrors - OSE Druid and Illusionist Spells p.35",
  "Spell Scroll of True Seeing - OSE Druid and Illusionist Spells p.43"
];

/**
 * Druid spell scrolls:
 * Entangle
 * Barkskin
 * Cure Light Wounds
 * Call Lightning
 * Water Breathing
 * Dispel Magic
 * Protection from Poison
 * Protection from Fire and Lightning
 */
export const druidSpellScrolls = [
  "Spell Scroll of Entangle - OSE Druid and Illusionist Spells p.6",
  "Spell Scroll of Barkskin - OSE Druid and Illusionist Spells p.8",
  "Spell Scroll of Call Lightning - OSE Druid and Illusionist Spells p.10",
  "Spell Scroll of Water Breathing - OSE Druid and Illusionist Spells p.11",
  "Spell Scroll of Dispel Magic - OSE Druid and Illusionist Spells p.12",
  "Spell Scroll of Protection from Poison - OSE Druid and Illusionist Spells p.11",
  "Spell Scroll of Protection from Fire and Lightning - OSE Druid and Illusionist Spells p.12"
];
