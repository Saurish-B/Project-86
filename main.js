var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
        fabric.Image.fromURL("BirthdayImage.jpg", 
        function(Img) 
         {
             playero=Img;
             playero.scaleToWidth(700);
             playero.scaleToHeight(500);
             playero.set({top:0,left:0});
             canvas.add(playero);
         });
    }	

function playsound(){
x.play();	
}
