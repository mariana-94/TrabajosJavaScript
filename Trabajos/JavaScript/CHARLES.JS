var img="Imagenes/x.png";
 var turno=1;
 var arreglo = new Array();
 var jug1=0;//acumula los puntos del jugador 1
 var jug2=0;//acumula los puntos del jugador 2

 for(i=0; i<=8; i++){

  arreglo[i]=-1;

 }

 function caja(pos){

    if(arreglo[pos]==-1){//si la posicion está vacia
     
     if(turno==1){
      if(img=="Imagenes/x.png"){
        document.getElementById('c'+pos).src=img;
  arreglo[pos]=1;
        turno=2;
  img="Imagenes/cero.png";
      }
      
     }else if(turno==2){ 
      if(img=="Imagenes/cero.png"){
       document.getElementById('c'+pos).src=img;
       arreglo[pos]=0;
       turno=1;
       img="Imagenes/x.png";
      }

     }

    }else{ alert('Posicion ocupada!'); }
    


  //-------------define el ganador en la fila 1------
  if(arreglo[0]==1 && arreglo[1]==1 && arreglo[2]==1){
  alert('gano X');
        jug1=jug1+1;
  limpiar();
  }

  if(arreglo[0]==0 && arreglo[1]==0 && arreglo[2]==0){
  alert('gano O');
        jug2=jug2+1;
  limpiar();
  }
  //-------------------------------------



  //-------------define el ganador en la fila 2------
  if(arreglo[3]==1 && arreglo[4]==1 && arreglo[5]==1){
  alert('gano X');
        jug1=jug1+1;
  limpiar();
  }

  if(arreglo[3]==0 && arreglo[4]==0 && arreglo[5]==0){
  alert('gano O');
        jug2=jug2+1;
  limpiar();
  }
  //-------------------------------------


  //-------------define el ganador en la fila 3------
  if(arreglo[6]==1 && arreglo[7]==1 && arreglo[8]==1){
  alert('gano X');
        jug1=jug1+1;
  limpiar();
  }

  if(arreglo[6]==0 && arreglo[7]==0 && arreglo[8]==0){
  alert('gano O');
        jug2=jug2+1;
  limpiar();
  }
  //-------------------------------------


  //-------------define el ganador en la columna 1------
  if(arreglo[0]==1 && arreglo[3]==1 && arreglo[6]==1){
  alert('gano X');
        jug1=jug1+1;
  limpiar();
  }

  if(arreglo[0]==0 && arreglo[3]==0 && arreglo[6]==0){
  alert('gano O');
        jug2=jug2+1;
  limpiar();
  }
  //-------------------------------------


  //-------------define el ganador en la columna 2------
  if(arreglo[1]==1 && arreglo[4]==1 && arreglo[7]==1){
  alert('gano X');
        jug1=jug1+1;
  limpiar();
  }

  if(arreglo[1]==0 && arreglo[4]==0 && arreglo[7]==0){
  alert('gano O');
        jug2=jug2+1;
  limpiar();
  }
  //-------------------------------------


  //-------------define el ganador en la columna 3------
  if(arreglo[2]==1 && arreglo[5]==1 && arreglo[8]==1){
  alert('gano X');
        jug1=jug1+1;
  limpiar();
  }

  if(arreglo[2]==0 && arreglo[5]==0 && arreglo[8]==0){
  alert('gano O');
        jug2=jug2+1;
  limpiar();
  }
  //-------------------------------------


  //-------------define el ganador en la diagonal \------
  if(arreglo[0]==1 && arreglo[4]==1 && arreglo[8]==1){
  alert('gano X');
        jug1=jug1+1;
  limpiar();
  }

  if(arreglo[0]==0 && arreglo[4]==0 && arreglo[8]==0){
  alert('gano O');
        jug2=jug2+1;
  limpiar();
  }
  //-------------------------------------


  //-------------define el ganador en la diagonal /------
  if(arreglo[2]==1 && arreglo[4]==1 && arreglo[6]==1){
  alert('gano X');
        jug1=jug1+1;
  limpiar();
  }

  if(arreglo[2]==0 && arreglo[4]==0 && arreglo[6]==0){
  alert('gano O');
        jug2=jug2+1;
  limpiar();
  }
  //-------------------------------------

 document.getElementById('ptsjug1').innerHTML=jug1;
 document.getElementById('ptsjug2').innerHTML=jug2;

 }//caja()
  

 function limpiar(){

  document.getElementById('reset').src="Imagenes/limpiar_pre.png";//unde el boton

  for(i=0; i<=8; i++){
     document.getElementById('c'+i).src="Imagenes/fondo.png";
  }

  //reseteo el arreglo
  for(i=0; i<=8; i++){
     arreglo[i]=-1;
  }

 }

 function suelta(){
  document.getElementById('reset').src="Imagenes/limpiar.png";
 }

 function reiniciar(){
  jug1=0;
  jug2=0;
  document.getElementById('ptsjug1').innerHTML=jug1;
  document.getElementById('ptsjug2').innerHTML=jug2;
 }