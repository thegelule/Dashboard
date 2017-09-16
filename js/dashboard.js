function OpenCampaignCharacters(campString){
    var frame = document.getElementById("ContentDisplayFrame");
    
    //resizeIframe(frame);
    
    switch(campString){
        
        case "GITS":
            //frame.src = "pages/GITS_characters.html";
			$.ajax({
				url : "https://thegelule.github.io/Dashboard/pages/GITS_characters.html",
				type: "GET",
				success : function(result){
					var asyncContentContainer = document.getElementById("ContentDisplayContainer");
					asyncContentContainer.innerHTML = result;
				}
			});
            break;
    }
    
    
}

function resizeIframe(obj) {
	var pageContentHeight = window.getComputedStyle(document.getElementsByClassName("page-content")[0]).height.replace("px","");
	var pageContentPaddingB = window.getComputedStyle(document.getElementsByClassName("page-content")[0]).paddingBottom.replace("px","");
	
    obj.style.height = parseInt(pageContentHeight) - parseInt(pageContentPaddingB) + "px";
  }