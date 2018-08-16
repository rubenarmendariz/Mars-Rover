var marte = [
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', 'X', '_', '_', '_', 'X', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', 'X', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', 'X', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', 'X', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_']];               
class Rover{
    constructor(direction,rows,columns){
        this.direction=direction;
        this.columns=columns;
        this.rows=rows;
        marte[this.rows][this.columns]= "R";
         
    }
turnLeft(){
        document.write("⇐");
  
switch (this.direction) {
    case "N": this.direction = "W";
      break;

    case "E": this.direction = "N";
      break;

    case "S": this.direction = "E";
      break;

    case "W": this.direction = "S";
      break;
        
  }
    }
    
turnRight(){
document.write("⇒");
switch (this.direction) {
        
    case "N": this.direction = "E";
      break;

    case "E": this.direction = "S";
      break;

    case "S": this.direction = "W";
      break;

    case "W": this.direction = "N";
      break;
        
  }
    }

    
moveForward(){
    document.write("⇑");
        
    switch (this.direction) {
    case "N":
      if (this.rows==0) {
        document.write("Envia otro comando o me vas a acabar mandando a otra galaxia!!");
      } else { 
          if(marte[this.rows -1][this.columns]== '_'){
                marte[this.rows -1][this.columns]='R';
                marte[this.rows][this.columns]='_';
                this.rows -=1;
            
          }else{
            console.log("Tenemos obstaculos");
          }
      }
        break;

    case "E":
      if (this.columns ==9) {
        document.write("Envia otro comando o me vas a acabar mandando a otra galaxia!!");
      } else {
          if(marte[this.rows][this.columns+1]== '_'){
                marte[this.rows][this.columns+1]='R';
                marte[this.rows][this.columns]='_';
              this.columns +=1;
          }else{
            console.log("Tenemos obstaculos");}
      }
    
          break;
        
    case "S":
      if (this.rows == 9) {
        document.write("Envia otro comando o me vas a acabar mandando a otra galaxia!!");
      } else {
          if(marte[this.rows +1][this.columns]== '_'){
                marte[this.rows+1][this.columns]='R';
                marte[this.rows][this.columns]='_';
              this.rows +=1;}else{
                console.log("Tenemos obstaculos");}
      }
        break;

    case "W":
      if (this.columns == 0) {
        document.write("Envia otro comando o me vas a acabar mandando a otra galaxia!!");
      } else {
          if(marte[this.rows][this.columns -=1]== '_'){
              marte[this.rows][this.columns-1]='R';
              marte[this.rows][this.columns]='_';
              this.columns -=1;}else{
                  console.log("Tenemos obstaculos");}
             }
                
        }
}
    
    
moveBackward(){
    document.write("⇓");
    switch (this.direction) {
    case "N":
      if (this.rows==9) {
        document.write("Adios Marte!!");
      } else {
          if(marte[this.rows +=1][this.columns]== '_') {
              marte[this.rows+1][this.columns]='R';
              marte[this.rows][this.columns]='_';
              this.rows +=1;}else{
                  document.write("Tenemos obstaculos");}
      }
                  break;

    case "E":
      if (this.columns ==0) {
        document.write("Adios Marte!! ahora estoy con Thanos en su piedra del alma");
      } else {
          if(marte[this.rows][this.columns -=1]== '_'){
              marte[this.rows][this.columns-1]='R';
              marte[this.rows][this.columns]='_';
              this.columns -=1;}else{
                  document.write("Tenemos obstaculos");}
      }
          break;
        
    case "S":
      if (this.rows == 0) {
        document.write("Adios Marte!!");
      } else {
          if(marte[this.rows -=1][this.columns]== '_'){
              marte[this.rows -1][this.columns]='R';
              marte[this.rows][this.columns]='_';
              this.rows -=1;}else{
                  document.write("Tenemos obstaculos");}
      }
        
        break;

    case "W":
      if (this.columns == 9) {
        document.write("Adios Marte!!");
      } else {if(marte[this.rows][this.columns +=1]== '_'){
                marte[this.rows][this.columns +1]='R';
                marte[this.rows][this.columns]='_';
              this.columns +=1;}else{
                  document.write("Tenemos obstaculos");}}
        }
    
      }
   travellog(){
       console.log("Las coordenadas del Rovers son: [ Rows:"+this.rows+" - Columns: ", +this.columns+" ]");
   }
     
     }
        
     
    
   var robot = new Rover("N", 0, 0);
   var z=0;
     while(z==0){
        var eleccion= prompt("¿Que quieres hacer?\n1. Mover el rovers\n2. Finalizar programa");
         if(eleccion==1){
             var commandElec = prompt("Introduce uno de los siguientes comandos para mover al rover:\n(L)Turn left\n(R)Turn right\n(F)Move Forward\n(B)Move backward");
   var command = commandElec.toUpperCase();
     
     for(var i=0; i< command.length; i++){
     switch(command.charAt(i)){
         case "L":robot.turnLeft();
         break;
         case "R":robot.turnRight();
         break;
         case "F":robot.moveForward();
         break;
         case "B":robot.moveBackward();
         break;
         default: "Introduce otro comando válido";
             
     } 
     }
     
     robot.travellog();
         }
         else {
             z=1;
         }
     }