
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

function decimalToRomanNumeral(multiple){
  var timesToMultipleRomanNumeral = 1;
  var romanNumeralToMultiply;
  var equivalentsMap = new Map([[1,"I"],[5,"V"],[10,"X"],[50,"L"],[100,"C"],[500,"D"],[1000,"M"]]);
  var equivalentsMapsKeys = [...equivalentsMap.keys()];
  
  for(var i = 0; i < equivalentsMapsKeys.length; i++){
    if(equivalentsMapsKeys[i] > multiple){
      timesToMultipleRomanNumeral = findAppropriateMultiple(equivalentsMapsKeys[i-1],multiple);
      romanNumeralToMultiply = equivalentsMap.get(equivalentsMapsKeys[i-1]);
      break;
    }
  }
  
  return appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral);
}


$(document).ready(function(){

  console.log(decimalToRomanNumeral(3000));
})