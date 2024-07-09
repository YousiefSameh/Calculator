var DisplayResult = document.getElementById("result");

function AdditionProcess() {
  var Num1 = document.getElementById("n1").value;
  var Num2 = document.getElementById("n2").value;
  if (isNaN(Num1) || isNaN(Num2) || Num1 == "" || Num2 == "") {
    Result = "Invalid Input";
    DisplayResult.innerHTML = Result;
    console.log("Invalid");
  } else {
    var Result = parseFloat(Num1) + parseFloat(Num2);
    DisplayResult.innerHTML = Result;
  }
}

function SubtractProcess() {
  var Num1 = document.getElementById("n1").value;
  var Num2 = document.getElementById("n2").value;
  if (isNaN(Num1) || isNaN(Num2) || Num1 == "" || Num2 == "") {
    Result = "Invalid Input";
    DisplayResult.innerHTML = Result;
    console.log("Invalid");
  } else {
    var Result = parseFloat(Num1) - parseFloat(Num2);
    DisplayResult.innerHTML = Result;
  }
}

function MultiplyProcess() {
  var Num1 = document.getElementById("n1").value;
  var Num2 = document.getElementById("n2").value;
  if (isNaN(Num1) || isNaN(Num2) || Num1 == "" || Num2 == "") {
    Result = "Invalid Input";
    DisplayResult.innerHTML = Result;
    console.log("Invalid");
  } else {
    var Result = parseFloat(Num1) * parseFloat(Num2);
    DisplayResult.innerHTML = Result;
  }
}

function DivitionProcess() {
  var Num1 = document.getElementById("n1").value;
  var Num2 = document.getElementById("n2").value;
  if (isNaN(Num1) || isNaN(Num2) || Num1 == "" || Num2 == "") {
    Result = "Invalid Input";
    DisplayResult.innerHTML = Result;
    console.log("Invalid");
  } else {
    var Result = parseFloat(Num1) / parseFloat(Num2);
    DisplayResult.innerHTML = Result;
  }
}