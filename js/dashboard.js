var CharacterObject = {};
var CharacterLibrary = [];

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

function isCharacSaved(){
    var result = false;

    for(var i =0; i < CharacterLibrary.length; i++){
        var character = CharacterLibrary[i];
        
        if(CharacterObject.Name = character.Name && CharacterObject.Picture == character.Picture
            && CharacterObject.Aspects == chracter.Aspects && CharacterObject.Skills == character.Skills
            && CharacterObject.Stunts == character.Stunts && CharacterObject.Abilities == character.Abilities){
                result = true;
            }
    }

    return result;
}

function LoadCharactersFromStorage(){

    for(var i = 0; i < CharacterLibrary.length; i++){
        var character = CharacterLibrary[i];
        GM_CreateCharacterContainerOnLoad(character);
    }
    
}

function GM_CreateCharacterContainerOnLoad(character){
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
    characterName.innerHTML = character.Name;
    $(characterName).addClass("LibraryCharacterName");
    $(characterTag).addClass("btn btn-default dropdown");
    deleteCharLabel.innerHTML = "Delete Character";
    $(deleteCharIcon).addClass("fa fa-times");
    $(dropButton).addClass("dropdown-toggle");
    dropButton.setAttribute("data-toggle","dropdown");
    dropButton.setAttribute("data-hover","dropdown");
    dropButton.setAttribute("data-close-others","true");
    dropButton.setAttribute("aria-expanded","false");
    dropButton.href = "javascript:;";
    $(actionslist).addClass("dropdown-menu");


    viewCharacterSummaryAction.appendChild(viewCharacIcon);
    viewCharacterSummaryAction.appendChild(viewCharacLabel);
    deleteCharacterAction.appendChild(deleteCharIcon);
    deleteCharacterAction.appendChild(deleteCharLabel);
    viewCharacterSummary.appendChild(viewCharacterSummaryAction);
    deleteCharacter.appendChild(deleteCharacterAction);
    actionslist.appendChild(viewCharacterSummary);
    actionslist.appendChild(applyHTMLTemplate);
    actionslist.appendChild(deleteCharacter);
    dropButton.appendChild(characterName);
    dropButton.appendChild(characArrowDown);
    characterTag.appendChild(dropButton);
    characterTag.appendChild(actionslist);
    libraryContainer.appendChild(characterTag);

    viewCharacterSummaryAction.addEventListener("click",function(){
        var characterName = $(this).closest(".dropdown").find(".LibraryCharacterName")[0].innerText;
        var character = FetchCharacterFromStorage(characterName);
        GM_OpenCharacterDialog_Lib(character);
    });

    deleteCharacterAction.addEventListener("click",function(){
        var characterName = $(this).closest(".dropdown").find(".LibraryCharacterName")[0].innerText;
        var characterElement = $(this).closest(".dropdown");
        DeleteCharacterFromLibrary(characterName,characterElement);
    });
}

function GM_SaveCharacterInLibrary(){
    var characterExistsInLib = isCharacSaved();

    if(!characterExistsInLib){
        GM_CreateCharacterContainer();
        GM_FetchCharacterInfo();
        GM_CharacterSavedNotif();
        GM_OpenLibraryPanel();
    }
    else{
        $.bootstrapGrowl("This character already exists !",{
            ele: 'body', // which element to append to
            type: 'danger', // (null, 'info', 'danger', 'success')
            offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
            align: 'right', // ('left', 'right', or 'center')
            width: 250, // (integer, or 'auto')
            delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
            allow_dismiss: true, // If true then will display a cross to close the popup.
            stackup_spacing: 10 // spacing between consecutively stacked growls.
          });
    }
}

function GM_CharacterSavedNotif(){
    $.bootstrapGrowl("Character successfully saved !",{
        ele: 'body', // which element to append to
        type: 'success', // (null, 'info', 'danger', 'success')
        offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
        align: 'right', // ('left', 'right', or 'center')
        width: 250, // (integer, or 'auto')
        delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
        allow_dismiss: true, // If true then will display a cross to close the popup.
        stackup_spacing: 10 // spacing between consecutively stacked growls.
      });
}

