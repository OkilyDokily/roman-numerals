
function findAppropriateMultiple(value,multiple){
  for(var i = 1; i < 4;i++) {
    if (value * i === multiple){
      return i;
    }
  }
}

function appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral){
  
  if(timesToMultipleRomanNumeral === 0){
    return "";
  }
  return romanNumeralToMultiply + appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral-1);
}

function appendSubtraction(first,second){
  return second + first;
}

function decimalToRomanNumeral(decimal){
  var timesToMultipleRomanNumeral = 1;
  var romanNumeralToMultiply;
  var equivalentsMap = new Map([[1,"I"],[5,"V"],[10,"X"],[50,"L"],[100,"C"],[500,"D"],[1000,"M"],[4000,"E"]]);
  var equivalentsMapKeys = [...equivalentsMap.keys()];
  var goesDownTwoWhenSubtracted = ["X","C","M"];


  var decimalOfRomanNumeralToMultiply;
  var totalDecimalOfMultiplies;

  var subtractionDecimal;
  var firstSubtractionRomanNumeral;
  var secondSubtractionRomanNumeral;
  for(var i = 0; i < equivalentsMapKeys.length; i++){
    if((equivalentsMapKeys[i] > decimal)){
      decimalOfRomanNumeralToMultiply = equivalentsMapKeys[i-1];
      timesToMultipleRomanNumeral = findAppropriateMultiple(decimalOfRomanNumeralToMultiply,decimal);
      totalDecimalOfMultiplies = timesToMultipleRomanNumeral * decimalOfRomanNumeralToMultiply;
      romanNumeralToMultiply = equivalentsMap.get(equivalentsMapKeys[i-1]);
      /////
      firstSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[i]);
      
      if(goesDownTwoWhenSubtracted.includes(firstSubtractionRomanNumeral)){
        subtractionDecimal = equivalentsMapKeys[i] - equivalentsMapKeys[i-2];
        secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[i-2]);
      }
      else{
        subtractionDecimal = equivalentsMapKeys[i] - equivalentsMapKeys[i-1];
        secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[i-1]);
      }
      
      break;
    }
  }
  
  if (decimalOfRomanNumeralToMultiply *3  >= decimal && decimal < subtractionDecimal){
    return appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral);
  }
  else {
    return appendSubtraction(firstSubtractionRomanNumeral,secondSubtractionRomanNumeral);
  }
  
}


$(document).ready(function(){
  console.log(decimalToRomanNumeral(1));
  console.log(decimalToRomanNumeral(2));
  console.log(decimalToRomanNumeral(3));
  console.log(decimalToRomanNumeral(4));
  console.log(decimalToRomanNumeral(5));
  console.log(decimalToRomanNumeral(10));
 
  console.log(decimalToRomanNumeral(20));
  console.log(decimalToRomanNumeral(30));
  console.log(decimalToRomanNumeral(40));
  console.log(decimalToRomanNumeral(50));
  console.log(decimalToRomanNumeral(90));
  console.log(decimalToRomanNumeral(100));
  console.log(decimalToRomanNumeral(200));
  console.log(decimalToRomanNumeral(300));
  console.log(decimalToRomanNumeral(400));
  console.log(decimalToRomanNumeral(500));
  console.log(decimalToRomanNumeral(900));
  console.log(decimalToRomanNumeral(1000));
  console.log(decimalToRomanNumeral(2000));
  console.log(decimalToRomanNumeral(3000));

  
})