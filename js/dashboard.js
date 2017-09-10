function OpenCampaignCharacters(campString){
    var frame = document.getElementById("ContentDisplayFrame");
    
    resizeIframe(frame);
    
    switch(campString){
        
        case "GITS":
            frame.src = "pages/GITS_characters.html";
            break;
    }
    
    
}

function resizeIframe(obj) {
    obj.style.height = getComputedStyle(obj.contentWindow.document.body).inlineSize;
  }