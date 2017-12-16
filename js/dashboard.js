var CharacterObject = {};

function LoadingContent(){
    if(window.location.href.indexOf("#Godborn-Maker") > -1) {
       OpenGMaker();
    }
    else{
        LoadHomePage();
    }
    
    DisplayNumbersInMenu();
}

function SetActiveMenu(AElement){
	var activeElement = $(".WR_Button_Class.active");
	var parentMenu = $(AElement).closest(".WR_Button_Class.nav-item");
	var listBelow = $(AElement).find("ul");
	var openedList = [];
	var lists = $("ul.sub-menu.WR_SousMenu_Group_Container_Class");
	
	for(var i = 0; i < lists.length; i++){
		if(lists[i].style.display == "block")
			openedList.push(lists[i]);
	}
	
	if(openedList.length != 0 && openedList[0].style.display == "block"){
		$(openedList[0]).slideUp();
	}
	
	if(!$(parentMenu).hasClass("active")){
		parentMenu.addClass("open active");
		ToggleSelected($(AElement));
		activeElement.removeClass("active");
	}
}

function SetActiveSubMenu(AElement) {
	var parentMenu = $(AElement).closest(".WR_Button_Class.nav-item");
	var activeElement = $(".WR_Button_Class.active");
	
	
	if(!parentMenu.hasClass("active")){
		parentMenu.addClass("open active");
		ToggleSelected(parentMenu);
		activeElement.removeClass("active");
	}
}

function ToggleSelected(element){
	var selectedElements = $(".WR_Selected_Indicator.selected");
	var menuLink = null;
	var selectorElement = document.createElement("span");
	
	if($(element).hasClass("WR_Button_Class_Link")){
		menuLink = element;
	}
	else{
		menuLink = $(element).find(".WR_Button_Class_Link.nav-link.nav-toggle");
	}
	
	selectedElements.remove();
	
	$(selectorElement).addClass("WR_Selected_Indicator selected");
	menuLink[0].appendChild(selectorElement);
}

function OpenCampaignCharacters(campString){
    var urlToRequest = "https://thegelule.github.io/Dashboard/pages/" + campString + "_characters.html"
    $.ajax({
        url : urlToRequest,
        type: "GET",
        success : function(result){
            var asyncContentContainer = document.getElementById("ContentDisplayContainer");
            asyncContentContainer.innerHTML = result;
        }
    });
    
    
}

function OpenCampaignPictures(campString){
    var urlToRequest = "https://thegelule.github.io/Dashboard/pages/" + campString + "_pictures.html"
    $.ajax({
        url : urlToRequest,
        type: "GET",
        success : function(result){
            var asyncContentContainer = document.getElementById("ContentDisplayContainer");
            asyncContentContainer.innerHTML = result;
            InitPortfolio(jQuery, window, document)
        }
    });
    
}


function OpenCampaignStory(campString){
    var urlToRequest = "https://thegelule.github.io/Dashboard/pages/" + campString + "_story.html"
    $.ajax({
        url : urlToRequest,
        type: "GET",
        success : function(result){
            var asyncContentContainer = document.getElementById("ContentDisplayContainer");
            asyncContentContainer.innerHTML = result;
        }
    });
    
}



function resizeIframe(obj) {
	var pageContentHeight = window.getComputedStyle(document.getElementsByClassName("page-content")[0]).height.replace("px","");
	var pageContentPaddingB = window.getComputedStyle(document.getElementsByClassName("page-content")[0]).paddingBottom.replace("px","");
	
    obj.style.height = parseInt(pageContentHeight) - parseInt(pageContentPaddingB) + "px";
 }
  
function DisplayNumbersInMenu(){
	FetchNumberofCharacters("GITS_characters.html");
    FetchNumberofCharacters("WOC_characters.html");
    FetchNumberofCharacters("GCM_characters.html");
    FetchNumberofCharacters("DOS_characters.html");
}

