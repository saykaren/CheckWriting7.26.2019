
/*INTERVIEW QUESTION: Write code that will accept a number and convert it to the appropriate string representation for a check.
Basic Requirements:
Represent numbers to the hundredth position (pennies)
Represent numbers at least to $999,999,999,999.99
Example:
Convert 2523.04 to "Two thousand five hundred twenty-three and 04/100 dollars"
Have fun with these and take them step-by-step ensuring to check that everything works as expected along the way.*/

///////////My data of objects to reference
const onesObject = {
  //access value by onesObject[key]
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const teenObject = {
  //this is when the tens place is a one which needs to be 
  0: "ten",
  1: "eleven",
  2: "twelve",
  3: "thirteen",
  4: "fourteen",
  5: "fifteen",
  6: "sixteen",
  7: "seventeen",
  8: "eighteen",
  9: "nineteen",
};

const tensObject = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

function checkMe(array, arrayNum){
  if(array[arrayNum] !== "0" && ((array[arrayNum]) !== undefined)){
    var results = true;
  }else{
    var results = false;
  };
  return results;
};

//new check overall function
function checkOverall(){
  var userDollar = document.getElementById("dollarInput").value;
  var userCent = document.getElementById("centInput").value;

  //Convert to string (don't need to use on cent as that is string but will equal amount)
  var userArrayDollar = Array.from(userDollar.toString());
  var userArrayCent = Array.from(userCent.toString());
  var dollarReverseArray = userArrayDollar.reverse();

  function calculateCents(){
    var cents = userArrayCent; //pulls out ["0", "4"]
  
    //If the cents has a number that is zero it causes issues. Check for second item in array to be zero;
    if(cents.length ==1){
      cents.push("0");
    };
    //join array into string
    var stringCents = cents.join(""); //make string "04"
  
    // if the cents are 00 then the array doesn't include . //checking for that then I want cents to then equal string of 04/100 dollars 
    if(userCent !== "00"){
      var results = ` and ${stringCents}/100 dollars`;
    }else{
      var results = "dollars";
        }
    return results;
  };
  
  //Convert to word tens and ones place
  function convertTensWord(){
    //determines if 0
    if(checkMe(dollarReverseArray, 1)){
      if(dollarReverseArray[1] == 1){
        var tensPlace = teenObject[dollarReverseArray[0]]; //"thirteen"
        var tenOneString = `${tensPlace} `;
      }else{
        ///section where tens place is anything but 1....) should be empty
        var onesPlace = onesObject[dollarReverseArray[0]];
        var tensPlace = tensObject[dollarReverseArray[1]];
        var tenOneString = `${tensPlace} ${onesPlace} `;
      };
    }else{
      var tenOneString = "";
    };
    return tenOneString;
  };
  
  //Converts to word hundreds[2] thousand[3] ten thousand[4] hundred thousand[5]
  function getHundredsBeyond(){
    //Hundreds place is [2]
    if(checkMe(dollarReverseArray, 2)){
      var hundredsPlace = onesObject[dollarReverseArray[2]];
      var hundredsPlaceString = `${hundredsPlace} hundred `;
    }else{
      var hundredsPlaceString = '';
    };
  
   return resultUncapitalized = hundredsPlaceString;
  };
   
  function getThousands(){
    //Check ten thousand first to determine thousands place
    if(checkMe(dollarReverseArray, 4)){
      if(dollarReverseArray[4] == 1){
        var tenThousandPlace = teenObject[dollarReverseArray[3]]; 
        var tenThousandString = `${tenThousandPlace} thousand `;
      }else{
        if(checkMe(dollarReverseArray, 3)){
          var thousandPlace = onesObject[dollarReverseArray[3]];
          var tenThousandPlace = tensObject[dollarReverseArray[4]];
          var tenThousandString= `${tenThousandPlace} ${thousandPlace} thousand `;
        }else{
          var tenThousandPlace = tensObject[dollarReverseArray[4]];
          var tenThousandString= `${tenThousandPlace} thousand `;
        };
      };
    }else{
      if(checkMe(dollarReverseArray, 3)){
        var thousandPlace = onesObject[dollarReverseArray[3]];
        var tenThousandString = `${thousandPlace} thousand `;
      }else{
        var tenThousandString = "";
      };
    };

    return tenThousandString;
  };  

  //Check Hundred Thousands Place is [4]
  function getHundredThousand() {
//Hundreds thousands place is [4]  
    if(dollarReverseArray[5] !== "0" && (typeof(dollarReverseArray[5]) !== "undefined")){
      var thousandHundredsPlace = onesObject[dollarReverseArray[5]];
      var thousandHundredsPlaceString = `${thousandHundredsPlace} hundred `;
    }else{
      var thousandHundredsPlaceString = "";
    };
  return thousandHundredsPlaceString;
  };
  
  //Check millions place [6] tens million[7]
  function tensMillions(){
    //check tens million
    if(dollarReverseArray[7] !== "0" && (typeof(dollarReverseArray[7]) !== "undefined")){
     if(dollarReverseArray[7] == 1){
       var tenMillionPlace = teenObject[dollarReverseArray[7]];
       var tenMillionString = `${tenMillionPlace} million `;
     } else {
       if(dollarReverseArray[6] !== "0" && (typeof(dollarReverseArray[6]) !== "undefined")){
         var millionPlace = onesObject[dollarReverseArray[6]];
         var millionString = `${millionPlace} million `;
         var tenMillionPlace = tensObject[dollarReverseArray[7]];
         var tenMillionString = `${tenMillionPlace} `;
       };
     };
   }else{
      if(dollarReverseArray[6] !== "0" && (typeof(dollarReverseArray[6]) !== "undefined")){
        var millionPlace = onesObject[dollarReverseArray[6]];
        var millionString = `${millionPlace} million `;
        var tenMillionString = "";
      }else{
        var tenMillionString = "";
        var millionString = "";
      };
   };
   return tenMillionString+millionString;
  };
  
  function hundredMillion(){
    if(dollarReverseArray[8] !== "0" && (typeof(dollarReverseArray[8]) !== "undefined")){
      var hundredMillionPlace = onesObject[dollarReverseArray[8]];
      var hundredMillionString = `${hundredMillionPlace} hundred `;
    }else{
      var hundredMillionString = "";
    };
    return hundredMillionString;
  };
  
  
  //Report final result
  var finalResultReport = hundredMillion()+tensMillions()+getHundredThousand()+getThousands()+getHundredsBeyond() + convertTensWord() + calculateCents();
  
    // //Capitalized at first character in the final result 
    var finalHundreds = finalResultReport.charAt(0).toUpperCase()+finalResultReport.slice(1);
  
    var resultSection = document.getElementById('answer');
    var resultsText = document.createTextNode(finalHundreds);
    resultSection.appendChild(resultsText);
   return finalHundreds;
  };

function resetMyForm(){
  document.getElementById("answer").innerHTML = "";
};