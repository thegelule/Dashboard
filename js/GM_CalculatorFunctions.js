var GodParams = null;

var LegendaryAbility = function(name,description,legendaries) {
  this.name = name;
  this.description = description;
  this.legendaries = legendaries;
};

var Role = function(name,legendaries,skills) {
  this.name = name;
  this.legendaries = legendaries;
  this.skills = skills;

};

var secondOrigin = function(name,description,originString,originVar,approaches,domains,roles) {
  this.name = name;
  this.description = description;
  this.originString = originString;
  this.originVar = originVar;
  this.approaches = approaches;
  this.domains = domains;
  this.roles = roles;
};

var parameterCalculator = function(name,type,legendaries,skills) {
  this.name = name;
  this.type = type;
  this.legendaries = legendaries;
  this.skills = skills;

};


var rolesChoiceArray = [
    Default = new Role("Default",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
    MeatShield = new Role("Meat Shield",[2,4,3,1,3,2,3,1,1,3,3,2,-1,-1,3,-2,1,-2,-1,0,2,3,0,2,-1,3,1,-1,2,2,4,3,-1,1,2,2,-2,-1,3,2,-3,-2,0,-2,-1,4,3,4,2,-1,1,-1,0,-2,3,1,-1,2,-2,-1,-2,3,2,1,-2,3],[3,-2,-1,2,1,4,3,3,4,3,-1,-2,1,0,4]),
    DamageDealer = new Role("Damage Dealer",[2,0,0,1,2,3,2,4,2,4,3,-2,-3,-1,-2,4,1,-1,0,3,1,3,4,-1,3,2,1,0,-1,4,2,-1,3,1,2,2,3,1,3,3,-4,4,1,1,4,1,4,2,-1,-2,4,-2,-2,-1,1,2,3,4,2,1,2,1,4,4,-2,3],[3,-1,-2,3,-2,4,4,1,1,0,-1,-2,4,4,3]),
    PartyFace = new Role("Party Face",[1,1,0,3,1,4,2,-3,-3,-4,-3,1,4,3,3,1,1,2,4,2,4,1,-2,4,-1,-1,-1,-2,-1,-3,-3,-2,3,4,-1,-1,1,0,-3,-2,1,-3,-3,3,-2,-1,-4,-4,4,4,-4,4,4,-2,-3,3,-2,2,2,1,2,3,1,4,1,-2],[1,0,4,2,1,-2,2,2,-1,4,4,4,-2,-1,0]),
    SkillMonkey = new Role("Skill Monkey",[4,4,3,4,4,4,4,-2,-3,-2,-1,4,2,2,2,-1,-1,4,3,2,2,0,-2,-1,-1,3,2,1,2,-1,-1,1,-1,-2,1,2,-2,3,1,3,3,0,1,4,2,1,-2,-3,-1,-2,-1,0,-1,3,2,1,2,2,4,-2,3,3,1,2,4,1],[3,4,1,4,2,1,4,4,1,0,1,4,1,4,3]),
    SupportController = new Role("Support-Controller",[4,4,3,3,4,4,4,1,3,3,4,4,4,2,4,1,3,4,4,3,4,4,1,4,-1,3,3,4,3,2,3,3,4,3,2,3,3,0,3,3,-1,-2,3,2,2,4,-1,-1,4,4,0,4,4,2,4,2,1,2,0,1,1,-1,-3,-1,4,4],[2,-1,4,4,4,2,4,1,2,3,4,-1,-2,1,4])
];

var parametersArray = [

    // Approaches
    Careful = new parameterCalculator("Careful","Approach",[],[]),
    Clever = new parameterCalculator("Clever","Approach",[],[]),
    Flashy = new parameterCalculator("Flashy","Approach",[],[]),
    Forceful = new parameterCalculator("Forceful","Approach",[],[]),
    Quick = new parameterCalculator("Quick","Approach",[],[]),
    Sneaky = new parameterCalculator("Sneaky","Approach",[],[]),

    // Domains

    War = new parameterCalculator("War Deity","Domain",[],[]),
    Wisdom = new parameterCalculator("Wisdom Deity","Domain",[],[]),
    Leader = new parameterCalculator("Leader of the Gods","Domain",[],[]),
    Father = new parameterCalculator("Progenitor of the Gods","Domain",[],[]),
    Fertility = new parameterCalculator("Fertility Deity","Domain",[],[]),
    Love = new parameterCalculator("Love Deity","Domain",[],[]),
    Travel = new parameterCalculator("Travel Deity","Domain",[],[]),
    Water = new parameterCalculator("Water Deity","Domain",[],[]),
    Sky = new parameterCalculator("Sky Deity","Domain",[],[]),
    Wit = new parameterCalculator("Wit Deity","Domain",[],[]),
    Death = new parameterCalculator("Death Deity","Domain",[],[]),
    Fire = new parameterCalculator("Fire Deity","Domain",[],[]),
    Earth = new parameterCalculator("Earth Deity","Domain",[],[]),
    Justice = new parameterCalculator("Justice Deity","Domain",[],[]),
    Moon = new parameterCalculator("Moon Deity","Domain",[],[]),
    Sun = new parameterCalculator("Sun Deity","Domain",[],[]),
    Knowledge = new parameterCalculator("Knowledge Deity","Domain",[],[]),
    Darkness = new parameterCalculator("Darkness Deity","Domain",[],[]),
    Crafting = new parameterCalculator("Crafting Deity","Domain",[],[]),
    Nature = new parameterCalculator("Nature Deity","Domain",[],[]),
    Order = new parameterCalculator("Order Deity","Domain",[],[]),

    // Roles

    General = new parameterCalculator("General","Personality",[],[]),
    Politician = new parameterCalculator("Politician","Personality",[],[]),
    FreeSpirit = new parameterCalculator("Free Spirit","Personality",[],[]),
    King = new parameterCalculator("King","Personality",[],[]),
    Mother = new parameterCalculator("Mother","Personality",[],[]),
    Thinker = new parameterCalculator("Thinker","Personality",[],[]),
    Harmonizer = new parameterCalculator("Harmonizer","Personality",[],[]),
    Prince = new parameterCalculator("Prince","Personality",[],[]),
    Enforcer = new parameterCalculator("Enforcer","Personality",[],[]),
    Manipulator = new parameterCalculator("Manipulator","Personality",[],[]),
    Trickster = new parameterCalculator("Trickster","Personality",[],[]),
    Diplomat = new parameterCalculator("Diplomat","Personality",[],[]),
    Protector = new parameterCalculator("Protector","Personality",[],[]),
    Hunter = new parameterCalculator("Hunter","Personality",[],[]),

    // Pantheons

    Greek = new parameterCalculator("Greek","God",[],[]),
    Chinese = new parameterCalculator("Chinese","God",[],[]),
    African = new parameterCalculator("African","God",[],[]),
    Egyptian = new parameterCalculator("Egyptian","God",[],[]),
    Norse = new parameterCalculator("Norse","God",[],[]),
    Maori = new parameterCalculator("Maori","God",[],[]),
    Japanese = new parameterCalculator("Japanese","God",[],[]),
    Aztec = new parameterCalculator("Aztec","God",[],[]),
    Indian = new parameterCalculator("Indian","God",[],[]),
    BogiMuzhchin = new parameterCalculator("Slavic","God",[],[]),
    Celtic = new parameterCalculator("Celtic","God",[],[]),
    Inca = new parameterCalculator("Inca","God",[],[]),


    // Titans

    Light = new parameterCalculator("Light","Titan",[],[]),
    Abyss = new parameterCalculator("Abyss","Titan",[],[]),
    Ocean = new parameterCalculator("Ocean","Titan",[],[]),
    OrderTitan = new parameterCalculator("Order","Titan",[],[]),
    World = new parameterCalculator("World","Titan",[],[]),
    FireTitan = new parameterCalculator("Fire","Titan",[],[]),
    Patala = new parameterCalculator("Depths","Titan",[],[]),
    SkyTitan = new parameterCalculator("Sky","Titan",[],[]),
    Night = new parameterCalculator("Night","Titan",[],[]),
    DeathTitan = new parameterCalculator("Death","Titan",[],[]),


    // Mythborn

    SummerCourt = new parameterCalculator("Summer Court","Otherworld",[],[]),
    WinterCourt = new parameterCalculator("Winter Court","Otherworld",[],[]),
    DarkForest = new parameterCalculator("Dark Forest","Otherworld",[],[]),
    Shambhala = new parameterCalculator("Shambhala","Otherworld",[],[]),
    JadeSea = new parameterCalculator("Jade Sea","Otherworld",[],[]),

    // Enlightened

    Illuminati = new parameterCalculator("Illuminati","Enlightened",[],[]),
    OrderoftheJadeFist = new parameterCalculator("Order of the Jade Fist","Enlightened",[],[]),
    Cabal = new parameterCalculator("Cabal","Enlightened",[],[]),
    CircleofMerlin = new parameterCalculator("Circle of Merlin","Enlightened",[],[]),


    // Party Roles


    Face = new parameterCalculator("Face","Role",[],[]),
    Tank = new parameterCalculator("Tank","Role",[],[]),
    DamageDealer = new parameterCalculator("DamageDealer","Role",[],[]),
    SkillMonkey = new parameterCalculator("SkillMonkey","Role",[],[]),
    SupportController = new parameterCalculator("SupportController","Role",[],[])


];

var secondOriginArray = [
     Tūmatauenga= new secondOrigin("Tūmatauenga","God of War and Subdueing ",Maori.name,Maori,[Forceful,Flashy,Clever],[War,Leader],[King,General]), 
     TaneMahuta= new secondOrigin("Tane Mahuta","God of War and Subdueing ",Maori.name,Maori,[Clever,Forceful,Careful],[Nature,Wisdom],[Harmonizer,Thinker]), 
     Tangaroa= new secondOrigin("Tangaroa","God of the Sea",Maori.name,Maori,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Harmonizer]), 
     Tawhirimatea= new secondOrigin("Tawhirimatea","Renegade God of weather, lightning and clouds",Maori.name,Maori,[Forceful,Flashy,Sneaky],[Sky],[FreeSpirit,General]), 
     Rehua= new secondOrigin("Rehua","God of Stars",Maori.name,Maori,[Careful,Clever,Sneaky],[Sky,Wisdom],[Thinker,FreeSpirit]), 
     HineNuiTePo= new secondOrigin("Hine-nui-te-po","Goddess of Night and Death",Maori.name,Maori,[Clever,Sneaky,Careful],[Death,Moon],[Thinker,Politician]), 
     Ruaumoko= new secondOrigin("Ruaumoko","God of Warmth, Earthquakes and Volcanoes",Maori.name,Maori,[Careful,Clever,Forceful],[Earth,Fire],[Harmonizer]), 
     Rongo= new secondOrigin("Rongo","God of Peace and Culture",Maori.name,Maori,[Clever,Sneaky,Careful],[Fertility,Wisdom],[Politician,Thinker]),
     HaumiaTiketike= new secondOrigin("Haumia-Tiketike","God of Wild Food",Maori.name,Maori,[Sneaky,Forceful,Careful],[Wit,Nature],[Hunter]),
     Mahuika= new secondOrigin("Mahuika","Goddess of Fire ",Maori.name,Maori,[Forceful,Flashy,Quick],[Fire],[FreeSpirit]),

     Anubis= new secondOrigin("Anubis","God of Death and Judge of the Underworld ",Egyptian.name,Egyptian,[Clever,Careful,Forceful],[Death,Justice],[Enforcer]),
     Horus= new secondOrigin("Horus","God of Justice",Egyptian.name,Egyptian,[Clever,Forceful,Quick],[Justice,Leader],[Prince,Politician]),
     Hathor= new secondOrigin("Hathor","Goddess of Love, Fertility and Motherhood",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Fertility ,Sun],[Mother,Diplomat]),
     Isis= new secondOrigin("Isis","Goddess of Magic, Inventor of Heku",Egyptian.name,Egyptian,[Clever,Sneaky,Careful],[Wisdom,Wit],[Politician,Thinker]),
     Osiris= new secondOrigin("Osiris","Lord of the Underworld",Egyptian.name,Egyptian,[Clever,Flashy,Sneaky],[Death],[King]),
     AtumRe= new secondOrigin("Atum Re","God of the Sun",Egyptian.name,Egyptian,[Clever,Flashy,Forceful],[Father,Sun],[King]),
     Set= new secondOrigin("Set","God of Sky and Guardian of the Desert",Egyptian.name,Egyptian,[Clever,Sneaky,Forceful],[Sky],[Manipulator,Protector]),
     Sekhmet= new secondOrigin("Sekhmet","Goddess of War",Egyptian.name,Egyptian,[Forceful,Quick,Flashy],[War],[General,Hunter]),
     Bastet= new secondOrigin("Bastet","Keeper of Secrets",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker,Protector]),
     Hapi= new secondOrigin("Hapi","God of Healing and Self-Sacrifice",Egyptian.name,Egyptian,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Protector]), 
     Khepri= new secondOrigin("Khepri","Goddess of Leadership",Egyptian.name,Egyptian,[Forceful,Clever,Sneaky],[War,Wit],[General,Enforcer]),
     Ptah= new secondOrigin("Ptah","God of Artistry",Egyptian.name,Egyptian,[Clever,Quick,Flashy],[Crafting],[Thinker,FreeSpirit]),
     Rain= new secondOrigin("Rain","Goddess of the Veil",Egyptian.name,Egyptian,[Careful,Clever,Forceful],[Death,Travel],[FreeSpirit,Protector]),
     Sobek= new secondOrigin("Sobek","God of Water and Retribution",Egyptian.name,Egyptian,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Hunter]),
     Thoth= new secondOrigin("Thoth","God of Knowledge",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker]),
     Geb= new secondOrigin("Geb","God of the Earth",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Earth],[Protector]),

     Agni= new secondOrigin("Agni","God of FIre and Sacrifice",Indian.name,Indian,[Clever,Flashy,Careful],[Fire],[FreeSpirit]),
     Brahma= new secondOrigin("Brahma","The Creator",Indian.name,Indian,[Clever,Careful,Sneaky],[Knowledge,Father],[Thinker]),
     Ganesha= new secondOrigin("Ganesha","God of good luck and Wisdom",Indian.name,Indian,[Clever,Forceful,Sneaky],[Travel,Wisdom],[Harmonizer,Protector]),
     Indra= new secondOrigin("Indra","God of war and weather",Indian.name,Indian,[Forceful,Clever,Flashy],[Sky,Leader],[King]),
     Kali= new secondOrigin("Kali","Goddess of annihilation",Indian.name,Indian,[Forceful,Flashy,Quick],[War,Darkness],[Enforcer]),
     Lakshmi= new secondOrigin("Lakshmi","Goddess of fortune",Indian.name,Indian,[Clever,Careful,Sneaky],[Wit],[FreeSpirit,Manipulator]),
     Parvati= new secondOrigin("Parvati","Goddess of feminity",Indian.name,Indian,[Clever,Sneaky,Careful],[Love,Fertility],[Diplomat,Mother]),
     Sarasvati= new secondOrigin("Sarasvati","Goddess of artists",Indian.name,Indian,[Flashy,Careful,Sneaky],[Crafting],[FreeSpirit]),
     Shiva= new secondOrigin("Shiva","The Destroyer",Indian.name,Indian,[Clever,Flashy,Forceful],[Order,Father],[FreeSpirit,Thinker]),
     Surya= new secondOrigin("Surya","God of the sun",Indian.name,Indian,[Flashy,Forceful,Quick],[Sun],[FreeSpirit]),
     Vishnu= new secondOrigin("Vishnu","The Preserver",Indian.name,Indian,[Careful,Forceful,Clever],[Wisdom,Order],[Protector,Harmonizer]),
     Yama= new secondOrigin("Yama","Lord of the Dead",Indian.name,Indian,[Sneaky,Careful,Clever],[Death],[Enforcer,Thinker]),
     Murugan= new secondOrigin("Murugan","General of the Divine Armies",Indian.name,Indian,[Forceful,Flashy,Quick],[War],[General]),

     Aphrodite= new secondOrigin("Aphrodite","Goddess of love and beauty",Greek.name,Greek,[Flashy,Forceful,Careful],[Love],[Manipulator]),
     Apollo= new secondOrigin("Apollo","God of prophecy, the sun, and art",Greek.name,Greek,[Flashy,Careful,Clever],[Sun,Crafting],[Politician]),
     Archimedes= new secondOrigin("Archimedes","God of Logic",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Knowledge],[Thinker]),
     Ares= new secondOrigin("Ares","God of War",Greek.name,Greek,[Forceful,Flashy,Careful],[War],[General]),
     Artemis= new secondOrigin("Artemis","Goddess of chastity, the moon, and hunting",Greek.name,Greek,[Careful,Sneaky,Quick],[Moon,War],[FreeSpirit]),
     Athena= new secondOrigin("Athena","Goddess of strategy and wisdom",Greek.name,Greek,[Clever,Careful,Forceful],[War,Wisdom],[General]),
     Demeter= new secondOrigin("Demeter","Goddess of Nature and Agriculture",Greek.name,Greek,[Flashy,Forceful,Clever],[Fertility],[Mother]),
     Dionysus= new secondOrigin("Dionysus","God of Wine, Friendship and Liberty",Greek.name,Greek,[Flashy,Careful,Clever],[Wit],[FreeSpirit,Harmonizer]),
     Gerald= new secondOrigin("Gerald","God of Rock 'n' Roll",Greek.name,Greek,[Flashy,Forceful,Quick],[Fire,War],[Enforcer]),
     Hades= new secondOrigin("Hades","Ruler of the Underworld",Greek.name,Greek,[Careful,Sneaky,Clever],[Death],[Politician,King]),
     Hephaestus= new secondOrigin("Hephaestus","God of the Forge and Invention",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),
     Hera= new secondOrigin("Hera","Goddess of marriage and politics",Greek.name,Greek,[Forceful,Sneaky,Clever],[Leader,Fertility],[]),
     Herakles= new secondOrigin("Herakles","God of Strength",Greek.name,Greek,[Forceful,Flashy,Quick],[War],[Prince,Enforcer]),
     Hermes= new secondOrigin("Hermes","God of thieves, merchants, and tricksters",Greek.name,Greek,[Quick,Clever,Sneaky],[Travel,Wit],[FreeSpirit]),
     Lyra= new secondOrigin("Lyra","Goddess of Freedom",Greek.name,Greek,[Clever,Quick,Sneaky],[Sky,Wit],[FreeSpirit]),
     Poseidon= new secondOrigin("Poseidon","God of the sea",Greek.name,Greek,[Flashy,Forceful,Careful],[Water],[King,FreeSpirit]),
     Zeus= new secondOrigin("Zeus","God of Leadership, Thunder, Sky, and Power",Greek.name,Greek,[Flashy,Forceful,Clever],[Leader,Sky],[King,Politician]),

     Rod= new secondOrigin("Rod","Great Creator, God of Birth",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Father],[FreeSpirit]),
     Lada= new secondOrigin("Lada","Goddess of Summer, Love, Marriage and Beauty",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Flashy],[Love ,Sun],[Mother,Diplomat]),
     Perun= new secondOrigin("Perun","God of Sky, Thunder and Lightning",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Flashy,Clever],[Sky],[King,Protector]),
     Dodola= new secondOrigin("Dodola","Goddess of Rain",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Water ,Nature],[Mother,Protector]),
     Svarog= new secondOrigin("Svarog","God of Fire and Smithing",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Sneaky],[Fire ,Crafting],[FreeSpirit,Thinker]),
     Dazbog= new secondOrigin("Dazbog","God of Sun and Wealth",BogiMuzhchin.name,BogiMuzhchin,[Flashy,Quick,Forceful],[Sun],[Harmonizer,FreeSpirit]),
     Svetovid= new secondOrigin("Svetovid","God of Fertility and Abundance",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Fertility ,Nature],[FreeSpirit,Harmonizer]),
     Veles= new secondOrigin("Veles","God of Earth, Underworld and Trickery",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Quick],[Earth ,Death],[Trickster,FreeSpirit]),
     Dziewona= new secondOrigin("Dziewona","Goddess of Hunt and the Moon",BogiMuzhchin.name,BogiMuzhchin,[Clever,Quick,Careful],[Wisdom,Moon],[Mother,Harmonizer]),
     Belobog= new secondOrigin("Belobog","God of Good Fortune",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Quick,Flashy],[Order ,Sun],[Enforcer,Harmonizer]),
     Chernobog= new secondOrigin("Chernobog","God of Misfortune",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Order ,Darkness],[Thinker,Enforcer]),
     Hors= new secondOrigin("Hors","God of Medicine and Arts",BogiMuzhchin.name,BogiMuzhchin,[Careful,Clever,Flashy],[Nature ,Knowledge],[Harmonizer,Protector]),
     Jarilo= new secondOrigin("Jarilo","God of War and Spring",BogiMuzhchin.name,BogiMuzhchin,[Careful,Quick,Forceful],[War,Sun],[Protector,Prince]),
     Morana= new secondOrigin("Morana","Goddess of Harvest, Winter and Death",BogiMuzhchin.name,BogiMuzhchin,[Careful,Forceful,Quick],[Death,Water],[Enforcer,Harmonizer]),

     Aganju= new secondOrigin("Aganju","God of War",African.name,African,[Forceful,Flashy,Quick],[War,Nature],[Enforcer]),
     Anansi= new secondOrigin("Anansi","Spider God of Tricks and Knowledge",African.name,African,[Clever,Flashy,Quick],[Knowledge,Wisdom],[Trickster,Harmonizer]),
    Ayao= new secondOrigin("Ayao","Goddess of Air",African.name,African,[Clever,Forceful,Sneaky],[Sky,Wit],[Hunter,General]),
    Azaka= new secondOrigin("Azaka","Goddess of Lightning",African.name,African,[Flashy,Clever,Quick],[Sky,Fire],[FreeSpirit]),
    BaronSamedi= new secondOrigin("Baron Samedi","God of Death, Keeper of Guinee",African.name,African,[Flashy,Clever,Sneaky],[Death],[FreeSpirit,Harmonizer]),
    Damballa= new secondOrigin("Damballa","God of the Sky",African.name,African,[Careful,Clever,Sneaky],[Sky],[Prince,Thinker]),
    DeAllende= new secondOrigin("De-Allende","The Dreamweaver",African.name,African,[Clever,Quick,Flashy],[Moon,Knowledge],[Thinker,Trickster]),
    Eledumare= new secondOrigin("Eledumare","Primordial Trinity, Father of the Gods",African.name,African,[Careful,Flashy,Forceful],[Father],[General]),
    Erzulie= new secondOrigin("Erzulie","Goddess of Love and Flowers",African.name,African,[Flashy,Clever,Sneaky],[Love,Wit],[Harmonizer,Protector]),
    Kalfu= new secondOrigin("Kalfu","God of Darkness",African.name,African,[Clever,Sneaky,Quick],[Darkness,Travel],[Manipulator,Trickster]),
    Legba= new secondOrigin("Legba","God of Crossroads, Psychopomp",African.name,African,[Careful,Clever,Quick],[Wisdom,Travel],[Protector,Thinker]),
    MamanBrigitte= new secondOrigin("Maman Brigitte","Goddess of Death",African.name,African,[Flashy,Careful,Quick],[Death],[FreeSpirit,Harmonizer]),
    Olorun= new secondOrigin("Olorun","Primordial Trinity, and Ruler of Ikole Orun",African.name,African,[Careful,Clever,Forceful],[Leader,Sun],[King,Protector]),
    Ogoun= new secondOrigin("Ogoun","God of Iron and Crafting",African.name,African,[Careful,Clever,Sneaky],[Crafting],[FreeSpirit]),
    Shapona= new secondOrigin("Shapona","God of Earth, Disease and Healing",African.name,African,[Sneaky,Clever,Careful],[Earth,Death],[FreeSpirit,Thinker]),
    Simbi= new secondOrigin("Simbi","God of Rain and Magic",African.name,African,[Sneaky,Clever,Careful],[Nature,Fertility],[Enforcer,Thinker]),
    Yemoja= new secondOrigin("Yemoja","Goddess of Fertility and Women",African.name,African,[Careful,Clever,Quick],[Fertility],[Mother,Diplomat]),

    Change= new secondOrigin("Chang'e","Goddess of the Moon",Chinese.name,Chinese,[Clever,Quick,Sneaky],[Moon],[Diplomat,Harmonizer]),
    Chiyou= new secondOrigin("Chiyou","God of War",Chinese.name,Chinese,[Clever,Forceful,Quick],[War],[General,Thinker]),
    Erlang= new secondOrigin("Erlang","God of Truth",Chinese.name,Chinese,[Clever,Careful,Quick],[Leader,Justice],[General,Enforcer]),
    Fuxi= new secondOrigin("Fuxi","Creator Goddess and Muse of mankind",Chinese.name,Chinese,[Careful,Quick,Clever],[Father,Knowledge],[FreeSpirit,Thinker]),
    GaoYao= new secondOrigin("Gao Yao","God of Law",Chinese.name,Chinese,[Forceful,Clever,Careful],[Knowledge,Justice],[Enforcer,Thinker]),
    GuanYu= new secondOrigin("Guan Yu","18th Jade Emperor, God of Martial Power and Brotherhoods",Chinese.name,Chinese,[Forceful,Clever,Flashy],[Justice,War],[General,Enforcer]),
    Houyi= new secondOrigin("Houyi","God of the Sun and Archery",Chinese.name,Chinese,[Forceful,Flashy,Clever],[Sun],[Diplomat,Politician]),
    LeiGong= new secondOrigin("Lei Gong","God of Thunder",Chinese.name,Chinese,[Flashy,Forceful,Clever],[Sky,Fire],[Enforcer,Protector]),
    Nezha= new secondOrigin("Nezha","God of Honor and Youth",Chinese.name,Chinese,[Flashy,Quick,Clever],[Justice,Wit],[Protector,FreeSpirit]),
    Nuwa= new secondOrigin("Nuwa","Creator Goddess and Muse of mankind",Chinese.name,Chinese,[Careful,Quick,Clever],[Father,Knowledge],[FreeSpirit,Thinker]),
    Shangdi= new secondOrigin("Shangdi","Yellow Emperor, Overseer of Tiàn",Chinese.name,Chinese,[Forceful,Clever,Careful],[Leader,Order],[King,Enforcer]),
    Shennong= new secondOrigin("Shennong","God of Agriculture and Medicine",Chinese.name,Chinese,[Clever,Careful,Quick],[Knowledge,Nature],[Thinker,Harmonizer]),
    SunWukong= new secondOrigin("Sun Wukong","Monkey King, God of Trickery and Strength",Chinese.name,Chinese,[Flashy,Quick,Clever],[Wit],[FreeSpirit,Trickster]),
    Xiwangmu= new secondOrigin("Xiwangmu","Queen-Mother of the West and Keeper of the Golden Orchard",Chinese.name,Chinese,[Careful,Quick,Clever],[Wisdom,Nature],[Mother,Harmonizer]),
    Yanluo= new secondOrigin("Yanluo","Overseer of the Dead and Keeper of Di Yu",Chinese.name,Chinese,[Clever,Forceful,Sneaky],[Death],[Thinker,Enforcer]),
    Zhuanxu= new secondOrigin("Zhuanxu","Chinese",Chinese.name,Chinese,[Forceful,Clever,Quick],[Sky],[Enforcer,General]),

    Aengus= new secondOrigin("Aengus","God of Love and Youth",Celtic.name,Celtic,[Flashy,Quick,Forceful],[Love,Wit],[Harmonizer,Protector]),
    Aine= new secondOrigin("Aine","Goddess of Summer, Agriculture and Wealth",Celtic.name,Celtic,[Careful,Quick,Sneaky],[Nature,Fertility],[Diplomat,Protector]),
    Brigid= new secondOrigin("Brigid","Goddess of Spring, Fertility and Dawn",Celtic.name,Celtic,[Clever,Careful,Quick],[Fertility,Sky],[Diplomat,Thinker]),
    Cernunnos= new secondOrigin("Cernunnos","God of Druidism and Nature",Celtic.name,Celtic,[Clever,Careful,Sneaky],[Nature],[Harmonizer,FreeSpirit]),
    Dagda= new secondOrigin("Dagda","God of Masculinity and Magic, High King of Ireland",Celtic.name,Celtic,[Flashy,Forceful,Quick],[War,Nature],[General,King]),
    DianCécht= new secondOrigin("Dian Cécht","God of Crafting and Healing",Celtic.name,Celtic,[Careful,Clever,Forceful],[Nature,Knowledge],[Thinker,Protector]),
    Fand= new secondOrigin("Fand","Goddess of Mist",Celtic.name,Celtic,[Sneaky,Clever,Careful],[Water,Sky],[FreeSpirit]),
    Lugh= new secondOrigin("Lugh","God of Sky and Oaths",Celtic.name,Celtic,[Clever,Forceful,Quick],[Sky,Justice],[Enforcer,General]),
    ManannanmacLir= new secondOrigin("Manannan mac Lir","God of the Sea and Psychopomp",Celtic.name,Celtic,[Careful,Clever,Sneaky],[Water,Travel],[FreeSpirit,Protector]),
    Morrigan= new secondOrigin("The Morrigan","Goddess of War and Prophecy",Celtic.name,Celtic,[Forceful,Clever,Quick],[War,Death],[Thinker,Hunter]),
    Niamh= new secondOrigin("Niamh","Queen of Tir na nÓg",Celtic.name,Celtic,[Clever,Careful,Quick],[Travel,Leader],[King,Harmonizer]),
    NiemhMairbh= new secondOrigin("Niemh Mairbh","God of Retribution",Celtic.name,Celtic,[Sneaky,Clever,Forceful],[Death,Darkness],[Manipulator,Enforcer]),
    Ogma= new secondOrigin("Ogma","God of Strength and Eloquence",Celtic.name,Celtic,[Clever,Forceful,Careful],[War,Knowledge],[Thinker,General]),
    Zerris= new secondOrigin("Zerris","Machine-God of Technology",Celtic.name,Celtic,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),

    Chasqua= new secondOrigin("Chasqua","Goddess of Love, Happiness and Health",Inca.name,Inca,[Clever,Careful,Flashy],[Love, Nature],[Harmonizer,FreeSpirit]),
    Cochamama= new secondOrigin("Cochamama","Goddess of the Sea",Inca.name,Inca,[Careful,Clever,Forceful],[Water, Wisdom],[Mother,Harmonizer]),
    Illapa= new secondOrigin("Illapa","God of War and Weather",Inca.name,Inca,[Clever,Sneaky,Forceful],[War, Sky],[Protector,Enforcer]),
    Inti= new secondOrigin("Inti","God of the Sun",Inca.name,Inca,[Flashy,Forceful,Quick],[Leader, Sun],[King,Enforcer]),
    Kilyamama= new secondOrigin("Kilyamama","Goddess of the Moon",Inca.name,Inca,[Clever,Careful,Flashy],[Moon, Knowledge],[Politician,Thinker]),
    Supay= new secondOrigin("Supay","God of the Underworld",Inca.name,Inca,[Clever,Sneaky,Quick],[Death, Earth],[Manipulator,Enforcer]),
    Urcaguary= new secondOrigin("Urcaguary","God of Metal and Greed",Inca.name,Inca,[Flashy,Quick,Forceful],[Earth, Crafting],[FreeSpirit,Manipulator]),
    Viracocha= new secondOrigin("Viracocha","God of Creation and the Sky",Inca.name,Inca,[Clever,Careful,Forceful],[Father, Order],[Thinker]),

     Baldur= new secondOrigin("Baldur","God of Light, Beauty, Love and Happiness.",Norse.name,Norse,[Flashy,Careful,Quick],[Love,Fertility],[FreeSpirit,Prince]), 
     Freya= new secondOrigin("Freya","Goddess of the Gold, and War.",Norse.name,Norse,[Clever,Forceful,Flashy],[War,Crafting],[Diplomat,Manipulator]), 
     Freyr= new secondOrigin("Freyr","God of Farming, Weather and Fertility.",Norse.name,Norse,[Careful,Clever,Sneaky],[Fertility],[Harmonizer]), 
     Frigg= new secondOrigin("Frigg","Queen of the Gods.",Norse.name,Norse,[Clever,Sneaky,Careful],[Leader],[Politician,King]), 
     Heimdall= new secondOrigin("Heimdall","Protector of Asgard",Norse.name,Norse,[Sneaky,Careful,Clever],[Justice],[Protector,Manipulator]), 
     Hel= new secondOrigin("Hel","Goddess of the Dead, Overseer of Helheim",Norse.name,Norse,[Clever,Forceful,Sneaky],[Death],[Enforcer]), 
     Odin= new secondOrigin("Odin","King of Asgard, God of Magic, Wisdom, and Prophecy",Norse.name,Norse,[Clever,Sneaky,Forceful],[Leader,Father],[King,Manipulator]), 
     Sif= new secondOrigin("Sif","Goddess of Marriage",Norse.name,Norse,[Careful,Clever,Forceful],[Love,Fertility],[Harmonizer]), 
     Thor= new secondOrigin("Thor","God of Thunder and War",Norse.name,Norse,[Forceful,Flashy,Quick],[War,Sky],[FreeSpirit,Protector]), 
     Tyr= new secondOrigin("Tyr","God of Victory",Norse.name,Norse,[Forceful,Clever,Quick],[Justice,War],[Enforcer,General]), 
     Vidar= new secondOrigin("Vidar","God of Vengeance",Norse.name,Norse,[Forceful,Clever,Sneaky],[Justice,Darkness],[Enforcer,Protector]), 
     Loki= new secondOrigin("Loki","Trickster God",Norse.name,Norse,[Clever,Sneaky,Quick],[Wit],[Manipulator,Trickster]), 
     Bragi= new secondOrigin("Bragi","God of Poets",Norse.name,Norse,[Clever,Flashy,Careful],[Wit,Light],[FreeSpirit]), 
     Vali= new secondOrigin("Vali","God of Debate and Duel",Norse.name,Norse,[Flashy,Quick,Forceful],[Justice],[Enforcer]), 
     Ullr= new secondOrigin("Ullr","God of Survival",Norse.name,Norse,[Careful,Clever,Forceful],[Nature,Travel],[Hunter,Protector]), 

     Amaterasu= new secondOrigin("Amaterasu","Goddess of the Sun",Japanese.name,Japanese,[Clever,Flashy,Careful],[Sun,Leader],[Politician,Mother]), 
     Hachiman= new secondOrigin("Hachiman","God of Swordfighting, Archery and Change",Japanese.name,Japanese,[Clever,Forceful,Quick],[War,Wisdom],[Thinker,Leader]), 
     Izanagi= new secondOrigin("Izanagi","Lord of the Sky",Japanese.name,Japanese,[Careful,Quick,Sneaky],[Father,Sky],[FreeSpirit,Thinker]), 
     Raiden= new secondOrigin("Raiden","Lord of Thunder and Lightning",Japanese.name,Japanese,[Flashy,Forceful,Quick],[Sky],[FreeSpirit]), 
     Izanami= new secondOrigin("Izanami","Queen of the Underworld",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Death,Earth],[Enforcer,Manipulator]), 
     Ryujin= new secondOrigin("Ryujin","Dragon God of the Ocean Depths",Japanese.name,Japanese,[Forceful,Sneaky,Careful],[Water,Wit],[Thinker,King]), 
     Susanoo= new secondOrigin("Susano-o","Lord of Sea and Storms",Japanese.name,Japanese,[Flashy,Forceful,Clever],[Water,Travel],[FreeSpirit,Harmonizer]), 
     TsukiYomi= new secondOrigin("Tsuki-Yomi","God of the Moon",Japanese.name,Japanese,[Clever,Sneaky,Careful],[Moon],[Diplomat]), 
     Inari= new secondOrigin("Inari","Androgynous God/Goddess of Foxes and Prosperity",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Wit,Fertility],[Trickster,Harmonizer]), 
     AmenoUzume= new secondOrigin("Ame no Uzume","Goddess of Dawn, Mirth and Revelry",Japanese.name,Japanese,[Clever,Flashy,Sneaky],[Love,Wit,Sun],[Harmonizer,Diplomat]), 
     Sarutahiko= new secondOrigin("Sarutahiko","God of Strength and Guidance",Japanese.name,Japanese,[Careful,Forceful,Clever],[War,Wisdom],[Protector]),

     Ellykha= new secondOrigin("Ellykha","Goddess of Spilt Blood",Aztec.name,Aztec,[Forceful,Flashy,Quick],[War],[Enforcer]), 
     Huitzilopochtli= new secondOrigin("Huitzilopochtli","God of Blood, War and the Sun, Cardinal God of the South",Aztec.name,Aztec,[Forceful,Flashy,Clever],[War,Sun,Leader],[General]), 
     Miclántecuhtli= new secondOrigin("Miclántecuhtli","God of the Dead and Spirits",Aztec.name,Aztec,[Careful,Clever,Sneaky],[Death],[Thinker]), 
     Quetzalcoátl= new secondOrigin("Quetzalcoátl","God of Light, Civilization and Creation, Cardinal God of the West",Aztec.name,Aztec,[Clever,Careful,Flashy],[Leader,Wisdom],[Harmonizer,Politician]), 
     Tezcatlipoca= new secondOrigin("Tezcatlipoca","God of Change, Night and Destruction, Cardinal God of the North",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Moon,Darkness],[King]), 
     Tlazoltéotl= new secondOrigin("Tlazoltéotl","Goddess of Filth",Aztec.name,Aztec,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Manipulator]), 
     XipeTotec= new secondOrigin("Xipe Totec","God of Maize and Growth, Cardinal God of the East",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Fertility,Darkness],[Trickster]), 
     Xochipilli= new secondOrigin("Xochipilli","God of Art, Dance and Flowers",Aztec.name,Aztec,[Flashy,Clever,Forceful],[Crafting,Nature],[FreeSpirit,Protector]), 
     Xochiquetzal= new secondOrigin("Xochiquetzal","Goddess of Fertility and Female Power",Aztec.name,Aztec,[Clever,Forceful,Sneaky],[Fertility,Love],[Mother,Protector]), 
     Xolotl= new secondOrigin("Xolotl","God of Lightning, Death and Psychopomp",Aztec.name,Aztec,[Forceful,Clever,Careful],[Death,Sky],[Protector,Enforcer]), 

     Huracán= new secondOrigin("Huracán","Sky as Tempest",SkyTitan.name,SkyTitan,[Forceful,Quick,Clever],[Sky],[Enforcer,Hunter]), 
     Ouranos= new secondOrigin("Ouranos","SkyTitan as Calm",SkyTitan.name,SkyTitan,[Clever,Careful,Forceful],[Sky,Father],[Thinker,Protector]), 
     Shu= new secondOrigin("Shu","Sky as Stillness",SkyTitan.name,SkyTitan,[Quick,Clever,Sneaky],[Sky,Order],[Enforcer,Manipulator]), 
     Typhon= new secondOrigin("Typhon","Sky as Destruction",SkyTitan.name,SkyTitan,[Forceful,Clever,Quick],[Sky,War],[Enforcer,Hunter]),
     Tlaloc= new secondOrigin("Tlaloc","Titan of Rain",SkyTitan.name,SkyTitan,[Clever,Flashy,Quick],[Sky,Water],[FreeSpirit]),

     Atlas= new secondOrigin("Atlas","Titan of Gravity",OrderTitan.name,OrderTitan,[Careful,Forceful,Flashy],[Order,Earth],[FreeSpirit,Protector]),
     Coeus= new secondOrigin("Coeus","Titan of Knowledge",OrderTitan.name,OrderTitan,[Clever,Sneaky,Careful],[Order,Knowledge],[Thinker,Manipulator]),
     Kronus= new secondOrigin("Kronus","Titan of Control",OrderTitan.name,OrderTitan,[Forceful,Clever,Careful],[Leader,Order],[King,General]),
     Themis= new secondOrigin("Themis","Titan of Law",OrderTitan.name,OrderTitan,[Careful,Clever,Forceful],[Order,Justice],[Thinker,Diplomat]),
     Chronos= new secondOrigin("Chronos","Titan of Time",OrderTitan.name,OrderTitan,[Careful,Clever,Forceful],[Order],[FreeSpirit,Thinker]),

     Aten= new secondOrigin("Aten","Titan of Brightness",Light.name,Light,[Clever,Forceful,Flashy],[Sun],[King,Manipulator]),
     Helios= new secondOrigin("Helios","Titan of the Sun",Light.name,Light,[Clever,Flashy,Quick],[Sun],[FreeSpirit]),
     Hemera= new secondOrigin("Hemera","Titan of Day",Light.name,Light,[Careful,Flashy,Clever],[Sun,Fertility],[Harmonizer,Mother]),
     Hyperion= new secondOrigin("Hyperion","Titan of Glory",Light.name,Light,[Flashy,Forceful,Careful],[Leader,Sun],[General,King]),
     Zhulong= new secondOrigin("Zhulong","Titan of Illumination",Light.name,Light,[Clever,Careful,Flashy],[Wisdom,Sun],[Thinker]),

     Sedna= new secondOrigin("Sedna","Titan of the Providing Sea",Ocean.name,Ocean,[Clever,Careful,Sneaky],[Water,Fertility],[Harmonizer]),
     Charybdis= new secondOrigin("Charybdis","Titan of Drowning",Ocean.name,Ocean,[Forceful,Flashy,Sneaky],[Water,Death],[Hunter,Manipulator]),
     Yam= new secondOrigin("Yam","Titan of the Raging Sea",Ocean.name,Ocean,[Forceful,Flashy,Clever],[Leader,Water],[King,Manipulator]),

     Heget= new secondOrigin("Heget","Titan of Fertility",Ocean.name,Ocean,[Forceful,Clever,Sneaky],[Water,Fertility],[Protector]),
     Gaia= new secondOrigin("Gaia","Titan of Life",World.name,World,[Forceful,Careful,Flashy],[Fertility,Nature],[Mother]),
     GreenMan= new secondOrigin("The Green Man","Titan of Nature",World.name,World,[Sneaky,Careful,Flashy],[Nature],[Harmonizer,FreeSpirit]),
     Ourea= new secondOrigin("Ourea","Titan of Mountains",World.name,World,[Careful,Clever,Forceful],[Earth],[Thinker]),
     Kur= new secondOrigin("Kur","Titan of Expanse",World.name,World,[Forceful,Careful,Clever],[Earth,Travel],[FreeSpirit]),

     Surtr= new secondOrigin("Surtr","Titan of Destruction",FireTitan.name,FireTitan,[Forceful,Flashy,Quick],[Fire],[General,King]),
     Prometheus= new secondOrigin("Prometheus","Titan of Invention",FireTitan.name,FireTitan,[Clever,Quick,Flashy],[Fire,Crafting],[Thinker,FreeSpirit]),
     Kagutsuchi= new secondOrigin("Kagutsuchi","Titan of Lava",FireTitan.name,FireTitan,[Flashy,Forceful,Quick],[Fire,Earth],[Protector]),
     Nemesis= new secondOrigin("Nemesis","Titan of Divine Retribution",FireTitan.name,FireTitan,[Forceful,Careful,Flashy],[Fire,Justice],[Enforcer]),
     Vrtra= new secondOrigin("Vrtra","Titan of Drought",FireTitan.name,FireTitan,[Flashy,Careful,Clever],[Fire,Death],[Manipulator]),
     Xiuhtecuhtli= new secondOrigin("Xiuhtecuhtli","Titan of Life",FireTitan.name,FireTitan,[Flashy,Quick,Clever],[Fire,Fertility],[Harmonizer]),
     Auahituroa= new secondOrigin("Auahituroa","Titan of Stellar Fire",FireTitan.name,FireTitan,[Flashy,Forceful,Quick],[Fire,Sky],[FreeSpirit]),

    Abzu= new secondOrigin("Abzu","Titan of The Abyss",Patala.name,Patala,[Careful,Sneaky,Forceful],[Water,Darkness],[FreeSpirit,Manipulator]),
    CromCruach= new secondOrigin("Crom Cruach","Titan of Decay",Patala.name,Patala,[Forceful,Sneaky,Quick],[Earth,Death],[General,Enforcer]),
    DisPater= new secondOrigin("Dis Pater","Titan of Riches",Patala.name,Patala,[Clever,Flashy,Careful],[Earth,Crafting],[Harmonizer]),
    Erebus= new secondOrigin("Erebus","Titan of Darkness",Patala.name,Patala,[Careful,Sneaky,Clever],[Earth,Darkness],[Diplomat,Thinker]),
    Erlik= new secondOrigin("Erlik","Titan of Underground",Patala.name,Patala,[Forceful,Flashy,Sneaky],[Earth,Death],[King,Manipulator]),
    Tiamat= new secondOrigin("Tiamat","Titan of Water as Life",Ocean.name,Ocean,[Clever,Careful,Sneaky],[Water,Fertility],[Mother]),

    Apep= new secondOrigin("Apep","Titan of Darkness",Night.name,Night,[Clever,Forceful,Sneaky],[Darkness],[Hunter,Manipulator]),
    Mikaboshi= new secondOrigin("Mikaboshi","Titan of Void",Night.name,Night,[Clever,Forceful,Sneaky],[Darkness,Death],[Manipulator,Enforcer]),
    Nut= new secondOrigin("Nut","Titan of Stars",Night.name,Night,[Careful,Sneaky,Clever],[Darkness,Sky],[Thinker,Protector]),
    Nott= new secondOrigin("Nott","Titan of the Veil",Night.name,Night,[Careful,Clever,Forceful],[Darkness,Sky],[Thinker,Enforcer]),
    Fenrir= new secondOrigin("Fenrir","Titan of Fear",Night.name,Night,[Forceful,Clever,Quick],[Darkness,Death],[Hunter]),
    Dracula= new secondOrigin("Dracula","Titan of Nightmares",Night.name,Night,[Clever,Forceful,Flashy],[Death,Darkness],[Hunter,Manipulator]),
    Selene= new secondOrigin("Selene","Titan of Moon",Night.name,Night,[Clever,Careful,Quick],[Darkness,Moon],[Enforcer,Diplomat]),
    Hypnos= new secondOrigin("Hypnos","Titan of Sleep",Night.name,Night,[Clever,Sneaky,Quick],[Darkness,Order],[Harmonizer,Thinker]),


    Camazotz= new secondOrigin("Camazotz","Titan of Devouring",DeathTitan.name,DeathTitan,[Forceful,Flashy,Quick],[Death],[Hunter]),
    GrimReaper= new secondOrigin("Grim Reaper","Titan of the Great Equalizer",DeathTitan.name,DeathTitan,[Forceful,Flashy,Clever],[Death],[King]),
    Styx= new secondOrigin("Styx","Titan of the Journey",DeathTitan.name,DeathTitan,[Careful,Clever,Quick],[Death,Travel],[Harmonizer]),
    Nirrti= new secondOrigin("Nirrti","Titan of Horror",DeathTitan.name,DeathTitan,[Flashy,Forceful,Sneaky],[Death],[Manipulator]),


    Sōhei= new secondOrigin("Sōhei","Japanese Warrior Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Clever,Quick],[War,Wisdom],[General,Diplomat]),
    Yamabushi= new secondOrigin("Yamabushi","Japanese Hermit Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Careful,Clever,Forceful],[Wisdom,Nature],[Thinker,FreeSpirit]),
    Shaolin= new secondOrigin("Shaolin","Chinese Warrior Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Flashy,Careful],[War,Knowledge],[Enforcer,FreeSpirit]),
    Cuauhtlocelotl= new secondOrigin("Cuauhtlocelotl","Aztec Animal Warriors",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Clever,Careful],[War,Nature],[Hunter]),
    TeutonicKnights= new secondOrigin("Teutonic Knights","Secretive European Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Clever,Careful],[Darkness,Crafting],[Hunter,Politician]),
    TheSevenTriads= new secondOrigin("The Seven Triads","Chinese Criminal Gangs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Forceful,Clever],[Darkness,Wit],[Enforcer,Politician]),
    Yakuza= new secondOrigin("Yakuza","Japanese Criminal Gangs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Sneaky,Quick],[Order,War],[Enforcer,Manipulator]),
    DzheydBratstvo= new secondOrigin("Dzheyd Bratstvo","Russian Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Flashy,Quick],[Darkness,Sky],[Enforcer]),
    SicilianMafia= new secondOrigin("Sicilian Mafia","Italian Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Flashy,Careful,Forceful],[Water,Travel],[Prince,Diplomat]),
    TheTecuani= new secondOrigin("The Tecuani","Latin American Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Careful,Sneaky,Forceful],[Nature,Darkness],[Hunter]),

    Keter= new secondOrigin("Keter","Prophets and Scholars",Cabal.name,Cabal,[Clever,Careful,Forceful],[Wisdom],[Thinker]),
    Binah= new secondOrigin("Binah","Analysts and Wizards",Cabal.name,Cabal,[Careful,Clever,Flashy],[Fertility,Wit],[Mother,Thinker]),
    Chokhmah= new secondOrigin("Chokhmah","Creative Geniuses",Cabal.name,Cabal,[Clever,Flashy,Quick],[Father,Crafting],[Thinker,Prince]),
    Daat= new secondOrigin("Da'at","Secretive Leaders of the Cabal",Cabal.name,Cabal,[Careful,Clever,Sneaky],[Leader],[King,General]),
    Gevurah= new secondOrigin("Gevurah","Righteous Enforcers",Cabal.name,Cabal,[Flashy,Forceful,Quick],[Fire,Justice],[Enforcer]),
    Chesed= new secondOrigin("Chesed","Healers and Diplomats",Cabal.name,Cabal,[Careful,Clever,Sneaky],[Love,Water],[Harmonizer]),
    Tipheret= new secondOrigin("Tipheret","Ensurers of Balance",Cabal.name,Cabal,[Clever,Flashy,Careful],[Order,Travel],[Diplomat,Harmonizer]),
    Hod= new secondOrigin("Hod","Problem-Solvers",Cabal.name,Cabal,[Clever,Forceful,Sneaky],[Wit,Sky],[Enforcer,Thinker]),
    Netzach= new secondOrigin("Netzach","Generals and Businessmen",Cabal.name,Cabal,[Forceful,Flashy,Quick],[War,Leader],[General,Manipulator]),
    Yesod= new secondOrigin("Yesod","Link between the Spiritual and Physical",Cabal.name,Cabal,[Careful,Forceful,Sneaky],[Nature,Travel],[Enforcer,FreeSpirit]),
    Malkuth= new secondOrigin("Malkuth","Ground Operatives",Cabal.name,Cabal,[Sneaky,Careful,Clever],[Nature],[Enforcer]),

    CopperLodge= new secondOrigin("Copper Lodge","Biochemists",Illuminati.name,Illuminati,[Clever,Careful,Flashy],[Nature,Crafting],[Thinker]),
    BronzeLodge= new secondOrigin("Bronze Lodge","Artists",Illuminati.name,Illuminati,[Flashy,Quick,Clever],[Light,Wit],[FreeSpirit]),
    SilverLodge= new secondOrigin("Silver Lodge","Engineers and Inventors",Illuminati.name,Illuminati,[Clever,Flashy,Quick],[Crafting],[Thinker]),
    GoldLodge= new secondOrigin("Gold Lodge","Bankers",Illuminati.name,Illuminati,[Careful,Clever,Sneaky],[Order,Knowledge],[Thinker,Manipulator]),
    OrichalcumLodge= new secondOrigin("Orichalcum Lodge","Specialists of the Occult Arts",Illuminati.name,Illuminati,[Clever,Forceful,Careful],[Knowledge,Darkness],[Thinker]),
    IronLodge= new secondOrigin("Iron Lodge","Believers in Self-Improvement",Illuminati.name,Illuminati,[Forceful,Flashy,Quick],[War,Father],[Enforcer,Thinker]),
    LeadLodge= new secondOrigin("Lead Lodge","Criminals and Ne'er-do-wells",Illuminati.name,Illuminati,[Sneaky,Careful,Quick],[Darkness,Earth],[Manipulator,Enforcer]),
    SteelLodge= new secondOrigin("Steel Lodge","Warriors of the Illuminati",Illuminati.name,Illuminati,[Forceful,Flashy,Quick],[War],[Enforcer]),
    MercuryLodge= new secondOrigin("Mercury Lodge","Scientists and Philosophers",Illuminati.name,Illuminati,[Clever,Careful,Flashy],[Knowledge],[Thinker]),
    GalahadsCastle= new secondOrigin("Galahad\'s Castle","Destroyers of Evil and Wickedness",CircleofMerlin.name,CircleofMerlin,[Flashy,Forceful,Quick],[Light,War],[Enforcer]),
    PercivalsCastle= new secondOrigin("Percival\'s Castle","Protectors of Relics and Lands",CircleofMerlin.name,CircleofMerlin,[Careful,Quick,Clever],[Knowledge,War],[Protector]),
    GawainsCastle= new secondOrigin("Gawain's Castle","Duelists and Assassins",CircleofMerlin.name,CircleofMerlin,[Flashy,Careful,Quick],[War,Death],[Enforcer]),
    LamorakCastle= new secondOrigin("Lamorak\'s Castle","Brawlers and Street Fighters",CircleofMerlin.name,CircleofMerlin,[Forceful,Flashy,Quick],[Earth,Darkness],[Enforcer]),
    BorsCastle= new secondOrigin("Bors\' Castle","Wanderers and Storytellers",CircleofMerlin.name,CircleofMerlin,[Careful,Clever,Sneaky],[Travel],[FreeSpirit]),

    Templars= new secondOrigin("Templars","Amibitious European Oligarchs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Clever,Sneaky,Forceful],[Justice,Earth],[Politician,Protector]), 
    TristansCastle= new secondOrigin("Tristan's Castle","Diplomats",CircleofMerlin.name,CircleofMerlin,[Careful,Flashy,Clever],[Light,Nature],[Harmonizer]), 
    GeraintsCastle= new secondOrigin("Geraint's Castle","Druidic Experts",CircleofMerlin.name,CircleofMerlin,[Clever,Careful,Quick],[Nature],[FreeSpirit]), 
    GarethsCastle= new secondOrigin("Gareth's Castle","Infiltrators and Information Gatherers",CircleofMerlin.name,CircleofMerlin,[Sneaky,Careful,Quick],[Darkness,Knowledge],[Trickster]), 
    BediveresCastle= new secondOrigin("Bedivere's Castle","Craftsmen",CircleofMerlin.name,CircleofMerlin,[Clever,Flashy,Quick],[Crafting],[Protector]), 
    KaysCastle= new secondOrigin("Kay's Castle","Brutish Enforcers",CircleofMerlin.name,CircleofMerlin,[Forceful,Flashy,Quick],[War],[Enforcer]), 
    GaherisCastle= new secondOrigin("Gaheri's Castle","Internal Police",CircleofMerlin.name,CircleofMerlin,[Sneaky,Flashy,Careful],[Darkness,Order],[Protector,Manipulator]), 
    ArthursCastle= new secondOrigin("Arthur's Castle","Leaders of the Knights",CircleofMerlin.name,CircleofMerlin,[Flashy,Careful,Clever],[Leader],[King,General]), 
    Lancelot= new secondOrigin("Lancelot","Secret Order",CircleofMerlin.name,CircleofMerlin,[Sneaky,Careful,Clever],[Darkness],[Enforcer,Manipulator]),

    SummerNymph= new secondOrigin("Summer Nymph","Spirits of Springs and Flowers",SummerCourt.name,SummerCourt,[Flashy,Quick,Clever],[Sun,Fertility],[FreeSpirit,Harmonizer]),
    SummerDryad= new secondOrigin("Summer Dryad","Spirits of Trees and Mountains",SummerCourt.name,SummerCourt,[Careful,Flashy,Forceful],[Nature,Sun],[FreeSpirit,Trickster]),
    LightElf= new secondOrigin("Light Elf","Organized, Martial Spirits of Fields and Plains",SummerCourt.name,SummerCourt,[Forceful,Careful,Flashy],[Light,Nature],[General,Diplomat]),
    SummerFey= new secondOrigin("Summer Fey","Spirits of Forests and Meadows",SummerCourt.name,SummerCourt,[Sneaky,Clever,Careful],[Wit,Light],[Trickster,Diplomat]),
    SummerNaiad= new secondOrigin("Summer Naiad","Spirits of the Sea",SummerCourt.name,SummerCourt,[Careful,Sneaky,Forceful],[Water,Nature],[Trickster,Harmonizer]),
    Korrigans= new secondOrigin("Summer Korrigans","Spirits of the Roots and Soil",SummerCourt.name,SummerCourt,[Clever,Sneaky,Quick],[Nature],[FreeSpirit]),
    Gnomes= new secondOrigin("Summer Gnomes","Spirits of Technology and Creativity",SummerCourt.name,SummerCourt,[Clever,Flashy,Quick],[Nature,Crafting],[Thinker]),
    Leprechauns= new secondOrigin("Summer Leprechauns","Spirits of Wealth and Fertility",SummerCourt.name,SummerCourt,[Sneaky,Quick,Clever],[Nature,Fertility],[Trickster,FreeSpirit]),

    WinterNymph= new secondOrigin("Winter Nymph","Spirits of Springs and Ice",WinterCourt.name,WinterCourt,[Flashy,Quick,Clever],[Moon,Nature],[FreeSpirit,Trickster]),
    WinterDryad= new secondOrigin("Winter Dryad","Spirits of Trees and Mountains",WinterCourt.name,WinterCourt,[Careful,Flashy,Forceful],[Nature,Darkness],[FreeSpirit,Trickster]),
    DarkElf= new secondOrigin("Dark Elf","Organized, Martial Spirits of Caves and Fjords",WinterCourt.name,WinterCourt,[Forceful,Careful,Flashy],[Darkness,Earth],[General,Enforcer]),
    WinterFey= new secondOrigin("Winter Fey","Spirits of Forests and Swamps",WinterCourt.name,WinterCourt,[Sneaky,Clever,Careful],[Wit,Darkness],[Manipulator]),
    WinterNaiad= new secondOrigin("Winter Naiad","Spirits of the Sea",WinterCourt.name,WinterCourt,[Careful,Sneaky,Forceful],[Water,Darkness],[Trickster]),
    WinterKorrigans= new secondOrigin("Winter Korrigans","Spirits of the Roots and Soil",WinterCourt.name,WinterCourt,[Clever,Sneaky,Quick],[Nature],[FreeSpirit]),
    WinterGnomes= new secondOrigin("Winter Gnomes","Spirits of Technology and Creativity",WinterCourt.name,WinterCourt,[Clever,Flashy,Quick],[Darkness,Crafting],[Thinker]),
    WinterLeprechauns= new secondOrigin("Winter Leprechauns","Spirits of Wealth and Caves",WinterCourt.name,WinterCourt,[Sneaky,Quick,Clever],[Nature,Death],[Manipulator,FreeSpirit]),

    EasternDragon= new secondOrigin("Eastern Dragon","Wise Dragons of Asia",JadeSea.name,JadeSea,[Clever,Careful,Flashy],[Water,Nature],[Thinker,Diplomat]), 
    WesternDragon= new secondOrigin("Western Dragon","Mighty and Proud Dragons of Northern Europe",JadeSea.name,JadeSea,[Forceful,Flashy,Clever],[Sky,Nature],[King,Manipulator]), 
    Coatl= new secondOrigin("Coatl","Free and Wild Dragons of South America",JadeSea.name,JadeSea,[Flashy,Clever,Sneaky],[Sky],[FreeSpirit]), 
    Naga= new secondOrigin("Naga","Organized and Ruthless Dragons of South Asia",JadeSea.name,JadeSea,[Forceful,Quick,Clever],[Water,Order],[Enforcer,Politician]), 
    Wyvern= new secondOrigin("Wyvern","Poisonous and Wicked Dragons of Western Europe",JadeSea.name,JadeSea,[Quick,Forceful,Flashy],[Death,Earth],[Enforcer,Manipulator]),

    Wereboar = new secondOrigin("Were-boar","Industrious and Brash Were-Boars",DarkForest.name,DarkForest,[Forceful,Clever,Flashy],[Crafting,Nature],[Enforcer,Thinker]), 
    LoupGarou= new secondOrigin("Loup-Garou","Proud and Wily Werewolves",DarkForest.name,DarkForest,[Sneaky,Clever,Quick],[Moon,Nature],[Politician,Enforcer]), 
    Hag= new secondOrigin("Hag","Wicked Witches",DarkForest.name,DarkForest,[Clever,Sneaky,Careful],[Death,Darkness],[FreeSpirit,Trickster]), 
    Ent= new secondOrigin("Ent","Walking Trees",DarkForest.name,DarkForest,[Forceful,Careful,Flashy],[Nature],[FreeSpirit]), 
    Minotaur= new secondOrigin("Minotaur","Half-Bull Hulking Giants",DarkForest.name,DarkForest,[Forceful,Flashy,Quick],[War],[Enforcer]), 
    Centaur = new secondOrigin("Centaur","Genius but Impulsive Half-Horses",DarkForest.name,DarkForest,[Clever,Careful,Quick],[Knowledge,War],[Thinker]), 
    Satyr= new secondOrigin("Satyr","Eccentric Half-Goat",DarkForest.name,DarkForest,[Quick,Sneaky,Flashy],[Fertility],[Trickster]), 
    Rakshasa= new secondOrigin("Rakshasa","Evil Demons",Shambhala.name,Shambhala,[Forceful,Flashy,Clever],[War,Darkness],[Enforcer,Manipulator]), 
    Asura= new secondOrigin("Asura","Ancient Enemies of the Gods",Shambhala.name,Shambhala,[Flashy,Clever,Careful],[Fire,Order],[Politician]), 
    Vanara= new secondOrigin("Vanara","Militaristic Half-Monkeys",Shambhala.name,Shambhala,[Flashy,Clever,Sneaky],[Nature,War],[Enforcer,Diplomat])
];

function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function FilterOrigins(array){
    var originsOptions = document.getElementById("origins").options;
    var originsIndex = document.getElementById("origins").selectedIndex;
    var resultArray = [];
    
    if(originsOptions[originsIndex].value != "noPreference"){
        if(originsOptions[originsIndex].value === "Gods"){
            for(var i = 0; i < array.length; i++){
                var arrayObject = array[i];
                if(arrayObject.originVar.type == "God"){
                    resultArray.push(arrayObject);
                }
            }
        }
        else if(originsOptions[originsIndex].value === "Titans"){
            for(var i = 0; i < array.length; i++){
                var arrayObject = array[i];
                if(arrayObject.originVar.type == "Titans"){
                    resultArray.push(arrayObject);
                }
            }
        }
        else if(originsOptions[originsIndex].value === "Otherworlds"){
            for(var i = 0; i < array.length; i++){
                var arrayObject = array[i];
                if(arrayObject.originVar.type == "Otherworlds"){
                    resultArray.push(arrayObject);
                }
            }
        }
        else if(originsOptions[originsIndex].value === "Enlightened"){
            for(var i = 0; i < array.length; i++){
                var arrayObject = array[i];
                if(arrayObject.originVar.type == "Enlightened"){
                    resultArray.push(arrayObject);
                }
            }
        }
        else{
            for(var i = 0; i < array.length; i++){
                var arrayObject = array[i];
                if(arrayObject.originVar.name == originsOptions[originsIndex].value){
                    resultArray.push(arrayObject);
                }
            }
        }
    }
    
    if(resultArray.length == 0){
        return array;
    }
    else{
        return resultArray;
    }
}

function FilterApproaches(array){
    var approachOptions = document.getElementById("approaches").options;
    var approachIndex = document.getElementById("approaches").selectedIndex;
    var resultArray = [];
    
    if(approachOptions[approachIndex].value != "noPreference"){
        for(var i = 0; i < array.length; i++){
            var arrayObject = array[i];
            if(arrayObject.approaches[0].name === approachOptions[approachIndex].value || arrayObject.approaches[1].name === approachOptions[approachIndex].value || arrayObject.approaches[2].name === approachOptions[approachIndex].value){
                resultArray.push(arrayObject);
            }
        }
        
        if(resultArray.length == 0){
            return array;
        }
        else{
            return resultArray;
        }
    }
}

function FilterDomains(array){
    var domainOptions = document.getElementById("domains").options;
    var domainIndex = document.getElementById("domains").selectedIndex;
    var resultArray = [];
    
    if(domainOptions[domainIndex].value != "noPreference"){
        for(var i = 0; i < array.length; i++){
            var arrayObject = array[i];
            if(arrayObject.approaches[0].name === domainOptions[domainIndex].value || arrayObject.approaches[1].name === domainOptions[domainIndex].value || arrayObject.approaches[2].name === domainOptions[domainIndex].value){
                resultArray.push(arrayObject);
            }
        }
    }
    
    if(resultArray.length == 0){
        return array;
    }
    else{
        return resultArray;
    }
}

function FilterPersonalities(array){
    var personnalityOptions = document.getElementById("personality").options;
    var personnalityIndex = document.getElementById("personality").selectedIndex;
    var resultArray = [];
    
    if(personnalityOptions[personnalityIndex].value != "noPreference"){
        for(var i = 0; i < array.length; i++){
            var arrayObject = array[i];
            if(arrayObject.approaches[0].name === personnalityOptions[personnalityIndex].value || arrayObject.approaches[1].name === personnalityOptions[personnalityIndex].value || arrayObject.approaches[2].name === personnalityOptions[personnalityIndex].value){
                resultArray.push(arrayObject);
            }
        }        
    }
    
    if(resultArray.length == 0){
        return array;
    }
    else{
        return resultArray;
    }
}

function DisplayGodFinderErrorMessage(message){
    var messageContainer = document.getElementById("noMatch");
    var messageNoteElement = document.createElement("div");
    var messageSpan= document.createElement("span");
    
    if(messageContainer.innerHTML == "" || !$(messageContainer).find(".note-info")){
        messageSpan.innerHTML = message;
        messageNoteElement.classList.add("note");
        messageNoteElement.classList.add("note-danger");
        messageNoteElement.appendChild(messageSpan);
        messageContainer.appendChild(messageNoteElement);
    }
}

function DisplayNoteInformation(message){
    var messageContainer = document.getElementById("noMatch");
    var messageNoteElement = document.createElement("div");
    var messageSpan= document.createElement("span");
    
    if(messageContainer.innerHTML == ""  || !$(messageContainer).find(".note-danger")){
        messageSpan.innerHTML = message;
        messageNoteElement.classList.add("note");
        messageNoteElement.classList.add("note-info");
        messageNoteElement.appendChild(messageSpan);
        messageContainer.appendChild(messageNoteElement);
    }
}

function OpenWikiPage(element){
    var type = element.getAttribute("data-group");
    var personaName = element.getAttribute("data-page");
    
    RequestInfoFromWiki(personaName);
}

function CreateButton(GodParams){
    var resultsContainer = document.getElementById("FoundGodsContainer");
    var colContainer = document.createElement("div");
    var globalButtonContainer = document.createElement("div");
    var dropButton = document.createElement("a");
    var godName = document.createElement("span");
    var godArrowDown = document.createElement("i");
    var actionslist = document.createElement("ul");
    var openDialogInfo = document.createElement("li");
    var openLegendaries = document.createElement("li");
    var openDialogInfoAction = document.createElement("a");
    var openLegendariesAction = document.createElement("a");
    var infoActionIcon = document.createElement("i");
    var infoActionLabel = document.createElement("span");
    var legendActionIcon = document.createElement("i");
    var legendActionLabel = document.createElement("span");
    
    $(colContainer).addClass("col-md-3 col-sm-6 col-lg-3");
    $(globalButtonContainer).addClass("btn-group");
    globalButtonContainer.style.marginBottom = "5px";
    globalButtonContainer.style.width = "100%";
    $(dropButton).addClass("btn btn-square btn-default");
    dropButton.setAttribute("data-toggle", "dropdown");
    dropButton.style.width = "100%";
    godName.innerHTML = GodParams.name;
    godName.style.marginRight = "5px";
    godName.style.float = "left";
    $(godArrowDown).addClass("fa fa-chevron-down");
    godArrowDown.style.float = "right";
    $(actionslist).addClass("dropdown-menu");
    actionslist.setAttribute("role","menu");
    $(infoActionIcon).addClass("fa fa-info-circle");
    infoActionLabel.innerHTML = "More information";
    openDialogInfoAction.setAttribute("data-page", GodParams.name);
    openDialogInfoAction.setAttribute("data-group", GodParams.originVar.type);
    $(legendActionIcon).addClass("fa fa-flash");
    legendActionLabel.innerHTML = "See associated Abilities";
    //openLegendariesAction.setAttribute("data-init", true);
    
    
    dropButton.appendChild(godName);
    dropButton.appendChild(godArrowDown);
    openLegendariesAction.appendChild(legendActionIcon);
    openLegendariesAction.appendChild(legendActionLabel);
    openLegendaries.appendChild(openLegendariesAction);
    openDialogInfoAction.appendChild(infoActionIcon);
    openDialogInfoAction.appendChild(infoActionLabel);
    openDialogInfo.appendChild(openDialogInfoAction);
    actionslist.appendChild(openLegendaries);
    actionslist.appendChild(openDialogInfo);
    globalButtonContainer.appendChild(dropButton);
    globalButtonContainer.appendChild(actionslist);
    colContainer.appendChild(globalButtonContainer);
    resultsContainer.appendChild(colContainer);
    
    openLegendariesAction.addEventListener("click",function(){
        ComputeLegendaries(this,GodParams);
    });
    
    openDialogInfoAction.addEventListener("click",function(){
        OpenWikiPage(this);
    });
}

function ComputeLegendaries(e,GodParams){
    /*if(e.getAttribute("data-init") == "true"){
        e.setAttribute("data-init", "false");
    }
    else{
        ChosenGod = GodParams.name;
        LegendaryMakerTotal();
    }*/
    
    ChosenGod = GodParams.name;
    LegendaryMakerTotal();
}

function ComputeNewAbilities(element){
    rolesChange(element); 
    setFirstRole(element);
    LegendaryMakerTotal();
}

function AdjustAbilities(element){
    setSecondRole(element);
    LegendaryMakerTotal();
}

function CreateGodContainer(GodParams){
    CreateButton(GodParams);
}

function godRecommender(){
    secondOriginArray = secondOriginArray.sort(compare);
    
    var newSecondOriginArray = secondOriginArray;
    var originsOptions = document.getElementById("origins").options;
    var originsIndex = document.getElementById("origins").selectedIndex;
    var approachOptions = document.getElementById("approaches").options;
    var approachIndex = document.getElementById("approaches").selectedIndex;
    var domainOptions = document.getElementById("domains").options;
    var domainIndex = document.getElementById("domains").selectedIndex;
    var personnalityOptions = document.getElementById("personality").options;
    var personnalityIndex = document.getElementById("personality").selectedIndex;
    var godCounter = 0;
    var maxGodResults = 30;

    if(originsOptions[originsIndex].value != "noPreference" || approachOptions[approachIndex].value != "noPreference" ||
        domainOptions[domainIndex].value != "noPreference" || personnalityOptions[personnalityIndex].value != "noPreference"){

        // Filters the Origins
        newSecondOriginArray = FilterOrigins(newSecondOriginArray);

        // Filter the Approaches
        newSecondOriginArray = FilterApproaches(newSecondOriginArray);

        // Filters the Domains
        newSecondOriginArray = FilterDomains(newSecondOriginArray);

        // Filter the Personalities
        newSecondOriginArray = FilterPersonalities(newSecondOriginArray);
    

        
        if(newSecondOriginArray.length === 0){
            DisplayGodFinderErrorMessage("No God Found !");
        }
        else{
            DisplayNoteInformation("Click on a result for more information");
        }
        
        document.getElementById("FoundGodsContainer").innerHTML = ""; //On vide le résultat de la recherche entre deux changements de filtres
        
        for(var i = 0; i < newSecondOriginArray.length; i++){
            GodParams = newSecondOriginArray[i];
            godCounter+=1;
            
            if(godCounter <= maxGodResults){
                CreateGodContainer(GodParams);
            }
        }
    }
}

function adder(value){
    for(i=0;i<newAbilitiesArray.length;i++){
        if(Math.round(Total.legendaries[i])==value && counter1<=9){ 
            legendariesFound.push([newAbilitiesArray[i].name + "\n",newAbilitiesArray[i].description]); counter1+=1;
        }
    }
    
    for(i=0;i<skillsArray.length;i++){
        if(Math.round(Total.skills[i])==value && counter2<=7){ 
            skillsFound.push([skillsArray[i].name +  "\n",skillsArray[i].description]); 
            counter2+=1
        }
    }
}

function exampleLegendaryMaker(){

    Total = new parameterCalculator("Total","Default",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

    counter = 0;
    counter1 = 0;
    counter2 = 0;
    
    for(i=0;i<newAbilitiesArray.length;i++){

        Total.legendaries[i] += godFound.originVar.legendaries[i]/2 + (godFound.approaches[0].legendaries[i]*3 + godFound.approaches[1].legendaries[i]*2 + godFound.approaches[2].legendaries[i])/12;
        if(godFound.domains.length === 1){
            Total.legendaries[i] += godFound.domains[0].legendaries[i]/2;
        }
        else if(godFound.domains.length === 2){
            Total.legendaries[i] += (godFound.domains[0].legendaries[i] + godFound.domains[1].legendaries[i])/4;
        }
        
        if(godFound.roles.length === 1){
            Total.legendaries[i] += godFound.roles[0].legendaries[i]/2;
        }
        else if(godFound.roles.length === 2){
            Total.legendaries[i] += (godFound.roles[0].legendaries[i] + godFound.roles[1].legendaries[i])/4;
        }

        Total.legendaries[i]+=Math.floor((roleFound.legendaries[i]/20*6+roleFound2.legendaries[i]/20*4)) 
	  	console.log(newAbilitiesArray[i].name + " - " + Total.legendaries[i])
    } 	


    

    for(i=0;i<skillsArray.length;i++){
        Total.skills[i] += godFound.originVar.skills[i]/2 + (godFound.approaches[0].skills[i]*3 + godFound.approaches[1].skills[i]*2 + godFound.approaches[2].skills[i])/12;
        if(godFound.domains.length === 1){
            Total.skills[i] += godFound.domains[0].skills[i]/2;
        }
        else if(godFound.domains.length === 2){
            Total.skills[i] += (godFound.domains[0].skills[i] + godFound.domains[1].skills[i])/4;
        }

        if(godFound.roles.length === 1){
            Total.skills[i] += godFound.roles[0].skills[i]/2;
        }
        else if(godFound.roles.length === 2){
            Total.skills[i] += (godFound.roles[0].skills[i] + godFound.roles[1].skills[i])/4;
        }

        Total.skills[i]+=Math.floor((roleFound.skills[i]/20*6+roleFound2.skills[i]/20*4)) 
    }

    adder(9);adder(8);adder(7);adder(6);adder(5);adder(4);adder(3);adder(2);adder(1);adder(0);adder(-1);adder(-2);adder(-3);adder(-4);adder(-5);adder(-6);adder(-7);

    for(i=0;i<9;i++){
        document.getElementById("LegendaryFound" + (i+1)).innerHTML = legendariesFound[i][0];
        document.getElementById("LegendaryFound" + (i+1)).title = legendariesFound[i][1];
    }
    
    for(i=0;i<7;i++){
        document.getElementById("SkillFound" + (i+1)).innerHTML = skillsFound[i][0];
        document.getElementById("SkillFound" + (i+1)).title = skillsFound[i][1];
    }
}

function LegendaryMakerTotal(){
    legendariesFound = []
	skillsFound = []
    godFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenGod; })[0]
    roleFound = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenFirstRole; })[0]
    roleFound2 = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenSecondRole; })[0]
    wyrdbornFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenWyrdborn; })[0]  
    exampleLegendaryMaker();  
    //document.getElementById("hoverer2").innerHTML = "Hover over a Legendary Ability or Skill for extra information !" -> Element removed
}


function addOption(selectChoice) {
 	if(document.getElementById("continent").value === "God"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "God" })}
	if(document.getElementById("continent").value === "Otherworld"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Otherworld" })}
	if(document.getElementById("continent").value === "Titan"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Titan" })}
	if(document.getElementById("continent").value === "Enlightened"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Enlightened" })}


for (j = 0; j < 100; j++) {
  selectChoice.options[0] = null;
}	
for (i = 0; i < newOriginArray.length; i++) {
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = newOriginArray[i].name;
    option.value = newOriginArray[i].name;
   x.add(option);
}
}

function addOriginOption(selectChoice) {

for (j = 0; j < 100; j++) {
  selectChoice.options[0] = null;
}	 
for (i = 0; i < secondOriginArray.length; i++) {
if(document.getElementById("OriginSelect").value === secondOriginArray[i].originString){	
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = secondOriginArray[i].name;
    option.value = secondOriginArray[i].name;
   x.add(option);
}}
}



function lengthChecker(){
	length = ""
for(i=0;i<secondOriginArray.length;i++){
length+= secondOriginArray[i].name + ": " + secondOriginArray[i].legendaries.length + "\n"
}
	alert(length)
}
function addAnAbilityMaker(){
abilityName = prompt("What is the Name of this Ability ?")
variableName = abilityName.replace(/\s/g, '');
newLegendary =	[]
for(i=0;i<parametersArray.length;i++){
newLegendary.push(prompt(parametersArray[i].name + " - " + abilityName))
}
alert(variableName + " = new LegendaryAbility(\"" + abilityName + "\",[" + newLegendary + "])")
}
function addAnAbility(){
	newAbilitiesArray = [
DruidismGreenDruid = new LegendaryAbility("Green Druid","- Summon an Ent to aid you in battle\n- Entangle enemies with roots.",[1,2,0,1,0,-1,-1,2,-1,0,2,-2,-2,1,0,1,-2,-2,2,-1,0,1,2,1,1,4,0,-2,-3,3,-2,1,1,3,-2,-2,-1,-1,1,2,1,-1,1,2,0,1,3,3,1,0,3,4,1,-4,-3,-4,-4,1,-3,1,-2,-3,-4,4,4,4,1,2,-1,-2,0,1,4,2,2,-1,3,3]),
DruidismRunicDruid = new LegendaryAbility("Runic Druid","- Create a ward that warns you when something comes past it.\n- Animate rocks into a golem to fight for you.",[2,2,0,1,-2,-1,1,2,0,-2,-2,-3,-1,-2,-2,1,-1,0,2,4,-1,-1,2,-1,3,1,3,0,-1,-2,2,0,1,0,-1,-2,-2,-3,2,4,1,3,1,-2,3,3,2,1,-1,-2,2,3,1,0,-1,0,4,2,1,3,-1,0,-2,1,2,-1,0,1,3,1,3,2,4,-2,3,0,4,2]),
Mythcalling = new LegendaryAbility("Mythcalling","- Summon a swarm of bees,\n- Empower your animal companion.",[1,2,2,0,2,1,2,2,2,3,3,3,2,1,1,2,-1,0,1,-2,2,2,2,0,3,3,1,3,1,3,4,3,2,2,1,-2,-1,2,3,2,2,2,3,0,-1,2,-1,4,-1,1,2,3,-1,-2,-1,1,-1,2,0,-2,-1,-2,-4,4,4,4,4,4,4,1,3,2,4,-2,1,0,2,3]),
DruidismFeySorcerySummer = new LegendaryAbility("Fey Sorcery - Summer","- Send a scorching ray of heat\n- Make yourself irresistibly attractive.",[-2,0,3,3,1,-3,-2,-1,-1,0,3,1,-1,0,1,0,-4,3,2,-2,-4,4,0,-3,1,3,-1,-2,2,2,0,1,0,3,1,2,0,-1,1,2,1,-2,-2,4,2,0,3,2,3,2,0,2,3,-1,-3,-4,-3,1,1,-4,-2,-4,-4,6,-4,0,2,1,0,-2,1,-1,2,4,2,2,3,2]),
DruidismFeySorceryWinter = new LegendaryAbility("Fey Sorcery - Winter","- Raise a blizzard.\n- Create an illusion of yourself.",[2,3,0,1,1,3,-1,2,0,-3,-4,-2,2,2,1,2,2,-3,-1,-2,2,-4,1,3,1,2,0,-1,1,2,0,-2,1,-1,-2,1,3,3,0,1,2,-2,-1,-3,-2,4,-4,-1,-3,-3,3,2,-3,-4,-1,-1,-4,-2,-4,2,0,2,0,-4,4,2,-1,0,-1,1,-1,2,3,4,2,3,3,1]),
DruidismTechnodruidism = new LegendaryAbility("Technodruidism","- Manipulate electrical currents.\n- Take remote control of a computer system.",[1,3,1,0,2,1,-2,1,-2,-3,1,-2,-1,-2,-3,3,-1,1,2,0,0,-1,2,-1,4,2,-2,-2,-1,2,-3,-3,3,0,-1,0,-1,2,-1,-1,0,-1,0,1,1,1,-4,-3,1,-1,2,3,-4,-4,-4,-4,-4,0,0,-4,-2,-3,-4,1,1,-2,0,1,6,3,0,2,1,-1,2,2,4,1]),
HematurgyYahuar = new LegendaryAbility("Yahuar","- Raise a Bone Shield to protect your allies.\n- Heal your allies.",[1,0,1,1,-1,-3,3,1,1,1,2,2,-1,1,0,-1,1,2,0,2,0,2,0,0,-1,-2,1,2,0,-2,2,2,0,2,1,3,1,-1,1,4,2,-2,-1,1,0,2,3,0,3,-1,-1,1,4,-3,-1,-2,-2,-3,0,1,-3,-3,1,1,-1,0,1,0,-2,1,3,3,-1,-2,4,0,-1,3]),
HematurgyItztli = new LegendaryAbility("Itztli","- Desecrate a sacred location.\n- Sacrifice an enemy for more power.",[-1,1,1,2,0,-1,2,1,1,0,1,1,0,0,1,0,2,2,1,1,0,3,0,0,-1,0,1,1,1,-2,2,1,-1,-1,1,3,1,0,0,1,3,-1,-1,0,0,1,0,-2,3,0,0,1,2,0,1,0,1,1,2,1,0,-1,1,2,1,0,1,1,0,2,2,3,-2,-2,1,3,1,0]),
InvokationDeathNecromancy = new LegendaryAbility("Spiritwalking - Necromancy","- Raise the dead.\n- Consume Souls to gain power.",[1,2,0,3,1,-1,1,1,0,-2,-3,-3,2,1,0,1,3,-1,1,-1,0,-10,1,0,-2,-1,1,0,-2,1,-1,0,-3,0,1,1,0,-1,2,1,1,2,2,2,1,0,0,1,-1,1,0,0,-1,3,2,-1,-2,0,2,1,2,6,-2,2,1,1,0,-2,1,1,3,1,-2,1,2,1,1]),
InvokationDeathShamanism = new LegendaryAbility("Spiritwalking - Shamanism","- Gain the advice of an ancient wise spirit.\n- Tap into the power of a sanctified place.",[2,3,0,-2,0,1,-1,3,0,-1,-2,-2,4,3,1,1,4,1,2,2,2,0,1,2,-2,-2,1,1,0,1,0,1,2,4,0,-1,-2,0,3,3,-1,2,3,4,2,0,3,2,0,3,2,3,2,-4,-3,-1,-2,-2,-3,2,-4,0,2,-2,1,1,2,2,0,0,3,2,1,2,1,0,4,3]),
InvokationDeathSoulbinding = new LegendaryAbility("Spiritwalking - Soulbinding","- Infuse Souls into your creations to increase their power\n- Exploit the power of a magical object.",[2,3,0,3,-1,1,1,1,1,-1,-3,-2,1,-1,-1,2,3,1,2,1,1,-1,2,2,4,-2,2,1,-1,-3,0,-2,1,-2,-1,0,3,2,0,3,-1,0,3,1,3,0,1,2,2,3,0,2,0,-3,2,1,2,1,3,0,0,2,4,-2,1,-1,2,2,3,4,3,3,2,-2,2,2,4,3]),
InvokationDeathDestruction = new LegendaryAbility("Death - Destruction","- Send beams of pure Death\n- Crumble a wall to dust.",[-2,-2,3,4,2,-2,2,0,0,-2,-3,-2,2,2,1,-1,3,1,1,-1,1,-2,0,3,-1,-2,0,1,0,-1,0,-2,-1,-3,-1,3,2,-1,0,2,2,2,2,1,2,0,-1,2,3,1,0,1,0,-3,3,1,1,2,2,3,1,3,4,-3,3,3,3,2,0,1,2,4,-1,-3,0,4,1,-2]),
InvokationDeathHorror = new LegendaryAbility("Death - Horror","- Terrify enemies.\n- Turn ghosts into insane wraiths.",[0,1,2,2,0,1,0,0,1,-2,-3,-1,1,1,1,-1,1,1,1,-1,1,-3,-1,1,0,-1,-2,1,1,-1,0,-2,-2,-2,-1,2,2,1,1,0,1,0,1,1,0,2,-2,1,2,-1,1,1,0,-1,2,1,-1,1,1,2,1,3,3,-3,1,0,1,0,-1,1,0,1,-1,2,1,-1,0,2]),
ChwalRider = new LegendaryAbility("Chwal - Rider","- See through the eyes on an unsuspecting individual.\n- Mark and find individuals.",[2,2,-1,-1,0,3,-1,0,0,1,0,-1,2,2,1,3,1,-1,0,2,3,0,2,1,0,-1,0,-2,1,1,-1,0,0,1,-1,-2,3,4,2,0,1,-2,1,4,1,-2,1,1,-1,-1,0,0,-1,2,2,1,-1,-1,-2,1,1,4,1,2,3,0,3,1,2,4,1,4,-1,1,-2,-3,4,2]),
ChwalPuppeteer = new LegendaryAbility("Chwal - Puppeteer","- Control an individual’s actions.\n- Stop an enemy mid-strike.",[1,2,-1,3,1,3,-2,0,2,0,0,1,2,2,0,2,3,0,1,0,3,-1,2,2,0,-1,1,0,4,1,2,0,1,2,0,1,4,2,2,-1,1,1,1,4,2,-1,2,1,2,0,-1,0,1,4,2,1,2,3,0,2,0,3,3,2,3,3,3,3,2,4,1,3,2,1,-2,-3,2,4]),
WyrdseeingMystery = new LegendaryAbility("Mystery","- Reveal information hidden in the tangles of Fate.\n- Detect Fatebindings between two targets.",[2,1,0,-1,-1,1,-1,4,2,-1,-2,1,1,3,2,2,0,2,-1,3,4,2,4,1,0,1,2,1,1,3,1,0,3,2,-1,-2,1,0,2,2,2,1,4,2,3,1,2,3,0,2,1,4,1,2,4,3,2,1,1,3,3,2,2,2,2,2,3,4,2,2,3,1,4,-1,-1,-2,4,2]),
WyrdseeingProphecy = new LegendaryAbility("Prophecy","- Sense an attack or ambush coming.\n- Decipher the future of an individual.",[2,3,1,-1,-2,0,-2,4,2,2,1,2,1,1,1,2,1,1,0,2,3,2,4,1,1,1,2,-1,1,2,2,0,4,1,1,-2,1,2,0,2,-2,2,1,2,2,3,0,0,1,2,2,3,1,2,0,1,2,-1,0,3,0,2,1,2,3,1,2,2,0,3,1,4,2,-2,2,-3,4,3]),
EpicPhysiologyEpicStrength = new LegendaryAbility("Epic Strength","- Lift a car.\n- Rip a man in half.",[-2,-2,3,4,1,-2,4,-3,1,-1,-2,-3,-4,-2,1,-3,-2,2,3,2,-3,1,-3,-2,0,-1,-1,3,-2,0,3,-1,-3,-4,2,4,-2,-3,-3,3,3,3,0,2,-1,2,3,-1,1,-1,1,2,-1,-2,-1,0,1,3,3,3,1,-2,-2,-2,-1,0,-2,3,-2,-2,3,-3,1,-2,2,4,1,-1]),
EpicPhysiologyEpicToughness = new LegendaryAbility("Epic Toughness","- Shrug off a fireball\n- Run without stopping for days.",[1,-1,2,3,-2,-3,4,-2,1,2,2,-2,-3,-1,0,-2,1,0,3,4,-2,1,-2,-2,-1,0,3,2,-1,-2,1,2,-1,-2,1,4,-2,-3,-1,4,2,2,0,2,0,2,3,-1,1,-1,1,1,1,-2,2,1,2,3,2,4,1,-1,1,-2,-3,0,1,2,0,-2,3,-1,0,-2,4,1,-1,0]),
EpicPhysiologyEpicSenses = new LegendaryAbility("Epic Senses","- Gain amazing hearing\n- See from miles away.",[2,2,-1,-2,3,4,1,2,0,1,1,3,2,0,2,3,-2,2,1,3,4,1,2,3,-1,0,-1,0,1,2,-1,0,1,-1,-2,1,1,2,0,4,4,0,-1,1,-1,1,2,1,0,-1,1,1,2,2,3,0,-1,2,2,3,3,2,-1,4,3,1,0,-1,1,-1,2,1,0,0,3,1,3,-1]),
EpicPhysiologyBeauty = new LegendaryAbility("Epic Beauty","- Charm others.\n- Pacify others with awe.",[1,2,4,0,1,3,-3,-2,2,2,3,4,0,1,1,2,-2,2,1,-1,3,3,0,-1,-2,1,-2,-2,1,1,2,1,-2,2,3,-2,2,3,2,-1,-3,2,0,0,1,-1,0,1,-1,0,0,2,0,3,-3,-2,-2,-1,2,-3,-1,2,-2,4,3,0,2,1,3,3,-1,1,0,4,-1,-2,-2,-1]),
EpicPhysiologyUgliness = new LegendaryAbility("Epic Ugliness","- Terrify others.\n- ",[-1,-2,4,3,1,-3,1,-2,-2,-3,-2,-4,-3,-1,-1,-2,2,2,-1,-2,1,-3,-2,4,-3,-2,-2,-1,-3,-2,-2,-3,-3,-4,-3,2,2,1,-2,-3,0,-2,-2,-2,-2,-2,-2,-1,1,-1,0,-4,0,-3,3,1,-1,0,3,3,1,2,4,1,2,3,2,-1,-2,-2,-1,2,0,4,-1,-2,-2,-1]),
Enech = new LegendaryAbility("Enech","- Gain the \"Protection of Innocents\" Aspect\n- Gain the \"Zealous Faith\" Aspect",[2,-1,1,3,0,-2,3,1,3,-1,-2,-2,-2,0,-2,-4,-1,-1,0,3,1,-1,-2,-3,-2,-1,2,2,2,-3,3,0,-1,2,3,3,-1,-4,2,4,0,-1,-2,1,2,2,1,0,-2,-1,1,8,1,-2,-3,-2,1,0,1,-3,-2,-3,-4,-1,-2,-2,2,-1,-2,-4,2,1,4,-2,3,2,1,0]),
FireDestruction = new LegendaryAbility("Fire - Destruction","- Burn a forest down\n- Throw a fireball.",[-3,-2,4,4,3,-3,2,-2,-2,-2,-1,0,-3,-4,1,-3,1,6,0,0,-2,4,-3,-3,1,0,-3,-1,-2,-1,-2,-1,-1,-2,1,2,0,1,-1,1,1,1,0,1,-1,1,-1,1,2,1,0,0,3,2,-4,-3,-3,-1,4,-3,2,-2,1,3,-3,-1,2,2,0,1,2,3,0,-2,-2,4,1,-1]),
FireLife = new LegendaryAbility("Fire - Life","- Ressurect mortals\n- Heal allies.",[2,1,4,3,2,-4,-2,2,2,3,2,2,-2,-3,-2,-3,-4,5,1,-1,-3,6,-2,-3,2,1,-2,0,-2,2,2,3,1,4,1,-2,-3,-1,1,3,-2,1,0,1,0,1,1,2,0,2,0,1,3,-2,-4,-3,-3,1,4,-4,-2,-3,-4,4,-2,-2,2,1,2,-1,2,1,0,1,3,-1,1,4]),
FireInvention = new LegendaryAbility("Fire - Invention","- Create an impossibly large gun.- Hack a computer.",[2,4,3,1,1,-2,1,2,0,-2,-3,-2,-3,-4,1,2,-3,5,2,0,-3,2,1,-3,6,-3,1,0,-2,2,0,-2,3,-1,-2,-3,-2,-3,-2,1,-2,1,1,-1,-1,0,-2,1,-1,0,0,1,-1,-3,-4,-3,1,1,4,-3,-2,-4,-4,2,-2,-3,-1,-1,5,2,1,3,0,-2,2,2,4,1]),
FireMagma = new LegendaryAbility("Fire - Magma","- Create and control flows of magma\n- Rupture volcanoes from the ground.",[-3,-2,4,4,-1,-3,1,-2,-1,-2,0,-1,-3,-4,1,-3,1,4,3,-1,-3,1,-3,-4,1,0,-2,0,-3,-2,0,-2,-3,-3,0,3,-2,-3,-2,2,0,0,-1,0,0,1,1,1,1,1,-1,-1,2,-2,-4,-4,1,2,4,2,-3,-4,-1,2,-4,-2,2,3,1,-1,2,3,0,-3,3,3,-1,1]),
FireDrought = new LegendaryAbility("Fire - Drought","- Dry up water and blood.\n- Turn enemies to ash.",[-2,-3,2,2,3,0,1,-3,-2,-3,-4,-3,-4,-6,2,-3,2,4,0,-2,-4,1,-3,1,0,-2,-3,1,-2,-3,-2,-4,-3,-3,-2,2,-2,-3,-3,-4,1,-1,-1,1,1,-1,-1,0,1,-4,0,0,0,2,-4,-4,-4,1,4,1,1,-3,3,4,-4,-2,2,1,-3,-2,-1,2,-3,-2,1,2,-1,4]),
FireStrife = new LegendaryAbility("Fire - Strife","- Turn friends against each other.\n- Start a bar fight.",[-1,2,3,3,2,1,4,-1,0,-3,-3,3,-1,0,1,1,0,4,-2,-4,1,3,-1,-3,-2,-3,-2,2,3,-1,1,-2,-3,-4,2,1,3,4,0,-2,2,2,-1,2,-2,1,1,-1,1,-2,1,1,2,2,-4,-4,-4,-4,4,-4,2,-3,-3,3,1,-1,1,0,1,2,1,3,0,4,2,1,2,4]),
WaWorldgingSea = new LegendaryAbility("Water - Raging Sea","- Create anger.\n- Raise a tidal wave.",[-3,-2,4,4,2,-3,1,-1,-2,-3,0,-3,1,5,3,-1,0,-4,-1,-2,2,-2,-1,1,-3,-2,-3,-1,-2,1,2,-2,-1,0,0,3,1,-2,-3,3,1,0,-1,0,-1,2,2,2,0,0,0,1,0,-3,4,6,-1,2,-3,3,3,-3,-2,2,2,-1,1,4,0,-2,1,2,0,-2,1,2,2,3]),
WaterAbyss = new LegendaryAbility("Depths - Abyss","- Summon creatures from the dark Abyss.- Drown your enemies.",[2,3,0,1,-3,2,-2,1,1,3,2,-3,1,4,-3,-2,2,-4,-1,-3,-2,-4,1,3,-2,-4,-3,-2,-2,0,1,2,2,-3,-2,1,2,0,-2,0,2,-1,-1,-1,1,0,0,1,-1,0,0,0,0,-3,6,4,-3,-1,-4,6,-3,0,2,-3,2,1,1,3,1,-2,-3,2,-1,2,4,2,0,1]),
WaterLife = new LegendaryAbility("Water - Life","- Spring forth impossible animals.\n- Fortify your allies.",[2,1,3,2,0,-2,-4,2,1,3,2,1,1,4,1,2,-4,-4,1,0,2,-3,0,-3,-2,2,0,-3,-1,1,0,3,0,4,-1,-2,-3,-3,2,3,-3,1,-1,1,1,1,1,2,-1,1,0,1,-1,-3,4,4,1,2,-4,-3,1,-1,-4,4,0,1,2,2,2,-2,0,1,3,1,3,-2,-2,4]),
LightBrightness = new LegendaryAbility("Light - Brightness","- Blind your enemies\n- Dazzle an audience.",[1,3,4,4,3,1,1,-2,3,-1,-2,3,0,-2,1,1,-3,2,-1,0,-4,3,-2,-4,-3,-2,1,0,4,-2,3,-1,-2,2,3,-1,4,2,2,1,-2,1,1,1,2,-1,-1,1,1,1,0,1,1,6,-4,0,0,-1,1,-4,1,-4,-3,4,-2,-4,2,3,2,4,2,1,-2,4,2,-1,-2,3]),
LightIllumination = new LegendaryAbility("Light - Illumination","- Engage in intense concentration to reveal mysteries\n- Inspire others to create and learn.",[2,4,3,0,2,-3,-2,3,2,-3,-2,2,2,-1,-1,2,-3,2,-1,-2,3,4,3,-4,2,0,1,-1,1,2,2,-1,3,1,-2,-3,-2,-3,2,-2,-3,1,1,1,1,-1,-1,1,0,2,0,0,0,3,-4,-1,0,-2,1,-4,0,1,-4,3,-1,0,2,3,6,5,2,1,0,1,-2,-3,4,2]),
LightSun = new LegendaryAbility("Light - Sun","- Send rays of heat.\n- Travel on a sunbeam.",[-1,-1,4,3,4,-3,-1,-2,2,-1,-2,0,-1,-3,2,-2,-4,3,1,-1,-4,6,-1,-4,0,1,0,-1,1,0,2,-2,-1,-1,3,0,-2,-3,1,2,-2,0,0,1,2,-1,0,1,1,0,-1,0,2,4,-4,-2,-1,1,2,-4,2,-4,-4,5,-3,-3,1,1,1,2,3,1,0,2,2,3,0,2]),
SkyDestruction = new LegendaryAbility("Sky - Destruction","- Crush enemies with storms.\n- Summon tornadoes.",[-2,-1,4,4,3,-3,2,-2,0,-2,-3,-2,-1,0,4,-2,2,2,1,1,-1,1,-2,0,-2,-2,-1,1,-1,-2,2,-2,-3,-4,2,3,-1,1,-2,1,3,1,0,1,0,1,1,-1,0,-1,0,-1,-1,1,-3,2,0,-1,2,-2,6,-2,3,3,4,0,1,3,-2,-2,-1,2,-2,-2,-1,4,-2,-1]),
SkyTempest = new LegendaryAbility("Sky - Tempest","- Create Storms.\n- Fly.",[-2,-1,4,3,2,-2,3,-2,1,-2,-1,-2,1,2,4,-1,1,0,2,1,0,-2,-3,1,-2,-1,-1,2,0,1,2,-1,-3,-2,2,2,-1,1,0,2,3,1,0,1,-1,1,1,0,0,-1,1,-1,-1,-1,-3,3,0,1,-1,-2,6,-1,-3,3,3,1,2,4,-1,2,2,3,0,-2,2,3,1,2]),
SkyPeace = new LegendaryAbility("Sky - Peace","- Pacify Enemies\n- Stop a bullet in its tracks.",[3,2,1,0,2,1,-4,2,1,1,1,2,2,2,4,0,-3,-3,2,2,3,1,2,-2,0,1,3,-2,1,3,3,2,0,4,-2,-3,1,-2,4,3,-2,1,0,1,1,-1,1,1,0,1,-1,0,0,0,-4,2,2,1,-2,-3,6,3,-3,3,-1,1,3,3,2,-2,1,-1,2,3,3,-2,1,2]),
SkyRain = new LegendaryAbility("Sky - Rain","- Create a soothing rain\n- Summon a raging monsoon.",[2,1,0,-1,0,1,-2,2,1,2,3,1,2,4,4,1,-2,-4,-1,-2,0,-3,1,-2,-3,1,-1,-3,0,2,0,1,1,2,-1,-3,-1,-1,1,1,-2,1,1,-1,-3,-1,0,2,1,1,1,1,-1,-4,-4,2,-1,1,-4,-4,5,-3,-4,4,2,2,1,3,-1,-1,1,2,2,0,-1,-2,2,3]),
DarknessVoid = new LegendaryAbility("Night - Void","- Remove the sense of sight or hearing from your foes.\n- Erase an enemy from existence.",[1,2,4,4,3,-2,2,-2,-1,-3,-4,-3,0,-2,-2,-3,3,-1,1,-2,1,-3,-2,4,-2,-3,-2,1,1,-1,0,-2,1,-3,1,3,2,2,-1,-2,3,0,-1,0,-2,0,0,1,1,-1,-1,-1,-1,-4,3,1,1,1,-1,3,1,2,3,-3,3,4,2,2,-3,2,-2,4,-3,-4]),
DarknessShadows = new LegendaryAbility("Depths - Shadows","- Hide in shadows\n- Remove light.",[4,2,-1,-2,2,4,-2,0,-2,-3,-2,1,2,0,-1,3,2,-2,-1,-3,3,-3,-1,4,0,1,-1,-2,1,2,-1,-2,1,-2,-1,1,3,4,0,1,4,0,0,-1,0,0,0,1,1,-1,1,-1,0,-4,2,-1,0,-1,-2,4,0,3,3,-1,4,4,1,-1,3,3,1,4,2,1,2,-2,4,3]),
DarknessUnderground = new LegendaryAbility("Depths - Underground","- See in the dark.\n- Have the Earth swallow enemies.",[3,1,0,-1,-2,4,-1,-1,-2,1,2,-2,2,-2,-4,0,3,-2,3,1,-4,-4,1,4,2,2,1,-2,0,-1,-1,1,0,-2,-3,2,1,2,0,3,1,0,0,1,-1,0,-1,1,0,-1,1,-2,0,-4,-1,-3,0,3,-1,6,-4,-3,3,-3,3,3,1,-1,1,-1,0,3,1,-2,2,-2,-1,4]),
WorldAbundance = new LegendaryAbility("Depths - Abundance","- Summon riches.\n- Summon weapons for a whole army.",[2,4,3,0,1,-1,-2,1,2,1,3,1,2,2,2,-1,-3,0,3,0,-1,2,1,-2,4,2,2,-2,1,-1,2,4,1,3,2,-1,-2,0,2,3,-1,1,0,1,-1,-1,1,1,0,1,1,1,0,-3,0,1,2,5,2,4,1,-1,-3,4,0,-2,1,2,4,4,-1,-2,2,1,0,-1,4,3]),
WorldLife = new LegendaryAbility("World - Life","- Summon plants and animals.\n- Heal a forest.",[2,1,4,0,2,-2,-3,2,1,4,4,2,0,2,-1,-2,-4,1,4,-1,0,3,1,-2,1,3,-1,-2,0,2,1,4,-1,2,1,-2,-1,-2,1,3,2,0,-1,1,-1,0,2,0,-1,-1,1,1,0,-2,1,2,-1,6,2,-2,1,-2,-4,4,-4,3,2,1,3,-2,1,2,4,-2,2,2,3,4]),
WorldStone = new LegendaryAbility("World - Stone","- Crush enemies with a boulder.\n- Turn your fist into stone.",[3,-1,1,2,-2,-2,3,1,1,-2,-2,-2,-1,0,-1,-2,0,1,4,2,-2,-2,0,1,2,2,3,2,0,0,2,-1,-2,0,1,3,-2,-1,-2,4,1,1,0,1,2,0,-1,0,0,1,2,1,1,0,-2,0,2,4,2,2,0,-2,0,-1,2,-1,3,3,3,1,4,-1,1,-2,5,3,1,3]),
WorldDecay = new LegendaryAbility("World - Decay","- Rot an enemy from the inside.\n- Summon an army of worms.",[-1,2,2,3,1,-1,3,-3,-2,-2,1,-2,-1,-2,-4,-3,4,1,4,-3,-2,-3,-3,3,0,2,-2,2,-1,-2,-2,-3,0,-2,1,4,2,3,-2,-2,3,0,-1,0,-2,-1,0,1,1,-2,1,-2,0,-3,1,0,-2,5,2,4,-4,-2,4,-2,4,3,-2,1,-2,3,-1,4,1,-3,1,4,2,3]),
WorldExpanse = new LegendaryAbility("World - Expanse","- Travel quickly.\n- Plague your foes with exotic diseases.",[1,2,0,-1,2,0,-1,1,1,0,2,-1,3,2,3,-1,-2,-1,4,0,0,1,2,-2,0,3,-2,-2,-3,4,2,2,2,1,2,0,-1,-2,1,3,3,-1,-1,1,-1,1,2,0,0,0,2,0,1,0,2,2,-2,4,1,-1,2,-2,-1,3,3,5,2,4,4,-2,1,3,2,-1,2,0,4,3]),
OrderGravity = new LegendaryAbility("Order - Gravity","- Slam an enemy into the floor.\n- Float into the air.",[-1,1,3,3,2,0,1,2,2,-1,-2,1,3,1,0,1,1,2,2,3,2,1,3,0,1,1,4,1,2,1,1,-1,-1,1,2,3,0,1,1,4,0,1,0,0,1,-1,-1,0,0,1,-1,0,0,2,1,1,6,2,2,-2,1,-1,-2,1,1,0,3,0,2,3,2,1,0,-2,3,2,2,4]),
OrderControl = new LegendaryAbility("Order - Control","- Compel someone to obey your orders.\n- Take control of an ongoing spell.",[0,1,2,4,2,-2,2,2,3,-2,-2,2,1,1,2,-2,-1,2,3,4,2,2,1,1,1,1,4,2,4,-3,3,-1,-2,0,2,3,4,1,2,3,-1,1,0,-1,2,0,-1,1,0,1,-1,0,0,1,-2,0,6,3,2,-1,2,0,-1,-2,-2,-1,3,1,2,4,2,3,1,2,3,0,-1,3]),
KannagaranoMichi = new LegendaryAbility("Kannagara no Michi","- Bond yourself to a Kami or Mythborn.\n- Separate a Legendary being from its power source.",[2,4,3,1,2,0,2,4,2,2,3,2,2,2,0,1,-4,0,3,0,2,2,-2,-2,1,5,-2,1,-2,4,2,3,2,4,0,-1,-1,-2,1,3,-1,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,2,3,4,8,4,3,3,4,2]),
DeathDevourer = new LegendaryAbility("Death - Devourer","- Invade someone’s mind and turn them to depression or suicide.\n- Harden one’s emotions to make them commit murder",[-2,-2,3,4,3,1,1,-3,-3,-3,-3,-3,-3,0,-2,-3,3,-1,-2,1,1,-3,-4,3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,0,3,-2,-3,-3,-3,3,-1,0,-1,0,-1,-1,-1,1,0,-1,0,-1,-4,2,1,-3,-3,2,4,-2,1,5,-4,3,4,1,-2,-3,-2,-1,2,-3,-2,3,3,1,2]),
TheMiddleWay = new LegendaryAbility("The Middle Way","- Distance yourself from Reality to resist uses of Legendary Abilities.\n- Project yourself to your ideal Self to increase your mental abilities.",[4,3,0,-2,0,1,-3,6,1,2,1,3,1,2,3,4,-2,0,-2,0,1,1,4,-2,-2,2,2,-3,0,4,1,2,4,3,-2,-4,-2,-3,2,-1,-4,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,1,-1,-4,3,2,3,4,5,3,4,2,4,-2,2,3]),
Isfet = new LegendaryAbility("Isfet","- Gain the Isfet Aspect “Compulsive Liar”.\n- Gain the Isfet Aspect “Greed is Good”.",[-2,0,4,3,2,2,2,-1,3,-2,2,3,1,2,2,3,2,3,1,-4,3,3,2,4,-1,2,-4,3,4,3,2,0,-2,-3,4,3,4,2,-1,-2,2,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,3,3,1,2,0,2,5,1,5,3,3,1,3,4,3]),
Nihilism = new LegendaryAbility("Nihilism","- Deny the existence of Legend to harm Legendary beings.\n- Rely on Reason to defend against Legendary attacks.",[2,4,3,2,1,1,1,4,2,-2,0,1,1,2,1,3,0,1,1,2,1,1,4,2,-2,1,2,1,2,3,1,0,4,0,2,3,0,1,2,4,0,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,5,3,7,5,0,4,4,3,3]),
OrderKnowledge = new LegendaryAbility("Order - Knowledge","- Learn ancient mysteries.\n- Have an incredible memory.",[2,4,1,-1,1,-1,-2,3,-1,-2,-1,1,0,2,0,2,-1,1,2,2,1,0,4,-2,2,0,4,-2,-1,2,1,-1,3,1,-1,-2,1,-1,0,2,-1,0,0,-1,1,0,0,1,0,1,-1,0,0,1,-2,-1,4,1,1,-2,1,1,-2,-1,1,-2,3,1,2,4,0,2,1,-2,-1,-1,4,2]),
NightMoon = new LegendaryAbility("Night - Moon","- Turn someone insane.\n- Soothe a pained friend.",[4,3,0,-1,2,2,-1,1,-1,0,2,1,2,2,2,3,2,-4,-1,-2,6,-4,1,-3,-1,1,-2,-1,1,3,0,2,3,3,-1,-2,3,4,2,1,3,0,1,0,-1,0,0,1,0,-1,2,0,-2,-4,-3,2,-2,0,-4,-4,2,5,2,-2,4,3,-1,2,3,3,1,4,2,4,1,-1,3,4]),
NightDarkness = new LegendaryAbility("Night - Obscurity","- Blind an enemy.\n- Hide in the shadows.",[2,3,2,4,3,2,1,-1,1,-2,-2,-3,-2,2,2,1,2,-3,1,-4,-3,-4,1,5,-2,-1,-4,1,2,0,-1,-2,1,-3,1,3,4,4,-2,-4,4,0,-1,0,-2,0,0,-1,1,-1,1,-1,-1,-4,3,1,-4,-2,-3,4,2,5,3,-4,4,4,-2,1,-3,3,1,4,-2,0,3,1,4,3]),
NightVeil = new LegendaryAbility("Night - Veil","- Turn invisible.\n- Defend yourself from magic.",[3,1,0,-1,2,4,-2,1,-1,-2,-2,1,2,2,2,2,2,-4,1,1,3,-4,1,4,0,0,1,-1,1,2,0,2,1,1,2,-1,2,4,1,3,4,0,0,1,-1,0,1,-1,2,-1,1,0,-1,-4,2,1,0,1,-4,3,2,5,3,-3,4,4,-1,-2,3,3,1,4,2,0,2,1,3,4]),
NightStars = new LegendaryAbility("Night - Stars","- Divine the future.\n- Call down the fire of the Stars.",[2,4,0,0,2,2,-2,4,2,1,-1,2,2,1,3,2,-2,1,-1,1,3,1,4,-2,0,0,1,-1,0,4,2,1,2,2,3,-2,-2,-3,1,2,-1,0,-1,0,0,-1,1,1,1,0,1,0,2,1,-4,1,1,1,1,-3,2,5,0,-3,3,1,-1,2,1,1,2,4,2,1,-1,-2,4,3]),
NightFear = new LegendaryAbility("Night - Fear","- Terrify enemies.\n- Lurk hidden in the shadows.",[0,-1,3,4,2,2,1,-1,0,-2,-3,1,-1,1,2,0,2,-4,1,0,1,-4,-2,4,0,-1,-2,1,1,0,1,-2,-1,-3,1,2,4,3,-2,-1,3,0,-1,0,-2,-2,0,-1,1,-1,0,-1,-1,-4,3,1,-2,1,-4,3,2,5,3,-2,4,4,-1,0,-2,1,0,3,-1,4,2,0,1,3]),
TaiYiNature = new LegendaryAbility("Tai Yi - Nature","- Change an enemy into a servant.\n- Reshape a Titanspawn.",[1,0,2,4,1,3,1,2,3,2,1,1,1,1,2,-2,0,1,2,4,2,2,2,3,2,-1,4,2,3,-3,4,1,0,3,3,-2,4,-1,1,3,-2,-1,4,1,3,-1,-2,1,1,2,-3,0,-2,3,-4,0,5,2,1,-3,2,2,2,-3,-3,-2,2,1,-3,3,1,4,-3,-3,-2,-3,4,2]),
TaiYiFlow = new LegendaryAbility("Tai Yi - Flow","- Redirect a Spell.\n- Manipulate flows of Legend.",[2,3,2,1,4,1,-1,3,1,2,3,4,3,3,2,3,2,2,-1,2,3,3,1,0,1,3,4,0,1,3,0,1,2,4,2,0,3,3,2,4,0,0,1,1,0,-1,1,1,1,-1,1,1,0,3,1,3,4,-1,2,3,3,3,2,3,3,2,3,3,4,3,1,4,2,-3,2,-1,4,3]),
Heku = new LegendaryAbility("Heku","- Have someone look your way at the right moment.\n- Single out the perfect person to influence in a crowd.",[3,3,2,1,-1,1,2,2,3,-1,-2,4,1,2,2,3,0,-1,-2,3,3,2,2,2,-2,-1,3,2,4,-2,4,2,-1,3,2,-2,2,1,4,2,-2,1,2,0,4,0,-2,1,0,2,-1,-2,-1,1,-1,0,2,-1,-2,-3,0,1,-2,2,0,-2,1,1,0,3,2,4,1,3,1,1,3,2]),
FleshShaping = new LegendaryAbility("Flesh-Shaping","- Grow Wings.\n- Regrow an Arm.",[-2,-3,4,3,2,-2,2,-2,-1,1,1,-1,-2,-2,-3,-3,2,0,1,-1,-2,-2,-3,0,-3,-2,-3,2,-2,-3,-2,1,-2,-3,1,3,-3,-4,-4,1,3,-2,-1,0,-2,1,1,0,2,-3,1,1,1,-2,-3,-2,-2,0,-1,1,0,-1,0,-1,1,1,0,0,-1,-2,1,2,-1,-3,3,3,-2,-3]),
EpicPresence = new LegendaryAbility("Epic Presence","- Give rousing speeches.\n- Intimidate an individual.",[-1,0,4,2,1,-2,4,1,4,0,-2,2,-1,0,2,-1,2,3,1,3,-1,3,-2,1,-1,-2,2,5,5,-2,5,1,-3,-1,2,2,1,-2,-2,2,0,1,1,1,2,1,1,0,1,0,-1,-1,-2,3,1,2,3,-1,2,2,2,-1,1,2,2,0,1,2,-1,2,2,0,-1,4,2,-1,1,2]),

/*
Night - Nightmares
Death - Journey
Order - Law
*/
	]

	skillsArray = [

AthleticsSkill = new LegendaryAbility("Athletics","- Jump over a wall.\n- Run a sprint.",[0,-1,2,1,4,2,2,-1,1,0,1,1,1,1,2,-2,-1,1,2,0,-1,2,-2,1,-1,1,0,1,-2,2,2,2,-2,0,3,0,-1,0,-2,2,4,1,-1,1,0,2,2,-1,0,-1,1,2,-1,0,2,1,0,2,2,1,3,2,0,2,1,1,2,2,2,-2,2,-1,1,-3,3,-1,4,0]),
Rapport = new LegendaryAbility("Rapport","- Make friends at a bar.\n- Mediate a negotiation.",[2,1,1,-1,1,0,-3,2,2,3,3,4,3,2,1,1,1,1,2,-1,1,2,-2,-3,-1,1,-1,-3,2,1,2,4,-1,6,-1,-3,0,1,4,2,-3,-1,-1,1,-1,1,1,1,-1,1,1,2,0,3,-4,1,0,2,1,-3,2,2,-1,4,0,-1,3,-1,4,4,3,2,3,5,-1,-2,0,2]),
Technology = new LegendaryAbility("Technology","- Hack a computer\n- Build a grenade.",[1,4,3,0,3,1,-1,1,0,-1,-1,0,1,0,1,2,1,3,3,1,1,2,2,-1,6,1,2,-1,1,2,0,-1,2,0,2,1,2,3,0,1,2,1,1,0,-1,-1,-2,-2,1,-1,-1,1,-2,2,-4,1,2,3,3,-2,1,2,-2,3,3,-2,2,-1,6,4,2,1,0,-2,2,1,5,3]),
FirstAid = new LegendaryAbility("First Aid","- Patch a wound.\n- Find the antidote to a poison.",[3,3,0,-1,1,0,1,1,-1,1,3,3,1,3,2,-1,2,2,3,1,0,2,1,-2,1,2,2,0,-2,1,-1,2,0,1,-2,-3,-2,-3,1,3,-2,0,1,1,1,0,1,1,-1,0,0,1,1,2,1,2,1,3,3,-2,1,1,1,4,1,0,2,-1,2,-1,3,2,4,2,3,-2,3,3]),
Fight = new LegendaryAbility("Fight","- Swing a sword.\n- Throw a punch.",[-1,-2,2,4,2,-2,4,-2,1,-2,-2,-3,-2,1,2,-2,2,3,3,3,0,2,-1,1,0,1,1,4,0,-1,3,-1,-2,-2,3,4,0,-2,0,4,4,2,0,1,0,2,2,-1,1,-1,1,2,-1,2,3,3,2,3,4,-1,3,1,2,3,2,3,2,1,1,-2,4,0,2,-3,1,4,0,1]),
Lore = new LegendaryAbility("Lore","- Know a magical incantation.\n- Know ancient history.",[2,4,0,-1,1,-1,-2,4,1,0,1,-1,2,2,1,3,2,1,2,2,3,3,4,1,2,3,2,-2,1,2,1,2,4,2,-2,-3,1,-1,2,1,-2,0,1,-1,2,-2,-2,1,-1,1,-2,-1,1,2,0,1,2,2,1,2,2,3,2,3,2,2,4,4,3,3,1,4,3,-2,1,2,4,3]),
Notice = new LegendaryAbility("Notice","- Get the drop on an enemy.\n- Find clues.",[4,2,0,-1,2,2,3,1,2,0,-1,3,2,2,3,4,1,2,-1,4,3,4,1,2,0,1,-1,3,2,0,1,-1,1,2,-2,3,1,2,2,4,4,0,-1,1,-1,1,2,0,1,-1,1,0,-1,2,3,1,0,2,3,4,3,3,1,3,2,0,0,1,3,3,4,2,1,0,3,2,4,1]),
Physique = new LegendaryAbility("Physique","- Run a marathon.\n- Withstand physical trauma.",[-1,-2,2,2,0,-1,4,-2,2,3,3,1,-1,2,2,-1,2,3,4,2,0,3,-2,1,2,2,1,3,-1,-2,2,3,-1,-2,1,4,-2,-3,-2,4,3,1,-1,1,0,1,1,-1,0,-1,1,2,-1,-2,4,2,1,5,3,0,3,-1,2,3,1,3,2,2,1,-2,3,-1,1,-2,5,1,2,1]),
Presence = new LegendaryAbility("Presence","- Order soldiers.\n- Interrogate a suspect.",[1,2,4,3,0,-2,4,-1,4,0,-1,1,-1,1,3,-2,3,3,2,4,-1,4,-2,2,-1,-1,1,4,2,-2,4,1,0,1,2,3,1,-2,2,3,1,1,1,1,2,1,1,0,0,-1,0,1,0,4,3,2,2,3,3,4,2,1,4,4,2,3,2,4,1,2,4,3,2,4,2,-1,-2,2]),
Manipulation = new LegendaryAbility("Manipulation","- Trick an enemy.\n- Talk your way past an annoying bouncer.",[4,3,1,2,0,2,-2,0,2,-1,-2,4,0,2,0,3,1,-2,-2,-1,4,-3,1,4,0,-1,2,0,4,-1,3,0,0,-1,1,-2,6,4,2,-2,-1,0,1,1,0,-1,-1,1,1,-2,0,0,-1,4,1,1,3,0,-2,4,1,4,3,4,4,2,-1,2,3,5,0,3,1,5,1,-1,0,2]),
Resources = new LegendaryAbility("Resources","- Buy a car.\n- Hire mercenaries.",[1,0,4,1,2,0,-2,-1,1,0,2,3,1,1,2,-1,1,2,4,0,1,2,1,2,2,3,2,0,3,-3,4,2,-2,1,4,-1,2,-1,1,0,-2,1,1,1,2,0,-2,1,1,1,-1,-1,0,3,-3,2,2,3,3,1,2,-1,2,4,2,-1,4,4,4,4,1,2,3,2,-2,-3,4,0]),
Marksmanship = new LegendaryAbility("Marksmanship","- Shoot a bow.\n- Throw a fireball with accuracy.",[3,1,2,2,4,2,4,-1,1,-1,-2,2,1,2,3,-1,1,3,1,2,2,4,-2,2,2,1,1,3,-1,0,1,-2,-3,-1,3,3,1,0,-1,4,5,1,0,1,0,0,1,1,0,1,1,0,-1,3,2,2,2,1,3,2,4,3,2,3,3,2,1,2,4,1,3,0,2,-2,-3,5,2,2]),
Stealth = new LegendaryAbility("Stealth","- Pickpocket a target.\n- Skulk unnoticed.",[2,2,-2,-1,3,5,1,1,-2,-1,-2,2,3,2,-1,3,3,-3,2,-1,4,-4,-1,4,0,1,-1,1,0,2,-1,-2,1,0,1,2,3,4,-1,-2,4,0,0,1,-1,0,1,-1,1,-1,1,0,-1,-3,3,1,-1,0,-3,5,3,4,2,2,4,4,0,-1,3,2,1,4,1,-2,2,1,4,1]),
Will = new LegendaryAbility("Will","- Resist mental attacks.\n- Control magical powers by sheer will.",[2,4,1,2,1,-1,2,3,4,3,2,3,2,2,3,4,3,3,4,4,4,3,1,3,2,3,4,3,4,4,4,3,3,2,1,3,3,1,2,4,4,1,1,2,1,1,1,0,0,1,1,2,0,3,4,2,0,4,3,2,3,4,3,3,3,4,3,4,2,3,4,3,2,0,3,-2,2,2]),

]	

for(i=0;i<newAbilitiesArray.length;i++){
for(j=0;j<parametersArray.length;j++){
	parametersArray[j].legendaries.push(newAbilitiesArray[i].legendaries[j])
}}

for(i=0;i<skillsArray.length;i++){
for(j=0;j<parametersArray.length;j++){
	parametersArray[j].skills.push(skillsArray[i].legendaries[j])
}}

}
addAnAbility();

ChosenFirstRole = "Default"
ChosenSecondRole = "Default"
ChosenGod = "Woop"	
ChosenWyrdborn = "Winter Fey"

function setChosenPantheon(selectedBox){
//curatedName = selectedBox.options[selectedBox.selectedIndex].value.substr(0,selectedBox.options[selectedBox.selectedIndex].value.indexOf(":"))
curatedName = selectedBox.options[selectedBox.selectedIndex].value
	

document.getElementById ("PantheonLink").href = "http://wyrdwalkers.wikidot.com/"+ curatedName;
document.getElementById ("PantheonLink").innerHTML = "Wiki Link: "+ curatedName;

document.getElementById('OriginLink').style.display = 'none'

}
function setChosenGod(selectedBox){
document.getElementById ("OriginLink").href = "http://wyrdwalkers.wikidot.com/"+ selectedBox.options[selectedBox.selectedIndex].value;
document.getElementById ("OriginLink").innerHTML = "Wiki Link: "+ selectedBox.options[selectedBox.selectedIndex].value;
	ChosenGod = selectedBox.options[selectedBox.selectedIndex].value;
document.getElementById('OriginLink').style.display = 'block'
}
function setFirstRole(selectedBox){
	ChosenFirstRole = selectedBox.options[selectedBox.selectedIndex].value;
}
function setSecondRole(selectedBox){
	ChosenSecondRole = selectedBox.options[selectedBox.selectedIndex].value;
}
	
//__________________________________________________
// Roles
	
var rolesLists = new Array(5) 
rolesLists["empty"] = ["Select a Main Role"]; 
rolesLists["Meat Shield"] = ["Select Role","Damage Dealer", "Party Face", "Skill Monkey", "Support-Controller"]; 
rolesLists["Damage Dealer"] = ["Select Role","Meat Shield", "Party Face", "Skill Monkey", "Support-Controller"]; 
rolesLists["Party Face"] = ["Select Role","Meat Shield", "Damage Dealer", "Skill Monkey", "Support-Controller"]; 
rolesLists["Skill Monkey"] = ["Select Role","Meat Shield", "Damage Dealer", "Party Face", "Support-Controller"]; 
rolesLists["Support-Controller"] = ["Select Role","Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	
function rolesChange(selectObj2) { 
    var idx = selectObj2.selectedIndex; 
    var which = selectObj2.options[idx].value; 
    var cSelect = document.getElementById("secondRole"); 
    var len=cSelect.options.length;
    var newOption; 
    
    cList2 = rolesLists[which]; 
     
    while (cSelect.options.length > 0) { 
        cSelect.remove(0);
    } 
        
    for (var i=0; i<cList2.length; i++) { 
        newOption = document.createElement("option"); 
        newOption.value = cList2[i]; // assumes option string and value are the same 
        newOption.text=cList2[i]; 
        cSelect.appendChild(newOption);
        $(cSelect).selectpicker('refresh');
        /*try { 
            //cSelect.add(newOption); // this will fail in DOM browsers but is needed for IE 
        } 
        catch (e) { 
            cSelect.appendChild(newOption); 
        } */
    } 
} 

value = 0
function clearContents(element) {
if(value == 0){
  element.value = '';}
value+=1
}

function characterSheetSpawn() {



document.getElementById('inputTextToSave').value = "Aspects:     " +"\n" + document.getElementById('highConcept').value + "\n " + document.getElementById('trouble').value + "\n " + document.getElementById('aspect1').value + "\n " + document.getElementById('aspect2').value +"\n " + document.getElementById('aspect3').value + "\n     \n" + "Skills: \n+3: " + document.getElementById('31').value + "\n+2: " + document.getElementById('21').value + ", " + document.getElementById('22').value + "\n+1: " + document.getElementById('11').value +", " + document.getElementById('12').value +", " + document.getElementById('13').value + "\n     \n" + "Stunts: " + "\n" + document.getElementById('stunt1').value + "\n " + document.getElementById('stunt2').value + "\n " + document.getElementById('stunt3').value + "\n     \n" + "Legendary Abilities: " + "\n " + document.getElementById('legend1').value + "\n " + document.getElementById('legend2').value + "\n " + document.getElementById('legend3').value + "\n\n "
}

function saveTextAsFile(){
    var textToWrite = document.getElementById("inputTextToSave").value.replace(/\n/g, "\r\n") 
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null){
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else{
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function destroyClickedElement(event){
    document.body.removeChild(event.target);
}

/*bootbox.confirm({
    message: "This is a confirm with custom button text and color! Do you like it?",
    buttons: {
        confirm: {
            label: 'Yes',
            className: 'btn-success'
        },
        cancel: {
            label: 'No',
            className: 'btn-danger'
        }
    },
    callback: function (result) {
        console.log('This was logged in the callback: ' + result);
    }
});*/