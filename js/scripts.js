
function findAppropriateMultiple(value,decimal){
  
  for(var i = 1; i <= 4;i++) {
    if (value * i > decimal){
      return i - 1;
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
  if (decimal === 0){
    return "";
  }
  if(decimal >3999){
   return "thats too high";
  }
  var timesToMultipleRomanNumeral = 1;
  var romanNumeralToMultiply;
  var equivalentsMap = new Map([[1,"I"],[5,"V"],[10,"X"],[50,"L"],[100,"C"],[500,"D"],[1000,"M"],[5000,"E"]]);
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
  
  if (subtractionDecimal > decimal){
    return appendMultiples(romanNumeralToMultiply,timesToMultipleRomanNumeral) + decimalToRomanNumeral(decimal - totalDecimalOfMultiplies);
  }
  else {
    return appendSubtraction(firstSubtractionRomanNumeral,secondSubtractionRomanNumeral) +decimalToRomanNumeral(decimal - subtractionDecimal);
  }
  
}


$(document).ready(function(){
  console.log(decimalToRomanNumeral(1));
  console.log(decimalToRomanNumeral(2));
  console.log(decimalToRomanNumeral(3));
  console.log(decimalToRomanNumeral(4));
   console.log(decimalToRomanNumeral(5));
  console.log(decimalToRomanNumeral(6));
  console.log(decimalToRomanNumeral(7));
  console.log(decimalToRomanNumeral(8));
  console.log(decimalToRomanNumeral(9));
  console.log(decimalToRomanNumeral(10));
  console.log(decimalToRomanNumeral(11));
  console.log(decimalToRomanNumeral(12));
  console.log(decimalToRomanNumeral(19));
  console.log(decimalToRomanNumeral(20));
  console.log(decimalToRomanNumeral(45));
  console.log(decimalToRomanNumeral(35))
  console.log(decimalToRomanNumeral(30));
  console.log(decimalToRomanNumeral(40));
  console.log(decimalToRomanNumeral(50));
  console.log(decimalToRomanNumeral(90));
  console.log(decimalToRomanNumeral(100));
  console.log(decimalToRomanNumeral(200));
  console.log(decimalToRomanNumeral(221));
  console.log(decimalToRomanNumeral(300));
  console.log(decimalToRomanNumeral(400));
  console.log(decimalToRomanNumeral(500));
  console.log(decimalToRomanNumeral(742));
  console.log(decimalToRomanNumeral(900));
  console.log(decimalToRomanNumeral(1000));
  console.log(decimalToRomanNumeral(1956));
  console.log(decimalToRomanNumeral(2000));
  console.log(decimalToRomanNumeral(4000));

  
})