function FetchNumberofCharacters(pageName){
	var urlToFetch = "https://thegelule.github.io/Dashboard/pages/" + pageName;
	var tab = pageName.split("_");
	var campName = tab[0];
	
	$.ajax({
		url : urlToFetch,
		type: "GET",
		success : function(result){
			var count = (result.match(/mt-card-item/g) || []).length;
			document.getElementById(campName + "CharacNb").innerText = count;
		}
	});
}

function LoadLibraryDB(){
    var emptyLibraryDB = {
        characters:[],
        npcs:[],
        campaigns:[]
    }

    if(localStorage.library != undefined){
        libraryDB = JSON.parse(localStorage.library);
    }
    else{
        libraryDB = emptyLibraryDB;
        localStorage.library = JSON.stringify(libraryDB);
    }
}

function LoadHomePage(){
    LoadLibraryDB();
    $.ajax({
       url: "https://thegelule.github.io/Dashboard/pages/IntroPage.html",
        type: "GET",
        success : function(result){
            var asyncContentContainer = document.getElementById("ContentDisplayContainer");
            asyncContentContainer.innerHTML = result;
        }
    });
}

function OpenCharacterDialog(element){
    var characID = element.getAttribute("data-id");
    var character = RetrieveCharacterFromID(characID);
    var bufferElement = null;
    
    $.ajax({
       url: "https://thegelule.github.io/Dashboard/pages/CharacterSheet.html",
        type: "GET",
        success : function(result){
            bufferElement = document.createElement("div");
            bufferElement.innerHTML = result; 
            FillForms($(bufferElement), character); 
            bootbox.alert(bufferElement.innerHTML);
            
        }
    });
    
}

function GM_SaveCharacterInLibrary(){
    GM_CreateCharacterContainer();
    GM_FetchCharacterInfo();
    GM_CharacterSavedNotif();
    GM_OpenLibraryPanel();
}

function GM_FetchCharacterInfo(){

}

function GM_CreateCharacterContainer(){
    var libraryContainer = $(".CharacterLibraryContainer")[0];
    var characterTag = document.createElement("div");
    var dropButton = document.createElement("a");
    var characterName = document.createElement("span");
    var characArrowDown = document.createElement("i");
    var actionslist = document.createElement("ul");
    var viewCharacterSummary = document.createElement("li");
    var applyHTMLTemplate = document.createElement("li");
    var deleteCharacter = document.createElement("li");
    var viewCharacterSummaryAction = document.createElement("a");
    var applyHTMLTemplateAction = document.createElement("a");
    var deleteCharacterAction = document.createElement("a");
    var viewCharacIcon = document.createElement("i");
    var viewCharacLabel = document.createElement("span");
    var applyTempIcon = document.createElement("i");
    var applyTempLabel = document.createElement("span");
    var deleteCharIcon = document.createElement("i");
    var deleteCharLabel = document.createElement("span");

    viewCharacLabel.innerHTML = "View Summary";
    $(viewCharacIcon).addClass("fa fa-eye");
    applyTempLabel.innerHTML = "Spawn a Sheet";
    $(applyTempIcon).addClass("fa fa-html5");
    $(characArrowDown).addClass("fa fa-angle-down");
    characterName = $("#inputFileNameToSaveAs").val();
    $(characterName).addClass("LibraryCharacterName");
    $(characterTag).addClass("btn grey-salsa");
    deleteCharLabel = "Delete Character";
    $(deleteCharIcon).addClass("fa fa-times");

    viewCharacterSummaryAction.appendChild(viewCharacIcon);
    viewCharacterSummaryAction.appendChild(viewCharacLabel);
    applyHTMLTemplateAction.appendChild(applyTempIcon);
    applyHTMLTemplateAction.appendChild(applyTempLabel);
    deleteCharacterAction.appendChild(deleteCharIcon);
    deleteCharacterAction.appendChild(deleteCharLabel);
    viewCharacterSummary.appendChild(viewCharacterSummaryAction);
    applyHTMLTemplate.appendChild(applyHTMLTemplateAction);
    deleteCharacter.appendChild(deleteCharacterAction);
    actionslist.appendChild(viewCharacterSummary);
    actionslist.appendChild(applyHTMLTemplate);
    actionslist.appendChild(deleteCharacter);
    dropButton.appendChild(characterName);
    dropButton.appendChild(characArrowDown);
    characterTag.appendChild(dropButton);

    viewCharacterSummaryAction.addEventListener("click",function(){
        
    });
    
    applyHTMLTemplateAction.addEventListener("click",function(){
        
    });

    deleteCharacterAction.addEventListener("click",function(){
        var characterName = $(this).closest(".LibraryCharacterName")[0].innerText;

        DeleteCharacterFromLibrary(characterName);
    });
    
}