function GM_FetchCharacterInfo(){
    CharacterLibrary.push(CharacterObject);
    localStorage.setItem("Characters",JSON.stringify(CharacterLibrary));
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
    characterName.innerHTML = $("#inputFileNameToSaveAs").val();
    $(characterName).addClass("LibraryCharacterName");
    $(characterTag).addClass("btn btn-default dropdown");
    deleteCharLabel.innerHTML = "Delete Character";
    $(deleteCharIcon).addClass("fa fa-times");
    $(dropButton).addClass("dropdown-toggle");
    dropButton.setAttribute("data-toggle","dropdown");
    dropButton.setAttribute("data-hover","dropdown");
    dropButton.setAttribute("data-close-others","true");
    dropButton.setAttribute("aria-expanded","false");
    dropButton.href = "javascript:;";
    $(actionslist).addClass("dropdown-menu");


    viewCharacterSummaryAction.appendChild(viewCharacIcon);
    viewCharacterSummaryAction.appendChild(viewCharacLabel);
    deleteCharacterAction.appendChild(deleteCharIcon);
    deleteCharacterAction.appendChild(deleteCharLabel);
    viewCharacterSummary.appendChild(viewCharacterSummaryAction);
    deleteCharacter.appendChild(deleteCharacterAction);
    actionslist.appendChild(viewCharacterSummary);
    actionslist.appendChild(applyHTMLTemplate);
    actionslist.appendChild(deleteCharacter);
    dropButton.appendChild(characterName);
    dropButton.appendChild(characArrowDown);
    characterTag.appendChild(dropButton);
    characterTag.appendChild(actionslist);
    libraryContainer.appendChild(characterTag);

    viewCharacterSummaryAction.addEventListener("click",function(){
        var characterName = $(this).closest(".dropdown").find(".LibraryCharacterName")[0].innerText;
        var character = FetchCharacterFromStorage(characterName);
        GM_OpenCharacterDialog_Lib(character);
    });

    deleteCharacterAction.addEventListener("click",function(){
        var characterName = $(this).closest(".dropdown").find(".LibraryCharacterName")[0].innerText;
        var characterElement = $(this).closest(".dropdown");

        DeleteCharacterFromLibrary(characterName,characterElement);
    });
    
}

function DeleteCharacterFromLibrary(characterName,characterElement){
    for(var i = 0; i < CharacterLibrary.length; i++){
        var character = CharacterLibrary[i];

        //On supprime le premier qu'on trouve et on sauvegarde le nouvel array dans le localStorage
        if(character.Name == characterName){
            CharacterLibrary.splice(i,1);
            characterElement[0].style.display = "none";
            localStorage.setItem("Characters",JSON.stringify(CharacterLibrary));
            break;
        }
    }
}

function GM_OpenLibraryPanel(){
    $("#LibraryOpener").click();
}

//Appelée par le bouton "Save Character"
function GM_OpenCharacterDialog(){    
    $.ajax({
       url: "https://thegelule.github.io/Dashboard/pages/GM_CharacterSheet.html",
        type: "GET",
        success : function(result){
            bufferElement = document.createElement("div");
            bufferElement.innerHTML = result; 
            GM_FillForms($(bufferElement)); 
            bootbox.dialog({
                message: bufferElement.innerHTML,
                buttons: {
                    ok: {
                        label: "Download Sheet",
                        className: 'btn-info',
                        callback: function(){
                            OpenDownloadUI(CharacterObject);
                        }
                    },
                    noclose: {
                        label: "Save in Library",
                        className: 'btn-info',
                        callback: function(){
                            GM_SaveCharacterInLibrary(CharacterObject);
                        }
                    },
                    cancel: {
                        label: "Close",
                        className: 'btn-default'
                    }
                }
            });
            
        }
    });
    
}

function FetchCharacterFromStorage(characterName){
    var result = null;

    for(var i = 0; i < CharacterLibrary.length; i++){
        var character = CharacterLibrary[i];

        if(character.Name = characterName){
            result = character;
            break;
        }
    }

    return result;
}


function OpenDownloadUI(character){
    bootbox.prompt({
        title: "Which format do you prefer ?",
        inputType: 'select',
        inputOptions: [
            {
                text: 'Choose one...',
                value: '',
            },
            {
                text: 'Text file',
                value: '1',
            },
            {
                text: 'PDF Sheet',
                value: '2',
            }
        ],
        callback: function (result) {
            if(result != ''){
                if(result == '1'){
                    SaveCharacterAsText(character);
                }
                else if(result == '2'){
                    DisplayTemplateChoiceUI(character);
                }
                else{
                    $.bootstrapGrowl("Your choice was not understood. Please try again.",{
                        ele: 'body', // which element to append to
                        type: 'danger', // (null, 'info', 'danger', 'success')
                        offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
                        align: 'right', // ('left', 'right', or 'center')
                        width: 250, // (integer, or 'auto')
                        delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
                        allow_dismiss: true, // If true then will display a cross to close the popup.
                        stackup_spacing: 10 // spacing between consecutively stacked growls.
                    });
                }
            }
        }
    });
}

