$(document).ready(function (){
  function toggleBoxClass() {
    $("#box-1-bg-1").toggleClass("box1-Active");
  };

  $("#box-1").mouseenter(function() {
    toggleBoxClass()
  })

  $("#box-1").mouseleave(function() {
    toggleBoxClass()
  })
});