function GM_OpenLibraryPanel(){
    $("#LibraryOpener").click();
}

function GM_OpenCharacterDialog(){    
    $.ajax({
       url: "https://thegelule.github.io/Dashboard/pages/GM_CharacterSheet.html",
        type: "GET",
        success : function(result){
            bufferElement = document.createElement("div");
            bufferElement.innerHTML = result; 
            GM_FillForms($(bufferElement)); 
            bootbox.confirm({
                message: bufferElement.innerHTML,
                buttons: {
                    confirm: {
                        label: 'Download',
                        className: 'btn-info'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-default'
                    }
                },
                callback: function (result) {
                    if(result){
                        SaveCharacterAsText();
                    }
                }
            });
            
        }
    });
    
}

function OpenGMaker(){
    
    SetActiveMenu(document.getElementById("GMMenuButton"));
    //$(".page-quick-sidebar-toggler")[0].style.display = "block";
    
    $.ajax({
       url: "https://thegelule.github.io/Dashboard/pages/GodbornMaker.html",
        type: "GET",
        success : function(result){
            var asyncContentContainer = document.getElementById("ContentDisplayContainer");
            asyncContentContainer.innerHTML = result;
            InitSelects();
        }
    });
}

function FillForms(e,ch){
    FillName(e.find(".name")[0],ch.name);
    FillAspects(e.find(".AspectsContainer")[0],ch.aspects);
    FillSkills(e.find(".SkillsContainer")[0],ch.skills);
    FillStunts(e.find(".StuntsContainer")[0],ch.stunts);
    FillAbilities(e.find(".AbilitiesContainer")[0],ch.abilities);
}

function GM_FillForms(e){
    FillName(e.find(".name")[0],$("#inputFileNameToSaveAs").val());
    GM_FillPicture(e.find(".picture")[0],$("#CharacterImageURL").val());
    GM_FillAspects(e.find(".AspectsContainer")[0],$(".CustomAspect"));
    GM_FillSkills(e.find(".skills"),$(".SkillInput"));
    GM_FillStunts(e.find(".StuntsContainer")[0],$("#StuntFormContainer"));
    GM_FillAbilities(e.find(".AbilitiesContainer")[0],$("#AbilityFormContainer"));
}

function GM_FillPicture(e,url){
    e.src = url;
    CharacterObject.Picture = url;
}

function FillAspects(e,aspects){
    var ulElement = $(e).find(".dropdown-menu-list")[0];
    
    for(var i = 0; i < aspects.length; i++){
        var listItemElement = document.createElement("li");
        var itemContainer = document.createElement("div");
        var itemTextContainer = document.createElement("span");
        var aspectText = aspects[i];
        
        listItemElement.classList.add("aspect");
        itemTextContainer.innerText = aspectText; 
        
        itemContainer.appendChild(itemTextContainer);
        listItemElement.appendChild(itemContainer);
        ulElement.appendChild(listItemElement);
    }
}