function DisplayTemplateChoiceUI(character){

    bootbox.prompt({
        title: "Select your sheet template",
        inputType: 'select',
        inputOptions: [
            {
                text: 'Choose one...',
                value: '',
            },
            {
                text: 'Aesir - Norse Gods',
                value: 'Aesir',
            }
        ],
        callback: function (result) {
            var templateName = result;
            $.ajax({
                url: "https://thegelule.github.io/Dashboard/Templates/" + result + "/" + result + "Template.html",
                 type: "GET",
                 success : function(result){
                     var tempName = templateName;
                     bufferElement = document.createElement("div");
                     bufferElement.innerHTML = result; 
                     if(character != null){
                         var chName = GM_FillPDFTemplate($(bufferElement),character); 
                         
                         bootbox.confirm({
                             message: bufferElement.innerHTML,
                             size:"large",
                             buttons: {
                                 confirm: {
                                     label: 'Download Sheet',
                                     className: 'btn-outline blue-steel'
                                 },
                                 cancel: {
                                     label: 'Back',
                                     className: 'btn-outline purple-soft'
                                 }
                             },
                             callback: function (result) {
                                 if(result){
                                    ConvertToPDF(chName);
                                    /*printElem("Template",tempName);*/
                                 }
                                 else{
                                    DisplayTemplateChoiceUI(character);
                                 }
                             }
                         });
                     }
                     else{
                         $.bootstrapGrowl("This character doesn't exist...",{
                             ele: 'body', // which element to append to
                             type: 'danger', // (null, 'info', 'danger', 'success')
                             offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
                             align: 'right', // ('left', 'right', or 'center')
                             width: 250, // (integer, or 'auto')
                             delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
                             allow_dismiss: true, // If true then will display a cross to close the popup.
                             stackup_spacing: 10 // spacing between consecutively stacked growls.
                         });
                     }
                     
                 }
             });
        }
    });
}

function GM_FillPDFTemplate(page,character){
    var aspectsElements = $(page).find(".Aspect");
    var aspects = character.Aspects;
    var CharacterNameElement = $(page).find("#CharacterName");
    var CharacterName = character.Name;
    var SkillsElements = $(page).find(".Skill");
    var Skills = character.Skills; //array of object : levels go 4, 3 2 and 1
    var SkillsTab = [];
    var Abilities = character.Abilities; //array of object : level,power, specs (array)
    var StuntContainer = $(page).find(".StuntsContentContainer");
    var Stunts = character.Stunts; //array of object : title, content

    //Getting lazy. All filling functions are being concatenated here
    //Filling Aspects
    for(var i = 0; i < aspects.length;i++){
        var aspect = aspects[i];
        var element = aspectsElements[i];

        element.innerHTML = aspect;
    }

    //Filling Skills.
    for(var i = 0; i < Skills.length;i++){
        var SkillsByLevel = Skills[i];
        
        for(var j = 0; j < SkillsByLevel.names.length;j++){
            var name = SkillsByLevel.names[j];
            SkillsTab.push(name)
        }
    }

    for(var i = 0; i < SkillsElements.length; i++){
        var Skill = SkillsElements[i];

        if(SkillsTab[i] != undefined){
            Skill.innerHTML += SkillsTab[i];
        }
        else{
            bootbox.alert("An unknown error occured while filling the skills. Please try again or contact the admin;")
        }
    }
    
    //Filling Name
    CharacterNameElement.innerHTML += CharacterName;

    //Filling Abililites
    for(var i = 0; i < Abilities.length;i++){
        var ability = Abilities[i];
        var level = ability.level;
        var power = ability.power;
        var specs = ability.specs;
        var ConcernedPortlet = $(page).find(".Level" + level);
        var listContainer = document.createElement("ul");
        var listItem = document.createElement("li");

        listContainer.appendChild(listItem);
        ConcernedPortlet[0].appendChild(listContainer);

        if(level == 1){
            listItem.innerHTML = power + " - " + specs;
        }
        else{
            var subListContainer = document.createElement("ul");

            for(var j = 0; j < specs.length; j++){
                var subListItem = document.createElement("li");
                subListItem.innerHTML = specs[j];
                subListContainer.appendChild(subListItem);
            }

            listItem.appendChild(subListContainer);
        }
    }

    //Filling Stunts. More subtle as it need to fit within the allocated height of the template
    /*for(var i = 0; i < aspects.length;i++){
        var aspect = aspects[i];
        var element = aspectsElements[i];

        element.innerHTML = aspect;
    }*/

    return CharacterName;
    
}

