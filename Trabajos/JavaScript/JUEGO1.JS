$(document).ready(function(){
    
    textos();
          
     $("#Black").click(function(){
          $("#cu").addClass('cambiaColor1');
         
         compara("Black");
      });
    
      $("#White").click(function(){
         $("#cu").addClass('cambiaColor2');
          compara("White");
      });
    
      $("#Red").click(function(){
         $("#cu").addClass('cambiaColor3');
          compara("Red");
      });
    
      $("#Blue").click(function(){
         $("#cu").addClass('cambiaColor4');
          compara("Blue");
      });
    
     $("#Pink").click(function(){
         $("#cu").addClass('cambiaColor5');
         compara("Pink");
      });
    
      $("#Green").click(function(){
         $("#cu").addClass('cambiaColor6');
          compara("Green");
      });
    
    
     $("#Grey").click(function(){
         $("#cu").addClass('cambiaColor7');
         compara("Grey");
      });
    
      $("#Yellown").click(function(){
         $("#cu").addClass('cambiaColor8');
          compara("Yellow");
      });
    
      $("#Orange").click(function(){
         $("#cu").addClass('cambiaColor9');
          compara("Orange");
      });
    
      $("#Brown").click(function(){
         $("#cu").addClass('cambiaColor10');
          compara("Brown");
      });
    
     $("#Purple").click(function(){
         $("#cu").addClass('cambiaColor11');
         compara("Purple");
      });
    
      $("#Darkred").click(function(){
         $("#cu").addClass('cambiaColor12');
          compara("Darkred");
      });
    
   
 });
function textos(){
     var a=Math.floor((Math.random() * 12) + 1); 
        if(a==1){
           document.getElementById('col').innerHTML="Black";   
        }
        if(a==2){
          document.getElementById('col').innerHTML="White";
        }
        if(a==3){
          document.getElementById('col').innerHTML="Red";
        }
        if(a==4){
          document.getElementById('col').innerHTML="Blue";
        }
        if(a==5){
            document.getElementById('col').innerHTML="Pink";
        }
        if(a==6){
        document.getElementById('col').innerHTML="Green";
        }
        if(a==7){
        document.getElementById('col').innerHTML="Grey";
        }
       if(a==8){
        document.getElementById('col').innerHTML="Yellow";
        }
       if(a==9){
        document.getElementById('col').innerHTML="Orange";
        }
        if(a==10){
        document.getElementById('col').innerHTML="Brown";
        }
        if(a==11){
        document.getElementById('col').innerHTML="Purple";
        }
       if(a==12){
        document.getElementById('col').innerHTML="Darkred";
        }
  }


function compara(valorr)
{

    var aux=document.getElementById("col").textContent;
    var aux1 = valorr;
     // alert("color texto: " +aux);
     //  alert("Color cuadro: " +aux1);

      if(aux == aux1){
         //alert("Correcto");
        
           document.getElementById('resultadoo').innerHTML=" <b>CORRECTO</b>";
             $("#resultadoo").addClass('cambiaColor6');
         
      }
      else{
         //alert("Incorrecto");
          
           document.getElementById('resultadoo').innerHTML="<b>INCORRECTO</b>";
           $("#resultadoo").addClass('cambiaColor3');
            // document.getElementById("ant").disabled  = true;
             // $("#ant").addClass('disable');
      }



      
    
    
}