
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

function checkOverall(){


//main amount I am checking $2523.04
// var userCheck = 2523.04; //
// var userCheck = 652523100.00; //652,523,100.04
// var userCheck = 802152520000.40; //$802,152,520,000.40
var userCheck = document.getElementById("firstInput").value;


////////////////////////////////////////////////////////////
//convert to string then to array 
var userArray = Array.from(userCheck.toString()); ///(7) ["2", "5", "2", "3", ".", "0", "4"]


//get length of original so I know what I am working with
var originalLength = userArray.length; //7 for this case
var indexOfPeriod = userArray.indexOf("."); // 4 for this case 

var dollarArray = userArray.slice(0, indexOfPeriod); //(4) ["3", "2", "5", "2"]
var dollarReverseArray = dollarArray.reverse();


function calculateCents(){
	var sliceAreaStart = indexOfPeriod+1;
	var sliceAreaEnd = sliceAreaStart+2;
	//taking userArray and pulling out the last two items
  var cents = userArray.slice(sliceAreaStart,sliceAreaEnd); //pulls out ["0", "4"]

  //If the cents was a number than zero it causes issues. Check for second item in array to be zero;
  if(cents.length ==1){
    cents.push("0");
  };
  //join array into string
  var stringCents = cents.join(""); //make string "04"

	// if the cents are 00 then the array doesn't include . //checking for that then I want cents to then equal string of 04/100 dollars 
	if(userArray.includes(".")){
		var results = ` and ${stringCents}/100 dollars`;
	}else{
		var results = "dollars";
			}
	return results;
};

//Convert to word tens and ones place
function convertTensWord(){
    //determines if 0
    if(dollarReverseArray[1] !== "0" && (typeof(dollarReverseArray[1]) !== "undefined")){
    //determine tens place first
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
  if(dollarReverseArray[2] !== "0" && (typeof(dollarReverseArray[2]) !== "undefined")){
    var hundredsPlace = onesObject[dollarReverseArray[2]];
    var hundredsPlaceString = `${hundredsPlace} hundred `;
  }else{
    var hundredsPlaceString = '';
  };

 return resultUncapitalized = hundredsPlaceString;
};
 
function getThousands(){
  //Check ten thousand first to determine thousands place
  if(dollarReverseArray[4] !== "0" && (typeof(dollarReverseArray[4]) !== "undefined")){
    if(dollarReverseArray[4] == 1){
      var tenThousandPlace = teenObject[dollarReverseArray[3]]; 
      var tenThousandString = `${tenThousandPlace} thousand `;
      console.log(`ten object ${tenThousandString}`);
    }else{
      if(dollarReverseArray[3] !== "0" && (typeof(dollarReverseArray[3]) !== "undefined")){
        var thousandPlace = onesObject[dollarReverseArray[3]];
        var tenThousandPlace = tensObject[dollarReverseArray[4]];
        var tenThousandString= `${tenThousandPlace} ${thousandPlace} thousand `;
      }else{
        var tenThousandString = "";
      };
    };
  }else{
    if(dollarReverseArray[3] !== "0" && (typeof(dollarReverseArray[3]) !== "undefined")){
      var thousandPlace = onesObject[dollarReverseArray[3]];
      var tenThousandString = `${thousandPlace} thousand ` 
    }else{
      var tenThousandString = "";
    };
  };

  //Hundreds thousands place is [4]  
  if(dollarReverseArray[5] !== "0" && (typeof(dollarReverseArray[5]) !== "undefined")){
    var thousandHundredsPlace = onesObject[dollarReverseArray[5]];
    var thousandHundredsPlaceString = `${thousandHundredsPlace} hundred `;
  }else{
    var thousandHundredsPlaceString = "";
  };
  return thousandHundredsPlaceString+tenThousandString;

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
    var tenMillionString = "";
    var millionString = "";
  }
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
var finalResultReport = hundredMillion()+tensMillions()+getThousands()+getHundredsBeyond() + convertTensWord() + calculateCents();

  // //Capitalized at first character in the final result 
  var finalHundreds = finalResultReport.charAt(0).toUpperCase()+finalResultReport.slice(1);

  var resultSection = document.getElementById('answer');
  var resultsText = document.createTextNode(finalHundreds);
  resultSection.appendChild(resultsText);

  // var resultSection = document.getElementById('answer').innerHTML;
  // resultSection.appendChild(document.createTextNode("hello"));
  // document.getElementsByName('answer').value = finalHundreds;
  console.log(finalHundreds);
 return finalHundreds;
};