function GM_FillAspects(e,aspects){
    var ulElement = $(e).find(".dropdown-menu-list")[0];
    CharacterObject.Aspects = [];
    
    for(var i = 0; i < aspects.length; i++){
        var listItemElement = document.createElement("li");
        var itemContainer = document.createElement("div");
        var itemTextContainer = document.createElement("span");
        var aspectText = aspects[i].value;
        
        listItemElement.classList.add("aspect");
        itemTextContainer.innerText = aspectText;
        
        CharacterObject.Aspects.push(aspectText);
        itemContainer.appendChild(itemTextContainer);
        listItemElement.appendChild(itemContainer);
        ulElement.appendChild(listItemElement);
    }
}



function FillSkills(e,skills){    
    for(var i = 0; i < skills.length; i++){
        var skillLevelTab = skills[i];
        var increment = 5 - (i+1);
        var level = ".level" + increment;
        var levelContainerElement = $(e).find(level);
        var skillsElements = $(levelContainerElement[0]).find(".skills");
        
       for(var j = 0; j < skillLevelTab.length; j++){
           var skill = skillLevelTab[j];
           var skillElement = skillsElements[j];
           
           if(skill != undefined){
               skillElement.innerText = skill;
           }
       } 
    }
}

function GM_FillSkills(e,skills){ 
    
    var skillLevelTab = [];
    CharacterObject.Skills = []
    
    //On recrée le tableau de la DB
    for(var i = 4; i > 0; i--){
        var obj = {
            level: i,
            names: []
        };

        for(var j = 1; j < 5; j++){
            if((i+j) <= 5){ 
                var fetchID = "Skill_" + i + "_" + j;

                obj.names.push($(fetchID).text());
                skillLevelTab.push(document.getElementById(fetchID).value);
            }
        }

        CharacterObject.Skills.push(obj);
    }
    
    //On reboucle ensuite sur ce qui a été fait pour les fiches de persos
    for(var i = 0; i < e.length; i++){
        var skill = e[i];
       /* var skillInputGrandParent = skill.parentElement.parentElement;
        var inputLevel = parseInt(skillInputGrandParent.classList[1].replace("level",""));
        var increment = 5 - (i+1);
        var level = ".level" + increment;
        var levelContainerElement = $(e).find(level);
        var skillsElements = $(levelContainerElement[0]).find(".skills");*/
        
        //On suppose que les skills sont récupérés dans le bon ordre par jQuery. A changer si ça merde
        if(skillLevelTab[i] != "Empty")
            skill.innerText = skillLevelTab[i]; 
    }
}

function FillStunts(e,stunts){
    var formStunts = $(e).find(".form")[0];
    
    for(var i = 0; i < stunts.length; i++){
        var stunt = stunts[i];
        var stuntElement = NewStuntElement(stunt);
        formStunts.appendChild(stuntElement);
    }
}

function GM_FillStunts(e,stuntsContainer){
    var formStunts = $(e).find(".form")[0];
    var stunts = stuntsContainer[0].getElementsByClassName("StuntContainer");
    CharacterObject.Stunts = [];
    
    for(var i = 0; i < stunts.length; i++){
        var stuntElement = stunts[i];
        var stuntTitle = stuntElement.getElementsByClassName("CustomStuntTitle")[0].value;
        var stuntContent = stuntElement.getElementsByClassName("CustomStunt")[0].value;

        if(stuntElement.style.display != "none"){
            CharacterObject.Stunts.push({
                title: stuntTitle,
                content: stuntContent
            });
            var stuntElementCS = GM_NewStuntElement(stuntTitle,stuntContent);
            formStunts.appendChild(stuntElementCS);
        }
    }
}

function GM_FillAbilities(e,abilitiesContainer){
    var formAbilities = $(e).find(".form")[0];
    var abilitiesElements = $(abilitiesContainer).children(".AbilityContainer");
    CharacterObject.Abilities = [];

    for(var i = 0; i < abilitiesElements.length; i++){
        var ability = abilitiesElements[i]
        var powerName = $(ability).find("div.CustomAbilityTitle .selected .text").text();
        var specName = $(ability).find("div.CustomAbilitySpec .selected .text").text();
        
        if(specName != ""){
            specName = specName.split(/(?=[A-Z])/);
            
            //Si une spec est composée de plusieurs mots
            for(var j = 0; j < specName.length; j++){
                if(specName[j].indexOf(" ") == specName[j].length-1){
                    specName[j] += specName[j+1];
                    specName.splice(j+1,1);
                }
            }
        }
        else{
            specName = [""];
        }

        GM_NewAbilityElement(e,powerName,specName);
    }
}

