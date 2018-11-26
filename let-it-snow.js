
var t0 = performance.now();
var e = ""; //String to hold HTML elements prior to appending to DOM
for(var i=0; i < 100; i++) {
  e += "<span id=\"container2\" style=\"position:absolute;left:" + ((Math.random() * 100)+1) + "%;top:" + ((Math.random() * 100)+1) + "px;\"><span class=\"snowX\"><span class=\"snowY\"></span></span></span>";
}
for(var j=0; j < 150; j++) {
  e += "<span id=\"container\" style=\"position:absolute;left:" + ((Math.random() * 100)+1) + "%;top:" + ((Math.random() * 100)+1) + "px;\"><span class=\"snowX\"><span class=\"snowY2\"></span></span></span>";
}

for(var k=0; k < 100; k++) {
  e += "<span id=\"container\" style=\"position:absolute;left:" + ((Math.random() * 100)+1) + "%;top:" + ((Math.random() * 100)+1) + "px;\"><span class=\"snowX\"><span class=\"snowY3\"></span></span></span>";
}

for(var l=0; l < 150; l++) {
  e += "<span id=\"container\" style=\"position:absolute;left:" + ((Math.random() * 100)+1) + "%;top:" + ((Math.random() * 100)+1) + "px;\"><span class=\"snowX\"><span class=\"snowY4\"></span></span></span>";
}
$(".wrapper").append(e);


var t1 = performance.now();
console.log("Time: " + (t1 - t0) + "ms");