//Function appelée uniquement lors de la visualisation d'un character sauvegardé dans la library
function GM_OpenCharacterDialog_Lib(character){    
    $.ajax({
       url: "https://thegelule.github.io/Dashboard/pages/GM_CharacterSheet.html",
        type: "GET",
        success : function(result){
            bufferElement = document.createElement("div");
            bufferElement.innerHTML = result; 
            if(character != null){
                GM_FillFormsFromObject($(bufferElement),character); 
                bootbox.confirm({
                    message: bufferElement.innerHTML,
                    buttons: {
                        confirm: {
                            label: 'Download Sheet',
                            className: 'blue-steel'
                        },
                        cancel: {
                            label: 'Close',
                            className: 'red-soft'
                        }
                    },
                    callback: function (result) {
                        if(result){
                            OpenDownloadUI(character);
                        }
                    }
                });
            }
            else{
                $.bootstrapGrowl("This character doesn't exist...",{
                    ele: 'body', // which element to append to
                    type: 'danger', // (null, 'info', 'danger', 'success')
                    offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
                    align: 'right', // ('left', 'right', or 'center')
                    width: 250, // (integer, or 'auto')
                    delay: 2000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
                    allow_dismiss: true, // If true then will display a cross to close the popup.
                    stackup_spacing: 10 // spacing between consecutively stacked growls.
                });
            }
            
        }
    });
    
}