function GM_NewAbilityElement(e,powerName,specName){
    var powerLevel = specName.length;
    var powerNameElement = document.createElement("li");
    var destinationBox = $(e).find(".AbilityL" + powerLevel + " > ul");

    powerNameElement.innerText = powerName;
    CharacterObject.Abilities.push({
        level: powerLevel,
        power: powerName,
        specs: specName
    });

    if(powerLevel == 1){
        if(specName[0] != ""){
            powerNameElement.innerText += " - " + specName[0];
        }

        destinationBox[0].appendChild(powerNameElement);
    }
    else{
        var sublistElement = document.createElement("ul");
        

        for(var i = 0; i < specName.length; i++){
            var powerSpecElement = document.createElement("li");
            var spec = specName[i];

            powerSpecElement.innerText = spec;

            sublistElement.appendChild(powerSpecElement);
        }

        destinationBox[0].appendChild(powerNameElement);
        destinationBox[0].appendChild(sublistElement);
    }
}

function FillAbilities(e,abilities){
    for(var i = 0; i < abilities.length; i++){
        var levelTab = abilities[i];
        var classParameter = ".AbilityLevel" + (i+1);
        var levelElement = $(e).find(classParameter)[0];
        var abilitiesContainer = $(levelElement).find(".form")[0];
        
        for(var j = 0; j < levelTab.length; j++){
            var ability = levelTab[j];
            var abilityElement = NewAbilityElement(ability);
            abilitiesContainer.appendChild(abilityElement);
        }
    }
}

function FillName(e,name){
    e.innerText = name;
    CharacterObject.Name = name;
}

function RetrieveCharacterFromID(ID){
    var charactersList = globalDB.players;
    var returnedCharacter = null;
    
    for(var i = 0; i < charactersList.length; i++){
        var character = charactersList[i];
        if(character.playerID == ID){
            returnedCharacter = character;
            break;
        }
    }
           
    return returnedCharacter;
}

function NewStuntElement(stunt){
    var formGroup = document.createElement("div");
    var label = document.createElement("label");
    var textContainerParent = document.createElement("div");
    var textContainer = document.createElement("div");
    var textBreak = document.createElement("br");
    
    formGroup.classList.add("form-group");
    label.classList.add("stuntTitle");
    label.innerHTML = stunt.title;
    textContainerParent.classList.add("col-md-12");
    textContainerParent.classList.add("StuntContainer");
    textContainer.classList.add("form-control-static");
    textContainer.classList.add("stuntText");
    textContainer.innerHTML = stunt.text;
    
    textContainerParent.appendChild(label);
    textContainerParent.appendChild(textBreak);
    textContainerParent.appendChild(textContainer);
    formGroup.appendChild(textContainerParent);
    
    return formGroup;
}

function GM_NewStuntElement(title,content){
    var formGroup = document.createElement("div");
    var textContainerParent = document.createElement("div");
    var titleContainer = document.createElement("div");
    var stuntTitleSpan = document.createElement("span");
    var textContainer = document.createElement("div");
    
    formGroup.classList.add("form-group");
    textContainerParent.classList.add("col-md-12");
    textContainerParent.classList.add("StuntContainer");
    $(titleContainer).addClass("StuntTitleContainer")
    titleContainer.style.marginBottom = "5px";
    $(stuntTitleSpan).addClass("StuntTitleText");
    stuntTitleSpan.innerHTML = title;
    textContainer.classList.add("form-control-static");
    textContainer.classList.add("stuntText");
    textContainer.innerHTML = content;
    
    titleContainer.appendChild(stuntTitleSpan);
    textContainerParent.appendChild(titleContainer);
    textContainerParent.appendChild(textContainer);
    formGroup.appendChild(textContainerParent);
    
    return formGroup;
}

