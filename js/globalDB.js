var globalDB = {
    campaigns:[{
        name: "Ghosts In The Wind",
        nbPlayers: 6,
        players: [1,2,3,4,5,6],
        running: true,
        done: false
    },{
        name: "Bringing Steel To The Sky",
        nbPlayers: 4,
        players: [11,12,13,14],
        running: false,
        done: true
    },{
        name: "Godly Check Mate",
        nbPlayers: 5,
        players: [11,12,13,14,15],
        running: true,
        done: false
    },{
        name: "Wind of Change",
        nbPlayers: 4,
        players: [7,8,9,10],
        running: false,
        done: false
    }],
    players:[{
        playerID: 1,
        name: "Dayana Citlalin",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/quetzalcoatl",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/dayana-citlalin",
        aspects: ["Archéologue aventurière", "Oeillères passionnées", "Douée de ses mains", "Protectrice de l'Histoire", "Le charisme des profondeurs"],
        skills: [[""], ["Volonté", ""],["Savoir","Athlétisme",""],["Rapport","Anatomie","Combat",""]],
        stunts:[{
            title:"Mains calleuses",
            text: "Peut utiliser Anatomie au corps-à-corps en attaque avec un bonus de +1"
        },{
            title:"Esprit d'acier",
            text: "Peut utiliser Volonté pour se défendre"
        },{
            title:"Don du sang",
            text: "Lors d'un jet d'Hématurgie, choisir : <br><ul><li>+1 au prochain de Volonté</li><li>Le prochain aspect créé par Hématurgie donne +3 au lieu de +2</li></ul>"
        },{
            title:"L'esprit et le corps",
            text: "Peut utiliser Volonté pour les jets d'initiative"
        }],
        abilities:[["Hématurgie - Itzli", "Magie des âmes - Soulbinding", "Vision du Wyrd - Mystère", "Physiologie Epique - Ouïe", "Nuit - Lune", "Terre - Montagne", "Profondeurs - Cavernes", "Ordre - Gravité", "Taiyi - Nature", "Druidisme - Sorcellerie Fey (Eté)", "Enech - Aventure<br><ul><li>Lumière - Soleil</li><ul>"],[],[]]
    },{
        playerID: 2,
        name: "Melissa Apidae",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/parvati",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/melissa-apidae",
        aspects: ["Rat de laboratoire", "L'entêtement de la butineuse", "Guerrière guérisseuse", "Volontier son miel, à regret son dard", "L'ordre pour prospérer"],
        skills: [[""], ["Savoir", ""],["Anatomie","Athlétisme",""],["Perception","Volonté","Manipulation",""]],
        stunts:[{
            title:"Les points ancestraux",
            text: "Peut utiliser Anatomie pour attaquer au corps-à-corps"
        },{
            title:"Charme de Parvati",
            text: "L'utilisation de Lumière - Soleil donne +2 au prochain jet de Manipulation"
        },{
            title:"Perçons le mystère",
            text: "L'utilisation de Mystère donne +1 sur le prochain jet de Volonté ou de Perception. A préciser immédiatement"
        },{
            title:"Microscope naturel",
            text: "Peut utiliser Savoir pour les jets de Perception hors combat"
        }],
        abilities:[["Ordre - Savoir", "Magie des âmes - Soulbinding", "Vision du Wyrd - Mystère", "Terre - Vie", "Lumière - Soleil", "Nuit - Rêve", "Ciel - Calme", "Mort - Voyage", "Taiyi - Nature", "Heku"],["Druidisme<br><ul><li>Thériantropy - Abeille</li><li>Druidisme Vert</li></ul>"],[]]
    },{
        playerID: 3,
        name: "Sybil McConnell",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/dian-cecht",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/sybil-mcconnell",
        aspects: ["Physicienne passionnée", "Génie à la dérive", "Soutien inébranlable", "Boostée à l'adrénaline", "Autorité naturelle"],
        skills: [["Savoir"], ["Volonté", "Athlétisme"],["Technologie","Perception","Présence"],["Manipulation","Anatomie","Physique","Ressources"]],
        stunts:[{
            title:"Le corps et l'esprit",
            text: "Peut utiliser Savoir pour les jets de défense"
        },{
            title:"Esprit d'acier",
            text: "Peut utiliser Volonté pour se défendre"
        },{
            title:"La voie du savoir",
            text: "Lors d'un jet de Vision du Wyrd, choisir : <br><ul><li>+1 au prochain de Savoir</li><li>Le prochain aspect créé par Sybil donne un bonus de +3</li></ul>"
        },{
            title:"Dance my puppets",
            text: "Peut utiliser Chwal - Marionnettiste avec un jet normal sns limites d'invocations dans les situations sociales"
        }],
        abilities:[["Druidisme - Technodruidisme", "Hématurgie - Yahuar", "Vision du Wyrd - Mystère", "Chwal - Marionnettiste", "Nuit - Voile", "Eau - Mer Déchainée", "Profondeurs - Abysses"],["Physiologie Epique<br><ul><li>Vision Epique</li><li>Vitesse Epique</li></ul>"],[]]
    },{
        playerID: 4,
        name: "Wilfrid Krain",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/tyr",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/wilfrid-krain",
        aspects: ["Héraut des temps modernes", "Vétéran de la guerre du Vietnam", "Adepte de l'art de la guerre", "Juriste Martial", "Chef de l'Ordre de la Justice de Sovereign"],
        skills: [["Combat"], ["Savoir", "Physique"],["Tir","Athlétisme","Présence"],["Technologie","Furtivité","Volonté","Anatomie"]],
        stunts:[{
            title:"Sovereign",
            text: "<i>Epée Légendaire</i>. Devient éthérée lorsque la cible est jugée innocente. Le jugement se fait sur un jet de Savoir. +2 en Combat si la cible est jugée coupable."
        },{
            title:"La poudre et le fer<sup>(4)</sup>",
            text: "<i>Canon scié</i>. +1 en Tir au corps-à-corps, -1 en Tir à longue distance.<br>Peut utiliser Ciel - Destruction dans restrictions d'utilisations avec un jet normal seulement pour créer un aspect avec son canon scié. Gagne +2 Tir supplémentaires lors de la prochaine utilisation du fusil. <br>Après un jet de Ciel - Destruction, le bonus du fusil passe à +2 au càc et -1 à longue portée."
        },{
            title:"La loi c'est moi",
            text: "Principe moral : Punition divine. +1 en Présence pour convaincre d'autres personnes de suivre ce principe moral"
        },{
            title:"L'Inquisiteur",
            text: "Peut utiliser Physique Epique sans limite d'utilisation avec un jet normal pour attaquer."
        }],
        abilities:[["Druidisme Runique", "Enech - Punition des impies<br><ul><li>Ordre - Loi</li><ul>"],["Invocation : Ciel<br><ul><li>Destruction</li><li>Pluie</li></ul>"],["Physiologie Epique<br><ul><li>Résistance</li><li>Force</li><li>Vitesse</li></ul>"]]
    },{
        playerID: 5,
        name: "Ljubomir 'Mimir' Uspešno",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/chernobog",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/ljubomir-uspesno",
        aspects: ["Influenceur investi et ingénieux", "Porteur de guigne", "Splendeur inconstestable", "Précurseur technologique", "Toujours en alerte"],
        skills: [["Volonté"], ["Manipulation", "Présence"],["Technologie","Tir","Rapport"],["Physique","Combat","Perception","Athlétisme"]],
        stunts:[{
            title:"Science surprise",
            text: "3 grenades par scène, utilisables sur un jet de Tir. L'effet de chaque grenade est aléatoire."
        },{
            title:"Unagi",
            text: "+1 en Combat lorsque Ljubomir se bat avec un objet trouvé"
        },{
            title:"Loi de Murphy",
            text: "+2 Perception pour les jets d'initiative"
        },{
            title:"Volonté du Justicier",
            text: "Si Ljubomir accepte la compulsion sur son Enech, il gagne en plus un bonus de +2 à son prochain jet de Présence."
        },{
            title:"Stop, Hammer time ! <sup>(3)</sup>",
            text: "Pour une Conséquence Légère du Destin, Mimir peut faire en sorte qu'un pouvoir légendaire ait l'effet opposé de celui voulu par son lanceur."
        }],
        abilities:[["Mort - Inévitabilité", "Profondeurs - Richesses", "Lumière - Brillance", "Heku", "Enech - Indépendance humaine<br><ul><li>Taiyi - Flux</li><ul>"],["Physiologie Epique<br><ul><li>Beauté</li><li>Présence</li></ul>"],[]]
    },{
        playerID: 6,
        name: "Sullivan O'Neill",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/hades",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/sullivan-oneill",
        aspects: ["Etudiant devin", "Naïeveté de la jeunesse", "L'horreur c'est bien, à deux c'est mieux", "Esprit Stratégique", "Parce-que c'est notre projet !!!"],
        skills: [["Perception"], ["Ressources", "Manipulation"],["Rapport","Anatomie","Présence"],["Furtivité","Volonté","Athlétisme","Physique"]],
        stunts:[{
            title:"Eminence grise",
            text: "+1 Volonté pour les attaques mentales"
        },{
            title:"Rejoins-nous, on a des cookies",
            text: "+1 Rapport pour lier quelqu'un à sa cause"
        },{
            title:"Super pouvoir",
            text: "Peut utiliser Ressources à la place de Savoir hors combat"
        },{
            title:"Ambiance mortelle",
            text: "Les aspects créés avec Mort - Horreur donnent un bonus de +4 à chaque invocation."
        },{
            title:"Les coulisses du pouvoir",
            text: "A chaque utilisation de Druidisme Runique, création de l'aspect 'Contrôle Runique' avec 2 IG."
        }],
        abilities:[["Mort - Horreur", "Magie des âmes - Shamanisme", "Druidisme Runique"],["Vision du Wyrd<br><ul><li>Prophétie</li><li>Mystère</li></ul>", "Invocation : Nuit<br><ul><li>Vide</li><li>Voile</li></ul>"],[]]
    },{
        playerID: 7,
        name: "Bryan Stewart",
        level: 1,
        earnedXP: 0,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/aphrodite",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/bryan-stewart",
        aspects: ["C'est moi le plus beau", "C'est moi la star", "Faites l'amour, pas la guerre", "Séducteur invétéré", "Qui s'y frotte s'y pique"],
        skills: [[""], ["Présence", ""],["Rapport","Volonté",""],["Manipulation","Technologie","Tir",""]],
        stunts:[{
            title:"T'as de beaux yeux tu sais",
            text: "Une fois par scène, Bryan crée sur une cible l'aspect 'Sous le charme de Bryan'"
        },{
            title:"Bourreau des coeurs",
            text: "+2 en Tir sur les cibles possédant l'aspect 'Sous le charme de Bryan'"
        },{
            title:"L'amour rend aveugle",
            text: "+2 Manipulation sur les cibles possédant l'aspect 'Sous le charme de Bryan'"
        }],
        abilities:[["Physiologie Epique - Beauté", "Ordre - Contrôle", "Heku"],[],[]]
    },{
        playerID: 8,
        name: "Mina Luminara",
        level: 1,
        earnedXP: 0,
        divineParent: "",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/mina-luminara",
        aspects: ["'With great powers come great responsibilities'", "'Witness me !'", "'Do or do not. There is no try'", "'It's not who you are underneath, it's what you do that defines you'", "'You shall not pass !'"],
        skills: [[""], ["Volonté", ""],["Perception","Présence",""],["Rapport","Technologie","Athlétisme",""]],
        stunts:[{
            title:"Always a hero to save the day",
            text: "Jet de Volonté au lieu de Combat lors d'un combat. Invoque des personnages de film pour frapper ou encaisser. Le personnage disparaît sitôt l'action effectuée. La statistique principale du personnage est égale à la volonté du lanceur au moment de l’invocation. La première invocation de chaque scène crée l'aspect de situation ‘Inspiration des Muses‘ avec une utilisation gratuite."
        }],
        abilities:[["Lumière - Brillance", "Vision du Wyrd - Prophétie", "Taiyi - Flot"],[],[]]
    },{
        playerID: 9,
        name: "Serge Molatof",
        level: 1,
        earnedXP: 0,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/jarilo",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/serge-molatof",
        aspects: ["Voyageur Indécis", "Lâche Laxiste", "Planificateur Expérimenté", "Près de sa fortune", "Présence Brejnevienne"],
        skills: [[""], ["Présence", ""],["Rapport","Perception",""],["Athlétisme","Savoir","Ressources",""]],
        stunts:[{
            title:"Instinct de survie",
            text: "+2 Présence pour forcer à la fuite des enemis (hostiles)"
        },{
            title:"Errance Légendaire",
            text: "Serge n'est jamais perdu à moins qu'il le veuille"
        },{
            title:"Pilier de barre",
            text: "Un allié qui suit les recommandations de Serge gagne l'aspect 'Soutiendu' avec 1 IG"
        }],
        abilities:[["Physiologie Epique - Présence", "Ordre - Loi", "Terre - Etendue"],[],[]]
    },{
        playerID: 10,
        name: "Etsuko",
        level: 1,
        earnedXP: 0,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/tsuki-yomi",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/etsuko",
        aspects: ["Eternelle Séductrice", "La Face claire de la Lune", "Beauté Divine", "Mère de la Nuit", "Conceptrice immaculée"],
        skills: [[""], ["Rapport", ""],["Volonté","Présence",""],["Athlétisme","Anatomie","Manipulation",""]],
        stunts:[{
            title:"Bon baiser nippon <sup>(*)</sup>",
            text: "Dès qu’Etsuko embrasse une cible de niveau inférieur au sien, jet normal de Chwal avec Rapport sans limite d’utilisation."
        },{
            title:"Moonraker",
            text: "+2 Volonté pour créer des Illusions la nuit avec Nuit- Lune"
        }],
        abilities:[["Chwal - Marionnettiste", "Nuit - Lune", "Terre - Vie"],[],[]]
    },{
        playerID: 12,
        name: "John Smith",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/bastet",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/john-smith",
        aspects: ["Espion pragmatique et patient", "Langue de Plomb", "La foule est mon alliée", "Compartimentalisateur d'information", "La félinitude dans le sang"],
        skills: [[""], ["Perception", ""],["Tir","Furtivité",""],["Technologie","Athlétisme","Volonté",""]],
        stunts:[{
            title:"L'ami des tous petits <sup>(2)</sup>",
            text: "John peut relancer tous ses jets de Tir mais doit accepter le second résultat et possède l’aspect 'Position Révélée. La cible a -2 en Physique.'"
        },{
            title:"Vos yeux sont miens",
            text: "John peut créer l’aspect 'Vos yeux sont miens', lui permettant de voir à travers les yeux de sa cible tant que l’aspect est actif. Doit voir sa cible pour l’activer et elle peut s’en apercevoir avec un jet de volonté ou perception."
        },{
            title:"Good Morning Vietnam",
            text: "+1 Tir en position surélevée"
        },{
            title:"Il y a deux sortes de noix",
            text: "Desert Eagle. Moyenne/Courte portée : +1 Perception pour détecter les faiblesses."
        },{
            title:"Patience est vertu",
            text: "Fusil Sniper. Si utilisé, John peut passer son tour pour créer l’aspect 'Je te vois' avec deux FI à +2 bonus"
        },{
            title:"Réflexes Eclairs",
            text: "+2 Notice pour les jets d’initiative"
        },{
            title:"Coordination Exemplaire",
            text: "Dans une scène, +1 sur toutes les FI d’aspects prévus à l’avance."
        },{
            title:"Vision du Vide",
            text: "Une fois par scène, peut voir à travers les murs à portée de vue mais devient aveugle au tour suivant"
        },{
            title:"A-Team",
            text: "Les aspects créés avec Ordre - Contrôle de Soi donnent un bonus de +3 au lieu de +2"
        }],
        abilities:[["Heku", "Vitesse Epique", "Ordre - Contrôle de Soi", "Taiyi - Nature"],["Invocation : Nuit<br><ul><li>Voile</li><li>Vide</li></ul>", "Druidisme<br><ul><li>Technodruidisme</li><li>Thériantropie : Aigle</li></ul>"],[]]
    },{
        playerID: 13,
        name: "Nita Nairobi",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/tane-mahuta",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/nita-nairobi",
        aspects: ["Chamane de l'Ours", "On s'bouge le cul !", "Guider le peuple", "Justicière sociale", "Leader du BEAR"],
        skills: [["Présence"], ["Volonté", "Physique"],["Empathie","Perception","Anatomie"],["Technologie","Rapport","Savoir","Athlétisme"]],
        stunts:[{
            title:"Tatouages Runique : Ours<sup>(3)</sup>",
            text: "Formes d'ours : <ul><li>Classique</li><li>Esprit (+1 Volonté, -1 Physique)</li><li>Bois (+1 Physique, -1 Athlétisme)</li><li>Brume (+1 Athlétisme, -1 Physique)</li></ul>"
        },{
            title:"Bénédiction de l'ours éclair <sup>(3)</sup>",
            text: "Sous forme d'ours et sous la pluie, les alliés de Nita gagnent une case de stress physique à -2 et une case de stress mental à -1. En cas d'action injuste de la part d'un allié, celui-ci est foudroyé et perd à la place une case de stress physique à -2 et de stress mental à -1 natives"
        },{
            title:"Rugissement de Nita <sup>(2)</sup>",
            text: "Peut créer l'aspect 'BEAR Assemble !' avec 2 IG une fois par scène"
        },{
            title:"Fille des pluies",
            text: "Nita peut faire tomber la pluie après 5 minutes"
        },{
            title:"Unskilled & Strong <sup>(2)</sup>",
            text: "Peut utiliser Physique à la place de Combat"
        },{
            title:"Griffes d'éviscération<sup>(3)</sup>",
            text: "+2 de dégats si l'attaque a réussi"
        },{
            title:"Rassembleuse",
            text: "Nita n'est pas victime des préjugés"
        }],
        abilities:[["Enech<ul><li>Druidisme (Ours)</li></ul>", "Taille Epique", "Présence Epique", "Sorcellerie Fey - Pluie"],[],[]]
    },{
        playerID: 14,
        name: "Hamset",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/seth",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/hamset",
        aspects: ["Tout peut être sacrifié pour mon pouvoir", "Les Dieux ne pourront pas éternellement me surpasser", "Il y a les rivaux et les marionnettes", "Sans Panthéon mais pas sans ambition", "Personne n'échappe à mon contrôle"],
        skills: [["Volonté"], ["Manipulation", "Savoir"],["Ressources","Athlétisme","Perception"],["Empathie","Présence","Combat","Physique"]],
        stunts:[{
            title:"Marque",
            text: "3 maximum<ul><li>N1: Donne l'aspect 'Hamset seul maitre'</li><li>N2: Le personnage marqué devient un phylactère vivant (Hamset échange une partie de son âme avec celle de la cible)</li><li>N3: Hamset peut utiliser 1 point dans la meilleure stat du personnage contrôlé.</li></ul>"
        },{
            title:"Kepesh du Désert",
            text: "Fait apparaitre une Kepesh"
        },{
            title:"Lien avec Tantale",
            text: "+1 au maximum des jets de dés (compte pour les liens du Destin)"
        },{
            title:"Combat télékinésique",
            text: "Remplace Physique et Combat par Volonté"
        },{
            title:"Oeil du Désert",
            text: "Pas de Lien du Destin à minuit"
        },{
            title:"Dying is your job",
            text: "L'utilisation combinée d'Itztli et Nécromancie ne génère pas de liens du Destin sur Nécromancie"
        },{
            title:"Forme Fantomatique",
            text: "Une fois par session, peut remplacer un dégât physique par un dégat mental"
        }],
        abilities:[["Profondeurs - Abysses", "Ordre - Gravité"],["Hématurgie<ul><li>Itztli</li><li>Sculpteur de chair</li></ul>"],["Magie des âmes<ul><li>Contagion Emotionnelle</li><li>Vampirisme</li><li>Nécromancie</li></ul>"]]
    },{
        playerID: 15,
        name: "Lin Wang",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/hine-nui-te-po",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/lin-wang",
        aspects: ["La loyauté est une arme", "Le silence est le refuge des sages", "L'empathie est un frein à l'accomplissement", "Fils à maman", "Il n'y a pas de lumière sans ombre"],
        skills: [["Athlétisme"], ["Volonté", "Combat"],["Discrétion","Connaissance","Perception"],["Anatomie","Présence","Ressources","Physique"]],
        stunts:[{
            title:"Le chemin de la Lune",
            text: "Peut utiliser Athlétisme à la place de Discrétion la nuit"
        },{
            title:"Ombre parmi les ombres",
            text: "Peut relancer ses jets de Discrétion dans l'obscurité et choisir le meilleur résultat"
        },{
            title:"Ami de la pègre",
            text: "+2 Rapport avec les criminels"
        },{
            title:"Oeil de Lune",
            text: "Permet à Lin de voir comme en plein jour et de bénéficier d'une invocation de Lune supplémentaire"
        },{
            title:"Euthanasie bienveillante",
            text: "Sur réussite d'un jet de Perception, si la cible a subi une conséquence grave, Lin lui accorde une mort douce (sauf résistance avec Volonté)"
        },{
            title:"La face cachée de la Lune",
            text: "Une fois par scène, une invocation d'Ombre donne +2 à la prochaine invocation de Lune et inversement"
        },{
            title:"Guerrier insaisissable",
            text: "Lors d'un jet d'Atlétisme en défense, peut relancer le jet mais doit accepter le second résultat"
        },{
            title:"Devoir filial",
            text: "Une compulsion de l'aspect 'Fils à maman' donne un bonus de +4 au lieu de +2"
        }],
        abilities:[["Mort - Paix"],["Physiologie Epique<ul><li>Athlétisme</li><li>Vitesse</li></ul>","Invocation : Ciel<ul><li>Vent</li><li>Calme</li></ul>"],["Invocation : Nuit<ul><li>Ombre</li><li>Lune</li><li>Rêve</li></ul>"]]
    },{
        playerID: 16,
        name: "Farrokh Bulsara",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/fenrir",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/farrokh-bulsara",
        aspects: ["Architect of Fear", "Creature of the Night", "Legend Greedy", "Your Mind Is Your Prison", "No tears only dream"],
        skills: [["Manipulation"], ["Présence", "Volonté"],["Furtivité","Savoir","Perception"],["Anatomie","Combat","Technologie","Physique"]],
        stunts:[{
            title:"Is This The Real Life ?<sup>(2)</sup>",
            text: "Peut utiliser Nuit - Peur avec un jet de dé normal pour découvrir des peurs"
        },{
            title:"Is This Just Fantasy ?",
            text: "A chaque invokation Fear sur une cible, création d'un aspect 'Marqué par la peur' qui se disperse au bout de 3 tours d’imprégnation."
        },{
            title:"No Escape From Reality",
            text: "Peut utiliser Manipulation au lieu de Savoir pour découvrir des peurs."
        },{
            title:"Caught In A Landslide<sup>(2)</sup>",
            text: "Une fois par session, peut découvrir une peur de l'adversaire automatiquement"
        }],
        abilities:[["Magie des âmes - Soulbinding", "Physiologie Epique - Beauté"],["Invacation : Nuit<ul><li>Peur</li><li>Voile</li></ul>"],[]]
    },{
        playerID: 17,
        name: "Harald Halfdanson",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/loki",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/Harald Halfdanson",
        aspects: ["Godborn corrompu de Loki", "I just couldn't resist...", "Les amis de mes ennemis sont mes amis", "La crème de la crème", "Ai confiance..."],
        skills: [["Manipulation"], ["Volonté", "Ressources"],["Furtivité","Présence","Perception"],["Anatomie","Technologie","Athlétisme","Savoir"]],
        stunts:[{
            title:"Seed of Discord<sup>(2)</sup>",
            text: "Peut compulser gratuitement les aspects créés avec Présence Epique"
        },{
            title:"Improvise. Adapt. Overcome",
            text: "Lorsqu'il surpasse un aspect existant, Harald peut créer un aspect bénéfique pour le remplacer"
        },{
            title:"Don't touch this",
            text: "Peut utiliser Taiyi - Flot pour se défendre avec un jet normal et sans limite d'utilisation"
        },{
            title:"Relations",
            text: "Peut utilise Manipulation et/ou Ressources pour decouvrir un aspect sur un ennemi avec 1 IG"
        },{
            title:"Useful Little Things",
            text: "Your pockets are full of useful little things. Whenever you need something, you have it, provided it’s not something too unusual or too large to fit in a pocket, belt pouch, or backpack. When you say you have something, the GM should be likely to agree."
        },{
            title:"On a des tas de choses à se dire",
            text: "Manipulation +2 sur une tentative de seduction"
        },{
            title:"Takes one to know one",
            text: "Manipulation au lieu de Perception ou Rapport"
        }],
        abilities:[["Physiologie Epique - Présence","Taiyi - Flot"],["Magie des âmes<ul><li>Chwal - Marionnettiste</li><li>Contagion Emotionnelle</li></ul>"],[]]
    },{
        playerID: 18,
        name: "Severiann",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/severiann",
        aspects: ["Evil Is Deadly Cold", "Titans want me to prove myself", "Mind over Body", "Thinking before acting", "Proud to be a Dragon"],
        skills: [[""], ["Volonté", ""],["Physique","Perception",""],["Présence","Rapport","Savoir",""]],
        stunts:[{
            title:"Ailes",
            text: "Aspect permanent 'Vol'"
        },{
            title:"Icy You",
            text: "Each and every ennemy hit by any spell and undergoing an aspect creation gets a -1 Physique malus which can add up to -5"
        },{
            title:"Human form",
            text: "Can transform into a human with full access to all invocation, abilities and stats. Cannot fly in human form"
        },{
            title:"Freezing blood",
            text: "Each time an ennemy dies or undergoes a Severe consequence from one of Severiann's invocation ability: The use is free."
        },{
            title:"Mind over body",
            text: "Can use Will instead of Physique agains physical damages"
        },{
            title:"Orb of Frost",
            text: "Every week, Severian gain one Orb of Frost (up to 5 in total). Each Orb can be used in combat for a +2 to the dice results of the power (water or air) ustilization."
        }],
        abilities:[["Dragon"],["Invocation : Air<ul><li>Destruction</li><li>Ciel dégagé</li></ul>"],["Invocation : Eau<ul><li>Glace</li><li>Paix</li>li>Vie</li></ul>"]]
    },{
        playerID: 19,
        name: "Tsukiyotake-san",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/gaia",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/tsukiyotake-san",
        aspects: ["Mushroom Monk", "Titanspawn of Gaia", "A stranger is a friend you haven’t met", "Peace of mind is true power", "Acting together is to find happiness"],
        skills: [[""], ["Rapport", ""],["Combat","Perception",""],["Furtivité","Volonté","Savoir",""]],
        stunts:[{
            title:"Harmony Tai Chi",
            text: "Cannot inflict physical damage or stress to sentient or living beings by any direct action. When rolling rapport or will, can reroll and but must accept the second result"
        },{
            title:"Will of the Earth",
            text: "Compulsion -2 Fatepoint to resist, +3 if accepted"
        },{
            title:"Good Cop",
            text: "+2 to Rapport when creating advantages to assist someone who uses presence to intimidate"
        },{
            title:"Oeil de Lune",
            text: "Permet à Lin de voir comme en plein jour et de bénéficier d'une invocation de Lune supplémentaire"
        },{
            title:"Mushroom flesh<sup>(2)</sup>",
            text: "Once per session can diminish a physical consequence by meditating 3 hours"
        },{
            title:"Communion Spore<sup>(2)</sup>",
            text: "Up to eleven targets can willingly accept a communion spore after an hour long ritual. The target gains one use of Mushroom Flesh and can telepathically link for one week. (Uses one charge of Earth)"
        }],
        abilities:[["Augure","Druidisme Runique","Nuit - Rêve", "Illusion", "Magie des âmes - Shamanisme"],["Terre<ul><li>Vie</li><li>Nature</li></ul>"],[]]
    },{
        playerID: 20,
        name: "Li Romanov",
        level: 4,
        earnedXP: 45,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/yanluo",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/li-romanov",
        aspects: ["La loyauté est une arme", "Ambitious Fanatic", "Your Minds Are Mine To Mold", "Nothing To Witness If Nobody Left To Witness", "Everything Is For Sale"],
        skills: [[""], ["Volonté", ""],["Savoir","Furtivité",""],["Manipulation","Présence","Perception","Combat"]],
        stunts:[{
            title:"Doomsday<sup>(2)</sup>",
            text: "Peut utiliser Nuit-Néant avec un jet de dé normal pour attaquer (et seulement attaquer)"
        },{
            title:"Currency Exchange",
            text: "Peut utiliser Will au lieu de Lore pour découvrir des informations hors combat"
        },{
            title:"For the Night is Dark and Full of Terrors",
            text: "Lors de l'utilisation d'un pouvoir de Night-Fear, la cible gagne l'Aspect "Stuck in Fear", donnant -2 à son prochain jet de défense"
        },{
            title:"The Night Shall Be My Shroud",
            text: "Lors de l'utilisation d'un pouvoir de Night-Veil, le scion choisit entre:<ul><li>Chaque allié (scion exclus) gagne +1 au prochain jet de défense</li><li>Le scion gagne +2 en Stealth pour son prochain jet de furtivité pendant la session (non cumulable)</li></ul>"
        },{
            title:"Scythe 2.0",
            text: "A chaque utilisation de sa dague pour tuer ou sacrifier une cible, Li créé l'aspect 'Field of Death' autour de lui, lui donnant +2 à sa prochaine invocation d'Inéluctabilité."
        },{
            title:"Now You See Me",
            text: "Donne à Li +2 Fight lorsqu'il essaie de poignarder quelqu'un dans le dos"
        }],
        abilities:[["Mort - Inéluctabilité", "Taiyi - Nature","Magie des âmes - Soulbinding"],["Hématurgie<ul><li>Yahuar</li><li>Itztli</li></ul>"],["Invocation : Nuit<ul><li>Voile</li><li>Peur</li><li>Néant</li></ul>"]]
    }]
}