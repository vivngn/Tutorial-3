var chatStr ="";
function replaceEmojis(){
    chatStr = chatStr.replace(":)", "<img class='emoji' src='img/smile.png'/>");
    
    chatStr = chatStr.replace(":(", "<img class='emoji' src='img/sad.png'/>");
    
    chatStr = chatStr.replace("cool", "<img class='emoji' src='img/cool.png'/>");
    
    chatStr = chatStr.replace("100", "<img class='emoji' src='img/100.png'/>");
    
    chatStr = chatStr.replace("fire", "<img class='emoji' src='img/fire.png'/>");
    
    chatStr = chatStr.replace("<3", "<img class='emoji' src='img/heart.png'/>");
    
    chatStr = chatStr.replace("boogie", "******")
    
    chatStr = chatStr.replace("shiba inu", "doge")
    
    chatStr = chatStr.replace("crap", "****")
}

/*------------------------p1Chat---------------------*/
function changeChatStr(){
    chatStr =  document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";
    
    /*if(chatStr == ":)"){
        chatStr = "<img class='emoji' src = 'img/smile.png' />";
    } else if(chatStr == ":("){
        chatStr = "<img class='emoji' src = 'img/sad.png' />";
    }*/
    
    replaceEmojis();
}

/*------------------------p2Chat---------------------*/
function changeChatStr2(){
    chatStr =  document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    
    replaceEmojis();
}

/*--------------------chatDisplay--------------------*/
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    
    if(chatNum == 1){
        ndiv.style.backgroundColor = "#AFA";
    } else if (chatNum == 2){
        ndiv.style.backgroundColor = "#AAF";
    }
    
    ndiv.style.padding = "10px";
    
    document.getElementById("chatDisplay").appendChild(ndiv);
    
}

/*--------------------Interactions--------------------*/
document.getElementById("p1Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr();
        createChat(1);
    }
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr2();
        createChat(2);
    }
});