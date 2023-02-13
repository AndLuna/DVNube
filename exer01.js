levantarDoSofa() {
    var estaNoSofa = true;
    estaNoSofa ? levantarDoSofa() => console.log("Levantou do Sofá") : console.log("Continuou no sofá");
    
  }
  
  
   escovarDentes() {
    var escovouDentes = true;
    escovouDentes ? escovarDentes() => console.log("Escovou os dentes") : console.log("Não escovou os dentes");
  }
  
  
   sentarNoSofa() {
    var estaDePé = false;
    estaDePé ? sentarNoSofa() => console.log("Ainda está de pé") : console.log("Sentou no sofá");
  }
  
  
   assistirAaula() {
    var temAula = true;
    temAula ? irAoCurso() => console.log("Assistiu a Aula") : console.log("Não tem aula hoje");
  }
  
  
   jantar() {
    var horaDeJantar = true;
    horaDeJantar ? jantar() => console.log("jantou") : console.log("Ainda não é hora de jantar");
  }
  
  
   dormir() {
    var horaDeDormir = true;
    horaDeDormir ? dormir() => console.log("Mimistes") : console.log("Ainda não é hora de dormir");
  }