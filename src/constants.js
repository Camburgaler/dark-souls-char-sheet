export const DEFAULT_CHARACTER = {
    characterName: "",
    selectedClass: "",
    level: "",
    backstory: "",
    origin: "",
    memory: "",
    playerName: "",
    drive: "",

    strScore: 10,
    strMod: 0,
    dexScore: 10,
    dexMod: 0,
    conScore: 10,
    conMod: 0,
    intScore: 10,
    intMod: 0,
    wisScore: 10,
    wisMod: 0,
    chaScore: 10,
    chaMod: 0,

    inpiration: false,
    proficiencyBonus: 2,
    passivePerception: 10,

    strSavingThrowProficiency: false,
    strSavingThrow: 0,
    dexSavingThrowProficiency: false,
    dexSavingThrow: 0,
    conSavingThrowProficiency: false,
    conSavingThrow: 0,
    intSavingThrowProficiency: false,
    intSavingThrow: 0,
    wisSavingThrowProficiency: false,
    wisSavingThrow: 0,
    chaSavingThrowProficiency: false,
    chaSavingThrow: 0,

    acrobaticsProficiency: false,
    acrobaticsExpertise: false,
    acrobatics: 0,

    animalHandlingProficiency: false,
    animalHandlingExpertise: false,
    animalHandling: 0,

    arcanaProficiency: false,
    arcanaExpertise: false,
    arcana: 0,

    athleticsProficiency: false,
    athleticsExpertise: false,
    athletics: 0,

    deceptionProficiency: false,
    deceptionExpertise: false,
    deception: 0,

    historyProficiency: false,
    historyExpertise: false,
    history: 0,

    insightProficiency: false,
    insightExpertise: false,
    insight: 0,

    intimidationProficiency: false,
    intimidationExpertise: false,
    intimidation: 0,

    investigationProficiency: false,
    investigationExpertise: false,
    investigation: 0,

    medicineProficiency: false,
    medicineExpertise: false,
    medicine: 0,

    natureProficiency: false,
    natureExpertise: false,
    nature: 0,

    perceptionProficiency: false,
    perceptionExpertise: false,
    perception: 0,

    performanceProficiency: false,
    performanceExpertise: false,
    performance: 0,

    persuasionProficiency: false,
    persuasionExpertise: false,
    persuasion: 0,

    religionProficiency: false,
    religionExpertise: false,
    religion: 0,

    sleightOfHandProficiency: false,
    sleightOfHandExpertise: false,
    sleightOfHand: 0,

    stealthProficiency: false,
    stealthExpertise: false,
    stealth: 0,

    survivalProficiency: false,
    survivalExpertise: false,
    survival: 0,

    specialAbilityTitle: "",
    specialAbilityUses: 0,
    specialAbilityExpended: 0,

    bloodiedAbility: "",

    notes: "",

    armorClass: 0,
    initiative: 0,
    speed: 0,

    basePosition: 0,
    combatPositionPool: 0,
    currentPosition: 0,
    totalPositionDice: "",
    currentPositionDice: "",
    currentSouls: 0,
    spentSouls: 0,

    weapon1: {},
    weapon2: {},
    armor: {},
    shield: {},

    equipment: [],

    featuresAndTraits: "",

    spells: [],

    consumbleItems: [],
    maxExtusFlaskUses: 3,
    currentEstusFlaskUses: 3,
    healersKit: 0,
    greenBlossom: 0,
    purpleMoss: 0,
    bugPillType: "",
    bugPills: 0
}

