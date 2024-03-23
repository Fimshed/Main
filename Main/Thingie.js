let wire = 10; //starting amount
let staple = 0; //starting amount
document.getElementById("myButton").addEventListener("click", function () {
  wire -= 1;
  staple += 2;
  console.log("Wire: " + wire + ",  Staple:" + staple);
});
