// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return  Object.entries(objeto);//this metodo dive the array en smalls arrays and shows paris with key and value
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = '';
  var minuscula = '';
  for (i = 0; i<s.length; i++){ 
    if(s[i] === s[i].toUpperCase()){ 
          mayuscula = mayuscula + s[i]; 
    }
    else {
          minuscula = minuscula + s[i];
        } 
  }       
  return (mayuscula + minuscula) 

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let aux = numero;
  let invertir = 0;
  let digito = 0;
  while(numero>0){
    digito = numero%10;
    invertir  = (invertir*10)+digito;
    numero = (numero-digito)/10;

  }
  if(invertir == aux) return 'capicua';
  else return 'no capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newCadena = [];
  let str = '';
  for(let i=0;i<cadena.length;i++){
    newCadena[i] = cadena[i];
    if(newCadena[i]=='a' || newCadena[i]=='b' || newCadena[i]=='c'){
      newCadena[i] = '';
    }
  }
  for(let j=0;j<newCadena.length;j++){
    str += newCadena[j];
  }
  return str;
}
  
//imagine that the string si 'camila busca cama'
//output
//'mil us m'

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let aux  = '';
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j].length>arr[j+1].length){
        aux = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const newArr = [];
  var len = arreglo1.length;
  for(let i=0;i<len;i++){
    for(let j=0;j<len;j++){
      if(arreglo1[i]==arreglo2[j]){
        newArr[i]=arreglo1[i];
      }
    }
  }
  return newArr;
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

