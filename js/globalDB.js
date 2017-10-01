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
            title:"La poudre et le fer",
            text: "<i>Canon scié</i>. +1 en Tir au corps-à-corps, -1 en Tir à longue distance."
        },{
            title:"La loi c'est moi",
            text: "Principe moral : Punition divine. +1 en Présence pour convaincre d'autres personnes de suivre ce principe moral"
        },{
            title:"La poudre et la foudre",
            text: "Peut utiliser Ciel - Destruction dans restrictions d'utilisations avec un jet normal seulement pour créer un aspect avec son canon scié. Gagne +2 Tir supplémentaires lors de la prochaine utilisation du fusil."
        }],
        abilities:[["Druidisme Runique", "Enech - Punition des impies<br><ul><li>Ordre - Loi</li><ul>"],["Physiologie Epique<br><ul><li>Résistance</li><li>Force</li></ul>", "Invocation : Ciel<br><ul><li>Destruction</li><li>Pluie</li></ul>"],[]]
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
    }]
}