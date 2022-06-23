var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImgW = 30;
blockImgH = 30;

var playerObjeto = "";
var blockObjeto = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(img){
        playerObjeto = img;
        playerObjeto.scaleToWidth(150);
        playerObjeto.scaleToHeight(140);

        playerObjeto.set({
            top:playerY,
            left:playerX
        });
        
        canvas.add(playerObjeto);
    });
}

window.addEventListener("keydown", teclaPressionada);

function teclaPressionada(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == 38){
        up();
        console.log("up");
    }
    if(keyPressed == 40){
        down();
        console.log("down");
    }
    if(keyPressed == 37){
        left();
        console.log("left");
    }
    if(keyPressed == 39){
        right();
        console.log("right");
    }

    if(e.shiftKey && keyPressed === 80){
       console.log(keyPressed);
       blockImgH = blockImgH + 10;
       blockImgW = blockImgW + 10;
     document.getElementById("larguraAtual").innerHTML = blockImgW;
     document.getElementById("alturaAtual").innerHTML = blockImgH;
    }

    if(e.shiftKey && keyPressed === 77){
        console.log(keyPressed);
        blockImgH = blockImgH - 10;
        blockImgW = blockImgW - 10;
        document.getElementById("larguraAtual").innerHTML = blockImgW;
        document.getElementById("alturaAtual").innerHTML = blockImgH;
    }

    if(keyPressed == 87){
        newImage("wall.jpg");
        console.log("w");
    }
    if(keyPressed == 84){
        newImage("trunk.jpg");
        console.log("t");
    }
    if(keyPressed == 68){
        newImage("dark_green.png");
        console.log("d");
    }
    if(keyPressed == 76){
        newImage("light_green.png");
        console.log("l");
    }
    if(keyPressed == 71){
        newImage("ground.png");
        console.log("g");
    }
    if(keyPressed == 89){
        newImage("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed == 82){
        newImage("roof.jpg");
        console.log("r");
    }
    if(keyPressed == 67){
        newImage("cloud.jpg");
        console.log("c");
    }
    if(keyPressed == 85){
        newImage("unique.png");
        console.log("u");
    }
     
}

function up(){
    if(playerY >= 0){
        playerY = playerY - blockImgH;
      canvas.remove(playerObjeto);
      playerUpdate()
    }
    ;
}
function down(){
    if(playerY <= 470){
        playerY = playerY + blockImgH;
     canvas.remove(playerObjeto);
     playerUpdate();
    }
    
}
function left(){
    if(playerX >= -30){
        playerX = playerX - blockImgW;
     canvas.remove(playerObjeto);
     playerUpdate();
    }
    
}
function right(){
    if(playerX <= 850){
        playerX = playerX + blockImgW;
     canvas.remove(playerObjeto);
     playerUpdate();
    }
    
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockObjeto = Img;

        blockObjeto.scaleToWidth(blockImgW);
        blockObjeto.scaleToHeight(blockImgH);
        blockObjeto.set({
            top:playerY,
            left:playerX
        });

        canvas.add(blockObjeto);
    })
}