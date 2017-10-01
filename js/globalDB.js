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
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/melissa-apidae"
    },{
        playerID: 3,
        name: "Sybil McConnell",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/dian-cecht",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/sybil-mcconnell"
    },{
        playerID: 4,
        name: "Wilfrid Krain",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/tyr",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/wilfrid-krain"
    },{
        playerID: 5,
        name: "Ljubomir 'Mimir' Uspešno",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/chernobog",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/ljubomir-uspesno"
    },{
        playerID: 6,
        name: "Sullivan O'Neill",
        level: 4,
        earnedXP: 15,
        divineParent: "http://wyrdwalkers-fr.wikidot.com/hades",
        charWikiLink: "http://wyrdwalkers-fr.wikidot.com/sullivan-oneill"
    }]
}