function NewAbilityElement(ability){
    var formGroup = document.createElement("div");
    var textContainerParent = document.createElement("div");
    var textContainer = document.createElement("p");
    
    formGroup.classList.add("form-group");
    textContainerParent.classList.add("col-md-12");
    textContainer.classList.add("form-control-static");
    textContainer.classList.add("ability");
    textContainer.innerHTML = ability;
    
    textContainerParent.appendChild(textContainer);
    formGroup.appendChild(textContainerParent);
    
    return formGroup;
}

function InitSelects(){
    $(".selectpicker").selectpicker();
}

/*****************Godborn Maker***************/
function RequestInfoFromWiki(wikiPage){
    var requestURL = "http://www.wyrdwalkers.wikidot.com/" + wikiPage;
    window.open(requestURL, "_blank");
    
    /*var invocation = new XMLHttpRequest();
   
    if(invocation) {    
        invocation.open('GET', requestURL, true);
        invocation.onreadystatechange = function (result){
            var bufferElement = document.createElement("div");
            bufferElement.innerHTML = result; 
            //FillForms($(bufferElement), character); 
            bootbox.alert({
                message: bufferElement.innerHTML,
                size: "large"
            });
        };
        invocation.send(); 
      }*/

    /*$.ajax({
       url: requestURL,
        type: "GET",
        success : function(result){
            bufferElement = document.createElement("div");
            bufferElement.innerHTML = result; 
            //FillForms($(bufferElement), character); 
            bootbox.alert({
                message: bufferElement.innerHTML,
                size: "large"
            });
            
        }
    });*/
}

function ResetCharacterForm(){
    OpenGMaker();
    CharacterObject = {};
}

function DuplicateStuntForm(){
    var StuntFormContainerElement = $("#StuntFormContainer");
    var nbStunts = $(".StuntContainer").length;
    var newStuntContainer = document.createElement("div");
    var newStuntFormGroup = document.createElement("div");
    var newStuntTitleContainer = document.createElement("div");
    var newStuntTitleElement = document.createElement("input");
    var deleteStuntButtonElement = document.createElement("a");
    var newStuntContentContainer = document.createElement("div");
    var newStuntContentElement = document.createElement("textarea");

    $(newStuntContainer).addClass("mt-repeater-item StuntContainer");
    newStuntContainer.setAttribute("data-repeater-item",nbStunts + 1);
    StuntFormContainerElement[0].appendChild(newStuntContainer);

    $(newStuntFormGroup).addClass("form-group");
    newStuntContainer.appendChild(newStuntFormGroup);

    $(newStuntTitleContainer).addClass("mt-repeater-input");
    newStuntFormGroup.appendChild(newStuntTitleContainer);

    $(newStuntTitleElement).addClass("CustomStuntTitle form-control");
    newStuntTitleElement.type = "text";
    newStuntTitleElement.placeholder = "Stunt Title";
    newStuntTitleElement.setAttribute("data-stunt", nbStunts + 1);
    newStuntTitleContainer.appendChild(newStuntTitleElement);

    $(deleteStuntButtonElement).addClass("btn red-soft DeleteStuntButton");
    deleteStuntButtonElement.innerHTML = "<i class='fa fa-times'></i>&nbsp;Delete";
    $(deleteStuntButtonElement).on("click",function(){
        RemoveStunt(this);
    });
    newStuntTitleContainer.appendChild(deleteStuntButtonElement);

    $(newStuntContentContainer).addClass("mt-repeater-input mt-repeater-textarea");
    newStuntFormGroup.appendChild(newStuntContentContainer);

    $(newStuntContentElement).addClass("form-control CustomStunt");
    newStuntContentElement.rows = 4;
    newStuntContentElement.cols = 50;
    newStuntContentElement.placeholder = "Stunt Content";
    newStuntContentElement.setAttribute("data-stunt", nbStunts + 1);
    newStuntContentContainer.appendChild(newStuntContentElement);


}

