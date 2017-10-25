function LoadingContent(){
    if(window.location.href.indexOf("#Godborn-Maker") > -1) {
       OpenGMaker();
    }
    else{
        LoadHomePage();
    }
    
    DisplayNumbersInMenu();
}

function SetActiveMenu(element){
    var arrowElement = $(element).find("arrow");
    var selecElement = document.createElement("span");
    
    FindActiveAndDisable();
    
    $(selectElement).addClass("selected");
    arrowElement.addClass("open");
    $(element.parentElement).addClass("open active");
    element.appendChild(selectElement);
    
    
    
}

function FindActiveAndDisable(){
    var activeElement = $("li.active");
    var selectedArrow = activeElement.find("selected");
    
    activeElement.removeClass("active");
    activeElement[0].removeChild(selectedArrow);
    
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

function LoadHomePage(){
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
    GM_FillSkills(e.find(".SkillsContainer")[0],$(".SkillInput"));
    GM_FillStunts(e.find(".StuntsContainer")[0],$(".CustomStunt"));
    GM_FillAbilities(e.find(".AbilitiesContainer")[0],$(".CustomAbility"));
}

function GM_FillPicture(e,url){
    e.src = url;
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
    
    for(var i = 0; i < aspects.length; i++){
        var listItemElement = document.createElement("li");
        var itemContainer = document.createElement("div");
        var itemTextContainer = document.createElement("span");
        var aspectText = aspects[i].value;
        
        listItemElement.classList.add("aspect");
        itemTextContainer.innerText = aspectText; 
        
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
    
    //On recrée le tableau de la DB
    for(var i = 4; i > 0; i--){
        for(var j = 1; j < 5; j++){
            if((i+j) <= 5){
                var tab = [];
                var fetchID = "Skill_" + i + "_" + j;
                tab.push(document.getElementById(fetchID).value);
                skillLevelTab.push(tab);
            }
            
        }
    }
    
    //On reboucle ensuite sur ce qui a été fait pour les fiches de persos
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

function FillStunts(e,stunts){
    var formStunts = $(e).find(".form")[0];
    
    for(var i = 0; i < stunts.length; i++){
        var stunt = stunts[i];
        var stuntElement = NewStuntElement(stunt);
        formStunts.appendChild(stuntElement);
    }
}

function GM_FillStunts(e,stunts){
    var formStunts = $(e).find(".form")[0];
    
    for(var i = 0; i < stunts.length; i++){
        var stunt = stunts[i].innerText;
        var stuntElement = GM_NewStuntOrAbilityElement(stunt.innerText);
        formStunts.appendChild(stuntElement);
    }
}

function GM_FillAbilities(e,abilities){
    var formAbilities = $(e).find(".form")[0];
    
    for(var i = 0; i < abilities.length; i++){
        var ability = abilities[i].innerText;
        var abilityElement = GM_NewStuntOrAbilityElement(ability.innerText);
        formAbilities.appendChild(abilityElement);
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

function GM_NewStuntOrAbilityElement(text){
    var formGroup = document.createElement("div");
    var textContainerParent = document.createElement("div");
    var textContainer = document.createElement("div");
    var textBreak = document.createElement("br");
    
    formGroup.classList.add("form-group");
    textContainerParent.classList.add("col-md-12");
    textContainerParent.classList.add("StuntContainer");
    textContainer.classList.add("form-control-static");
    textContainer.classList.add("stuntText");
    textContainer.innerHTML = text;
    
    textContainerParent.appendChild(textBreak);
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
    var invocation = new XMLHttpRequest();
   
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
      }

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