function OpenGMaker(){
    var localLib = localStorage.getItem("Characters");
    SetActiveMenu(document.getElementById("GMMenuButton"));
    //$(".page-quick-sidebar-toggler")[0].style.display = "block";

    if(localLib != null){
        CharacterLibrary = JSON.parse(localLib);
    }
    else{
        localStorage.setItem("Characters",JSON.stringify([]));
    }
    
    for(var i = 0;i < CharacterLibrary.length; i++){
        var character = CharacterLibrary[i];
        GM_CreateCharacterContainerOnLoad(character);
    }
    
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


function GM_FillForms(e){
    FillName(e.find(".name")[0],$("#inputFileNameToSaveAs").val());
    GM_FillPicture(e.find(".picture")[0],$("#CharacterImageURL").val());
    GM_FillAspects(e.find(".AspectsContainer")[0],$(".CustomAspect"));
    GM_FillSkills(e.find(".skills"),$(".SkillInput"));
    GM_FillStunts(e.find(".StuntsContainer")[0],$("#StuntFormContainer"));
    GM_FillAbilities(e.find(".AbilitiesContainer")[0],$("#AbilityFormContainer"));
}

function GM_FillFormsFromObject(e,character){
    FillName(e.find(".name")[0],character.Name);
    GM_FillPicture(e.find(".picture")[0],character.Picture);
    GM_FillAspectsFromObject(e.find(".AspectsContainer")[0],character.Aspects);
    GM_FillSkillsFromObject(e.find(".skills"),character.Skills);
    GM_FillStuntsFromObject(e.find(".StuntsContainer")[0],character.Stunts);
    GM_FillAbilitiesFromObject(e.find(".AbilitiesContainer")[0],character.Abilities);
}

function GM_FillAspectsFromObject(e,aspects){
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

function GM_FillSkillsFromObject(e,skills){
    //On commence par concaténer tous les skills dans un tableau unique  
    var skillsList = [];  
    for(var j = 0; j < skills.length;j++){
        var skillTab = skills[j].names;
        for(var k = 0; k < skillTab.length;k++){
            var skill = skillTab[k];

            skillsList.push(skill);
        }
    }

    //Puis on les assigne dans les div correspondants
    for(var i = 0; i < e.length; i++){
        var skillBox = e[i];
        
        skillBox.innerText = skillsList[i];
    }
}

function GM_FillStuntsFromObject(e, stunts){
    var formStunts = $(e).find(".form")[0];
    
    for(var i = 0; i < stunts.length; i++){
        var currentStunt = stunts[i];
        var stuntTitle = currentStunt.title;
        var stuntContent = currentStunt.content;

        var stuntElementCS = GM_NewStuntElement(stuntTitle,stuntContent);
        formStunts.appendChild(stuntElementCS);
    }
}

function GM_FillAbilitiesFromObject(e,abilities){
    var formAbilities = $(e).find(".form")[0];

    for(var i = 0; i < abilities.length; i++){
        var ability = abilities[i];
        var powerName = ability.power;
        var specName = ability.specs;
        
        GM_NewAbilityElement(e,powerName,specName,true);
    }
}

function GM_FillPicture(e,url){
    e.src = url;
    CharacterObject.Picture = url;
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

                obj.names.push($("#" + fetchID + " option:selected").text());
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

        if(ability.style.display != "none"){

            var powerName = $(ability).find("div.CustomAbilityTitle .selected .text").text();
            var specName = $(ability).find("div.CustomAbilitySpec .selected .text").text();
            
            if(specName != ""){
                specName = specName.split(/(?=[A-Z])/);
                
                //Si une spec est composée de plusieurs mots
                for(var j = 0; j < specName.length; j++){
                    if(specName[j].indexOf(" ") == specName[j].length-1 || specName[j].indexOf("-") == specName[j].length-1){
                        specName[j] += specName[j+1];
                        specName.splice(j+1,1);
                    }
                }
            }
            else{
                specName = [""];
            }

            GM_NewAbilityElement(e,powerName,specName,false);
        }
    }
}

function GM_NewAbilityElement(e,powerName,specName,fromSaveInLib){
    var powerLevel = specName.length;
    var powerNameElement = document.createElement("li");
    var destinationBox = $(e).find(".AbilityL" + powerLevel + " > ul");

    powerNameElement.innerText = powerName;

    if(!fromSaveInLib){
        CharacterObject.Abilities.push({
            level: powerLevel,
            power: powerName,
            specs: specName
        });
    }

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


function FillName(e,name){
    e.innerText = name;

    if(CharacterObject.Name == undefined){
        CharacterObject.Name = "";
    }

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

/*********** PDF Embed ************************/

function EmbedPDF(PDFurl){
    var ContentContainer = $("#ContentDisplayContainer");
    var PDFContainer = document.createElement("div");
    var options = {
        height: parseInt($(".page-content-wrapper > .page-content")[0].style.minHeight) - parseInt($(".page-footer").css("height")) - 6 + "px"
    }

    ContentContainer.empty();
    PDFContainer.id = "PDFContainer";
    ContentContainer[0].appendChild(PDFContainer);

    PDFurl = "docs/" + PDFurl;

    PDFObject.embed(PDFurl, "#PDFContainer", options);
}

/*********** PDF Sheet Generator *****************/

function ConvertToPDF(docName){
    $('.Template').scrollTop(0);
    createPDF(docName);
}


function createPDF(docName){
	var doc = new jsPDF({
        unit: 'px',
        format: 'a4'
    });

    var name = (docName != "") ? docName : "Sheet";
    $(".Page1").css("padding-top","200px"); //html2canvas crops the first top 200px-ish. No idea why...
    var page2Promise = getCanvas(".Page2");

    getCanvas(".Page1").then(function(canvas){
		var form = $(".Template");
		var cache_width = form.width();
		var img = canvas.toDataURL("image/png");
        var doc2 = doc;
        
        /*var fileNameToSaveAs = "img1.txt";
        var textFileAsBlob = new Blob([img],{type:'text/plain;charset=utf-8'});
        saveAs(textFileAsBlob, fileNameToSaveAs);*/

		doc.addImage(img, 'PNG',20,20);
		doc.addPage();

		page2Promise.then(function(canvas){
			var form = $(".Template");
			var cache_width = form.width();
			var img = canvas.toDataURL("image/png");

			doc2.addImage(img, 'PNG',10,10);
			doc2.save(name + '.pdf');
			form.width(cache_width);
		});
	});   
}

function getCanvas(pageSelector) {
    var page = $(pageSelector);
    
    var a4 = [595.28, 841.89]; // for a4 size paper width and height

    page.width((a4[0] * 1.33333) - 80).css('max-width', 'none');

    return html2canvas(page[0], {
        imageTimeout: 2000,
        removeContainer: false
    });
}


function printElem(divId,templateName) {
    var content = document.getElementsByClassName(divId)[0].innerHTML;
    var mywindow = window.open('', 'Print');

    mywindow.document.open();

    mywindow.document.write('<html><head><title>Print</title>');
    mywindow.document.write( "<link rel='stylesheet' href='Templates/Common.css' type='text/css'/>" );
    mywindow.document.write( "<link rel='stylesheet' href='Templates/"  + templateName + "/"+ templateName + ".css' type='text/css'/>" );
    mywindow.document.write('</head><body>');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    return true;
}