function RemoveStunt(element){
    var StuntContainerElement = element.parentElement.parentElement.parentElement;

    StuntContainerElement.style.display = "none";
}

function ChangeLanguage(langString){
    if(langString== "FR")
        bootbox.alert("Bientôt disponible");
    else if(langString == "ENG")
        bootbox.alert("Coming Soon");
}

function UpdateSkillsLeft(element){
    var currentID = element.id;
    var selects = $("select.SkillInput");
    var selectedValue = element.value;
    var previousValue = element.getAttribute("data-previous");

    for(var i = 0; i < selects.length; i++){
        var select = selects[i];
        
        if(select.id != currentID){
            for(var j = 0; j < select.length; j++){
                var option = select.options[j];
                GenerateSelectSkillsList(select.id,selectedValue);
            }
        }
    }
}

function GenerateSelectSkillsList(selectID,skillString){
    var optionsTab = [];
    var skillsLabels = ["Empty","Athletics","Fight","Marksmanphip","Stealth","Will","Physique", "Technology", "Notice","First Aid","Lore","Manipulation","Presence","Rapport","Resources"];
    var selectElement = document.getElementById(selectID);

    $(selectElement).empty();

    if(skillString == "Empty"){
        for(var i = 0; i < skillsLabels.length; i++){
            var option = document.createElement("option");
            option.value = skillsLabels[i];
            if(skillsLabels[i] != "Empty")
                option.innerHTML = skillsLabels[i];
            selectElement.appendChild(option);
        }
    }
    else{
        for(var i = 0; i < skillsLabels.length; i++){
            if(skillsLabels[i] != skillString){
                var option = document.createElement("option");
                option.value = skillsLabels[i];
                if(skillsLabels[i] != "Empty")
                    option.innerHTML = skillsLabels[i];
                selectElement.appendChild(option);
            }
        }
    }

    $(".SkillInput").selectpicker('refresh');
}

function SetPreviousValue(element){
    var selectedValue = elementValue;
    element.setAttribute("data-previous",selectedValue);
}

function RemoveAbility(element){
    var AbilityContainerElement = element.parentElement.parentElement.parentElement;
    
    AbilityContainerElement.style.display = "none";
}

function DuplicateAbilityForm(){
    var URL = "https://thegelule.github.io/Dashboard/pages/GM_AbilitiesOptionsDuplicate.html";
    $.ajax({
        url : URL,
        type: "GET",
        success : function(result){
            var AbilitiesContainerElement = document.getElementById("AbilityFormContainer");
            AbilitiesContainerElement.innerHTML += result;
            $(".Fresh").selectpicker();
            $(".Added").addClass("PreviousStep");
            $(".PreviousStep").removeClass("Added")
            $(".Fresh").addClass("Added");
            $(".Fresh").removeClass("Fresh");
        }
    });
}