export const BACKSTORIES = [
    "",
    "You sought to become a lord by any means. You failed.", 
    "You're a lowly murderer, hanged in ages past and forgotten about.", 
    "You were a poet, writing the tales of knights and damsels, singing them to the court.", 
    "A thief. Nothing more, and nothing less. You stole the earnings of any you could.", 
    "A great warrior. You were belived by many for your deeds. And loathed by many more.", 
    "You were a sage, constantly trying to unpick the hidden history of the universe. You didn't get very far.",
    "All the ancient knights needed squires. You were one, tending to their weapons and armor, waiting for you chance to become a knight yourself.",
    "Dungeons need warders, keeping their prisoners safely incarcerated, no matter what their sin might be, You were keeper of the keys.",
    "A killer for hire is an ugly name for an ugly job. But it was your ugly job, and you were good at it.",
    "You were an archivist, preserving the fragments of ancient wisdom that survived the ages. If only you could recall any of it.",
    "You lived by your wits, a gambler, a drunkard, a sot. None liked you, but you didn't care.",
    "Physicians cure the sick, bring life to the dying. You sought to heal, but what purpose was your craft in this world where undeath touches everything.",
    "You raised a family, tilled the fields, cultivated crops. Until the darkness came.",
    "There's always been a need for graves. You dug them, hauled the corpses to them, and filled them in again.",
    "You were abandit; hiding in the hills and raiding villahes when you got then chance.",
    "An apprentice to a sorcerer--you sought the mysteries of the beyond, in books and teachings, Maybe you found them.",
    "An alchemist was what they called you. All you cared for was the perfect combination of substances, achieving the ideal affect.",
    "You preached the message to the faithful; gathering your flock, and reassuring them of salvation. Did you believe any of it?",
    "You were a brutal master, working your servants to death. Can you ever be redeemed?",
    "A knight. You're certain. One of those who rode steeds and sought quests to prove your virtue. Definitely. That was you.",
    // <TextField fullWidth autoFocus defaultValue="For custom backstory, select me then tab into me."></TextField>
];
export const MEMORIES = [
    "",
    "A man stands over you with a bloody knife, laughing. Laughing and laughing.",
    "The scent of earth in your nose as it fell onto your face. Were you buried alive?",
    "The grasping, clawing hands of hollows everywhere.",
    "The roar of something...something vast...behind you.",
    "A roaring explosion, sudden blazing heat, spray of stone, and then darkness.",
    "The feel of fetid breath on your neck.",
    "Watching as the rock beneath your hands suddenly gave way.",
    "Joyful smiles on the faces of people you love, becoming rictuses of agony.",
    "How hard breathing had become. How you weren;t sure where your neck ended, and your body began.",
    "A flame blossoming into life somewhere ahead of you, flickering in the dark.",
    "The screams and chaos of a bandit raid, running, arrows flickering past you...",
    "Horses' hooves, trampling down on you, imperiously.",
    "The beating of wings, and the sudden darkening of the sky.",
    "Applause. A crowd, gathered to watch you die, and were pleased as you did.",
    "Touching that treasure chest.",
    "The roughness of a rope around your neck, the stifling interior of a hemp sack over your head, the feeling of nothing beneath your feet for a moment.",
    "Someone shouting in your face, and a punch. No worse than you'd received before, but this time...",
    "A thud. A second thud. No pain. Not initially. Amd then you glanced down to see arrows protruding from your chest.",
    "You knew you shouldn't have read those words aloud.",
    "A pain in your chest. Searing, your left arm aching and useless.",
    // <TextField fullWidth autoFocus defaultValue="For custom memory, select me then tab into me."></TextField>
];
export const DRIVES = [
    "",
    "To become a lord--no matter the cost to you, or the world.",
    "To return the sun to this stygian world.",
    "To know everything. Everything. No matter how obscure.",
    "To become the sorcerer you know you should be.",
    "Simply to die. Fially, completely.",
    "To restore the first flame to life.",
    "To destroy all who would stand before you, no matter who or what that might be.",
    "To bring faith of the gods to the sheltered and lost.",
    "To consign the undead, including yourself, once more to the grave.",
    "To extinguish the first flame forever.",
    "To correct the mistakes of the lords.",
    "To finally erase the mark of the curse from your flesh.",
    "To save the world. Whatever is left of it.",
    "To become the greatest warrior ever known.",
    "To see the kingdom, once again, filled with life.",
    "To rediscover yourself. Whoever you were, you want to know.",
    "To one day return home, to see the place of your birth one last time.",
    "To discover the lost tome, containing the true history of the world.",
    "To heal this blasted world, and make it anew.",
    "To achieve redempton; you know the darkness in your past lives. Perhaps you can cleanse yourslef.",
    // <TextField fullWidth autoFocus defaultValue="For custom drive, select me then tab into me."></TextField>
];
export const ORIGINS = ["", "The Brute", "The Fencer", "Jack of All Trades", "Caster"];
export const CLASSES = ["", "Knight", "Mercenary", "Assassin", "Warrior", "Thief", "Herald", "Cleric", "Sorcerer", "Pyromancer", "Deprived"];
export const DEFAULT_CUSTOM_INFO = {backstory: false, memory: false, drive: false};

export const DEFAULT_SCORES = {strScore: 10, dexScore: 10, conScore: 10, intScore: 10, wisScore: 10, chaScore: 10};
export const DEFAULT_MODIFIERS = {strMod: 0, dexMod: 0, conMod: 0, intMod: 0, wisMod: 0, chaMod: 0};