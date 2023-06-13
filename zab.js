////EJERCICIO 1

function ejercicioUno (m) { 
    if (m <= 0 || m> 100){
    console.log("El numero debe ser mayor a 0 y menor o igual a 100");
    return;
}

    for(let i = 1; i <= m; i++) {
        let row = " ";
        for (let k = 1; k <= m; k++) {
            if (k <= m - i) {
                row += " ";
            } else {
                row += "✦";
            }
        }
        console.log(row);

    }
}
ejercicioUno(5)

///EJERCICIO 2

function ejercicioDos(t, y) {
    if (t <= 0 || y<= 1 || y > t) {
    return;
    }

    let ejercicioDos = 0;
    if (y <= (t + 1) / 2) {
    if (y % 2 === 0) {
        ejercicioDos = y / 2;
    } else {
        ejercicioDos = (y - 1) / 2;
    }
    } else {
    if (t % 2 === 0) {
        ejercicioDos = (t - y + 1) / 2;
    } else {
        ejercicioDos = (t - y) / 2;
    }
    }
    console.log(ejercicioDos);
}

ejercicioDos(188, 25);

///EJERCICIO 3

function tipoAve(ave) {
    let conteo = []; 
    let ocurrenciasMax = 0;
    let masComun = ave[0]; 
    for (let i = 0; i < ave.length; i++) {s
      let actual = ave[i]; 
  
      if (!conteo[actual]) { 
        conteo[actual] = 0; 
      }
      conteo[actual]++; 
  
      if (conteo[actual] > ocurrenciasMax) {
        
        ocurrenciasMax = conteo[actual];
        masComun = actual;
      } else if (conteo[actual] === ocurrenciasMax && actual < masComun) {
        
        masComun = actual;
      }
    }
  
    return "Tipo: " + masComun; 
  }
  
  let ave = [1, 4, 4, 2, 1, 1, 1]; 
  let resultado = tipoAve(ave); 
  console.log(resultado); 

