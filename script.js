document
.querySelector("button")
.addEventListener("click", function handleclick() {
  document.getElementsByClassName("container")[0].style.display = "block";
  document.getElementsByClassName("play")[0].style.display = "none";
});

var output;
var input;
document
.querySelector(".refresh")
.addEventListener("click", function refresh() {
    input=prompt("Take S , W , G ");
    var randomno = Math.floor(Math.random() * 3);
var outcome = ["s", "w", "G"][randomno];
function match(input, outcome) {
  if (input === outcome) {
    return "NOBODY";
  } else if (input === "s" && outcome === "w") {
    return input;
  } else if (input === "s" && outcome === "G") {
    return outcome;
  } else if (input === "G" && outcome === "w") {
    return outcome;
  } else if (input === "G" && outcome === "s") {
    return input;
  } else if (input === "w" && outcome === "s") {
    return outcome;
  } else if (input === "w" && outcome === "G") {
    return input;
  }
}
var result = match(input, outcome);
// match(input,outcome); gives return value of function we store it in input
// output = (document.querySelectorAll(".result")[0].innerHTML =
//   "Winner Is" + " " + result);

  if(result == "NOBODY"){
  var output = (document.querySelectorAll(".result")[0].innerHTML =
    "Match Draw");
  }
  else{
    output = (document.querySelectorAll(".result")[0].innerHTML =
    "Winner Is" + " " + result);
  }
  
if (result === "s") {
  document.querySelector(".snake").style.border = "3px solid red";
  document.querySelector(".water").style.border = "none";
  document.querySelector(".gun").style.border = "none";
} else if (result == "w") {
  document.querySelector(".water").style.border = "3px solid red";
  document.querySelector(".gun").style.border = "none";
  document.querySelector(".snake").style.border = "none";
} else if (result == "G") {
  document.querySelector(".gun").style.border = "3px solid red";
  document.querySelector(".water").style.border = "none";
  document.querySelector(".snake").style.border = "none";
}
else{
    document.querySelector(".snake").style.border = "none";
    document.querySelector(".water").style.border = "none";
  document.querySelector(".gun").style.border = "none";
}
});



// document
//   .querySelector(".refresh")
//   .addEventListener("click", function refresh() {
//     setTimeout(function () {
//       window.location.reload();
//     }, 300);
//   });