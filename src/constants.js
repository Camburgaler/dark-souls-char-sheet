export const DEFAULT_CHARACTER = {
    characterName: "",
    selectedClass: "",
    level: 1,
    backstory: "",
    origin: "",
    memory: "",
    playerName: "",
    drive: "",

    abilities: {
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
        chaMod: 0
    },

    inspiration: false,
    proficiencyBonus: 2,
    passivePerception: 10,

    skills: {
        acrobatics: "dex",
        animalHandling: "wis",
        arcana: "int",
        athletics: "str",
        deception: "cha",
        history: "int",
        insight: "wis",
        intimidation: "cha",
        investigation: "int",
        medicine: "wis",
        nature: "int",
        perception: "wis",
        performance: "cha",
        persuasion: "cha",
        religion: "int",
        sleightOfHand: "dex",
        stealth: "dex",
        survival: "wis",
    },

    proficiencies: {
        strSavingThrow: false,
        dexSavingThrow: false,
        conSavingThrow: false,
        intSavingThrow: false,
        wisSavingThrow: false,
        chaSavingThrow: false,
        acrobatics: false,
        animalHandling: false,
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        sleightOfHand: false,
        stealth: false,
        survival: false,
    },

    expertise: {
        acrobatics: false,
        animalHandling: false,
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        sleightOfHand: false,
        stealth: false,
        survival: false,

    },

    savingThrows: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
    },

    specialAbility: {
        title: "",
        uses: 0,
        expended: 0,
    },

    bloodiedAbility: "",

    notes: "",

    armorClass: 0,
    initiative: 0,
    speed: 0,

    position: {
        base: 0,
        combatPool: 0,
        current: 0,        
    },

    positionDice: {
        total: "",
        current: ""
    },

    souls: {
        current: 0,
        spent: 0
    },

    weapon1: {},
    weapon2: {},
    armor: {},
    shield: {},

    equipment: [],

    featuresAndTraits: "",

    spells: [],

    consumableItems: [],
    maxExtusFlaskUses: 3,
    currentEstusFlaskUses: 3,
    healersKit: 0,
    greenBlossom: 0,
    purpleMoss: 0,
    bugPillType: "",
    bugPills: 0
}

export const CLASSES = ["", "Knight", "Mercenary", "Assassin", "Warrior", "Thief", "Herald", "Cleric", "Sorcerer", "Pyromancer", "Deprived"];
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
export const ORIGINS = ["", "Brute", "Fencer", "Jack of All Trades", "Caster"];
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

export const BRUTE_SCORES = { strScore: 15, strMod: 2, dexScore: 10, dexMod: 0, conScore: 14, conMod: 2, intScore: 10, intMod: 0, wisScore: 12, wisMod: 1, chaScore: 13, chaMod: 1 };
export const FENCER_SCORES = { strScore: 12, strMod: 1, dexScore: 15, dexMod: 2, conScore: 14, conMod: 2, intScore: 13, intMod: 1, wisScore: 10, wisMod: 0, chaScore: 10, chaMod: 0 };
export const JACK_OF_ALL_TRADES_SCORES = { strScore: 13, strMod: 1, dexScore: 13, dexMod: 1, conScore: 12, conMod: 1, intScore: 12, intMod: 1, wisScore: 13, wisMod: 1, chaScore: 12, chaMod: 1 };
export const CASTER_SCORES = { strScore: 10, strMod: 0, dexScore: 12, dexMod: 1, conScore: 10, conMod: 0, intScore: 14, intMod: 2, wisScore: 13, wisMod: 1, chaScore: 15, chaMod: 2 };

export const SKILL_NAMES = {
    acrobatics: "Acrobatics",
    animalHandling: "Animal Handling",
    arcana: "Arcana",
    athletics: "Athletics",
    deception: "Deception",
    history: "History",
    insight: "Insight",
    intimidation: "Intimidation",
    investigation: "Investigation",
    medicine: "Medicine",
    nature: "Nature",
    perception: "Perception",
    performance: "Performance",
    persuasion: "Persuasion",
    religion: "Religion",
    sleightOfHand: "Sleight of Hand",
    stealth: "Stealth",
    survival: "Survival",
}

export const ABILITY_NAMES = {
    str: "Strength",
    dex: "Dexterity",
    con: "Constitution",
    int: "Intelligence",
    wis: "Wisdom",
    cha: "Charisma"
}

export const PROFICIENCY_SELECTION = {
    Knight: 2,
    Mercenary: 3,
    Assassin: 4,
    Warrior: 2,
    Thief: 4,
    Herald: 2,
    Cleric: 2,
    Sorcerer: 2,
    Pyromancer: 2,
    Deprived: 2
};
export const CLASS_PROFICIENCIES ={
    "": [],
    Knight: ["acrobatics", "animalHandling", "athletics", "history", "insight", "investigation", "perception", "survival"],
    Mercenary: ["animalHandling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"],
    Assassin: ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleightOfHand", "stealth"],
    Warrior: ["animalHandling", "athletics", "intimidation", "nature", "perception", "survival"],
    Thief: ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleightOfHand", "stealth"],
    Herald: ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"],
    Cleric: ["history", "insight", "medicine", "persuasion", "religion"],
    Sorcerer: ["arcana", "history", "insight", "investigation", "medicine", "religion"],
    Pyromancer: ["deception", "insight", "intimidation", "persuasion", "religion"],
    Deprived: ["acrobatics", "animalHandling", "athletics", "arcana", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "religion", "sleightOfHand", "stealth", "survival"]
};
export const DEFAULT_PROFICIENCY_SELECTIONS = {
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false,
};

export const BRUTE_BLOODIED_ABILITY = "During combat, when reduced to 50% of their starting Position pool, a brute gains the following benefits:\n\nThey may add an additional +3 to their AC.\nThey gain advantage on all Strength-related checks and saving throws.\nThey reduce all damage they take by 2 points.";
export const FENCER_BLOODIED_ABILITY = "During combat, when reduced to 50% of their starting Position pool, a fencer gains the following benefits:\n\nThey may add an additional +2 to their Dexterity.\nThey may make one additional reaction on their turn.\nThey reduce all melee-weapon position spend costs by 1.";
export const JACK_OF_ALL_TRADES_BLOODIED_ABILITY = "During combat, when reduced to 50% of their starting Position pool, a jack of all trades gains the following benefits:\n\nThey may add an additional +2 to their Wisdom, and their AC.\nGain advantage on all saving throws against magical attacks and effects.\nRemove any one negative condition of their choice.";
export const CASTER_BLOODIED_ABILITY = "During combat, when reduced to 50% if their starting Position pool, a caster gains the following benefits:\n\nThey may add +2 to their Intelligence and Charisma, and to their AC.\nThey may use the special ability of an equipped weapon without spending Position.\nWhile bloodied, a caster does not trigger any attacks of opportunity."