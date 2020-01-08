var inputIdFirst = "firstno",
    inputIdSecond = "secondno",
    outputId = "resultHere";
    
  var getInputs = function (id) {
        return parseInt(document.getElementById(id).value);
    }
var showOutput = function (outputValue, outputIdAsArg) {
    document.getElementById(outputId).innerHTML = outputValue;
}

  var manuplateAs = function(operationName, firstno, secondno) {
        if(operationName == 'add')
          return firstno + secondno;    
        else if(operationName == 'sub')
          return firstno - secondno;
        else if(operationName == 'mul')
          return firstno * secondno;
        else if(operationName == 'div')
          return firstno / secondno;
    } 
  var operation = function(operationName){
        x = getInputs(inputIdFirst);
        y = getInputs(inputIdSecond);
       output = manuplateAs(operationName, x, y);
    showOutput(output);    
    
    $(document).ready(function () {
      $('#resultHere').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: output
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    });
    
    // document.getElementById('one').innerHTML = x;

    // var test = document.getElementById("plus").value;
    // document.getElementById('symb').innerHTML = test;
    
    // document.getElementById('two').innerHTML = y;

        // console.log(x + " " + operationName + " " + y + " = " + output)
        // console.log(this)
     
    
    }
function clear1() {
  document.getElementById("myreset").reset();
}



// function equal() {
//   document.getElementById("count").style.display = "none";
//   document.getElementById("").style.display = "block";
// }

