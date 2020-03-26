$(document).ready(function functionName() {
// selecting all p tags and storing into a variable, allPs
  var allPs = $("p");
  console.log(allPs);
// selecting by class
  var classp = $(."paragraph1");
  console.log(classp);
  allPs.html("I just replaced all my old text with a JQuery function");
  // swapping out image in document by using attribute. note an attribute is class, id, etc. they are yellow in atom
  $("img").attr("src", "newimageurl.jpg")
  // making computer execute a selection on when you click on paragraph 1
  paragraph1.click(function(){
      $("img").attr("src", "newimageurl.jpg")
  }
});