function UpdateSpecSelect(element){
    var DruidTab = ["Green Druid", "Runic Druid", "Theriantropy", "Technodruid", "Fey Sorcerer", "Mythcalling"];
    var HemaTab = ["Itztli", "Yahuar","Flesh-Shaping"];
    var SpiritTab = ["Necromancy","Soulbinding","Shamanism","Chwal: Rider","Chwal: Pupetteer"];
    var WyrdTab = ["Mystery","Prophecy"];
    var PhyTab = ["Strength","Resistance","Speed","Senses","Presence","Appearance"];
    var FireTab = ["I","Destruction","Strife","Life","Invention","Drought","Magma"];
    var WaterTab = ["I","Raging Sea", "Drowning", "Provider","Life"];
    var LightTab = ["I","Sun","Brightness","Illumination"];
    var NightTab = ["I","Veil","Moon","Terror","Nightmare","Sleep","Darkness","Stars","Void"];
    var WorldTab = ["I","Life","Nature","Mountains","Expanse"];
    var DepthTab = ["I","Shadows","Caverns","Abundance","Decay","Abyss"];
    var SkyTab = ["I","Tempest","Cataclysm","Calm","Rain"];
    var DeathTab = ["I","Inevitability","Horror","Extinction","Peace","Journey"];
    var OrderTab = ["I","Knowledge","Law","Gravity","Control"];
    var TaiyiTab = ["Nature Manipulation","Flow Manipulation"];
    var NoSpecTab = [""];
    var selected = $(':selected', element);
    var groupLabel = selected.closest('optgroup').attr('label');
    var specSelect = $(element).closest(".AbilityContainer").find("select.CustomAbilitySpec");
    var specFreeText = $(element).closest(".AbilityContainer").find("textarea.SpecFreeText")[0];

    if(groupLabel.indexOf("Enlightened") < 0){
        switch(element.value){
            case "Druidism":
            GenerateSelectSpecsList(DruidTab,specSelect);
            specFreeText.style.display = "none";
            break;

            case "Hematurgy":
            GenerateSelectSpecsList(HemaTab,specSelect);   
            specFreeText.style.display = "none";
            break;

            case "Spiritwalking":
            GenerateSelectSpecsList(SpiritTab,specSelect);  
            specFreeText.style.display = "none"; 
            break;

            case "Wyrdseeing":
            GenerateSelectSpecsList(WyrdTab,specSelect); 
            specFreeText.style.display = "none";  
            break;

            case "Epic Physiology":
            GenerateSelectSpecsList(PhyTab,specSelect); 
            specFreeText.style.display = "none";  
            break;

            case "I:Fire":
            GenerateSelectSpecsList(FireTab,specSelect);   
            specFreeText.style.display = "none";
            break;

            case "I:Water":
            GenerateSelectSpecsList(WaterTab,specSelect); 
            specFreeText.style.display = "none";  
            break;

            case "I:Light":
            GenerateSelectSpecsList(LightTab,specSelect);  
            specFreeText.style.display = "none"; 
            break;

            case "I:Night":
            GenerateSelectSpecsList(NightTab,specSelect);   
            specFreeText.style.display = "none";
            break;

            case "I:World":
            GenerateSelectSpecsList(WorldTab,specSelect);   
            specFreeText.style.display = "none";
            break;

            case "I:Depths":
            GenerateSelectSpecsList(DepthTab,specSelect);  
            specFreeText.style.display = "none"; 
            break;

            case "I:Sky":
            GenerateSelectSpecsList(SkyTab,specSelect);  
            specFreeText.style.display = "none";
            break;

            case "I:Death":
            GenerateSelectSpecsList(DeathTab,specSelect);  
            specFreeText.style.display = "none"; 
            break;

            case "I:Order":
            GenerateSelectSpecsList(OrderTab,specSelect); 
            specFreeText.style.display = "none";  
            break;

            case "Taiyi":
            GenerateSelectSpecsList(TaiyiTab,specSelect);   
            specFreeText.style.display = "none";
            break;

            case "Enech":
            GenerateSelectSpecsList(NoSpecTab,specSelect); 
            specFreeText.style.display = "block";
            break;

            case "Runic Tattoos":
            GenerateSelectSpecsList(NoSpecTab,specSelect); 
            specFreeText.style.display = "block";
            break;

            default:
            GenerateSelectSpecsList(NoSpecTab,specSelect); 
            specFreeText.style.display = "none";
            break;
        }
    }
}

function GenerateSelectSpecsList(tabOptions,selectElement){

    $(selectElement).empty();

    for(var i = 0; i < tabOptions.length; i++){
        var spec = tabOptions[i];

        if(spec == "I"){
            continue;
        }
        else{
            var option = document.createElement("option");

            option.value = spec;
            option.innerHTML = spec;
            selectElement[0].appendChild(option);
        }
    }

    $(".Added").selectpicker('refresh');
}