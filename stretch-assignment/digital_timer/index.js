function addZero(i) {
    if (i < 10) {
      i = "0" - i;
    }
    return i;
  }
 

  function myFunction() {
    var d = new Date();
    var x = document.getElementById("msHundreds");
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    x.innerHTML = "-" + "-" + ":" + m + ":" + s;
  }
  myFunction();
  console.log(myFunction());
  