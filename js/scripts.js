
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

function appendSubtraction(lower,higher){
  return lower + higher;
}

function decimalToRomanNumeral(multiple){
  var timesToMultipleRomanNumeral = 1;
  var romanNumeralToMultiply;
  var equivalentsMap = new Map([[1,"I"],[5,"V"],[10,"X"],[50,"L"],[100,"C"],[500,"D"],[1000,"M"],[4000,"E"]]);
  var equivalentsMapKeys = [...equivalentsMap.keys()];
  
  var decimalOfRomanNumeralToMultiply;
  var totalDecimalOfMultiplies;

  var subtractionDecimal;
  var firstSubtractionRomanNumeral;
  var secondSubtractionRomanNumeral;
  for(var i = 0; i < equivalentsMapKeys.length; i++){
    if((equivalentsMapKeys[i] > multiple)){
      decimalOfRomanNumeralToMultiply = equivalentsMapKeys[i-1];
      timesToMultipleRomanNumeral = findAppropriateMultiple(decimalOfRomanNumeralToMultiply,multiple);
      totalDecimalOfMultiplies = timesToMultipleRomanNumeral * decimalOfRomanNumeralToMultiply;
      subtractionDecimal = equivalentsMapKeys[i] - equivalentsMapKeys[i-1];
      firstSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[i-1]);
      secondSubtractionRomanNumeral = equivalentsMap.get(equivalentsMapKeys[i])
      romanNumeralToMultiply = equivalentsMap.get(equivalentsMapKeys[i-1]);
      
      break;
    }
  }
  
  if (decimalOfRomanNumeralToMultiply *3  >= multiple && multiple < subtractionDecimal){
    return appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral);
  }
  else {
    return appendSubtraction(firstSubtractionRomanNumeral,secondSubtractionRomanNumeral);
  }
  
}


$(document).ready(function(){

  console.log(decimalToRomanNumeral(4000));
})