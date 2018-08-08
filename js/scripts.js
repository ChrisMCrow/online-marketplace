$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var orderInput = $("#order").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".order").text(orderInput);

    $(".receipt").show();
  });
});
